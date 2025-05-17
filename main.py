def on_received_value(name, value):
    if name == "Base":
        pass
    elif name == "Arm1":
        pass
    elif name == "Arm2":
        pass
    elif name == "Hand":
        pass
radio.on_received_value(on_received_value)

def Forword():
    RoboticsWorkshop.dd_mmotor(AnalogPin.P14, 120, DigitalPin.P13, 0)
    RoboticsWorkshop.dd_mmotor(AnalogPin.P16, 120, DigitalPin.P15, 1)
radio.set_group(3)

def on_forever():
    if pins.digital_read_pin(DigitalPin.P1) == 0 and pins.digital_read_pin(DigitalPin.P8) == 0:
        pass
    elif pins.digital_read_pin(DigitalPin.P1) == 1 and pins.digital_read_pin(DigitalPin.P8) == 0:
        pass
    elif pins.digital_read_pin(DigitalPin.P1) == 0 and pins.digital_read_pin(DigitalPin.P8) == 1:
        pass
basic.forever(on_forever)
