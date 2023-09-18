//cria constante para o botao
const convertButton = document.querySelector(".convert_button");
const currencySelect = document.querySelector(".currency_select");

function convertValues() {
  //pega o valor do input
  const inputCurrencyValue = document.querySelector(".input_currency").value;
  //valor em real
  const currencyValueToConvert = document.querySelector(
    ".currency_value_to_convert"
  );
  //valor convertido em dolar.
  const currencyValueConverted = document.querySelector(".currency_value");

  const dolarToday = 5.2;
  const euroToday = 6.2;
  const libraToday = 6.3;
  const bitcoinToday = 129;  

  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GPB",
    }).format(inputCurrencyValue / libraToday);
  }

  if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / bitcoinToday);
  }

  //colocando os valores embaixo das imagens ja convertido em formato moeda.
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

//trocando o texto e imagem da moeda.
function changeCurrency() {
  const currencyName = document.getElementById("currency_name");
  const currencyImage = document.querySelector(".currency_img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dolar Americano";
    currencyImage.src = "./assets/dolar-usa.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src ="./assets/euro.png";
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra";
    currencyImage.src ="./assets/libra.png";
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImage.src ="./assets/libra.png";
  }
  //chama funcao que converte os valores.
  convertValues()
}


currencySelect.addEventListener("change", changeCurrency);

//ouvinte de evento clique.
convertButton.addEventListener("click", convertValues);
