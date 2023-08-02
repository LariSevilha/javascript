let codigo = 123;
let stats = "in_transit";

switch (stats) {
  case "shipped":
    console.log(`O produto com o código ${codigo} foi enviado`);
    break;
  case "in_transit":
    console.log(`O produto com o código ${codigo} está em transito`);
    break;
  case "out_for_delivery":
    console.log(`O produto com o código ${codigo} está em caminha para a entrega`);
    break;
  case "delivered":
    console.log(`O produto com o código ${codigo} foi entregue`);
    break;
  case "cancelled":
    console.log(`O produto com o código ${codigo} foi cancelado`);
    break;
  default:
   console.log("Status inválido.");
   
}
