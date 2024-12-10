$(document).ready(function(){
  $("#m_reportes").attr("class","nav-link active");
  $("#m_reportes").parent().attr("class","nav-item has-treeview menu-open");
  $("#m_rpt_productos").attr("class","nav-link active");
  $(document).prop('title', 'Otros Reportes - Casa Comercial Murillo');
});
/*
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

$("#btn-rpt-unidades-vendidas-cliente").click(function (e) {
    e.preventDefault();
    var productId=$('select[name="product_list"]').val();
    var dateFrom = $('input[name="date_from"]').val();
    var dateTo = $('input[name="date_to"]').val();
    var url="../../modules/reportes/unidades-vendidas-por-cliente.php?productid=" + productId 
    + "&datefrom=" + dateFrom + "&dateto=" + dateTo;
    window.open(url);
});
*/
// botones  top 20 mas y menos vendidos
$("#btn-rpt-top-mas-vendido").click(function (e) {
    e.preventDefault();
    var url="../../modules/reportes/top-productos.php?mode=1";
    window.open(url,"Top 20 Productos Más Vendidos","");
});

$("#btn-rpt-top-menos-vendido").click(function (e) {
    e.preventDefault();
    var url="../../modules/reportes/top-productos.php?mode=2";
    window.open(url,"Top 20 Productos Menos Vendidos","");
});
/*
$("#btn-product-list").click(function (e) {
    e.preventDefault();
    window.location.assign("../../views/productos/listado-producto");
});
*/

// boton Resumen de Ingresos y gastos

$("#btn-rpt-ingreso-gasto").click(function (e) {
  e.preventDefault();

  //var customerId = $('select[name="customer_list2"]').val();
  var dateFrom = $('input[name="date_from_ingreso_gasto"]').val();
  var dateTo = $('input[name="date_to_ingreso_gasto"]').val();

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
      //************************************************* */
    // Fecha validacion //
    if (dateFrom !="" && dateTo !="") {
      
   
      // Convertir la fecha seleccionada a un formato comparable
      var fechaSeleccionada = new Date(dateFrom);
      var fechaMinima = new Date("2015-01-01");
      
      // Calcular la fecha máxima (que es la actual)
      var fechaMaxima = new Date();
      
      // Validar que la fecha no sea anterior a 2015
      if (fechaSeleccionada < fechaMinima) {
          $.Notification.notify("error", "bottom-right",
              "Fecha de Inicio Incorrecta", "La fecha no puede ser anterior al 2015.");
          return;
      }
      
      // Validar que la fecha no sea mayor a la fecha máxima permitida
      if (fechaSeleccionada > fechaMaxima) {
          $.Notification.notify("error", "bottom-right",
              "Fecha Inicio Incorrecta", "La fecha no puede ser mayor que la fecha actual.");
          return;
      }
      // Fecha validacion //
      
      // Convertir la fecha seleccionada a un formato comparable
      var fechaSeleccionada2 = new Date(dateTo);
          
      // Validar que la fecha no sea anterior a 2015
      if (fechaSeleccionada2 < fechaMinima) {
          $.Notification.notify("error", "bottom-right",
              "Fecha Final Incorrecta", "La fecha no puede ser anterior al 2015.");
          return;
      }
      
      // Validar que la fecha no sea mayor a la fecha máxima permitida
      if (fechaSeleccionada2 > fechaMaxima) {
          $.Notification.notify("error", "bottom-right",
              "Fecha Final Incorrecta", "La fecha no puede ser mayor que la fecha actual.");
          return;
      }
  
      if (fechaSeleccionada > fechaSeleccionada2){
        $.Notification.notify("error", "bottom-right",
            "Fecha Incorrecta", "La fecha de Inicio no puede ser mayor que la fecha Final.");
        return;
    }
  }
        //************************************************* */
  

  var url="../../modules/reportes/ingreso-gasto.php?&datefrom=" + dateFrom + "&dateto=" + dateTo;
  window.open(url);
});


