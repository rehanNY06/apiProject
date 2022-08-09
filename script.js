
let requestURL = "https://www.7timer.info/bin/civillight.php?lon=-73.9&lat=40.7&ac=0&unit=british&output=json";

console.log("Program started!");

function displayTemp(data){
    let day = data.dataseries[0]
    let Temp = day.temp2m;
    let weather1 = day.weather;
    console.log(day);
    let Temperature = document.getElementById("temp");
    Temperature.innerHTML = ("Temperature Min: "+ Temp.min + "  \n Temperature Max: " + Temp.max);
    
    let Weather = document.getElementById("temp2");
    Weather.innerHTML = ("Weather Today is: " + weather1);
}



fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(displayTemp)

    .catch(function (error) {
        console.log("Error during fetch:", error);
    });