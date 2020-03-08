
(function() {
    'use strict';
  
    /**
    * @var {Number} the interval to gather the sensor output in seconds.
    * Defaults to 5 minutes (300).balena dashboard.
    */
    var interval = process.env.SENSOR_INTERVAL || 5*60;
  
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
    var sensorType = process.env.SENSOR_TYPE || 22;
  
    /**
    * @var {int} the sensor gpio pin number. Defaults to 4.
    * You can set this through the balena dashboard.
    */
    var sensorPin = process.env.SENSOR_PIN || 4;
  
    var sensorLib = require('node-dht-sensor');
    var moment = require('moment');
  
    var sensor = {
      initialize: function() {
        return sensorLib.initialize(
            parseInt(sensorType, 10),
            parseInt(sensorPin, 10)
        );
      },
      read: function() {
        var data = sensorLib.read();
        var temperature = data.temperature.toFixed(2);
        var humidity = data.humidity.toFixed(2);
  
        if (temperature !== 0 || humidity !== 0) {
            var timestamp = Date.now();
            var m = moment(timestamp).utc();
  
            console.log(
                m.format() + ':',
                '\tTemperature: ' + temperature + ' °C',
                '\tHumidity: ' + humidity + '%'
            );
        }
        setTimeout(sensor.read, interval * 1000);
      }
    };
  
    if (sensor.initialize()) {
      sensor.read();
      console.log('Started...');
    } else {
      console.error('Failed to initialize sensor');
    }
  })();