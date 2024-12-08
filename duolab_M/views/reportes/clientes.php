
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
 
 <div class="content-wrapper">
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-0">
                <div class="col-md-12">
                    <div class="m-0 text-dark text-center text-lg">
                        <i class="fas fa-file-alt"></i>&nbsp;&nbsp;Reportes Detallados
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
                        <div class="card-title">Reporte de Ventas Diarias</div>
                    </div>
                    <div class="card-body">
<!--
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label>Seleccione un cliente</label>
                                    <select class="form-control select2" name="customer_list2"></select>
                                </div>
                            </div>
                        </div>
-->
                        <div class="row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Fecha Del dia</label>
                                    <input type="date" name="date_from2" class="form-control">
                                </div>
                            </div>
<!--
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Fecha Fin</label>
                                    <input type="date" name="date_to2" class="form-control">
                                </div>
                            </div>
-->
                        </div>
                        <div class="row">
                            <div class="col-md-8"></div>
                            <div class="col-md-4" >
                                <button id="btn-rpt-ventas-por-cliente2" class="btn btn-block btn-warning bg-warning">
                                    <i class="fa fa-file-alt fa-1x"></i>&nbsp;&nbsp;Ver reporte
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="card card-primary">
                    <div class="card-header bg-primary" >
                        <div class="card-title">Reporte de Ventas por Cliente</div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label>Seleccione un cliente</label>
                                    <select class="form-control select2" name="customer_list"></select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Fecha Inicio</label>
                                    <input type="date" name="date_from" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Fecha Fin</label>
                                    <input type="date" name="date_to" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-8"></div>
                            <div class="col-md-4" >
                                <button id="btn-rpt-ventas-por-cliente" class="btn btn-block btn-warning bg-warning">
                                    <i class="fa fa-file-alt fa-1x"></i>&nbsp;&nbsp;Ver reporte
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                
                

                
                <div class="card card-primary">
                    <div class="card-header bg-primary">
                        <div class="card-title">Reporte de Unidades Vendidas por Cliente</div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Seleccione un producto</label>
                                    <select class="form-control select2" name="product_list"></select>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Fecha Inicio</label>
                                    <input type="date" name="date_from_uv" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Fecha Fin</label>
                                    <input type="date" name="date_to_uv" class="form-control">
                                </div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-md-8"></div>
                            <div class="col-md-4" >
                                <button id="btn-rpt-unidades-vendidas-cliente" class="btn btn-block btn-warning bg-warning">
                                    <i class="fa fa-file-alt fa-1x"></i>&nbsp;&nbsp;Ver reporte
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card card-primary">
                    <div class="card-header bg-primary" >
                        <div class="card-title">Reporte de Inventario Completo</div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label>Seleccione un estado</label>
                                    <select class="form-control select2" name="state"></select>
                                </div>
                            </div>
                        </div>
                        <!--
                        <div class="row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Fecha Inicio</label>
                                    <input type="date" name="date_from" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Fecha Fin</label>
                                    <input type="date" name="date_to" class="form-control">
                                </div>
                            </div>
                        </div>
    -->
                        <div class="row">
                            <div class="col-md-8"></div>
                            <div class="col-md-4" >
                                <button id="btn-rpt-inv-completo" class="btn btn-block btn-warning bg-warning">
                                    <i class="fa fa-file-alt fa-1x"></i>&nbsp;&nbsp;Ver reporte
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div class="card card-primary">
                    <div class="card-header bg-primary">
                        <div class="card-title">Reporte de Compras Semanal</div>
                    </div>
                    <div class="card-body">
<!--
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label>Seleccione un cliente</label>
                                    <select class="form-control select2" name="customer_list"></select>
                                </div>
                            </div>
                        </div>
    -->
                        <div class="row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Fecha Inicio</label>
                                    <input type="date" name="date_from_compra" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Fecha Fin</label>
                                    <input type="date" name="date_to_compra" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-8"></div>
                            <div class="col-md-4" >
                                <button id="btn-rpt-compras-por-semana" class="btn btn-block btn-warning bg-warning">
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