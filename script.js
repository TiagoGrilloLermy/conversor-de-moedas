const buttom = document.querySelector("#convert-button");

function convertValues() {
    const input = document.querySelector("#input-value").value;
    const dollarToday = 5.2
    const convertedValues = input / dollarToday

    
  console.log(convertedValues)
}

buttom.addEventListener("click", convertValues)



