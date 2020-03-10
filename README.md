# sensor-test
Balena test for an AM2302 (DHT22) sensor connected to a Raspberry Pi Zero W. It logs to console the temperature and humidity every few seconds

Just clone that repo, and push it to your balena project using BalenaCLI (assuming, of course, that your balena project has a raspberry Pi Zero W connected with an AM2302 sensor). To wire the sensor, please refer to other resources (A diagram is easy to find)

Borrows from [joscha/rpi-sensor-logger](https://github.com/joscha/rpi-sensor-logger)

Should theoretically work with a DHT11 as well, although I did not tested

As of now, doing `balena push` from a windows machine screws up some characters and fails the build. Works when pushed from mac, I assume linux works as well.

Although I have only tested on a Zero, might work as well on the other models of Raspberrry PIs (2,3,4)
