class UsbCable:
    def __init__(self, name):
        self.isPlugged = False
        self.name = name

    def plugUsb(self):
        self.isPlugged = True
        print(self)

    def unplugUsb(self):
        self.isPlugged = False
        print(self)

    def __str__(self):
        return f"UsbCable {self.name} isPlugged={self.isPlugged}"


class UsbPort:
    def __init__(self, name):
        self.portAvailable = True
        self.name = name

    def plug(self, usb):
        if self.portAvailable:
            usb.plugUsb()
            self.portAvailable = False
            print(self)
        else:
            print(self)

    def __str__(self):
        return f"UsbPort {self.name} portAvailable={self.portAvailable}"


class MicroUsbCable:
    def __init__(self, name):
        self.isPlugged = False
        self.name = name

    def plugMicroUsb(self):
        self.isPlugged = True
        print(self)

    def __str__(self):
        return f"MicroUsbCable {self.name} isPlugged={self.isPlugged}"


class MicroToUsbAdapter(UsbCable):
    def __init__(self, microUsbCable):
        self.microUsbCable = microUsbCable
        self.name = self.microUsbCable.name
        self.microUsbCable.plugMicroUsb()

    # can override UsbCable.plugUsb() if needed


if __name__ == "__main__":
    # UsbCables can plug directly into UsbPorts
    usbCable = UsbCable("Red")
    usbPort1 = UsbPort("One")
    usbPort1.plug(usbCable)

    # MicroUsbCables can plug into UsbPorts via an adapter
    microToUsbAdapter = MicroToUsbAdapter(MicroUsbCable("Blue"))
    usbPort2 = UsbPort("Two")
    usbPort2.plug(microToUsbAdapter)
