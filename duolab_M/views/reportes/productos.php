
<style>
      .bg-primary{
        background: #0001FA !important;
    }
</style>

<style>
      .bg-danger{
        background: #FE0002 !important;
      }
 </style>
 <style>
      .bg-warning{
        background: #FEC409 !important;
      }
 </style>

 <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

 <script type="text/javascript">
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Año', 'Ventas', 'Compras'],
          ['2024', 1000, 400],
        ]);

        var options = {
          chart: {
            title: 'Casa Comercial Murillo',
            subtitle: 'Ventas y compras 2024',
          },
          bars: 'horizontal' // Required for Material Bar Charts.
        };

        var chart = new google.charts.Bar(document.getElementById('barchart_material'));
        chart.draw(data, google.charts.Bar.convertOptions(options));
        
        document.getElementById('variable').value= chart.getImageURI
      }
    </script>



<div class="content-wrapper">
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-0">
                <div class="col-md-12">
                    <div class="m-0 text-dark text-center text-lg">
                        <i class="fas fa-file-alt"></i>&nbsp;&nbsp;Otros Reportes
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="container-fluid">
            <div style="max-width: 1140px;margin: 0 auto;">

            <div class="card card-primary">
                    <div class="card-header bg-primary">
                        <div class="card-title">Resumen de Ventas y Compras</div>
                    </div>
                    <div class="card-body">

                        <div class="row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Fecha Inicio</label>
                                    <input type="date" name="date_from_ingreso_gasto" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Fecha Fin</label>
                                    <input type="date" name="date_to_ingreso_gasto" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-8"></div>
                            <div class="col-md-4" >

                                <button id="btn-rpt-ingreso-gasto" class="btn btn-block btn-warning bg-warning">
                                    <i class="fa fa-file-alt fa-1x"></i>&nbsp;&nbsp;Ver reporte
                                </button>
                            </div>
<!--
                            <form  method="post" id="hacer_pdf" action="ingreso-gasto.php">
                            <div id="barchart_material" style="width: 450px; height: 250;"></div>
                            </form>
    -->
                        </div>
                    </div>
                </div>

                <div class="card card-primary">
                    <div class="card-header bg-primary">
                        <div class="card-title">Reporte Top 10 Clientes Recurrentes</div>
                    </div>
                    <div class="card-body">

                        <div class="row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Fecha Inicio</label>
                                    <input type="date" name="date_from_cliente_r" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Fecha Fin</label>
                                    <input type="date" name="date_to_cliente_r" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-8"></div>
                            <div class="col-md-4" >
                                <button id="btn-rpt-cliente-r" class="btn btn-block btn-warning bg-warning">
                                    <i class="fa fa-file-alt fa-1x"></i>&nbsp;&nbsp;Ver reporte
                                </button>
                            </div>

                        </div>
                    </div>
                </div>



                <div class="card card-primary">
                    <div class="card-header bg-primary">
                        <div class="card-title">Reporte Top Productos</div>
                    </div>
                    <div class="card-body">
                        <div class="row mb-2">
                            <label>Haga clic sobre uno de los siguientes botones para obtener un reporte en PDF</label>
                        </div>
                        <div class="row mb-2">
                            <div class="col-md-3"></div>
                            <div class="col-md-6" >
                                <button id="btn-rpt-top-mas-vendido" class="btn btn-block btn-warning bg-warning">
                                    <i class="fa fa-file-alt fa-1x"></i>&nbsp;&nbsp;Top 20 de Productos más vendidos
                                </button>
                            </div>
                            <div class="col-md-3"></div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-md-3"></div>
                            <div class="col-md-6">
                                <button id="btn-rpt-top-menos-vendido" class="btn btn-block btn-danger">
                                    <i class="fa fa-file-alt fa-1x"></i>&nbsp;&nbsp;Top 20 de Productos menos vendidos
                                </button>
                            </div>
                            <div class="col-md-3"></div>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col-12">
                        <button id="btn-product-list" class="btn btn-secondary">
                            <i class="fa fa-box fa-1x"></i>&nbsp;&nbsp;Ver Listado de Productos
                        </button>
                    </div>
                </div>
                <div class="row mb-4"></div>


                <div class="card card-primary">
                    <div class="card-header bg-primary">
                        <div class="card-title">Reporte de Facturas Anuladas</div>
                    </div>
                    <div class="card-body">

                        <div class="row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Fecha Inicio</label>
                                    <input type="date" name="date_from_fac_anulada" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Fecha Fin</label>
                                    <input type="date" name="date_to_fac_anulada" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-8"></div>
                            <div class="col-md-4" >
                                <button id="btn-rpt-fac-anulada" class="btn btn-block btn-warning bg-warning">
                                    <i class="fa fa-file-alt fa-1x"></i>&nbsp;&nbsp;Ver reporte
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</div>