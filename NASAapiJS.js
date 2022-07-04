var apiKey = "NUjCl5ZUJvZOposRazziSr9mZS4wiPi6arcJYiFE";
var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=";

var date = new Date();
var today = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();

var elem = document.getElementById("main");

var r = document.querySelector(':root');

req.open('Get', url + today + "&api_key=" + apiKey);
req.send();

req.addEventListener('load', function(){
    if(req.status == 200 && req.readyState == 4){
        var response = JSON.parse(req.responseText);
        r.style.setProperty('--backgroundImage', 'url(' + response.url + ')');
    }
})

