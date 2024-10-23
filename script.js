
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value //valor que eu vou digitar
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//valor em Real
    const currencyValueConverted = document.querySelector(".currency-value")// Outras moedas

    console.log(currencySelect.value)

    const dolarToday = 5.7
    const euroToday = 6.13
    const libraToday = 7.35
    const bitcoinToday = 379.000

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


}

function ChangeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar Americano"
        currencyImage.src = "./assets/dolar.png"

    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"

        if (currencySelect.value == "libra") {
            currencyName.innerHTML = "Libra"
            currencyImage.src = "./assets/libra.png"
        }

    }

    convertValues()
}

currencySelect.addEventListener("change", ChangeCurrency)
convertButton.addEventListener("click", convertValues)
