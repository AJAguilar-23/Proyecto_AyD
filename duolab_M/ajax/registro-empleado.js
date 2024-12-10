$("#col-btn-delete-employee").hide();

$(document).ready(function(){
  $("#m_empleados").attr("class","nav-link active");
  $(document).prop('title', 'Empleados - Casa Comercial Murillo');


  $('input[name="empleado_numdoc"]').on('input', function () {
        var dni = $(this).val();
        // Elimina cualquier letra o caracter no numérico
        if (!/^[0-9]{0,13}$/.test(dni)) {
            $(this).val(dni.slice(0, -1)); // Elimina el último carácter ingresado si no es un número
        }
    });


});

function validarDNI(dni) {
    var regex = /^[0-9]{13}$/;
    if (!regex.test(dni)) {
        return false;
    }
    var codigoDepartamentoMunicipio = dni.substring(0, 4);
    if (!validarCodigoDepartamentoMunicipio(codigoDepartamentoMunicipio)) {
        return false;
    }
    var anioNacimiento = parseInt(dni.substring(4, 8));
    if (!validarAnioNacimiento(anioNacimiento)) {
        return false;
    }
    var identificadorUnico = dni.substring(8, 13);
    if (identificadorUnico.length !== 5 || isNaN(identificadorUnico)) {
        return false;
    }
    return true;
}

function validarCodigoDepartamentoMunicipio(codigo) {
    var codigosValidos = [
        // ATLÁNTIDA
        "0101",
        "0102",
        "0103",
        "0104",
        "0105",
        "0106",
        "0107",
        "0108",
        // COLÓN
        "0201",
        "0202",
        "0203",
        "0204",
        "0205",
        "0206",
        "0207",
        "0208",
        "0209",
        "0210",
        // COMAYAGUA
        "0301",
        "0302",
        "0303",
        "0304",
        "0305",
        "0306",
        "0307",
        "0308",
        "0309",
        "0310",
        "0311",
        "0312",
        "0313",
        "0314",
        "0315",
        "0316",
        "0317",
        "0318",
        "0319",
        "0320",
        "0321",
        // COPÁN
        "0401",
        "0402",
        "0403",
        "0404",
        "0405",
        "0406",
        "0407",
        "0408",
        "0409",
        "0410",
        "0411",
        "0412",
        "0413",
        "0414",
        "0415",
        "0416",
        "0417",
        "0418",
        "0419",
        "0420",
        "0421",
        "0422",
        "0423",
        // CORTÉS
        "0501",
        "0502",
        "0503",
        "0504",
        "0505",
        "0506",
        "0507",
        "0508",
        "0509",
        "0510",
        "0511",
        "0512",
        // CHOLUTECA
        "0601",
        "0602",
        "0603",
        "0604",
        "0605",
        "0606",
        "0607",
        "0608",
        "0609",
        "0610",
        "0611",
        "0612",
        "0613",
        "0614",
        "0615",
        "0616",
        // EL PARAÍSO
        "0701",
        "0702",
        "0703",
        "0704",
        "0705",
        "0706",
        "0707",
        "0708",
        "0709",
        "0710",
        "0711",
        "0712",
        "0713",
        "0714",
        "0715",
        "0716",
        "0717",
        "0718",
        "0719",
        // FRANCISCO MORAZÁN
        "0801",
        "0802",
        "0803",
        "0804",
        "0805",
        "0806",
        "0807",
        "0808",
        "0809",
        "0810",
        "0811",
        "0812",
        "0813",
        "0814",
        "0815",
        "0816",
        "0817",
        "0818",
        "0819",
        "0820",
        "0821",
        "0822",
        "0823",
        "0824",
        "0825",
        "0826",
        "0827",
        "0828",
        // GRACIAS A DIOS
        "0901",
        "0902",
        "0903",
        "0904",
        "0905",
        "0906",
        // INTIBUCÁ
        "1001",
        "1002",
        "1003",
        "1004",
        "1005",
        "1006",
        "1007",
        "1008",
        "1009",
        "1010",
        "1011",
        "1012",
        "1013",
        "1014",
        "1015",
        "1016",
        "1017",
        // ISLAS DE LA BAHÍA
        "1101",
        "1102",
        "1103",
        "1104",
        // LA PAZ
        "1201",
        "1202",
        "1203",
        "1204",
        "1205",
        "1206",
        "1207",
        "1208",
        "1209",
        "1210",
        "1211",
        "1212",
        "1213",
        "1214",
        "1215",
        "1216",
        "1217",
        "1218",
        "1219",
        // LEMPIRA
        "1301",
        "1302",
        "1303",
        "1304",
        "1305",
        "1306",
        "1307",
        "1308",
        "1309",
        "1310",
        "1311",
        "1312",
        "1313",
        "1314",
        "1315",
        "1316",
        "1317",
        "1318",
        "1319",
        "1320",
        "1321",
        "1322",
        "1323",
        "1324",
        "1325",
        "1326",
        "1327",
        "1328",
        // OCOTEPEQUE
        "1401",
        "1402",
        "1403",
        "1404",
        "1405",
        "1406",
        "1407",
        "1408",
        "1409",
        "1410",
        "1411",
        "1412",
        "1413",
        "1414",
        "1415",
        "1416",
        // OLANCHO
        "1501",
        "1502",
        "1503",
        "1504",
        "1505",
        "1506",
        "1507",
        "1508",
        "1509",
        "1510",
        "1511",
        "1512",
        "1513",
        "1514",
        "1515",
        "1516",
        "1517",
        "1518",
        "1519",
        "1520",
        "1521",
        "1522",
        "1523",
        // SANTA BÁRBARA
        "1601",
        "1602",
        "1603",
        "1604",
        "1605",
        "1606",
        "1607",
        "1608",
        "1609",
        "1610",
        "1611",
        "1612",
        "1613",
        "1614",
        "1615",
        "1616",
        "1617",
        "1618",
        "1619",
        "1620",
        "1621",
        "1622",
        "1623",
        "1624",
        "1625",
        "1626",
        "1627",
        "1628",
        // VALLE
        "1701",
        "1702",
        "1703",
        "1704",
        "1705",
        "1706",
        "1707",
        "1708",
        "1709",
        // YORO
        "1801",
        "1802",
        "1803",
        "1804",
        "1805",
        "1806",
        "1807",
        "1808",
        "1809",
        "1810",
        "1811"
    ];
    return codigosValidos.includes(codigo);
}

