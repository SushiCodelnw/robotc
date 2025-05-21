function Left () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P14,
    255,
    DigitalPin.P13,
    1
    )
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P16,
    40,
    DigitalPin.P15,
    0
    )
}
function HandUp () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P2,
    255,
    DigitalPin.P12,
    1
    )
    basic.pause(700)
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P2,
    0,
    DigitalPin.P12,
    1
    )
}
function TurnLeftFast () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P14,
    255,
    DigitalPin.P13,
    1
    )
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P16,
    255,
    DigitalPin.P15,
    1
    )
    basic.pause(200)
    while (true) {
        Dis1 = pins.digitalReadPin(DigitalPin.P8)
        Dis2 = pins.digitalReadPin(DigitalPin.P1)
        if (Dis1 == 1 && Dis2 == 0) {
            break;
        }
    }
    Stop()
}
function TurnLeftSlow () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P14,
    100,
    DigitalPin.P13,
    1
    )
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P16,
    100,
    DigitalPin.P15,
    1
    )
    basic.pause(200)
    while (true) {
        Dis1 = pins.digitalReadPin(DigitalPin.P8)
        Dis2 = pins.digitalReadPin(DigitalPin.P1)
        if (Dis1 == 1 && Dis2 == 0) {
            break;
        }
    }
    Stop()
}
function Forback () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P14,
    120,
    DigitalPin.P13,
    0
    )
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P16,
    120,
    DigitalPin.P15,
    1
    )
}
input.onButtonPressed(Button.A, function () {
    HandUp()
    Gofront()
    Forword()
    basic.pause(200)
    for (let index = 0; index < 2; index++) {
        Gofront()
        Forword()
        basic.pause(200)
        TurnLeftFast()
        Gofront()
        HandDown()
        TurnBack()
        Gofront()
        Forword()
        basic.pause(300)
        Stop()
        HandUp()
        Forback()
        basic.pause(200)
        TurnLeftSlow()
    }
    HandDown()
    Gofront()
    if (end == 1) {
        TurnLeftFast()
        Right()
        basic.pause(1000)
    } else if (end == 2) {
        Forword()
        basic.pause(100)
        TurnRightFast()
        Forword()
        basic.pause(250)
        Left()
        basic.pause(800)
    }
    Gofront()
})
function Gofront () {
    while (true) {
        Dis1 = pins.digitalReadPin(DigitalPin.P8)
        Dis2 = pins.digitalReadPin(DigitalPin.P1)
        if (Dis1 == 0 && Dis2 == 0) {
            Forword()
        } else if (Dis1 == 1 && Dis2 == 0) {
            Left()
        } else if (Dis1 == 0 && Dis2 == 1) {
            Right()
        } else if (Dis1 == 1 && Dis2 == 1) {
            Stop()
            basic.pause(500)
            break;
        }
    }
}
function TurnRightFast () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P14,
    200,
    DigitalPin.P13,
    0
    )
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P16,
    255,
    DigitalPin.P15,
    0
    )
    while (true) {
        Dis1 = pins.digitalReadPin(DigitalPin.P8)
        Dis2 = pins.digitalReadPin(DigitalPin.P1)
        if (Dis1 == 0 && Dis2 == 1) {
            break;
        }
    }
    Stop()
}
input.onButtonPressed(Button.B, function () {
    end += 1
    if (end >= 3) {
        end = 0
    }
})
function HandDown () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P2,
    255,
    DigitalPin.P12,
    0
    )
    basic.pause(1000)
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P2,
    0,
    DigitalPin.P12,
    0
    )
}
function Goback () {
    while (true) {
        Dis1 = pins.digitalReadPin(DigitalPin.P8)
        Dis2 = pins.digitalReadPin(DigitalPin.P1)
        if (Dis1 == 0 && Dis2 == 0) {
            Forback()
        } else if (Dis1 == 1 && Dis2 == 0) {
            Left()
        } else if (Dis1 == 0 && Dis2 == 1) {
            Right()
        } else if (Dis1 == 1 && Dis2 == 1) {
            Stop()
            basic.pause(500)
            break;
        }
    }
}
function Right () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P14,
    56,
    DigitalPin.P13,
    1
    )
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P16,
    255,
    DigitalPin.P15,
    0
    )
}
function Forword () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P14,
    120,
    DigitalPin.P13,
    1
    )
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P16,
    120,
    DigitalPin.P15,
    0
    )
}
function TurnBack () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P14,
    255,
    DigitalPin.P13,
    0
    )
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P16,
    255,
    DigitalPin.P15,
    0
    )
    basic.pause(500)
    while (true) {
        Dis1 = pins.digitalReadPin(DigitalPin.P8)
        Dis2 = pins.digitalReadPin(DigitalPin.P1)
        if (Dis1 == 0 && Dis2 == 1) {
            break;
        }
    }
    Stop()
}
function Stop () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P14,
    0,
    DigitalPin.P13,
    1
    )
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P16,
    0,
    DigitalPin.P15,
    0
    )
}
let Dis2 = 0
let Dis1 = 0
let end = 0
end = 0
basic.forever(function () {
    if (end == 0) {
        basic.showLeds(`
            . # # # .
            . . . . #
            . . . . #
            . . . . #
            . # # # .
            `)
    } else if (end == 1) {
        basic.showLeds(`
            # # # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (end == 2) {
        basic.showLeds(`
            . # . # .
            . . # # .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
})
