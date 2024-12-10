$("#col-btn-delete-proveedor").hide();

$(document).ready(function(){
  $("#m_proveedores").attr("class","nav-link active");
  $(document).prop('title', 'Proveedores - Casa Comercial Murillo');
});

$('select[name="proveedor_banco_1"], select[name="proveedor_banco_2"]').select2({
    data: [
        { id:"", text:"Seleccione" },
        { id:"Atlantida", text:"Banco Atlántida" },
        { id:"FICOHSA", text:"Banco FICOHSA" },
        { id:"Occidente", text:"Banco de Occidente" },
        { id:"Lafise", text:"Banco Lafise" },
        { id:"BAC", text:"BAC" },
        { id:"Davivienda", text:"Banco Davivienda" },
    ]
});

$('select[name="proveedor_tipmoneda_1"], select[name="proveedor_tipmoneda_2"]').select2({
    data: [
        { id:"", text:"Seleccione" },
        { id:"MN", text:"Moneda Nacional (HNL)" },
        { id:"ME", text:"Moneda Extranjera (USD)" }
    ]
});

var tabla_proveedores = $('#table-proveedores');

tabla_proveedores.dataTable({
    "ajax": {
        "url": "../../modules/proveedores/consultar-proveedor.php",
        "type": "POST",
        "data": { "FILTER": "ALL" },
    },
    "columns": [
        { "data": "CODIGO" },
        { "data": "NUMERO" },
        { "data": "RAZ_SOC" },
        { "data": "DIRECC" },
        { "data": "CIUDAD" },
        { "data": "PAIS" },
        { "data": "FECREG" }
    ],
    "order": [[0, "DESC"]],
    dom: 'Bfrtip',
    buttons: [
            {
                extend: 'csv',
                text: '<i class="fa fa-file-csv"></i>&nbsp;&nbsp;Descargar CSV'
            },
            {
                extend: 'excel',
                text: '<i class="fa fa-file-excel"></i>&nbsp;&nbsp;Descargar Excel'
            },
            {
                extend: 'print',
                text: '<i class="fa fa-print"></i>&nbsp;&nbsp;Imprimir'
            }
        ],
    "language": {
            "url": "../../plugins/datatables/Spanish.json"
        }
});

$("#FRM_INSERT_PROVEEDOR").submit(function (e) {
    e.preventDefault();
    var form = $(this);
    var idform = form.attr("id");
    var url = form.attr('action');
    var formElement = document.getElementById(idform);
    var formData_rec = new FormData(formElement);
    var id_cliente = $('input[name="proveedor_id"]').val();

    //validaciones

    var rtn = $('input[name="proveedor_numero"]').val();
    if (rtn.length < 14 || rtn.length > 14){
        $.Notification.notify("error", "bottom-right",
         "RTN Incorrecto", "El RTN debe tener exactamente 14 caracteres");
        return;
      }
        if (!/^\d{14}$/.test(rtn)) {
            $.Notification.notify("error", "bottom-right",
            "Número de RTN Incorrecto", "El número de RTN debe contener solo numeros.");
            return;
        }
/*
        var razonSocial = $('input[name="proveedor_razsoc"]').val();
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(razonSocial)) {
            $.Notification.notify("error", "bottom-right",
                "Razón Social Incorrecta", "La Razón Social debe contener solo letras, espacios y acentos.");
            return;
        }
        
*/
      var pais = $('input[name="proveedor_pais"]').val();
      if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(pais)) {
        $.Notification.notify("error", "bottom-right",
            "Pais Incorrecto", "El pais debe contener solo letras.");
        return;
      }

      var ciudad = $('input[name="proveedor_ciudad"]').val();
      if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(ciudad)) {
        $.Notification.notify("error", "bottom-right",
            "Ciudad Incorrecta", "La Ciudad debe contener solo letras.");
        return;
      }

      var cont1 = $('input[name="proveedor_contnom_1"]').val();
      if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(cont1)) {
        $.Notification.notify("error", "bottom-right",
            "Nombre de Contacto 1 Incorrecto", "El nombre debe contener solo letras.");
        return;
      }

      var cont2 = $('input[name="proveedor_contnom_2"]').val();
      if (cont2 !== "" && !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(cont2)) {
            $.Notification.notify("error", "bottom-right",
            "Nombre de Contacto 2 Incorrecto", "El nombre debe contener solo letras.");
        return;
      }
