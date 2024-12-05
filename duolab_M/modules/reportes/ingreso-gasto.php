 <?php

include 'template.php';
require '../../global/connection.php';
//include 'chart_helper.php';
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

$reportTitle = "Resumen de Ingresos y Gastos";
$rptDateInterval = "COMPRAS Y VENTAS (Sin rango de fecha)";

$productString = "";
$dateString = "";

if ($dateFrom!= "" && $dateTo!= ""){
	$dateString = " AND (th.date BETWEEN '" . $dateFrom . "' AND '". $dateTo . "')";
	$rptDateInterval = "COMPRAS Y VENTAS DEL " . date("d/m/Y", strtotime($dateFrom)) . " AL " . date("d/m/Y", strtotime($dateTo));
}

$sqlString = "
(
SELECT
    COUNT(i.id) AS num,
    COALESCE(SUM(i.total_net), 0) AS suma,
    'Venta' AS tipo
FROM 
    (SELECT 'Venta' AS tipo) AS dummy
LEFT JOIN tbl_invoice i
    ON i.date BETWEEN '2024-12-01' AND '2025-05-26'

UNION ALL

SELECT
    COUNT(p.id) AS num,
    COALESCE(SUM(p.total_net), 0) AS suma,
    'Compra' AS tipo
FROM 
    (SELECT 'Compra' AS tipo) AS dummy
LEFT JOIN tbl_purchase p
    ON p.issue_date BETWEEN '2021-05-25' AND '2022-05-26'
)";

$sqlStatement = $pdo->prepare($sqlString);
$sqlStatement->execute();
$rowsNumber = $sqlStatement->rowCount();

/*
$data = [];
$labels = [];

foreach ($sqlStatement as $row) {
    $data[] = (int)$row["suma"];
    $labels[] = $row["v"];
}

// Generar gráfico de barras
$chartFile = __DIR__ . '/chart.png';
generateBarChart($data, $labels, $chartFile);
*/
$pdf = new PDF();
$pdf->AliasNbPages();
$pdf->SetHeaderTitle(utf8_decode($reportTitle));
$pdf->AddPage("L","A4",0);
$pdf->SetTitle($reportTitle,true);
$pdf->SetSubject($reportTitle,true);
$pdf->SetAuthor("CCM",true);
$pdf->SetCreator("fpdf v1.82",true);

$pdf->SetFillColor(254, 196, 9);

$pdf->SetFont('Arial','B',11);
$pdf->Cell(0,6,utf8_decode($rptDateInterval),1,0,'C',1);
$pdf->Ln();
//$pdf->Cell(16,6,utf8_decode('TBLID'),1,0,'C',1);
$pdf->Cell(90,6,utf8_decode('Movimiento'),1,0,'C',1);
$pdf->Cell(75,6,utf8_decode('Cantidad'),1,0,'C',1);
$pdf->Cell(0,6,utf8_decode('Valor'),1,0,'C',1);


$pdf->Ln();

$pdf->SetFont('Arial','',12);

if ($rowsNumber > 0) {

	//$totalSales = 0;



    foreach ($sqlStatement as $row) {
		$pdf->Cell(90,6,utf8_decode($row["tipo"]),1,0,'C');
		$pdf->Cell(75,6,utf8_decode($row['num']),1,0,'C');
		$pdf->Cell(0,6,utf8_decode('L. '.number_format($row['suma'], 2, '.','')),1,0,'R');
			
		$pdf->Ln();

	}

}else{
	$pdf->Cell(276,6,utf8_decode("No existen datos para la fecha especificada"),1,0,'C');
}


$pdf->Output("I", $reportTitle . ".pdf", true);