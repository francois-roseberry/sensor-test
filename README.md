# sensor-test
Balena test for a DHT22 sensor connected to a Raspberry Pi Zero W. It logs to console the temperature and humidity every few seconds.

Just clone that repo, and push it to your balena project using BalenaCLI (assuming, of course, that your balena project has a Raspberry Pi  connected with a DHT22 sensor). To wire the sensor, please refer to other resources (A diagram is easy to find)

Borrows from [joscha/rpi-sensor-logger](https://github.com/joscha/rpi-sensor-logger)

Should theoretically work with a DHT11 or AM2302 as well, although I did not tested

As of now, doing `balena push` from a windows machine [screws up some characters](https://github.com/balena-io/balena-cli/issues/1273) and fails the build. Works when pushed from mac, I assume linux works as well.

Although I have only tested on a Zero, might work as well on the other models of Raspberrry PIs (2,3,4)
