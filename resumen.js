const precioTicket=200;

function resumir(){
    var cantidadTicket=document.getElementById('imputCantidad').value;
    var descuento=document.getElementById('imputCategoria').value;
    var precio=cantidadTicket * (precioTicket - ((precioTicket * descuento)/100));
    document.getElementById('compraTotal').value='Total a pagar:$'+precio;


}