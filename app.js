// esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// Función para convertir Dolares a Yenes
const fromDollarToYen = (argDollarValue) => {
    let yenValue = 0;

    if ((argDollarValue === null) || (argDollarValue === undefined) ||
        (argDollarValue < 0)) {
        argDollarValue = 0;
    }

    yenValue =  Math.round(oneEuroIs["JPY"] * argDollarValue);
    
    return yenValue;
}

// Función para convertir Euros a Dolares
const fromEuroToDollar = (argEuroValue) => {
    let dollarValue = 0;

    if ((argEuroValue === null) || (argEuroValue === undefined) ||
        (argEuroValue < 0)) {
        argEuroValue = 0;
    }

    dollarValue =  Math.round(oneEuroIs["USD"] * argEuroValue);
    
    return dollarValue;
}

// Función para convertir Yenes a British Pound
const fromYanToPound = (argYenValue) => {
    let poundValue = 0;

    if ((argYenValue === null) || (argYenValue === undefined) ||
        (argYenValue < 0)) {
        argYenValue = 0;
    }

    poundValue =  Math.round(oneEuroIs["GBP"] * argYenValue);
    
    return poundValue;
}

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYanToPound };