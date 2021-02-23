const { sum, fromDollarToYen, fromEuroToDollar,fromYanToPound } = require('./app.js');

// Pruebas Unitarias para [sum]
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});

// Pruebas Unitarias para [fromDollarToYen]
test('3 Dolares a Yenes es igual a 384', () => {
    let dollarToYen = fromDollarToYen(3);

    expect(dollarToYen).toBe(384);
});

test('-3 Dolares a Yenes es igual a 0', () => {
    let dollarToYen = fromDollarToYen(-3);

    expect(dollarToYen).toBe(0);
});

test('Dolares Indefinidos a Yenes es igual a 0', () => {
    let dollarToYen = fromDollarToYen(undefined);

    expect(dollarToYen).toBe(0);
});

test('Dolares Nulos a Yenes es igual a 0', () => {
    let dollarToYen = fromDollarToYen(null);

    expect(dollarToYen).toBe(0);
});


// Pruebas Unitarias para [fromEuroToDollar]
test('7 Euros a Dolares es igual a 8', () => {
    let euroToDollar = fromEuroToDollar(7);

    expect(euroToDollar).toBe(8);
});

test('-5 Euros a Dolares es igual a 0', () => {
    let euroToDollar = fromEuroToDollar(-5);

    expect(euroToDollar).toBe(0);
});

test('Euros Indefinidos a Dolares es igual a 0', () => {
    let euroToDollar = fromEuroToDollar(undefined);

    expect(euroToDollar).toBe(0);
});

test('Euros Nulos a Dolares es igual a 0', () => {
    let euroToDollar = fromEuroToDollar(null);

    expect(euroToDollar).toBe(0);
});


// Pruebas Unitarias para [fromYanToPound]
test('99 Yenes a British Pound es igual a 79', () => {
    let yenToPound = fromYanToPound(99);

    expect(yenToPound).toBe(79);
});

test('-1 Yen a British Pound es igual a 0', () => {
    let yenToPound = fromYanToPound(-1);

    expect(yenToPound).toBe(0);
});

test('Yenes Indefinidos a British Pound es igual a 0', () => {
    let yenToPound = fromYanToPound(undefined);

    expect(yenToPound).toBe(0);
});

test('Yenes Nulos a British Pound es igual a 0', () => {
    let yenToPound = fromYanToPound(null);

    expect(yenToPound).toBe(0);
});