/*
      var titc1 = $('input[name="proveedor_titularcta_1"]').val();
      if (titc1 !== "" && !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(titc1)) {
            $.Notification.notify("error", "bottom-right",
            "Nombre de Titular 1 Incorrecto", "El nombre debe contener solo letras.");
        return;
      }
      var titc2 = $('input[name="proveedor_titularcta_2"]').val();
      if (titc2 !== "" && !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(titc2)) {
            $.Notification.notify("error", "bottom-right",
            "Nombre de Titular 2 Incorrecto", "El nombre debe contener solo letras.");
        return;
      }
*/
      var cct1 = $('input[name="proveedor_ctacorriente_1"]').val();
      if (cct1 !=="" &&!/^\d{28}$/.test(cct1)) {
        $.Notification.notify("error", "bottom-right",
        "Número de Cta. Corriente 1 incorrecto", "El número de Cta. Corriente debe contener solo numeros.");
        return;
    }

    var cct2 = $('input[name="proveedor_ctacorriente_2"]').val();
    if (cct2 !== "" &&!/^\d{28}$/.test(cct2)) {
        $.Notification.notify("error", "bottom-right",
            "Número de Cta. Corriente 2 incorrecto", "El número de Cta. Corriente debe contener solo numeros.");
            return;
    }





    $.ajax({
        type: "POST",
        url: url,
        data: formData_rec,
        contentType: false,
        cache: false,
        processData: false,
        beforeSend: function () {
            Swal.fire({
                html: '<h4>Guardando información</h4>',
                allowOutsideClick: false,
                onBeforeOpen: () => {
                    Swal.showLoading();
                }
            })
        },
        success: function (data) {
            if (data == "ERROR") {
                $.Notification.notify("error", "bottom-right", "Error de guardado", "No se pudo guardar datos del proveedor");
                Swal.close();
            } else if (data == "EXISTE") {
                $.Notification.notify("error", "bottom-right", "Error de guardado", "Proveedor ya existe en la base de datos");
                Swal.close();
            } else if (data == "OK_INSERT") {
                $.Notification.notify("success", "bottom-right", "Proveedor guardado", "Datos almacenados");
                form.find("input, textarea, select").val("");
                $('select[name="proveedor_banco_1"]').trigger('change');
                $('select[name="proveedor_tipmoneda_1"]').trigger('change');
                $('select[name="proveedor_banco_2"]').trigger('change');
                $('select[name="proveedor_tipmoneda_2"]').trigger('change');
                Swal.close();
                $('#table-proveedores').DataTable().ajax.reload();
            } else if (data == "OK_UPDATE") {
                if (id_cliente != "" && id_cliente != null) {
                    $('input[name="proveedor_id"]').val("");
                    $("#btn-save-proveedor font").html("Guardar proveedor");
                    $("#col-btn-save-proveedor").attr("class", "col-md-12");
                    $("#col-btn-delete-proveedor").hide();
                    form.find("input, textarea, select").val("");
                    $('select[name="proveedor_banco_1"]').trigger('change');
                    $('select[name="proveedor_tipmoneda_1"]').trigger('change');
                    $('select[name="proveedor_banco_2"]').trigger('change');
                    $('select[name="proveedor_tipmoneda_2"]').trigger('change');
                }
                $.Notification.notify("success", "bottom-right", "Proveedor actualizado", "Datos actualizados");
                Swal.close();
                $('#table-proveedores').DataTable().ajax.reload();
            }
        }
    });
});


