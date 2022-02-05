function schreibeZahl () {
    if (Zahl >= 0 && Zahl < 100) {
        if (Zahl > 9) {
            kitronik_VIEW128x64.drawnum((Zahl - Zahl % 10) / 10, 0)
        }
        kitronik_VIEW128x64.drawnum(Zahl % 10, 1)
        kitronik_VIEW128x64.writeImageOLED(Grad, 66, 0)
    } else {
        kitronik_VIEW128x64.writeImageDouble(ungültig, 15, 8)
    }
}
let Zahl = 0
let ungültig: Image = null
let Grad: Image = null
let Robert = kitronik_VIEW128x64.matrix16x16(`
    # # # # # # # # # # # # # # # #
    # . . . . . . . . . . . . . . #
    # . . . . . . . . . . . . . . #
    # . . . # # # # # # . . . . . #
    # . . . # # # # # # # . . . . #
    # . . . # # . . . # # . . . . #
    # . . . # # . . . . # . . . . #
    # . . . # # . . . # # . . . . #
    # . . . # # # # # # . . . . . #
    # . . . # # # # # . . . . . . #
    # . . . # # . . # # . . . . . #
    # . . . # # . . . # # . . . . #
    # . . . # # . . . . # # . . . #
    # . . . . . . . . . . . . . . #
    # . . . . . . . . . . . . . . #
    # # # # # # # # # # # # # # # #
    `)
let Havemann = kitronik_VIEW128x64.matrix16x16(`
    # # # # # # # # # # # # # # # #
    # # # # # # # # # # # # # # # #
    # # # # # # # # # # # # # # # #
    # # # # . . # # # # . . # # # #
    # # # # . . # # # # . . # # # #
    # # # # . . # # # # . . # # # #
    # # # # . . # # # # . . # # # #
    # # # # . . . . . . . . # # # #
    # # # # . . . . . . . . # # # #
    # # # # . . # # # # . . # # # #
    # # # # . . # # # # . . # # # #
    # # # # . . # # # # . . # # # #
    # # # # . . # # # # . . # # # #
    # # # # # # # # # # # # # # # #
    # # # # # # # # # # # # # # # #
    # # # # # # # # # # # # # # # #
    `)
Grad = kitronik_VIEW128x64.matrix8x8(`
    . . # # # # . .
    . # # . . # # .
    # # . . . . # #
    # . . . . . . #
    # . . . . . . #
    # # . . . . # #
    . # # . . # # .
    . . # # # # . .
    `)
ungültig = kitronik_VIEW128x64.matrix16x16(`
    . . . . . # # # # # # . . . . .
    . . . # # # # # # # # # # . . .
    . . # # . . . . . . . . # # . .
    . # # . . . . . . . . . . # # .
    . # . . . . . . . . . . . . # .
    # # . . . . . . . . . . . . # #
    # # . . . . . . . . . . . . # #
    # # . . # # # # # # # # . . # #
    # # . . # # # # # # # # . . # #
    # # . . . . . . . . . . . . # #
    # # . . . . . . . . . . . . # #
    . # . . . . . . . . . . . . # .
    . # # . . . . . . . . . . # # .
    . . # # . . . . . . . . # # . .
    . . . # # # # # # # # # # . . .
    . . . . . # # # # # # . . . . .
    `)
basic.forever(function () {
    kitronik_VIEW128x64.writeImageOLED(Robert, 95, 47)
    kitronik_VIEW128x64.writeImageOLED(Havemann, 112, 47)
    Zahl = input.rotation(Rotation.Roll)
    schreibeZahl()
    kitronik_VIEW128x64.refresh()
    kitronik_VIEW128x64.clearbuffer()
})
