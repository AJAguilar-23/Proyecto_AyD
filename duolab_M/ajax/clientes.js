$(document).ready(function(){
  $("#m_reportes").attr("class","nav-link active");
  $("#m_reportes").parent().attr("class","nav-item has-treeview menu-open");
  $("#m_rpt_clientes").attr("class","nav-link active");
  $(document).prop('title', 'Reportes de Clientes - Casa Comercial Murillo');
});

//lista para el combo1
$.post(
  "../../modules/clientes/listar-clientes-facturacion.php",
  function(data) {
    $('select[name="customer_list"]').empty();
    $('select[name="customer_list"]').select2({
      data: JSON.parse(data)
    });
  }
);

$(document).ready(function() {
  // Lista de estados con una opción inicial
  const estados = [
    { id: "", text: "Seleccionar estado" }, // Opción vacía
    { id: "1", text: "Activo" },
    { id: "0", text: "Inactivo" }
  ];

  // Inicializa el select con Select2 y la lista de estados
  $('select[name="state"]').select2({
    data: estados,

  });
});
//lista para combo de productos combo2
$.post(
  "../../modules/productos/listar-productos-xprov.php",
  { ESTADO: "ALL", REPORT : 1 },
  function(data) {
    $('select[name="product_list"]').empty();
    $('select[name="product_list"]').select2({
      data: JSON.parse(data)
    });
  }
);



// boton ventas por cliente
$("#btn-rpt-ventas-por-cliente").click(function (e) {
    e.preventDefault();

    var customerId = $('select[name="customer_list"]').val();
    var dateFrom = $('input[name="date_from"]').val();
    var dateTo = $('input[name="date_to"]').val();

    if (customerId == ""){
      $.Notification.notify("error", "bottom-right",
       "Cliente no seleccionado", "Seleccione un cliente para generar el reporte");
      return;
    }

    var url="../../modules/reportes/ventas-por-cliente.php?customerid=" + customerId 
    + "&datefrom=" + dateFrom + "&dateto=" + dateTo;
    window.open(url);
});

// boton de inventario completo
$("#btn-rpt-inv-completo").click(function (e) {
  e.preventDefault();

  var state = $('select[name="state"]').val();
  //var dateFrom = $('input[name="date_from"]').val();
  //var dateTo = $('input[name="date_to"]').val();
/*
  if (customerId == ""){
    $.Notification.notify("error", "bottom-right",
     "Cliente no seleccionado", "Seleccione un cliente para generar el reporte");
    return;
  }
*/
  var url="../../modules/reportes/inv-completo.php?state=" + state;
  window.open(url);
});

// boton Ventas diarias
$("#btn-rpt-ventas-por-cliente2").click(function (e) {
  e.preventDefault();

  //var customerId = $('select[name="customer_list2"]').val();
  var dateFrom = $('input[name="date_from2"]').val();
  //var dateTo = $('input[name="date_to2"]').val();

  if (dateFrom == ""){
    $.Notification.notify("error", "bottom-right",
     "Fecha no seleccionado", "Seleccione una fecha para generar el reporte");
    return;
  }

  var url="../../modules/reportes/ventas-por-cliente2.php?&datefrom=" + dateFrom;
  window.open(url);
});

// boton compras por semana
$("#btn-rpt-compras-por-semana").click(function (e) {
  e.preventDefault();

  //var customerId = $('select[name="customer_list2"]').val();
  var dateFrom = $('input[name="date_from_compra"]').val();
  var dateTo = $('input[name="date_to_compra"]').val();

  if (dateFrom == ""){
    $.Notification.notify("error", "bottom-right",
     "Fecha no seleccionado", "Seleccione una fecha de Inicio para generar el reporte");
    return;
  }
  if (dateTo == ""){
    $.Notification.notify("error", "bottom-right",
     "Fecha no seleccionado", "Seleccione una fecha Final para generar el reporte");
    return;
  }

  var url="../../modules/reportes/compra-por-semana.php?&datefrom=" + dateFrom + "&dateto=" + dateTo;
  window.open(url);
});

// boton undidades mas vendidas
$("#btn-rpt-unidades-vendidas-cliente").click(function (e) {
  e.preventDefault();
  var productId=$('select[name="product_list"]').val();
  var dateFrom = $('input[name="date_from_uv"]').val();
  var dateTo = $('input[name="date_to_uv"]').val();
  var url="../../modules/reportes/unidades-vendidas-por-cliente.php?productid=" + productId 
  + "&datefrom=" + dateFrom + "&dateto=" + dateTo;
  window.open(url);
});
/*
$("#btn-product-list").click(function (e) {
  e.preventDefault();
  window.location.assign("../../views/productos/listado-producto");
});



/*
$("#btn-product-list").click(function (e) {
    e.preventDefault();
    window.location.assign("../../views/productos/listado-producto");
});
*/