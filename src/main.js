import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    const state = $('#state').val();
    $('#location').val("");
    $('#state').val("");
    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}, ${state}&appid=${process.env.API_KEY}`;
    
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      let kelvin = response.main.temp;
      let fahrenheit = (((kelvin - 273.15) * 1.8) + 32).toFixed(1);
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
      $('.showFahr').text(`The temperature in Fahrenheit is ${fahrenheit} degrees.`);
      $('.pressure').text(`The pressure is ${response.main.pressure}.`);
    }
  });
});