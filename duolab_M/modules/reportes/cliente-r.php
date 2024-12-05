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

$reportTitle = "Reporte de Clientes Recurrentes";
$rptDateInterval = "VENTAS (Sin rango de fecha)";

$productString = "";
$dateString = "";

if ($dateFrom!= "" && $dateTo!= ""){
	$dateString = " WHERE date BETWEEN '" . $dateFrom . "' AND '". $dateTo . "'";
	$rptDateInterval = "VENTAS DEL " . date("d/m/Y", strtotime($dateFrom)) . " AL " . date("d/m/Y", strtotime($dateTo));
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
    i.name, 
    c.email,
    COUNT(i.id) AS total_facturas, 
    SUM(i.total_sub) AS total_sub, 
    SUM(i.total_tax) AS total_impuestos, 
    SUM(i.total_net) AS total_neto
FROM 
    (SELECT name, id, total_sub, total_tax, total_net
     FROM tbl_invoice
     $dateString) AS i
INNER JOIN 
    (SELECT business_name, email
     FROM tbl_customer) AS c
ON i.name = c.business_name
GROUP BY 
    i.name, c.email  
ORDER BY total_neto DESC
LIMIT 10
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

$pdf->SetFont('Arial','B',9);
$pdf->Cell(0,6,utf8_decode($rptDateInterval),1,0,'C',1);
$pdf->Ln();
$pdf->Cell(85,6,utf8_decode('Nombre.'),1,0,'C',1);
$pdf->Cell(65,6,utf8_decode('Correo'),1,0,'C',1);
$pdf->Cell(30,6,utf8_decode('Cantidad de Fac.'),1,0,'C',1);
$pdf->Cell(30,6,utf8_decode('Precio'),1,0,'C',1);
$pdf->Cell(30,6,utf8_decode('Impuesto'),1,0,'C',1);
$pdf->Cell(0,6,utf8_decode('Total '),1,0,'C',1);

$pdf->Ln();

$pdf->SetFont('Arial','',9);

if ($rowsNumber > 0) {

	$totalSales = 0;

    foreach ($sqlStatement as $row) {
		$pdf->Cell(85,6,utf8_decode($row['name']),1,0,'C');
		$pdf->Cell(65,6,utf8_decode($row["email"]),1,0,'C');
		$pdf->Cell(30,6,utf8_decode($row['total_facturas']),1,0,'C');
		$pdf->Cell(30,6,utf8_decode(number_format($row['total_sub'], 2, '.','')),1,0,'R');
		$pdf->Cell(30,6,utf8_decode(number_format($row['total_impuestos'], 2, '.','')),1,0,'R');


		$total_net = $row['total_neto'];

		$pdf->Cell(0,6,utf8_decode(number_format($row['total_neto'], 2, '.','')),1,0,'R');
			
		$pdf->Ln();

		$totalSales += $total_net;
	}
/*
	$pdf->Cell(210	);
	$pdf->SetFont('Arial','B',9);
	$pdf->Cell(30,6,utf8_decode("TOTAL VENTAS"),1,0,'C',1);
	$pdf->Cell(0,6,utf8_decode(number_format($totalSales, 2, '.','')),1,0,'R');
*/
}else{
	$pdf->Cell(276,6,utf8_decode("No existen datos para la fecha especificada"),1,0,'C');
}


$pdf->Output("I", $reportTitle . ".pdf", true);