tabla_proveedores.on('click', 'tr', function () {
    var data = tabla_proveedores.fnGetData(this);
    if (data == null) return;
    
    var id_row = data["CODIGO"];
    Swal.fire({
        html: '<h4>Cargando información del proveedor</h4>',
        allowOutsideClick: false,
        onBeforeOpen: () => {
            Swal.showLoading();
        }
    });
    $.post("../../modules/proveedores/consultar-proveedor.php", { FILTER: id_row }, function (data) {
        var data_json = JSON.parse(data);        
        $('#btn-delete-proveedor').attr("js-id", data_json[0]["CODIGO"]);
        $('input[name="proveedor_id"]').val(data_json[0]["CODIGO"]);
        $('input[name="proveedor_codigo"]').val("PROV-" + data_json[0]["CODIGO"]);
        $('input[name="proveedor_numero"]').val(data_json[0]["NUMERO"]);
        $('input[name="proveedor_pais"]').val(data_json[0]["PAIS"]);      
        $('input[name="proveedor_ciudad"]').val(data_json[0]["CIUDAD"]);
        $('input[name="proveedor_distrito"]').val(data_json[0]["DISTRITO"]);
        $('input[name="proveedor_razsoc"]').val(data_json[0]["RAZ_SOC"]);
        $('input[name="proveedor_fecreg"]').val(data_json[0]["FEC_REG"]);
        $('input[name="proveedor_direccion"]').val(data_json[0]["DIRECC"]);
        $('input[name="proveedor_contnom_1"]').val(data_json[0]["CONT1_NAME"]);
        $('input[name="proveedor_conttelef_1"]').val(data_json[0]["CONT1_PHONE"]);
        $('input[name="proveedor_contnom_2"]').val(data_json[0]["CONT2_NAME"]);
        $('input[name="proveedor_conttelef_2"]').val(data_json[0]["CONT2_PHONE"]);

        $('select[name="proveedor_banco_1"]').val(data_json[0]["BANK1_NAME"]);
        $('select[name="proveedor_banco_1"]').trigger('change');

        $('select[name="proveedor_tipmoneda_1"]').val(data_json[0]["BANK1_CURR"]);
        $('select[name="proveedor_tipmoneda_1"]').trigger('change');

        $('input[name="proveedor_ctacorriente_1"]').val(data_json[0]["BANK1_ACCNUM"]);
        $('input[name="proveedor_titularcta_1"]').val(data_json[0]["BANK1_ACCHOL"]);

        $('select[name="proveedor_banco_2"]').val(data_json[0]["BANK2_NAME"]);
        $('select[name="proveedor_banco_2"]').trigger('change');

        $('select[name="proveedor_tipmoneda_2"]').val(data_json[0]["BANK2_CURR"]);
        $('select[name="proveedor_tipmoneda_2"]').trigger('change');

        $('input[name="proveedor_ctacorriente_2"]').val(data_json[0]["BANK2_ACCNUM"]);
        $('input[name="proveedor_titularcta_2"]').val(data_json[0]["BANK2_ACCHOL"]);

        $("#btn-save-proveedor font").html("Actualizar proveedor");
        $("#col-btn-save-proveedor").attr("class", "col-md-6");
        $("#col-btn-delete-proveedor").show("fast");
        
    }).done(function(){
        $('input[name="proveedor_codigo"]').focus();
        setTimeout(function(){
            Swal.close();
        },500);        
    });
});

$("#btn-delete-proveedor").click(function () {
    element = $(this);
    id_val = element.attr("js-id");
    if (id_val != "" && id_val != null) {
        Swal.fire({
            title: 'Se eliminará este proveedor',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Borrar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                $.post("../../modules/proveedores/eliminar-proveedor.php", { proveedor_id: id_val }, function (data) {
                    if (data == true) {
                        $("#FRM_INSERT_PROVEEDOR").find("input, textarea").val("");
                        $('#table-proveedores').DataTable().ajax.reload();
                        $('input[name="proveedor_id"]').val("");                        
                        $("#btn-save-proveedor font").html("Guardar cliente");
                        $("#col-btn-save-proveedor").attr("class", "col-md-12");
                        $("#col-btn-delete-proveedor").hide();
                        $.Notification.notify("success", "bottom-right", "Proveedor eliminado", "Información borrada correctamente");
                    }
                });
            }
        })
    }
})