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

$reportTitle = "Reporte de Facturas Anuladas";
$rptDateInterval = "Facturas (Sin rango de fecha)";

$productString = "";
$dateString = "";

if ($dateFrom!= "" && $dateTo!= ""){
	//$dateString = " AND (th.date BETWEEN '" . $dateFrom . "' AND '". $dateTo . "')";
	$dateString = "(date BETWEEN '".$dateFrom."' AND '".$dateTo."')AND";

	$rptDateInterval = "FACTURAS DEL " . date("d/m/Y", strtotime($dateFrom)) . " AL " . date("d/m/Y", strtotime($dateTo));
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
$sqlString = "(
SELECT 
    CONCAT(I.series, '-',I.number) as no_fac,
    D.item_name,
    I.date,
    D.item_quantity,
    (ROUND(D.item_unit_price*1.15,2)) AS item_unit_price,
    (ROUND(D.item_unit_price*1.15*D.item_quantity,2)) AS total,
    I.name,
    C.email
FROM 
    (SELECT id, series, number, date, name, status
     FROM tbl_invoice 
     WHERE ".$dateString."(status =2)) AS I
INNER JOIN
    (SELECT invoice_id, item_name, item_quantity, item_unit_price
     FROM tbl_invoice_detail) AS D
ON I.id = D.invoice_id
INNER JOIN
    (SELECT business_name, email
     FROM tbl_customer) AS C
ON I.name = C.business_name
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
$pdf->Cell(20,6,utf8_decode('DNI'),1,0,'R',1);
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
$pdf->Cell(30,6,utf8_decode('Factura'),1,0,'C',1);
$pdf->Cell(24,6,utf8_decode('Fecha '),1,0,'C',1);
$pdf->Cell(70,6,utf8_decode('Nombre'),1,0,'C',1);
$pdf->Cell(18,6,utf8_decode('Cantidad '),1,0,'C',1);
//$pdf->Cell(23,6,utf8_decode('Precio Unidad'),1,0,'C',1);
$pdf->Cell(23,6,utf8_decode('Total'),1,0,'C',1);
$pdf->Cell(60,6,utf8_decode('Nombre del cliente'),1,0,'C',1);
$pdf->Cell(0,6,utf8_decode('Correo'),1,0,'C',1);

$pdf->Ln();

$pdf->SetFont('Arial','',9);

if ($rowsNumber > 0) {

	$totalSales = 0;

    foreach ($sqlStatement as $row) {
		$pdf->Cell(30,6,utf8_decode($row['no_fac']),1,0,'C');
		$pdf->Cell(24,6,utf8_decode(date("d/m/Y", strtotime($row["date"]))),1,0,'C');
		$pdf->Cell(70,6,utf8_decode($row['item_name']),1,0,'C');
		$pdf->Cell(18,6,utf8_decode($row['item_quantity']),1,0,'C');
		//$pdf->Cell(23,6,utf8_decode($row['item_unit_price']),1,0,'C');
		$pdf->Cell(23,6,utf8_decode(number_format($row['total'], 2, '.','')),1,0,'R');
		$pdf->Cell(60,6,utf8_decode($row['name']),1,0,'C');
		$pdf->Cell(0,6,utf8_decode($row['email']),1,0,'C');



		$total_net = $row['total'];

		//$pdf->Cell(0,6,utf8_decode(number_format($row['total_net'], 2, '.','')),1,0,'R');
			
		$pdf->Ln();

		$totalSales += $total_net;
	}
/*
	$pdf->Cell(217);
	$pdf->SetFont('Arial','B',9);
	$pdf->Cell(30,6,utf8_decode("TOTAL VENTAS"),1,0,'C',1);
	$pdf->Cell(0,6,utf8_decode(number_format($totalSales, 2, '.','')),1,0,'R');
*/
}else{
	$pdf->Cell(276,6,utf8_decode("No existen datos para el cliente especificado"),1,0,'C');
}


$pdf->Output("I", $reportTitle . ".pdf", true);