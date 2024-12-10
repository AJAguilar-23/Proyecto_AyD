$("#col-btn-anular-cotizprod").hide();
$("#btn-save-cotizprod").prop("disabled", true);
$("#btn-add-prodtocotiz").prop("disabled", true);
$("#btn-select-cotizacion").prop("disabled", true);
$('input[name="cotizacion_prodcant"]').prop("disabled", true);
$('#div_diaspago').hide();
$('input[name="cotizacion_formpago"]').prop("required",false);

$(document).ready(function(){
  $("#m_registro_cotizacion").attr("class","nav-link active");
  $("#m_cotizacion").attr("class","nav-link active");
  $("#m_cotizacion").parent().attr("class","nav-item has-treeview menu-open");
  $(document).prop('title', 'Registro de Cotización - Casa Comercial Murillo');


  $('input[name="cotizacion_cliruc"]').on('input', function () {
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



$('select[name="cotizacion_formpagotext"]').on("change", function() {
  valtipo = $(this).val();
  cotiztipopago = $('input[name="cotizacion_formpago"]');
  div_tipopago = $('#div_diaspago');
  if(valtipo != ""){    
    if(valtipo == "Otro"){
      cotiztipopago.val("");
      cotiztipopago.prop("required",true);
      div_tipopago.show();
    } else {
      cotiztipopago.val(valtipo);
      cotiztipopago.prop("required",false);
      div_tipopago.hide();
    }
  }
});

$('input[name="cotizacion_valcliente"]').autocomplete({
  source: function(request, response) {
    $.getJSON("../../modules/clientes/obtener-clientes.php", { cotiz_nomcliente: $('input[name="cotizacion_valcliente"]').val() }, response);
  },
  select: function (event, ui) {
    $(this).val(ui.item.label);
    $('input[name="cotizacion_cliruc"]').val("");
    $('input[name="cotizacion_clidirecc"]').val("");
    $('input[name="cotizacion_clirefer"]').val("");
    if (ui.item.id != "" && ui.item.id != null) {
      $.post(
        "../../modules/clientes/consultar-cliente.php",
        { FILTER: ui.item.id },
        function(data) {
          var mydata = JSON.parse(data);
          $('input[name="cotizacion_cliente"]').val(mydata[0]["CODIGO"]);
          $('input[name="cotizacion_cliruc"]').val(mydata[0]["RUC"]);
          $('input[name="cotizacion_clidirecc"]').val(mydata[0]["DIRECC"]);
          //$('input[name="cotizacion_clirefer"]').val("No registrada");
        }
      );
    }
  }
});

$.post("../../modules/usuarios/listar-usuarios-xtipo.php", function(data) {
  mydata = JSON.parse(data);
  data_users = mydata[0];
  user_id = mydata[1];
  user_job = mydata[2];

  $('select[name="cotizacion_usuario"]').empty();
  $('select[name="cotizacion_usuario"]').select2({
    data: data_users
  });

  $('select[name="cotizacion_usuario"]').val(user_id);
  $('select[name="cotizacion_usuario"]').trigger("change");
  $('input[name="cotizacion_usuarioid"]').val(user_id);
  
  if(user_job != "Secretaria" && user_job != "Secretario"){
    $('select[name="cotizacion_usuario"]').prop("disabled",true);
  }

});

$('select[name="cotizacion_usuario"]').on("change", function(){
  $('input[name="cotizacion_usuarioid"]').val($(this).val());
});

$.post("../../modules/cotizaciones/listar-cotizaciones.php", function(data) {
  $('select[name="cotizacion_listado"]').empty();
  $('select[name="cotizacion_listado"]').select2({
    data: JSON.parse(data)
  });
});

$.post(
  "../../modules/productos/listar-productos-xprov.php",
  { ESTADO: 1 },
  function(data) {
    $('select[name="cotizacion_producto"]').empty();
    $('select[name="cotizacion_producto"]').select2({
      data: JSON.parse(data)
    });
  }
);

$('select[name="cotizacion_producto"]').on("change", function() {
  DATA_ID = $(this).val();
  $('input[name="cotizacion_prodcant"]').val(0);
  $('input[name="cotizacion_nameprod"]').val("");
  $('input[name="cotizacion_proddesc"]').val("");
  $('input[name="cotizacion_prodprecio"]').val("");
  $('input[name="cotizacion_stockprod"]').val("");
  if (DATA_ID != "" && DATA_ID != null) {
    $('input[name="cotizacion_prodcant"]').prop("disabled", false);
    $.post(
      "../../modules/productos/consultar-productos.php",
      { FILTER: DATA_ID, ESTADO: "1" },
      function(data) {
        var mydata = JSON.parse(data);
        stock_producto = parseInt(mydata[0]["CANTIDAD"]);
        $('input[name="cotizacion_nameprod"]').val(mydata[0]["NOMBRE"]);
        $('input[name="cotizacion_proddesc"]').val(mydata[0]["DESCRIPTION"]);
        $('input[name="cotizacion_prodprecio"]').val(mydata[0]["PRECIO"]);
        $('input[name="cotizacion_stockprod"]').val(mydata[0]["CANTIDAD"]);
        if (stock_producto <= 0) {
          $.Notification.notify(
            "error",
            "bottom-right",
            "Stock agotado",
            "Producto seleccionado no cuenta con existencias"
          );
          $("#btn-add-prodtocotiz").prop("disabled", true);
        }
      }
    );
  } else {
    $('input[name="cotizacion_prodcant"]').prop("disabled", true);
  }
});

$('input[name="cotizacion_prodcant"]').on("change", function() {
  cant_prod = parseInt($(this).val());
  stock_prod = parseInt($('input[name="cotizacion_stockprod"]').val());
  select_prod = $('select[name="cotizacion_producto"]').val();

  if (cant_prod <= stock_prod) {
    tbl_data = tbl_prodcotiz
      .rows()
      .data()
      .toArray();

    var cantidad_final = 0;
    cantidad_final += cant_prod;

    if (tbl_data.length > 0) {
      for (i = 0; i < tbl_data.length; i++) {
        id_prod = tbl_data[i][0];
        cant_agreg = parseInt(tbl_data[i][4]);
        if (select_prod == id_prod) {
          cantidad_final += cant_agreg;
        }
      }
      //console.log(cantidad_final);
      if (cantidad_final > stock_prod) {
        $("#btn-add-prodtocotiz").prop("disabled", true);
        $.Notification.notify(
          "error",
          "bottom-right",
          "Stock insuficiente",
          "Producto no cuenta con stock suficiente"
        );
      } else if (cantidad_final <= stock_prod) {
        $("#btn-add-prodtocotiz").prop("disabled", false);
      }
    } else {
      $("#btn-add-prodtocotiz").prop("disabled", false);
    }
  } else if (cant_prod > stock_prod) {
    $("#btn-add-prodtocotiz").prop("disabled", true);
    $.Notification.notify(
      "error",
      "bottom-right",
      "Stock insuficiente",
      "Producto no cuenta con stock suficiente"
    );
  }
});

var tbl_prodcotiz = $("#table-productscotiz").DataTable({
  "language": {"url": "../../plugins/datatables/Spanish.json"}
});

var total_temporal = 0;
tbl_prodcotiz.columns([0]).visible(false);

var tbl_data = "";

$("#btn-add-prodtocotiz").click(function() {
  idprod = $('select[name="cotizacion_producto"]').val();
  producto = $('input[name="cotizacion_nameprod"]').val();
  descripcion = $('input[name="cotizacion_proddesc"]').val();
  precio = parseFloat($('input[name="cotizacion_prodprecio"]').val());
  cantidad = parseInt($('input[name="cotizacion_prodcant"]').val());
  importe = precio * cantidad;
  var importe_actual = importe;

  if (idprod != "" && cantidad != "" && cantidad > 0) {
    $("#btn-add-prodtocotiz").prop("disabled", true);
    tbl_prodcotiz
      .rows(function(idx, data, node) {
        old_importe = data[5];
        old_cantidad = parseInt(data[4]);
        if (data[1] === producto) {
          importe += old_importe;
          cantidad += old_cantidad;
        }
        return data[1] === producto;
      })
      .remove()
      .draw();

    tbl_prodcotiz.rows
      .add([
        {
          0: idprod,
          1: producto,
          2: descripcion,
          3: precio.toFixed(2),
          4: cantidad,
          5: importe.toFixed(2)
        }
      ])
      .draw();

    tbl_data = tbl_prodcotiz
      .rows()
      .data()
      .toArray();

    opergrab =
      $('input[name="cotizacion_opergrab"]').val() != ""
        ? $('input[name="cotizacion_opergrab"]').val()
        : 0;
    importe_totactual = parseFloat(opergrab);
    importe_totactual += importe_actual;
    new_igv = importe_totactual * 0.18;
    new_total = importe_totactual + new_igv;

    total_temporal = new_total;

    $('input[name="cotizacion_opergrab"]').val(importe_totactual.toFixed(2));
    $('input[name="cotizacion_igv"]').val(new_igv.toFixed(2));
    $('input[name="cotizacion_total"]').val(new_total.toFixed(2));

    $('input[name="cotizacion_prodcant"]').val(0);
    $('input[name="cotizacion_prodprecio"]').val(0.00);

    $.Notification.notify(
      "success",
      "bottom-right",
      "Producto añadido",
      "El producto ha sido agregado a la cotización correctamente"
    );

    if (tbl_data.length > 0) {
      $("#btn-save-cotizprod").prop("disabled", false);
      porc_desc = parseFloat($('input[name="cotizacion_porcdesc"]').val()) / 100;
      val_desc = new_total * porc_desc;
      $('input[name="cotizacion_cantdesc"]').val(val_desc.toFixed(3));
    } else {
      $('input[name="cotizacion_cantdesc"]').val(0);
      $('input[name="cotizacion_porcdesc"]').val(0);
      $("#btn-save-cotizprod").prop("disabled", true);
      total_temporal = 0;
    }
  } else {
    $('select[name="cotizacion_producto"]').focus();
    $.Notification.notify(
      "error",
      "bottom-right",
      "Error al añadir",
      "Seleccione un producto de la lista"
    );
  }
});

$('select[name="cotizacion_listado"]').on("change", function() {
  val_lstcotiz = $(this).val();
  if (val_lstcotiz != "" && val_lstcotiz != null) {
    $("#btn-select-cotizacion").prop("disabled", false);
  } else {
    $("#btn-select-cotizacion").prop("disabled", true);
  }
});

$("#btn-select-cotizacion").click(function() {
  DATA_ID = $('select[name="cotizacion_listado"]').val();
  if (DATA_ID != "" && DATA_ID != null) {
    Swal.fire({
      html: "<h4>Cargando datos de cotización</h4>",
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    });
    $.post(
      "../../modules/cotizaciones/consultar-cotizacion.php",
      { FILTER: DATA_ID, ESTADO: "ALL" },
      function(data) {
        var data_json = JSON.parse(data);

        est_cotiz = data_json[0]["ESTADO"];

        $('input[name="cotizacion_valcliente"]').focus();

        $("#btn-anular-cotizprod").attr("js-id", data_json[0]["CODIGOID"]);
        $('input[name="id_cotizacion"]').val(data_json[0]["CODIGOID"]);
        $('input[name="cotizacion_fecha"]').val(data_json[0]["FECREG"]);
        $('input[name="cotizacion_nro"]').val(data_json[0]["CODIGO"]);

        $('select[name="cotizacion_estado"]').val(data_json[0]["ESTADO"]);

        $('select[name="cotizacion_usuario"]').val(data_json[0]["USER_ID"]);
        $('select[name="cotizacion_usuario"]').trigger("change");
        $('input[name="cotizacion_usuarioid"]').val(data_json[0]["USER_ID"]);

        $('input[name="cotizacion_cliente"]').val(data_json[0]["CLIENTID"]);
        $('input[name="cotizacion_valcliente"]').val(data_json[0]["CLIENTNAME"]);
        
        $('input[name="cotizacion_cliruc"]').val(data_json[0]["CLIENTRUC"]);
        $('input[name="cotizacion_clidirecc"]').val(data_json[0]["CLIENTADDR"]);
        $('input[name="cotizacion_clirefer"]').val(data_json[0]["CLIENTREFER"]);

        if(est_cotiz == 2){
          $("#btn-anular-cotizprod").prop("disabled",true);
        } else {
          $("#btn-anular-cotizprod").prop("disabled",false);
        }

        $('select[name="cotizacion_formpagotext"]').val(data_json[0]["PAY_DAYS"]);
        $('select[name="cotizacion_formpagotext"]').trigger("change");

        if ($('select[name="cotizacion_formpagotext"]').val() == null) {
          $('select[name="cotizacion_formpagotext"]').val("Otro");
          $('select[name="cotizacion_formpagotext"]').trigger("change");
          $('#div_diaspago').show();
          $('input[name="cotizacion_formpago"]').prop("required",true);
          $('input[name="cotizacion_formpago"]').val(data_json[0]["PAY_DAYS"] );
        }

        $('input[name="cotizacion_fecentrega"]').val(data_json[0]["DELIV_DATE"]);

        $('select[name="cotizacion_tipmon"]').val(data_json[0]["CURRENCY"]);
        $('select[name="cotizacion_tipmon"]').trigger("change");

        $('input[name="cotizacion_porcdesc"]').val(data_json[0]["DESC_RATE"]);
        $('input[name="cotizacion_cantdesc"]').val(data_json[0]["DESC_VAL"]);
        $('input[name="cotizacion_opergrab"]').val(parseFloat(data_json[0]["TOTAL_SUB"]).toFixed(2));
        $('input[name="cotizacion_igv"]').val(parseFloat(data_json[0]["TOTAL_TAX"]).toFixed(2));
        $('input[name="cotizacion_total"]').val(parseFloat(data_json[0]["TOTAL_NET"]).toFixed(2));

        total_temporal = data_json[0]["TOTAL_NET"];
        codigo_idcotiz = data_json[0]["CODIGOID"];

        $.post("../../modules/cotizaciones/consultar-detalle-cotizacion.php",
          { IDCOTIZ: codigo_idcotiz }, function(data) {
            $('select[name="cotizacion_producto"]').val("");
            $('select[name="cotizacion_producto"]').trigger("change");
            $('input[name="cotizacion_proddesc"]').val("");
            $('input[name="cotizacion_prodprecio"]').val("");
            $('input[name="cotizacion_prodcant"]').val(0);
            $("#btn-add-prodtocotiz").prop("disabled", true);
            $("#btn-save-cotizprod").prop("disabled", false);

            tbl_prodcotiz.clear().draw();
            detacotiz_json = JSON.parse(data);
            for (i = 0; i < detacotiz_json.length; i++) {
              var precio = parseFloat(detacotiz_json[i]["PRECIOUNIT"]).toFixed(2);
              var importe = parseFloat(detacotiz_json[i]["IMPORTE"]).toFixed(2);

              tbl_prodcotiz.rows
                .add([
                  {
                    0: detacotiz_json[i]["IDPROD"],
                    1: detacotiz_json[i]["NOMBRE"],
                    2: detacotiz_json[i]["DESCRIP"],
                    3: precio,
                    4: detacotiz_json[i]["CANTIDAD"],
                    5: importe
                  }
                ])
                .draw();
            }
          }
        );

        $("#col-btn-save-cotizprod").hide();
        $("#col-btn-anular-cotizprod").show("fast");
        $("#col-btn-anular-cotizprod").attr("class", "col-md-12");
      }
    ).then(function() {
      Swal.close();
    });
  }
});

$("#table-productscotiz").on("dblclick", "tr", function() {
  var data_row = tbl_prodcotiz.row(this).data();
  var row_id = data_row[0];
  var importe_prod = data_row[5];

  opergrab =
    $('input[name="cotizacion_opergrab"]').val() != ""
      ? $('input[name="cotizacion_opergrab"]').val()
      : 0;
  importe_totactual = parseFloat(opergrab);
  importe_totactual -= importe_prod;
  new_igv = importe_totactual * 0.18;
  new_total = importe_totactual + new_igv;

  total_temporal = new_total;

  $('input[name="cotizacion_opergrab"]').val(importe_totactual.toFixed(2));
  $('input[name="cotizacion_igv"]').val(new_igv.toFixed(2));
  $('input[name="cotizacion_total"]').val(new_total.toFixed(2));

  tbl_prodcotiz
    .rows(tbl_prodcotiz.row(this))
    .remove()
    .draw();

  tbl_data = tbl_prodcotiz
    .rows()
    .data()
    .toArray();

  $('input[name="cotizacion_prodcant"]').val(0);
  $("#btn-add-prodtocotiz").prop("disabled", true);

  $.Notification.notify(
    "success",
    "bottom-right",
    "Producto eliminado",
    "El producto ha sido eliminado correctamente"
  );

  if (tbl_data.length > 0) {
    $("#btn-save-cotizprod").prop("disabled", false);
    porc_desc = parseFloat($('input[name="cotizacion_porcdesc"]').val()) / 100;
    val_desc = new_total * porc_desc;
    $('input[name="cotizacion_cantdesc"]').val(val_desc.toFixed(3));
  } else {
    $("#btn-save-cotizprod").prop("disabled", true);
    $('input[name="cotizacion_cantdesc"]').val(0);
    $('input[name="cotizacion_porcdesc"]').val(0);
    total_temporal = 0;
  }
});

$('input[name="cotizacion_porcdesc"]').on("change", function() {
  num_desc = parseFloat($(this).val());
  if (isNaN(num_desc)) num_desc=0;

  porc_desc = num_desc / 100;
  total_actual = parseFloat($('input[name="cotizacion_total"]').val());
  val_desc = total_actual * porc_desc;
  $('input[name="cotizacion_cantdesc"]').val(val_desc.toFixed(3));

  total_desc = total_temporal - val_desc;
  $('input[name="cotizacion_total"]').val(total_desc.toFixed(2));
});

$("#FRM_INSERT_COTIZACION").submit(function(e) {
  e.preventDefault();
  var form = $(this);
  var idform = form.attr("id");
  var url = form.attr("action");
  tbl_data = tbl_prodcotiz.rows().data().toArray();
  var formElement = document.getElementById(idform);
  var formData_rec = new FormData(formElement);
  formData_rec.append("cotiz_prods", JSON.stringify(tbl_data));
  var id_cotizacion = $('input[name="id_cotizacion"]').val();


  var dni = $('input[name="cotizacion_cliruc"]').val(); // Suponiendo que el campo de DNI es "cliente_ruc"

    // Validar DNI
    if (!validarDNI(dni)) {
        $.Notification.notify("error", "bottom-right",
           "DNI inválido", "El DNI ingresado no cumple con el formato válido.");
        return false; // Detener el envío del formulario si el DNI es inválido
    }
  /*

  var dni = $('input[name="cotizacion_cliruc"]').val();
  if (dni.length < 13 || dni.length > 13){
      $.Notification.notify("error", "bottom-right",
       "DNI Incorrecto", "El DNI debe tener exactamente 13 caracteres");
      return;
    }
    if (!/^\d{13}$/.test(dni)) {
      $.Notification.notify("error", "bottom-right",
      "Número de DNI Incorrecto", "El número de DNI debe contener solo numeros.");
      return;
  }
  /*
  var nombre = $('input[name="cotizacion_valcliente"]').val();
      if (nombre !== "" && !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
            $.Notification.notify("error", "bottom-right",
            "Nombre Incorrecto", "El nombre debe contener solo letras."); 
        return;
            }*/


  $.ajax({
    type: "POST",
    url: url,
    data: formData_rec,
    contentType: false,
    cache: false,
    processData: false,
    beforeSend: function() {
      Swal.fire({
        html: "<h4>Guardando cotización</h4>",
        allowOutsideClick: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        }
      });
    },
    success: function(data) {
      //console.log(data);
      if (data == "ERROR") {
        $.Notification.notify(
          "error",
          "bottom-right",
          "Error de guardado",
          "No se pudo guardar la cotización"
        );
        Swal.close();
      } else if (data == "OK_INSERT") {
        $('input[name="cotizacion_valcliente"]').val("");
        $('input[name="cotizacion_fecha"]').focus();
        $.Notification.notify(
          "success",
          "bottom-right",
          "Cotización guardada",
          "Datos almacenados"
        );
        form.find("input, textarea, select").val("");
        $('select[name="cotizacion_producto"]').trigger("change");
        $("#btn-save-cotizprod").prop("disabled", true);
        $("#btn-add-prodtocotiz").prop("disabled", true);
        $('select[name="cotizacion_formpagotext"]').prop("disabled",false);
        $('#div_diaspago').hide();
        $('input[name="cotizacion_formpago"]').prop("required",false);
        tbl_prodcotiz.clear().draw();
        Swal.close();

        $.post("../../modules/cotizaciones/listar-cotizaciones.php", function(
          data
        ) {
          $('select[name="cotizacion_listado"]').empty();
          $('select[name="cotizacion_listado"]').select2({
            data: JSON.parse(data)
          });
        });
      } else if (data == "OK_UPDATE") {
        if (id_cotizacion != "" && id_cotizacion != null) {
          $('input[name="cotizacion_fecha"]').focus();
          $('input[name="cotizacion_valcliente"]').val("");
          $('input[name="id_cotizacion"]').val("");
          $("#btn-save-cotizprod font").html("Guardar cotización");
          $("#col-btn-save-cotizprod").attr("class", "col-md-12");
          $("#col-btn-anular-cotizprod").hide();
          form.find("input, textarea, select").val("");
          $('select[name="cotizacion_producto"]').trigger("change");
          $("#btn-save-cotizprod").prop("disabled", true);
          $("#btn-add-prodtocotiz").prop("disabled", true);
          $('select[name="cotizacion_formpagotext"]').prop("disabled",false);
          $('#div_diaspago').hide();
          $('input[name="cotizacion_formpago"]').prop("required",false);
        }

        $.Notification.notify(
          "success",
          "bottom-right",
          "Cotización actualizada",
          "Datos actualizados"
        );
        tbl_prodcotiz.clear().draw();
        
        $("#btn-save-cotizprod").prop("disabled", true);

        $.post("../../modules/cotizaciones/listar-cotizaciones.php", function(
          data
        ) {
          $('select[name="cotizacion_listado"]').empty();
          $('select[name="cotizacion_listado"]').select2({
            data: JSON.parse(data)
          });
        });

        Swal.close();
      }
    }
  });
});

$("#btn-anular-cotizprod").click(function() {
  element = $(this);
  id_val = element.attr("js-id");
  if (id_val != "" && id_val != null) {
    Swal.fire({
      title: "Se anulará esta cotización",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Anular",
      cancelButtonText: "Cancelar"
    }).then(result => {
      if (result.value) {
        $.post(
          "../../modules/cotizaciones/anular-cotizacion.php",
          { ID_COTIZ: id_val },
          function(data) {
            if (data == true) {
              $('input[name="cotizacion_fecha"]').focus();
              tbl_prodcotiz.clear().draw();
              $("#FRM_INSERT_COTIZACION")
                .find("input, textarea, select")
                .val("");
              $('select[name="cotizacion_producto"]').trigger("change");
              $("#btn-add-prodtocotiz").prop("disabled", false);
              $("#btn-save-cotizprod").prop("disabled", true);
              $.post(
                "../../modules/cotizaciones/listar-cotizaciones.php",
                function(data) {
                  $('select[name="cotizacion_listado"]').empty();
                  $('select[name="cotizacion_listado"]').select2({
                    data: JSON.parse(data)
                  });
                }
              );
              $('input[name="id_cotizacion"]').val("");
              $('input[name="cotizacion_valcliente"]').val("");
              $("#btn-save-cotizprod font").html("Guardar cotización");
              $("#col-btn-save-cotizprod").attr("class", "col-md-12");
              $("#col-btn-anular-cotizprod").hide();

              $('select[name="cotizacion_formpagotext"]').prop("disabled",false);
              $('#div_diaspago').hide();
              $('input[name="cotizacion_formpago"]').prop("required",false);
              $.Notification.notify(
                "success",
                "bottom-right",
                "Operación completada",
                "Cotización anulada correctamente"
              );
            }
          }
        );
      }
    });
  }
});

$("#btn-nuevo").click(function (e) {
    e.preventDefault();
    location.reload();
});

$( document ).ready(function() {
  var cookie_idcotiz = leer_cookie('COOKIE_ID_COTIZ');
  if (cookie_idcotiz != "") {
    setTimeout(function(){
      $('select[name="cotizacion_listado"]').val(cookie_idcotiz);
      $('select[name="cotizacion_listado"]').trigger("change");
      $('#btn-select-cotizacion').trigger("click");
      eliminar_cookie("COOKIE_ID_COTIZ");
    },500);
  }
});