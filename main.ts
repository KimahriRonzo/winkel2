function schreibeZahl () {
    let Zahl = 0
    if (Zahl >= 0 && Zahl < 100) {
        if (Zahl > 9) {
            kitronik_VIEW128x64.drawnum((Zahl - Zahl % 10) / 10, 0)
        }
        kitronik_VIEW128x64.drawnum(Zahl % 10, 1)
    }
}
let Robert = kitronik_VIEW128x64.matrix16x16(`
    # # # # # # # # # # # . # # # #
    # . . . . . . . . . . . . . . .
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
basic.forever(function () {
    kitronik_VIEW128x64.writeImageOLED(Robert, 95, 47)
    kitronik_VIEW128x64.writeImageOLED(Havemann, 112, 47)
    schreibeZahl()
    kitronik_VIEW128x64.refresh()
    kitronik_VIEW128x64.clearbuffer()
})
