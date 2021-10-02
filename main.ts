basic.showString("Juan David Rodríguez Cárdenas ")
basic.forever(function () {
    basic.showNumber(input.temperature())
    if (15 > input.temperature()) {
        basic.showString("Encender calefacción")
        basic.clearScreen()
    } else {
        basic.showString("Apagar calefacción ")
        basic.clearScreen()
    }
    if (25 > input.temperature()) {
        basic.showString("Encender aire acondicionado ")
        basic.clearScreen()
    } else {
        basic.showString("Apagar aire acondicionado ")
        basic.clearScreen()
    }
})
