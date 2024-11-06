let grados = 0
input.onButtonPressed(Button.A, function () {
    grados = input.compassHeading()
    if (grados < 45) {
        basic.showString("N")
    } else if (grados < 135) {
        basic.showString("E")
    } else if (grados < 225) {
        basic.showString("S")
    } else if (grados < 315) {
        basic.showString("O")
    }
})
