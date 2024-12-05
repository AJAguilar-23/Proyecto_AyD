<?php

include 'template.php';
require '../../global/connection.php';

if (!isset($_GET['state'])){
	echo "Error al obtener reporte. Variable 'customerid' no especificada.";
	return;
}
/*
if (!isset($_GET['datefrom'])){
	echo "Error al obtener reporte. Variable 'datefrom' no especificada.";
	return;
}

if (!isset($_GET['dateto'])){
	echo "Error al obtener reporte. Variable 'dateto' no especificada.";
	return;
}
*/
$state = $_GET['state'];
//$dateFrom = $_GET['datefrom'];
//$dateTo = $_GET['dateto'];

$reportTitle = "Reporte de Inventario Completo";
$rptDateInterval = "Inventario completo (Activo e Inactivo)";

$productString = "";
$stateString = "";
/*
if ($dateFrom!= "" && $dateTo!= ""){
	$dateString = " WHERE date BETWEEN '" . $dateFrom . "' AND '". $dateTo . "'";
	$rptDateInterval = "VENTAS DEL " . date("d/m/Y", strtotime($dateFrom)) . " AL " . date("d/m/Y", strtotime($dateTo));
}
*/
if ($state!= ""){
		$stateString ="WHERE active_status = ".$state."";
		if($state == 1){
			$rptDateInterval = "Inventario completo Activo";
		}elseif($state == 0){
			$rptDateInterval = "Inventario completo Inactivo";

		}
	
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
SELECT code, name, active_status, stock_quantity, unit_price, (unit_price*stock_quantity) as total_neto
FROM tbl_product
".$stateString."
ORDER BY `tbl_product`.`code` ASC
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
$pdf->Cell(40,6,utf8_decode('Codigo.'),1,0,'C',1);
$pdf->Cell(110,6,utf8_decode('Nombre'),1,0,'C',1);
$pdf->Cell(30,6,utf8_decode('Cantidad'),1,0,'C',1);
$pdf->Cell(30,6,utf8_decode('Precio'),1,0,'C',1);
$pdf->Cell(0,6,utf8_decode('Total '),1,0,'C',1);

$pdf->Ln();

$pdf->SetFont('Arial','',9);

if ($rowsNumber > 0) {

	$totalSales = 0;

    foreach ($sqlStatement as $row) {
		$pdf->Cell(40,6,utf8_decode($row['code']),1,0,'C');
		$pdf->Cell(110,6,utf8_decode($row["name"]),1,0,'C');
		$pdf->Cell(30,6,utf8_decode($row['stock_quantity']),1,0,'C');
		$pdf->Cell(30,6,utf8_decode(number_format($row['unit_price'], 2, '.','')),1,0,'R');


		$total_net = $row['total_neto'];

		$pdf->Cell(0,6,utf8_decode(number_format($row['total_neto'], 2, '.','')),1,0,'R');
			
		$pdf->Ln();

		$totalSales += $total_net;
	}

	$pdf->Cell(210	);
	$pdf->SetFont('Arial','B',9);
	$pdf->Cell(30,6,utf8_decode("VALOR TOTAL"),1,0,'C',1);
	$pdf->Cell(0,6,utf8_decode(number_format($totalSales, 2, '.','')),1,0,'R');

}else{
	$pdf->Cell(276,6,utf8_decode("No existen datos "),1,0,'C');
}


$pdf->Output("I", $reportTitle . ".pdf", true);