<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tooltips con Bootstrap</title>
  
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>


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

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-0">
                <div class="col-md-12">
                    <div class="m-0 text-dark text-center text-lg">
                        <i class="fas fa-user"></i>&nbsp;&nbsp;Registro de Cliente
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="container-fluid">
            <div style="max-width: 1140px;margin: 0 auto;">
                <form id="FRM_INSERT_CLIENTE" method="post" action="<?php echo $functions->direct_sistema(); ?>/modules/clientes/insert-update-cliente.php" enctype="multipart/form-data">
                    <input type="hidden" name="cliente_id">
                    <div class="card card-primary">
                        <div class="card-header bg-primary">
                            <div class="card-title">Datos de Cliente</div>
                            <div class="float-right" style="height: 2rem; width: 150px">
                                <input type="text" placeholder="Código de cliente" class="form-control" name="cliente_codigo" readonly>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="form-group">
                                        <label data-bs-toggle="tooltip" data-bs-placement="top" title="Identidad Emitida en el RNP debe ser de 13 dígitos">DNI</label>
                                        <input minlength="11" maxlength="11" type="text" class="form-control" placeholder="Ingrese DNI" name="cliente_ruc" required>
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <div class="form-group">
                                    <label data-bs-toggle="tooltip" data-bs-placement="right" title="Es el nombre legal de la empresa, registrado oficialmente en los organismos gubernamentales y que aparece en los documentos legales, facturas, contratos, y trámites oficiales. Ejemplo: Ejemplo: Constructora Innovadora S.A.">Razón Social</label>
                                        <input type="text" class="form-control" placeholder="Ingrese razón social" name="cliente_razsoc" required>
                                    </div>
                                </div>
                                <!-- <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Nombre Comercial</label>
                                        <input type="text" class="form-control" placeholder="Ingrese nombre comercial" name="cliente_nomcom">
                                    </div>
                                </div> -->
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Teléfono</label>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                    <i class="fas fa-phone"></i>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" pattern="[0-9--]{0,20}" placeholder="Ingrese teléfono fijo" name="cliente_telfij">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Celular</label>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                    <i class="fas fa-mobile-alt"></i>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" pattern="[0-9--]{0,20}" placeholder="Ingrese teléfono celular" name="cliente_telcel">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                    <label data-bs-toggle="tooltip" data-bs-placement="top" title="Fecha de Registro del cliente al sistema">Fecha de Registro</label>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                    <i class="far fa-calendar-alt"></i>
                                                </span>
                                            </div>
                                            <input type="date" class="form-control" name="cliente_fecreg" value="<?php echo date("Y-m-d"); ?>">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card card-danger">
                        <div class="card-header bg-danger">
                            <div class="card-title">Otros datos</div>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Departamento</label>
                                        <select class="form-control select2" style="width: 100%;" name="cliente_departamento" required>
                                            <option value="">Seleccione un departamento</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Departamento</label>
                                        <select class="form-control select2" style="width: 100%;" name="cliente_provincia" required>
                                            <option value="">Seleccione un Departamento</option>
                                        </select>
                                    </div>
                                </div>
                                <!-- <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Distrito</label>
                                        <select class="form-control select2" style="width: 100%;" name="cliente_distrito" required>
                                            <option value="">Seleccione un distrito</option>
                                        </select>
                                    </div>
                                </div> -->
                            </div>
                            <div class="row">
                                <div class="col-md-10">
                                    <div class="form-group">
                                        <label data-bs-toggle="tooltip" data-bs-placement="top" title="Una dirección más específica: Barrio Cabañas 3era Ave, 4ta calle">Dirección</label>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                    <i class="fas fa-home"></i>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="Ingrese una dirección" name="cliente_direccion" required>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-10">
                                    <div class="form-group">
                                        <label>Correo Electrónico</label>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                    <i class="fas fa-envelope"></i>
                                                </span>
                                            </div>
                                            <input type="email" class="form-control" placeholder="Ingrese un correo electrónico" name="cliente_correo">
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Pago de Comisión</label>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                    <i class="fas fa-dollar-sign"></i>
                                                </span>
                                            </div>
                                            <input type="number" class="form-control" placeholder="Ingrese pago de comisión" name="cliente_pagocomision">
                                        </div>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card card-info">
                                <div class="card-header bg-warning">
                                    <div class="card-title">Contacto 1</div>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-7">
                                            <div class="form-group">
                                                <label>Nombre</label>
                                                <input type="text" class="form-control" placeholder="Ingrese nombre de contacto" name="cliente_nomcont_1">
                                            </div>
                                        </div>
                                        <div class="col-md-5">
                                            <div class="form-group">
                                                <label>Celular</label>
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text">
                                                            <i class="fas fa-mobile-alt"></i>
                                                        </span>
                                                    </div>
                                                    <input  placeholder="Ejemplo: 9957-5213" type="phone" class="form-control" name="cliente_celcont_1" pattern="[0-9--]{0,20}">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card card-info">
                                <div class="card-header bg-warning">
                                    <div class="card-title">Contacto 2</div>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-7">
                                            <div class="form-group">
                                                <label>Nombre</label>
                                                <input type="text" class="form-control" placeholder="Ingrese nombre de contacto" name="cliente_nomcont_2">
                                            </div>
                                        </div>
                                        <div class="col-md-5">
                                            <div class="form-group">
                                                <label>Celular</label>
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text">
                                                            <i class="fas fa-mobile-alt"></i>
                                                        </span>
                                                    </div>
                                                    <input placeholder="Ejemplo: 9957-5213" type="phone" class="form-control" name="cliente_celcont_2" pattern="[0-9--]{0,20}">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div class="row">
                        <div id="col-btn-save-client" class="col-md-12">
                            <button type="submit" id="btn-save-client" class="btn btn-success btn-block"><i class="fa fa-save fa-1x"></i>&nbsp;&nbsp;<font>Guardar cliente</font></button>
                        </div>
                        <div id="col-btn-delete-client" class="col-md-6">
                            <button type="button" js-id="" id="btn-delete-client" class="btn btn-danger btn-block"><i class="fa fa-trash fa-1x"></i>&nbsp;&nbsp;Eliminar cliente</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="card mt-3">
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="table-clientes" class="table table-bordered table-hover" style="width: 100%">
                            <thead>
                                <tr>
                                    <th>ClienteID</th>
                                    <th>DNI</th>
                                    <th>Razón Social</th>
                                    <th>Dirección</th>
                                    <th>Teléfono</th>
                                    <th>Celular</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                            <tfoot>
                                <tr>
                                    <th>Código</th>
                                    <th>DNI</th>
                                    <th>Razón Social</th>
                                    <th>Dirección</th>
                                    <th>Teléfono</th>
                                    <th>Celular</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
 <!-- Bootstrap JS -->
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

<!-- Inicialización de Tooltips -->
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });
</script>
</body>
</html>