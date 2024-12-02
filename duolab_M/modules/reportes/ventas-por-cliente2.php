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
/*
if (!isset($_GET['dateto'])){
	echo "Error al obtener reporte. Variable 'dateto' no especificada.";
	return;
}
*/
//$customerId = $_GET['customerid'];
$dateFrom = $_GET['datefrom'];
//echo $dateFrom;
//$dateTo = $_GET['dateto'];

$reportTitle = "Reporte de Ventas Diarias";
//$rptDateInterval = "VENTAS (Sin rango de fecha)";

$productString = "";
$dateString = "";
/*
if ($dateFrom!= "" && $dateTo!= ""){
	$dateString = " AND (th.date BETWEEN '" . $dateFrom . "' AND '". $dateTo . "')";
	$rptDateInterval = "VENTAS DEL " . date("d/m/Y", strtotime($dateFrom)) . " AL " . date("d/m/Y", strtotime($dateTo));
}
*/
/*
SELECT 
    CONCAT(I.series, '-', I.number) AS invoice,
    D.item_code, 
    D.item_name, 
    D.item_unit_price, 
    ROUND(D.tax, 2) AS tax,
    ROUND(D.total, 2) AS total
FROM 
    (SELECT th.id, th.series, th.number
     FROM tbl_invoice th
     WHERE th.date = '. $dateFrom .') AS I
INNER JOIN
    (SELECT th.invoice_id, th.item_code, th.item_name, th.item_unit_price, 
            (th.item_unit_price * 0.15) AS tax, 
            (th.item_unit_price * 1.15) AS total
     FROM tbl_invoice_detail th) AS D
ON I.id = D.invoice_id;
 */

$sqlVentaInfo = "(
SELECT 
    CONCAT(I.series, '-', I.number) AS invoice,
    D.item_code, 
    D.item_name, 
    D.item_unit_price, 
    ROUND(D.tax, 2) AS tax,
    ROUND(D.total, 2) AS total
FROM 
    (SELECT th.id, th.series, th.number
     FROM tbl_invoice th
     WHERE th.date = '".$dateFrom."') AS I
INNER JOIN
    (SELECT th.invoice_id, th.item_code, th.item_name, th.item_unit_price, 
            (th.item_unit_price * 0.15) AS tax, 
            (th.item_unit_price * 1.15) AS total
     FROM tbl_invoice_detail th) AS D
ON I.id = D.invoice_id)";

$sqlStatement = $pdo->prepare($sqlVentaInfo);
$sqlStatement->execute();
$customerData = $sqlStatement->fetch();
/*
if ($customerData == null){
	echo "Error al obtener reporte. Variable 'customerid' no es válida. No existe el cliente solicitado.";
	return;
}
*/
$sqlString = "(SELECT 
    CONCAT(I.series, '-', I.number) AS invoice,
    D.item_code, 
    D.item_name, 
    D.item_unit_price, 
    ROUND(D.tax, 2) AS tax,
    ROUND(D.total, 2) AS total
FROM 
    (SELECT th.id, th.series, th.number
     FROM tbl_invoice th
     WHERE th.date = '".$dateFrom."') AS I
INNER JOIN
    (SELECT th.invoice_id, th.item_code, th.item_name, th.item_unit_price, 
            (th.item_unit_price * 0.15) AS tax, 
            (th.item_unit_price * 1.15) AS total
     FROM tbl_invoice_detail th) AS D
ON I.id = D.invoice_id)";

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
*/
//$pdf->Ln(10);

$pdf->SetFont('Arial','B',9);
//$pdf->Cell(0,6,utf8_decode($rptDateInterval),1,0,'C',1);
//$pdf->Ln();
$pdf->Cell(0,6,utf8_decode('VENTAS DEL '.$dateFrom),1,0,'C',1);
$pdf->Ln();
$pdf->Cell(46,6,utf8_decode('Factura'),1,0,'C',1);
$pdf->Cell(38,6,utf8_decode('Codigo'),1,0,'C',1);
$pdf->Cell(70,6,utf8_decode('Nombre'),1,0,'C',1);
$pdf->Cell(40,6,utf8_decode('Precio'),1,0,'C',1);
$pdf->Cell(40,6,utf8_decode('Impuesto'),1,0,'C',1);
$pdf->Cell(0,6,utf8_decode('Total'),1,0,'C',1);

$pdf->Ln();

$pdf->SetFont('Arial','',9);

if ($rowsNumber > 0) {

	$totalSales = 0;

    foreach ($sqlStatement as $row) {
		$pdf->Cell(46,6,utf8_decode($row['invoice']),1,0,'C');
		$pdf->Cell(38,6,utf8_decode($row['item_code']),1,0,'C');
		$pdf->Cell(70,6,utf8_decode($row['item_name']),1,0,'C');
		$pdf->Cell(40,6,utf8_decode('L.'.$row['item_unit_price']),1,0,'R');
		$pdf->Cell(40,6,utf8_decode('L.'.$row['tax']),1,0,'R');
		$pdf->Cell(0,6,utf8_decode('L.'.$row['total']),1,0,'R');
		

		$total_net = $row['total'];
			
		$pdf->Ln();

		$totalSales += $total_net;
	}

	$pdf->Cell(194);
	$pdf->SetFont('Arial','B',9);
	$pdf->Cell(40,6,utf8_decode("TOTAL VENTAS"),1,0,'C',1);
	$pdf->Cell(0,6,utf8_decode('L. '.number_format($totalSales, 2, '.','')),1,0,'R');

}else{
	$pdf->Cell(276,6,utf8_decode("No existen datos para la fecha especificada"),1,0,'C');
}


$pdf->Output("I", $reportTitle . ".pdf", true);