function validarAnioNacimiento(anio) {
    var anioActual = new Date().getFullYear();
    return anio >= 1900 && anio <= anioActual;
}



var tabla_empleados = $('#table-empleados');

tabla_empleados.dataTable({
    "ajax": {
        "url": "../../modules/empleados/consultar-empleado.php",
        "type": "POST",
        "data": { "FILTER": "ALL" },
    },
    "columns": [
        { "data": "CODIGO" },
        { "data": "NOMBRES" },
        { "data": "APELLIDOS" },
        { "data": "CARGO" },
        { "data": "TIPO_DOC" },
        { "data": "NUM_DOC" },
        { "data": "FEC_NAC" },
        { "data": "FEC_ING" }
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


$("#FRM_INSERT_EMPLEADO").submit(function (e) {
    e.preventDefault();
    var form = $(this);
    var idform = form.attr("id");
    var url = form.attr('action');
    var formElement = document.getElementById(idform);
    var formData_rec = new FormData(formElement);
    var id_empleado = $('input[name="empleado_id"]').val();

    //si es dni
    var tipoDoc = $('select[name="empleado_tipodoc"]').val();
    var dni = $('input[name="empleado_numdoc"]').val();

    

    if(tipoDoc == "DNI"){
        // Validar DNI
    if (!validarDNI(dni)) {
        $.Notification.notify("error", "bottom-right", "DNI inválido", "El DNI ingresado no cumple con el formato válido.");
        return false; // Detener el envío del formulario si el DNI es inválido
    }

        if (dni.length < 13 || dni.length > 13){
          $.Notification.notify("error", "bottom-right",
           "DNI Incorrecto", "El DNI debe tener exactamente 13 caracteres");
          return;
        }
        dni = $('input[name="empleado_numdoc"]').val().replace(/\s+/g, ''); // Eliminar espacios
        if (!/^\d{13}$/.test(dni)) {
          $.Notification.notify("error", "bottom-right",
          "Número de DNI Incorrecto", "El número de DNI debe contener solo numeros.");
          return;
      }
    }
    //si es residente
    if(tipoDoc == "Carnet de Residente"){
        if (dni.length < 15 || dni.length > 15){
          $.Notification.notify("error", "bottom-right",
           "DNI Incorrecto", "El DNI debe tener exactamente 15 caracteres");
          return;
        }
        if (!/^\d{15}$/.test(dni)) {
          $.Notification.notify("error", "bottom-right",
          "Número de DNI Incorrecto", "El número de DNI debe contener solo numeros.");
          return;
      }
    }

    // validacion fecha de nacimiento
    var fechaNacimiento = $('input[name="empleado_fecnac"]').val(); // Obtener el valor del input

    if (!fechaNacimiento) {
        $.Notification.notify("error", "bottom-right",
            "Fecha de Nacimiento Incorrecta", "La fecha de nacimiento es requerida.");
        return;
    }
    
    // Convertir la fecha seleccionada a un formato comparable
    var fechaSeleccionada = new Date(fechaNacimiento);
    var fechaMinima = new Date("1960-01-01");
    
    // Calcular la fecha máxima (15 años desde la fecha actual)
    var fechaActual = new Date();
    var fechaMaxima = new Date(fechaActual.getFullYear() - 18, fechaActual.getMonth(), fechaActual.getDate());
    
    // Validar que la fecha no sea anterior al 1 de enero de 1960
    if (fechaSeleccionada < fechaMinima) {
        $.Notification.notify("error", "bottom-right",
            "Fecha de Nacimiento Incorrecta", "La fecha no puede ser anterior a 1960.");
        return;
    }
    
    // Validar que la fecha no sea mayor a la fecha máxima permitida
    if (fechaSeleccionada > fechaMaxima) {
        $.Notification.notify("error", "bottom-right",
            "Fecha de Nacimiento Incorrecta", "La fecha no puede ser de los ultimos 18 años.");
        return;
    }


    // Fecha de ingreso validacion //
    var fechaIngreso = $('input[name="empleado_fecing"]').val(); // Obtener el valor del input

    if (!fechaIngreso) {
        $.Notification.notify("error", "bottom-right",
            "Fecha de Ingreso Incorrecta", "La fecha de Ingreso es requerida.");
        return;
    }
    
    // Convertir la fecha seleccionada a un formato comparable
    var fechaISeleccionada = new Date(fechaIngreso);
    var fechaIMinima = new Date("2015-01-01");
    
    // Calcular la fecha máxima (que es la actual)
    var fechaIMaxima = new Date();
    
    // Validar que la fecha no sea anterior a 2015
    if (fechaISeleccionada < fechaIMinima) {
        $.Notification.notify("error", "bottom-right",
            "Fecha de Ingreso Incorrecta", "La fecha no puede ser anterior al 2015.");
        return;
    }
    
    // Validar que la fecha no sea mayor a la fecha máxima permitida
    if (fechaISeleccionada > fechaIMaxima) {
        $.Notification.notify("error", "bottom-right",
            "Fecha de Ingreso Incorrecta", "La fecha no puede ser mayor que la fecha actual.");
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
                $.Notification.notify("error", "bottom-right", "Error de guardado", "No se pudo guardar datos del empleado");
                Swal.close();
            } else if (data == "EXISTE") {
                $.Notification.notify("error", "bottom-right", "Error de guardado", "Empleado ya existe en la base de datos");
                Swal.close();
            } else if (data == "OK_INSERT") {
                $.Notification.notify("success", "bottom-right", "Empleado guardado", "Datos almacenados");
                Swal.close();
                $('#table-empleados').DataTable().ajax.reload();
            } else if (data == "OK_UPDATE") {
                if (id_empleado != "" && id_empleado != null) {
                    $('input[name="empleado_id"]').val("");
                    $("#btn-save-employee font").html("Guardar empleado");
                    $("#col-btn-save-employee").attr("class", "col-md-12");
                    $("#col-btn-delete-employee").hide();
                    form.find("input, textarea").val("");
                }
                $.Notification.notify("success", "bottom-right", "Empleado actualizado", "Datos actualizados");
                Swal.close();
                $('#table-empleados').DataTable().ajax.reload();
            }
        }
    });
});

