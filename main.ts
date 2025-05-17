function Left () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P14,
    200,
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
function TurnLeft () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P14,
    255,
    DigitalPin.P13,
    1
    )
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P16,
    200,
    DigitalPin.P15,
    1
    )
}
input.onButtonPressed(Button.A, function () {
    Start = 1
})
function Right () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P14,
    255,
    DigitalPin.P13,
    1
    )
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P16,
    200,
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
function Stop () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P14,
    0,
    DigitalPin.P13,
    0
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
let Start = 0
radio.setGroup(3)
Start = 0
Stop()
basic.forever(function () {
    if (Start == 1) {
        Dis1 = pins.digitalReadPin(DigitalPin.P8)
        Dis2 = pins.digitalReadPin(DigitalPin.P1)
        if (Dis1 == 0 && Dis2 == 0) {
            Forword()
        } else if (Dis1 == 1 && Dis2 == 0) {
            Right()
        } else if (Dis1 == 0 && Dis2 == 1) {
            Left()
        } else if (Dis1 == 1 && Dis2 == 1) {
            Stop()
            basic.pause(1000)
            TurnLeft()
            basic.pause(500)
        }
    }
})