// boton clientes recurrentes
$("#btn-rpt-cliente-r").click(function (e) {
  e.preventDefault();

  //var customerId = $('select[name="customer_list2"]').val();
  var dateFrom = $('input[name="date_from_cliente_r"]').val();
  var dateTo = $('input[name="date_to_cliente_r"]').val();
/*
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
*/
    //************************************************* */
    // Fecha validacion //
    if (dateFrom !="" && dateTo !="") {
      
   
      // Convertir la fecha seleccionada a un formato comparable
      var fechaSeleccionada = new Date(dateFrom);
      var fechaMinima = new Date("2015-01-01");
      
      // Calcular la fecha máxima (que es la actual)
      var fechaMaxima = new Date();
      
      // Validar que la fecha no sea anterior a 2015
      if (fechaSeleccionada < fechaMinima) {
          $.Notification.notify("error", "bottom-right",
              "Fecha de Inicio Incorrecta", "La fecha no puede ser anterior al 2015.");
          return;
      }
      
      // Validar que la fecha no sea mayor a la fecha máxima permitida
      if (fechaSeleccionada > fechaMaxima) {
          $.Notification.notify("error", "bottom-right",
              "Fecha Inicio Incorrecta", "La fecha no puede ser mayor que la fecha actual.");
          return;
      }
      // Fecha validacion //
      
      // Convertir la fecha seleccionada a un formato comparable
      var fechaSeleccionada2 = new Date(dateTo);
          
      // Validar que la fecha no sea anterior a 2015
      if (fechaSeleccionada2 < fechaMinima) {
          $.Notification.notify("error", "bottom-right",
              "Fecha Final Incorrecta", "La fecha no puede ser anterior al 2015.");
          return;
      }
      
      // Validar que la fecha no sea mayor a la fecha máxima permitida
      if (fechaSeleccionada2 > fechaMaxima) {
          $.Notification.notify("error", "bottom-right",
              "Fecha Final Incorrecta", "La fecha no puede ser mayor que la fecha actual.");
          return;
      }
  
      if (fechaSeleccionada > fechaSeleccionada2){
        $.Notification.notify("error", "bottom-right",
            "Fecha Incorrecta", "La fecha de Inicio no puede ser mayor que la fecha Final.");
        return;
    }
  }
        //************************************************* */
  
  var url="../../modules/reportes/cliente-r.php?&datefrom=" + dateFrom + "&dateto=" + dateTo;
  window.open(url);
});

// boton reporte Facturas Anuladas
$("#btn-rpt-fac-anulada").click(function (e) {
  e.preventDefault();

  //var customerId = $('select[name="customer_list2"]').val();
  var dateFrom = $('input[name="date_from_fac_anulada"]').val();
  var dateTo = $('input[name="date_to_fac_anulada"]').val();
/*
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
*/
    //************************************************* */
    // Fecha validacion //
    if (dateFrom !="" && dateTo !="") {
      
   
      // Convertir la fecha seleccionada a un formato comparable
      var fechaSeleccionada = new Date(dateFrom);
      var fechaMinima = new Date("2015-01-01");
      
      // Calcular la fecha máxima (que es la actual)
      var fechaMaxima = new Date();
      
      // Validar que la fecha no sea anterior a 2015
      if (fechaSeleccionada < fechaMinima) {
          $.Notification.notify("error", "bottom-right",
              "Fecha de Inicio Incorrecta", "La fecha no puede ser anterior al 2015.");
          return;
      }
      
      // Validar que la fecha no sea mayor a la fecha máxima permitida
      if (fechaSeleccionada > fechaMaxima) {
          $.Notification.notify("error", "bottom-right",
              "Fecha Inicio Incorrecta", "La fecha no puede ser mayor que la fecha actual.");
          return;
      }
      // Fecha validacion //
      
      // Convertir la fecha seleccionada a un formato comparable
      var fechaSeleccionada2 = new Date(dateTo);
          
      // Validar que la fecha no sea anterior a 2015
      if (fechaSeleccionada2 < fechaMinima) {
          $.Notification.notify("error", "bottom-right",
              "Fecha Final Incorrecta", "La fecha no puede ser anterior al 2015.");
          return;
      }
      
      // Validar que la fecha no sea mayor a la fecha máxima permitida
      if (fechaSeleccionada2 > fechaMaxima) {
          $.Notification.notify("error", "bottom-right",
              "Fecha Final Incorrecta", "La fecha no puede ser mayor que la fecha actual.");
          return;
      }
  
      if (fechaSeleccionada > fechaSeleccionada2){
        $.Notification.notify("error", "bottom-right",
            "Fecha Incorrecta", "La fecha de Inicio no puede ser mayor que la fecha Final.");
        return;
    }
  }
        //************************************************* */
  
  var url="../../modules/reportes/fac-anulada.php?&datefrom=" + dateFrom + "&dateto=" + dateTo;
  window.open(url);
});