tabla_empleados.on('click', 'tr', function () {
    var data = tabla_empleados.fnGetData(this);
    if (data == null) return;
    
    var id_row = data["CODIGO"];
    Swal.fire({
        html: '<h4>Cargando información del empleado</h4>',
        allowOutsideClick: false,
        onBeforeOpen: () => {
            Swal.showLoading();
        }
    });
    $.post("../../modules/empleados/consultar-empleado.php", { FILTER: id_row }, function (data) {
        var data_json = JSON.parse(data);
        $('input[name="empleado_codigo"]').focus();
        $('#btn-delete-employee').attr("js-id", data_json[0]["CODIGO"]);
        $('input[name="empleado_id"]').val(data_json[0]["CODIGO"]);
        $('input[name="empleado_codigo"]').val("EMP-" + data_json[0]["CODIGO"]);
        $('input[name="empleado_nombres"]').val(data_json[0]["NOMBRES"]);
        $('input[name="empleado_apepat"]').val(data_json[0]["APE_PAT"]);
        $('input[name="empleado_apemat"]').val(data_json[0]["APE_MAT"]);
        $('input[name="empleado_direccion"]').val(data_json[0]["DIRECCION"]);

        $('select[name="empleado_tipodoc"]').val(data_json[0]["TIPO_DOC"]);
        $('select[name="empleado_tipodoc"]').trigger('change');

        $('input[name="empleado_numdoc"]').val(data_json[0]["NUM_DOC"]);
        
        $('select[name="empleado_estado_civ"]').val(data_json[0]["ESTADO_CIV"]);
        $('select[name="empleado_estado_civ"]').trigger('change');

        $('input[name="empleado_fecnac"]').val(data_json[0]["FEC_NAC"]);
        
        $('select[name="empleado_cargo"]').val(data_json[0]["CARGO"]);
        $('select[name="empleado_cargo"]').trigger('change');

        $('input[name="empleado_fecing"]').val(data_json[0]["FEC_ING"]);
        $('input[name="empleado_telefono"]').val(data_json[0]["TELEFONO"]);
        $('input[name="empleado_correo"]').val(data_json[0]["EMAIL"]);

        $('select[name="empleado_grado_est"]').val(data_json[0]["GRADO_EST"]);
        $('select[name="empleado_grado_est"]').trigger('change');
        
        $('input[name="empleado_carrera"]').val(data_json[0]["CARRERA"]);
        $("#btn-save-employee font").html("Actualizar empleado");
        $("#col-btn-save-employee").attr("class", "col-md-6");
        $("#col-btn-delete-employee").show("fast");
    }).done(function(){
        $(window).scrollTop(0);    
    });
    Swal.close();
});

$("#btn-delete-employee").click(function () {
    element = $(this);
    id_val = element.attr("js-id");
    if (id_val != "" && id_val != null) {
        Swal.fire({
            title: 'Se eliminará este empleado',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                $.post("../../modules/empleados/eliminar-empleado.php", { empleado_id: id_val }, function (data) {
                    if (data == true) {
                        $("#FRM_INSERT_EMPLEADO").find("input, textarea").val("");
                        $('#table-empleados').DataTable().ajax.reload();
                        $('input[name="empleado_id"]').val("");                        
                        $("#btn-save-employee font").html("Guardar empleado");
                        $("#col-btn-save-employee").attr("class", "col-md-12");
                        $("#col-btn-delete-employee").hide();
                        $.Notification.notify("success", "bottom-right", "Empleado eliminado", "Información eliminada correctamente");
                    }
                });
            }
        })
    }
})