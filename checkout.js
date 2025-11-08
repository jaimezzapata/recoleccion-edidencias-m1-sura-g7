

let subtotal = 0;
let descuento = 0;
let envio = null;
let cuponAplicado = false;
let salir = false;

while (!salir) {
  let opcion = prompt(
    "=== TIENDA WEB ===\n" +
    "1. Agregar producto ($50.000)\n" +
    "2. Aplicar cupón de descuento\n" +
    "3. Calcular costo de envío\n" +
    "4. Calcular total a pagar\n" +
    "5. Salir\n\n" +
    "Seleccione una opción:"
  );

  switch (opcion) {
    case "1":
      subtotal += 50000;
      alert("Producto agregado. Subtotal actual: $" + subtotal.toLocaleString());
      break;

    case "2":
      if (cuponAplicado) {
        alert("Ya aplicaste un cupón de descuento.");
      } else {
        let cupon = prompt("Ingrese el código del cupón (DTO10 o DTO20):");
        if (cupon === "DTO10") {
          descuento = subtotal * 0.1;
          cuponAplicado = true;
          alert("Cupón DTO10 aplicado. Descuento del 10%.");
        } else if (cupon === "DTO20") {
          descuento = subtotal * 0.2;
          cuponAplicado = true;
          alert("Cupón DTO20 aplicado. Descuento del 20%.");
        } else {
          alert("Cupón no válido.");
        }
      }
      break;

    case "3":
      let subtotalConDescuento = subtotal - descuento;
      if (subtotalConDescuento < 100000) {
        envio = 15000;
        alert("El costo de envío es de $15.000.");
      } else {
        envio = 0;
        alert("El envío es gratis.");
      }
      break;

    case "4":
      if (envio === null) {
        alert("Primero debes calcular el costo de envío (opción 3).");
      } else {
        let total = subtotal - descuento + envio;
        let resumen =
          "=== RESUMEN DE COMPRA ===\n" +
          "Subtotal: $" + subtotal.toLocaleString() + "\n" +
          "Descuento: $" + descuento.toLocaleString() + "\n" +
          "Envío: $" + envio.toLocaleString() + "\n" +
          "-----------------------\n" +
          "TOTAL A PAGAR: $" + total.toLocaleString();
        alert(resumen);
      }
      break;

    case "5":
      salir = true;
      alert("Gracias por usar el simulador de checkout.");
      break;

    default:
      alert("Opción no válida. Intenta de nuevo.");
  }
}
