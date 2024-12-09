$("#col-btn-delete-client").hide();

$(document).ready(function () {
    $("#m_clientes").attr("class", "nav-link active");
    $(document).prop('title', 'Clientes - DuoLab Group');

    // Asignar la fecha actual y hacer el campo de fecha solo lectura
    var fechaActual = new Date().toISOString().split('T')[0]; // Ejemplo: 2024-12-08
    $('input[name="cliente_fecreg"]').val(fechaActual).prop('readonly', true);
    // Validación del teléfono fijo (solo números)
    $('input[name="cliente_telfij"]').on('input', function () {
        var telefono = $(this).val();
        if (!/^[0-9]{0,8}$/.test(telefono)) {
            $(this).val(telefono.slice(0, -1)); // Elimina caracteres no numéricos
        }
    });

    // Validación del celular (solo números y entre 8 y 9 dígitos)
    $('input[name="cliente_telcel"]').on('input', function () {
        var celular = $(this).val();
        if (!/^[0-9]{0,9}$/.test(celular)) {
            $(this).val(celular.slice(0, -1)); // Elimina caracteres no numéricos
        }
    });
    $('input[name="cliente_ruc"]').on('input', function () {
        var dni = $(this).val();
        // Elimina cualquier letra o caracter no numérico
        if (!/^[0-9]{0,13}$/.test(dni)) {
            $(this).val(dni.slice(0, -1)); // Elimina el último carácter ingresado si no es un número
        }
    });
    // Validación del correo electrónico (formato válido)
    $('input[name="cliente_correo"]').on('input', function () {
        var correo = $(this).val();
        // Expresión regular para validar formato de correo electrónico
        var regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (correo && !regexCorreo.test(correo)) {
            // Si el correo no es válido, puedes agregar un mensaje de advertencia si lo deseas
            $(this).css('border', '1px solid red'); // Ejemplo: resaltar el campo en rojo
        } else {
            $(this).css('border', ''); // Si el correo es válido, eliminar el estilo
        }
    });

    // Validación del primer teléfono de contacto (solo números)
    $('input[name="cliente_celcont_1"]').on('input', function () {
        var celularCont1 = $(this).val();
        if (!/^[0-9]{0,9}$/.test(celularCont1)) {
            $(this).val(celularCont1.slice(0, -1)); // Elimina caracteres no numéricos
        }
    });

    // Validación del segundo teléfono de contacto (solo números)
    $('input[name="cliente_celcont_2"]').on('input', function () {
        var celularCont2 = $(this).val();
        if (!/^[0-9]{0,9}$/.test(celularCont2)) {
            $(this).val(celularCont2.slice(0, -1)); // Elimina caracteres no numéricos
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

var tabla_clientes = $('#table-clientes');

tabla_clientes.dataTable({
    "ajax": {
        "url": "../../modules/clientes/consultar-cliente.php",
        "type": "POST",
        "data": { "FILTER": "ALL" },
    },
    "columns": [
        { "data": "CODIGO" },
        { "data": "RUC" },
        { "data": "RAZ_SOC" },
        { "data": "DIRECCION" },
        { "data": "TELEF" },
        { "data": "CELULAR" }
    ],
    "order": [[0, "DESC"]],
    dom: 'Bfrtip',
    buttons: [
        {
            extend: 'pdf',
            text: '<i class="fa fa-file-pdf"></i>&nbsp;&nbsp;Descargar PDF'
        },
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

/* Init DataTables */
//var tabla_clientes = $('#table-clientes').dataTable();

$("#FRM_INSERT_CLIENTE").submit(function (e) {
    e.preventDefault();


    var dni = $('input[name="cliente_ruc"]').val(); // Suponiendo que el campo de DNI es "cliente_ruc"

    // Validar DNI
    if (!validarDNI(dni)) {
        $.Notification.notify("error", "bottom-right", "DNI inválido", "El DNI ingresado no cumple con el formato válido.");
        return false; // Detener el envío del formulario si el DNI es inválido
    }

    // Validar teléfono fijo (8 dígitos numéricos)
    var telefono = $('input[name="cliente_telfij"]').val();
    if (!/^[0-9]{8}$/.test(telefono)) {
        $.Notification.notify("error", "bottom-right", "Teléfono inválido", "El teléfono debe tener 8 dígitos numéricos.");
        return false;
    }

    // Validar celular (8 a 9 dígitos numéricos)
    var celular = $('input[name="cliente_telcel"]').val();
    if (!/^[0-9]{8}$/.test(celular)) {
        $.Notification.notify("error", "bottom-right", "Celular inválido", "El celular debe tener 8 dígitos numéricos.");
        return false;
    }




    //
    var form = $(this);
    var idform = form.attr("id");
    var url = form.attr('action');
    var formElement = document.getElementById(idform);
    var formData_rec = new FormData(formElement);
    var id_cliente = $('input[name="cliente_id"]').val();
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
                $.Notification.notify("error", "bottom-right", "Error de guardado", "No se pudo guardar datos del cliente");
                Swal.close();
            } else if (data == "EXISTE") {
                $.Notification.notify("error", "bottom-right", "Error de guardado", "Cliente ya existe en la base de datos");
                Swal.close();
            } else if (data == "OK_INSERT") {
                $.Notification.notify("success", "bottom-right", "Cliente guardado", "Datos almacenados");
                Swal.close();
                $('#table-clientes').DataTable().ajax.reload();

            } else if (data == "OK_UPDATE") {
                if (id_cliente != "" && id_cliente != null) {
                    $('input[name="cliente_id"]').val("");
                    $("#btn-save-client font").html("Guardar cliente");
                    $("#col-btn-save-client").attr("class", "col-md-12");
                    $("#col-btn-delete-client").hide();
                    form.find("input, textarea").val("");
                }

                $.Notification.notify("success", "bottom-right", "Cliente actualizado", "Datos actualizados");
                Swal.close();

                $('#table-clientes').DataTable().ajax.reload();
            }
        }
    });
});

$.post("../../modules/ubigeo/consultar-ubigeo.php", { MODE_UBIGEO: "DEPARTMENTS" }, function (data) {
    $('select[name="cliente_departamento"]').select2({
        data: JSON.parse(data)
    })
});

$('select[name="cliente_departamento"]').on("change", function (e) {
    element = $(this);
    ID_DEPART = element.val();
    $.post("../../modules/ubigeo/consultar-ubigeo.php", { MODE_UBIGEO: "PROVINCES", ID_DEPART: ID_DEPART }, function (data) {
        $('select[name="cliente_provincia"]').empty();
        $('select[name="cliente_provincia"]').select2({
            data: JSON.parse(data)
        })
    });
})

$('select[name="cliente_provincia"]').on("change", function (e) {
    element = $(this);
    ID_PROV = element.val();
    $.post("../../modules/ubigeo/consultar-ubigeo.php", { MODE_UBIGEO: "DISTRICTS", ID_PROV: ID_PROV }, function (data) {
        $('select[name="cliente_distrito"]').empty();
        $('select[name="cliente_distrito"]').select2({
            data: JSON.parse(data)
        })
    });
})

tabla_clientes.on('click', 'tr', function () {
    var data = tabla_clientes.fnGetData(this);
    if (data == null) return;

    var id_row = data["CODIGO"];
    Swal.fire({
        html: '<h4>Cargando información del cliente</h4>',
        allowOutsideClick: false,
        onBeforeOpen: () => {
            Swal.showLoading();
        }
    });
    $.post("../../modules/clientes/consultar-cliente.php", { FILTER: id_row }, function (data) {
        var data_json = JSON.parse(data);
        $('input[name="cliente_codigo"]').focus();
        $('#btn-delete-client').attr("js-id", data_json[0]["CODIGO"]);
        $('input[name="cliente_id"]').val(data_json[0]["CODIGO"]);
        $('input[name="cliente_codigo"]').val("CLI-" + data_json[0]["CODIGO"]);
        $('input[name="cliente_razsoc"]').val(data_json[0]["RAZ_SOC"]);
        $('input[name="cliente_telfij"]').val(data_json[0]["TELEF"]);
        $('input[name="cliente_ruc"]').val(data_json[0]["RUC"]);
        $('input[name="cliente_telcel"]').val(data_json[0]["CELULAR"]);
        $('input[name="cliente_nomcom"]').val(data_json[0]["NOM_COM"]);
        $('input[name="cliente_fecreg"]').val(data_json[0]["FEC_REG"]);
        $('input[name="cliente_correo"]').val(data_json[0]["EMAIL"]);
        $('input[name="cliente_direccion"]').val(data_json[0]["DIRECC"]);
        $('input[name="cliente_nomcont_1"]').val(data_json[0]["NOMCON_1"]);
        $('input[name="cliente_celcont_1"]').val(data_json[0]["CELCON_1"]);
        $('input[name="cliente_nomcont_2"]').val(data_json[0]["NOMCON_2"]);
        $('input[name="cliente_celcont_2"]').val(data_json[0]["CELCON_2"]);
        $('input[name="cliente_pagocomision"]').val(data_json[0]["PAGCOM"]);
        $("#btn-save-client font").html("Actualizar cliente");
        $("#col-btn-save-client").attr("class", "col-md-6");
        $("#col-btn-delete-client").show("fast");

        $.post("../../modules/ubigeo/consultar-ubigeo.php", { MODE_UBIGEO: "DEPARTMENTS" }, function (data) {
            $('select[name="cliente_departamento"]').select2({
                data: JSON.parse(data)
            })
            $('select[name="cliente_departamento"]').val(data_json[0]["DEPARTAMENTO"]);
            $('select[name="cliente_departamento"]').trigger('change');
        }).then(function () {
            $.post("../../modules/ubigeo/consultar-ubigeo.php", { MODE_UBIGEO: "PROVINCES", ID_DEPART: data_json[0]["DEPARTAMENTO"] }, function (data) {
                $('select[name="cliente_provincia"]').empty();
                $('select[name="cliente_provincia"]').select2({
                    data: JSON.parse(data)
                });
                $('select[name="cliente_provincia"]').val(data_json[0]["PROVINCIA"]);
                $('select[name="cliente_provincia"]').trigger('change');
            }).then(function () {
                $.post("../../modules/ubigeo/consultar-ubigeo.php", { MODE_UBIGEO: "DISTRICTS", ID_PROV: data_json[0]["PROVINCIA"] }, function (data) {
                    $('select[name="cliente_distrito"]').empty();
                    $('select[name="cliente_distrito"]').select2({
                        data: JSON.parse(data)
                    });
                    $('select[name="cliente_distrito"]').val(data_json[0]["DISTRITO"]);
                    $('select[name="cliente_distrito"]').trigger('change');
                });
            });
        });
    }).done(function () {
        $(window).scrollTop(0);
    });
    Swal.close();
});

$("#btn-delete-client").click(function () {
    element = $(this);
    id_val = element.attr("js-id");
    if (id_val != "" && id_val != null) {
        Swal.fire({
            title: 'Se eliminará este cliente',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                $.post("../../modules/clientes/eliminar-cliente.php", { cliente_id: id_val }, function (data) {
                    if (data == true) {
                        $("#FRM_INSERT_CLIENTE").find("input, textarea").val("");
                        $('#table-clientes').DataTable().ajax.reload();
                        $('input[name="cliente_id"]').val("");
                        $("#btn-save-client font").html("Guardar cliente");
                        $("#col-btn-save-client").attr("class", "col-md-12");
                        $("#col-btn-delete-client").hide();

                        $.Notification.notify("success", "bottom-right", "Cliente eliminado", "Información borrada correctamente");
                    }
                });
            }
        })
    }
})