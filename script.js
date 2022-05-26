let contador = 1;

let texto = ["iPhone 13 Pro Max", "Apple Watch Series  ", "AirPods Pro"];

document.querySelector("#botao").addEventListener("click", () => {
  document.querySelector("#imagem").src = `./assets/img/${contador}.png`;
  document.querySelector(".texto").innerHTML = texto[contador];

  contador++;
  if (contador > 2) {
    contador = 0;
  }
});
