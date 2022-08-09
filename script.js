const CAT_URL = "https://api.thecatapi.com/v1/images/search";
const PERSON_URL = "https://randomuser.me/api/";

let newMatchButton = document.querySelector("button");

function displayPersonInfo(data)  {
    //data from api
    let image = data.results[0].picture.large;
    let name = data.results[0].name.first + " " + data.results[0].name.last;
    let gender = data.results[0].gender;
    let country = data.results[0].location.country;
    
    gender = gender.charAt(0).toUpperCase() + gender.slice(1); //capitlizaing first letter of the word
    
    //html elements
    let htmlImage = document.querySelector("#person img");
    let htmlName = document.getElementById("name");
    let htmlGender = document.getElementById("gender");
    let htmlCountry = document.getElementById("country");

    //match bar and num
    let matchBar = document.getElementById("match");
    let matchNum = document.getElementById("match_num");

    //changing html elements
    htmlImage.src = image;
    htmlName.innerHTML = name;
    htmlGender.innerHTML = gender;
    htmlCountry.innerHTML = country;

    //random number for match bar
    match = randInt(100);
    console.log(match);
    matchBar.style.width = String(match) + "vw";
    matchNum.innerHTML = match;
}

function displayCatImage(data) {
    //image from api
    let randCat = data[0].url;
    let cat_img = document.querySelector("#pet img");
    cat_img.src = randCat;

    catMatch = randInt(100);
}

newMatchButton.onclick =  fetchNewInfo;

function randInt(upperLimit) {
    return Math.floor(Math.random() * upperLimit);
}

function fetchNewInfo() {
    fetch(PERSON_URL)
        .then(function (response) {
            return response.json();
        })

        .then(displayPersonInfo)

        .catch(function (error) {
            return ("Error during fetch: " + error);
        });

    fetch(CAT_URL)
        .then(function (response) {
            return response.json();
        })

        .then(displayCatImage)

        .catch(function (error) {
            return ("Error during fetch: " + error);
        });
}

fetchNewInfo();