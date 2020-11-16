import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    //const state = $('#state').val();
    const cnt=10;
    $('#location').val("");
    $('#state').val("");
    //let request1 = new XMLHttpRequest();
    let request2 = new XMLHttpRequest();
    //const url1 = `http://api.openweathermap.org/data/2.5/weather?q=${city}, ${state}&appid=${process.env.API_KEY}`;
    const url10=`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${cnt}&appid=${process.env.API_KEY1}`;

    

    // request1.onreadystatechange = function() {
    //   if (this.readyState === 4 && this.status === 200) {
    //     const response1 = JSON.parse(this.responseText);
    //     getElements1(response1);
    //     //getElements2(response2);
    //   }
    // };

    request2.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response2 = JSON.parse(this.responseText);
        getElements2(response2);
      }
    };

    // function request(request, url){
    //   request.open("GET", url, true);
    //   request.send();
    // }
    request2.open("GET", url10, true);
    request2.send();
    
    //request(request2, url10);
    //request(request1, url1);

    // function getElements1(response) {
    //   let kelvin = response.main.temp;
    //   let fahrenheit = (((kelvin - 273.15) * 1.8) + 32).toFixed(1);
    //   $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
    //   $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    //   $('.showFahr').text(`The temperature in Fahrenheit is ${fahrenheit} degrees.`);
    //   $('.pressure').text(`The pressure is ${response.main.pressure}.`);
    // }

    function getElements2(response) {
      for (let i=0; i<response.list.length;i++){
        $('.date').text(`Datevalue is ${response.list[i].dt}`);
        $('.temp').text(`Temperature is ${response.list[i].main.temp}`);
        $('.description').text(`It will be ${response.list[i].weather[i].description}`);
      }
    }
  });
});

