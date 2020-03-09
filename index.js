/**
 * @var {Number} the interval to gather the sensor output in seconds.
 * Defaults to 5 minutes (300).balena dashboard.
 */
const interval = process.env.SENSOR_INTERVAL || 5 * 60;

/**
 * @var {int} the sensor type to read from. Defaults to 22.
 * You can set this through the balena dashboard.
 *
 * Possible values are:
 *
 * DHT11:  11
 * DHT22:  22
 * AM2302: 22
 */
const sensorType = process.env.SENSOR_TYPE || 22;

/**
 * @var {int} the sensor gpio pin number. Defaults to 4.
 * You can set this through the balena dashboard.
 */
const sensorPin = process.env.SENSOR_PIN || 4;

const sensorLib = require('node-dht-sensor');

const sensor = {
  initialize: function () {
    return sensorLib.initialize(
      parseInt(sensorType, 10),
      parseInt(sensorPin, 10)
    );
  },
  read: function () {
    const data = sensorLib.read();
    const temperature = data.temperature.toFixed(2);
    const humidity = data.humidity.toFixed(2);

    if (temperature !== 0 || humidity !== 0) {
      console.log(
        '\tTemperature: ' + temperature + ' °C',
        '\tHumidity: ' + humidity + '%'
      );
    }
    setTimeout(sensor.read, interval * 1000);
  }
};

if (sensor.initialize()) {
  console.log('Started...');
  sensor.read();
} else {
  console.error('Failed to initialize sensor');
}
