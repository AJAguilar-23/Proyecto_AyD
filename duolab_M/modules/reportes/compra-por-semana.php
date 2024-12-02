<?php

include 'template.php';
require '../../global/connection.php';
/*
if (!isset($_GET['customerid'])){
	echo "Error al obtener reporte. Variable 'customerid' no especificada.";
	return;
}
*/
if (!isset($_GET['datefrom'])){
	echo "Error al obtener reporte. Variable 'datefrom' no especificada.";
	return;
}

if (!isset($_GET['dateto'])){
	echo "Error al obtener reporte. Variable 'dateto' no especificada.";
	return;
}

//$customerId = $_GET['customerid'];
$dateFrom = $_GET['datefrom'];
$dateTo = $_GET['dateto'];

$reportTitle = "Reporte de Compras";
$rptDateInterval = "VENTAS (Sin rango de fecha)";

$productString = "";
$dateString = "";

if ($dateFrom!= "" && $dateTo!= ""){
	$dateString = " AND (th.date BETWEEN '" . $dateFrom . "' AND '". $dateTo . "')";
	$rptDateInterval = "COMPRAS DEL " . date("d/m/Y", strtotime($dateFrom)) . " AL " . date("d/m/Y", strtotime($dateTo));
}
/*
$sqlCustomerInfo = "(SELECT DISTINCT th.ruc, th.name, th.address
 FROM tbl_invoice th
WHERE th.ruc = " . $customerId . ")
UNION
(SELECT DISTINCT th.ruc, th.name, th.address
 FROM tbl_receipt th
WHERE th.ruc = " . $customerId . ")";

$sqlStatement = $pdo->prepare($sqlCustomerInfo);
$sqlStatement->execute();
$customerData = $sqlStatement->fetch();

if ($customerData == null){
	echo "Error al obtener reporte. Variable 'customerid' no es válida. No existe el cliente solicitado.";
	return;
}
*/
$sqlString = "
(
SELECT 
    P.number,
    P.issue_date,
    PV.business_name,
    D.item_code,
    D.item_quantity,
	D.item_unit_price,
	(ROUND(D.item_unit_price*0.15,2)) AS imp,
    (ROUND(D.item_unit_price*1.15,2)) AS total
FROM 
    (SELECT id, number, issue_date, provider_id
     FROM tbl_purchase 
     WHERE issue_date BETWEEN '".$dateFrom."' AND '".$dateTo."') AS P
INNER JOIN
    (SELECT purchase_id, item_code, item_quantity, item_unit_price
     FROM tbl_purchase_detail) AS D
ON P.id = D.purchase_id
INNER JOIN
    (SELECT id, business_name
     FROM tbl_provider) AS PV
ON P.provider_id = PV.id  
ORDER BY `P`.`issue_date` ASC
)";

$sqlStatement = $pdo->prepare($sqlString);
$sqlStatement->execute();
$rowsNumber = $sqlStatement->rowCount();

$pdf = new PDF();
$pdf->AliasNbPages();
$pdf->SetHeaderTitle(utf8_decode($reportTitle));
$pdf->AddPage("L","A4",0);
$pdf->SetTitle($reportTitle,true);
$pdf->SetSubject($reportTitle,true);
$pdf->SetAuthor("CCM",true);
$pdf->SetCreator("fpdf v1.82",true);

$pdf->SetFillColor(254, 196, 9);
/*
$pdf->SetFont('Arial','B',9);
$pdf->Cell(0,6,utf8_decode('DATOS DEL CLIENTE'),1,0,'L',1);
$pdf->Ln();
$pdf->SetFont('Arial','B',9);
$pdf->Cell(20,6,utf8_decode('RUC / DNI'),1,0,'R',1);
$pdf->SetFont('Arial','',9);
$pdf->Cell(0,6,utf8_decode($customerData['ruc']),1,0,'L',0);
$pdf->Ln();
$pdf->SetFont('Arial','B',9);
$pdf->Cell(20,6,utf8_decode('Nombre'),1,0,'R',1);
$pdf->SetFont('Arial','',9);
$pdf->Cell(0,6,utf8_decode($customerData['name']),1,0,'L',0);
$pdf->Ln();
$pdf->SetFont('Arial','B',9);
$pdf->Cell(20,6,utf8_decode('Dirección'),1,0,'R',1);
$pdf->SetFont('Arial','',9);
$pdf->Cell(0,6,utf8_decode($customerData['address']),1,0,'L',0);

$pdf->Ln(10);
*/
$pdf->SetFont('Arial','B',9);
$pdf->Cell(0,6,utf8_decode($rptDateInterval),1,0,'C',1);
$pdf->Ln();
//$pdf->Cell(16,6,utf8_decode('TBLID'),1,0,'C',1);
$pdf->Cell(30,6,utf8_decode('Nro. Doc.'),1,0,'C',1);
$pdf->Cell(30,6,utf8_decode('Fecha de Compra'),1,0,'C',1);
$pdf->Cell(60,6,utf8_decode('Proveedor'),1,0,'C',1);
$pdf->Cell(60,6,utf8_decode('Nombre del producto'),1,0,'C',1);
$pdf->Cell(24,6,utf8_decode('Cantidad'),1,0,'C',1);
$pdf->Cell(30,6,utf8_decode('Precio Unitario'),1,0,'C',1);
$pdf->Cell(0,6,utf8_decode('Total Neto'),1,0,'C',1);

$pdf->Ln();

$pdf->SetFont('Arial','',9);

if ($rowsNumber > 0) {

	$totalSales = 0;

    foreach ($sqlStatement as $row) {
		$pdf->Cell(30,6,utf8_decode($row['number']),1,0,'C');
		$pdf->Cell(30,6,utf8_decode(date("d/m/Y", strtotime($row["issue_date"]))),1,0,'C');
		$pdf->Cell(60,6,utf8_decode($row["business_name"]),1,0,'C');
		$pdf->Cell(60,6,utf8_decode($row['item_code']),1,0,'C');
		$pdf->Cell(24,6,utf8_decode($row['item_quantity']),1,0,'C');
		$pdf->Cell(30,6,utf8_decode(number_format($row['item_unit_price'], 2, '.','')),1,0,'R');

		$total_net = $row['total'];

		$pdf->Cell(0,6,utf8_decode(number_format($row['total'], 2, '.','')),1,0,'R');
			
		$pdf->Ln();

		$totalSales += $total_net;
	}

	$pdf->Cell(204	);
	$pdf->SetFont('Arial','B',9);
	$pdf->Cell(30,6,utf8_decode("TOTAL VENTAS"),1,0,'C',1);
	$pdf->Cell(0,6,utf8_decode(number_format($totalSales, 2, '.','')),1,0,'R');

}else{
	$pdf->Cell(276,6,utf8_decode("No existen datos para la fecha especificada"),1,0,'C');
}


$pdf->Output("I", $reportTitle . ".pdf", true);