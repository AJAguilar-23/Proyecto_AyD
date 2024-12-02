$(document).ready(function(){
  $("#m_reportes").attr("class","nav-link active");
  $("#m_reportes").parent().attr("class","nav-item has-treeview menu-open");
  $("#m_rpt_clientes").attr("class","nav-link active");
  $(document).prop('title', 'Reportes de Clientes - DuoLab Group');
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

// boton1
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

// boton2
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
/*
$("#btn-product-list").click(function (e) {
    e.preventDefault();
    window.location.assign("../../views/productos/listado-producto");
});
*/