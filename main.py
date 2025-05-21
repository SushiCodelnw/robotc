def Left():
    RoboticsWorkshop.dd_mmotor(AnalogPin.P14, 255, DigitalPin.P13, 1)
    RoboticsWorkshop.dd_mmotor(AnalogPin.P16, 50, DigitalPin.P15, 0)
def TurnLeft():
    RoboticsWorkshop.dd_mmotor(AnalogPin.P14, 255, DigitalPin.P13, 1)
    RoboticsWorkshop.dd_mmotor(AnalogPin.P16, 200, DigitalPin.P15, 1)

def on_button_pressed_a():
    global Start
    Start = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def INahHee():
    global Dis1, Dis2
    while True:
        Dis1 = pins.digital_read_pin(DigitalPin.P8)
        Dis2 = pins.digital_read_pin(DigitalPin.P1)
        if Dis1 == 0 and Dis2 == 0:
            Forword()
        elif Dis1 == 1 and Dis2 == 0:
            Left()
        elif Dis1 == 0 and Dis2 == 1:
            Right()
        elif Dis1 == 1 and Dis2 == 1:
            Stop()
            break
def Right():
    RoboticsWorkshop.dd_mmotor(AnalogPin.P14, 50, DigitalPin.P13, 1)
    RoboticsWorkshop.dd_mmotor(AnalogPin.P16, 255, DigitalPin.P15, 0)
def Forword():
    RoboticsWorkshop.dd_mmotor(AnalogPin.P14, 120, DigitalPin.P13, 1)
    RoboticsWorkshop.dd_mmotor(AnalogPin.P16, 120, DigitalPin.P15, 0)
def Stop():
    RoboticsWorkshop.dd_mmotor(AnalogPin.P14, 0, DigitalPin.P13, 1)
    RoboticsWorkshop.dd_mmotor(AnalogPin.P16, 0, DigitalPin.P15, 0)
Dis2 = 0
Dis1 = 0
Start = 0
radio.set_group(3)
Start = 0
Stop()

def on_forever():
    if Start == 1:
        INahHee()
        Forword()
        basic.pause(200)
        Stop()
        INahHee()
        TurnLeft()
basic.forever(on_forever)
