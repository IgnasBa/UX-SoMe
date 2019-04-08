// game points
var points = 0;
var points2 = 0;
var time = 60 / 2; // your time in seconds here
var play = 0;
var coop = 0;
var url = "http://api.openweathermap.org/data/2.5/weather?q=copenhagen&units=metric&APPID=b94ddb9d71b693ed8440e7263c21d6f6";

function createElements() {
    const elements = [];
    // Creating a for-loop => we will become 40 li items
    if (play > 0) {
        return;
    }
    // Creaing a li item
    var li = document.createElement("li");
    // get a random number from 0 to 100
    var getNumber = randomNumber(100);
    var x = randomRange(50, 1500);
    var y = randomNumber(800);
    var size = 40;
    // check whether one rectangle overlaps another rectangle by checking their edges
    // https://gamedev.stackexchange.com/questions/111123/how-do-i-check-if-one-square-is-overlapping-another-in-html5-canvas
    var overlaps = elements.some(element => {
        if (x >= element.x + size + 5 ||
            y >= element.y + size + 5 ||
            x + size + 5 <= element.x ||
            y + size + 5 <= element.y) {
            return false;
        } else {
            return true;
        }
    });
    /*        console.log(overlaps);*/
    if (!overlaps) {
        // Styling the li element with JavaScript
        var li = document.createElement("li");
        li.style.width = "150px";
        li.style.height = "150px";
        li.style.top = y + "px";
        li.style.position = "absolute";
        li.style.left = x + "px";

        li.style.border = "1px solid blue";

        li.style.background = "#c265cf";
        li.style.borderRadius = "150px";
        li.style.color = "#c265cf";
        li.classList.add("list");

        li.style.display = "flex";
        li.style.justifyContent = "center";
        li.style.alignItems = "center";
        li.innerHTML = getNumber;
        document.getElementById("elementArea").appendChild(li);
        elements.push({
            x: x,
            y: y
        });
    }
    var myBox = $('.list');
    myBox.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
            // code to execute after animation ends
            play++;
            //document.getElementsByClassName("list").style.visibility = "hidden";
            console.log("d");
            $('.list').remove();
            document.getElementById("safeTimer").style.visibility = "hidden";
            document.getElementById("logo").style.visibility = "visible";
            document.getElementById("finish2").style.visibility = "visible";
            document.getElementById("finish2").style.display = "block";
        button2.classList.add("scale-up-center");
            button2.style.visibility = "visible";
            button2.innerHTML = "Try again";
            button2.style.marginLeft = "41.5%";
        document.getElementById("chosen").pause();
            if (coop > 0) {
                document.getElementById("pointsDiv").style.marginTop = "18%";
                document.getElementById("pointsDiv").style.marginLeft = "60%";
                document.getElementById("pointsDiv2").style.marginTop = "18%";
                document.getElementById("pointsDiv2").style.marginLeft = "28%";
                document.getElementById("pointsDiv").classList.add("scale-up-center");
                document.getElementById("pointsDiv2").classList.add("scale-up-center");
            } else {
                document.getElementById("pointsDiv").style.marginTop = "18%";
                document.getElementById("pointsDiv").style.marginLeft = "44%";
                            document.getElementById("pointsDiv").classList.add("scale-up-center");
            }
        });
    /* console.log(elements);*/
}

function createElements2() {
    const elements = [];
    // Creating a for-loop => we will become 40 li items
    if (play > 0) {
        return;
    }
    // Creaing a li item
    var li = document.createElement("li2");
    // get a random number from 0 to 100
    var getNumber = randomNumber(100);
    var x = randomRange(50, 1500);
    var y = randomNumber(800);
    var size = 40;
    // check whether one rectangle overlaps another rectangle by checking their edges
    // https://gamedev.stackexchange.com/questions/111123/how-do-i-check-if-one-square-is-overlapping-another-in-html5-canvas
    var overlaps = elements.some(element => {
        if (x >= element.x + size + 5 ||
            y >= element.y + size + 5 ||
            x + size + 5 <= element.x ||
            y + size + 5 <= element.y) {
            return false;
        } else {
            return true;
        }
    });
    /*        console.log(overlaps);*/
    if (!overlaps) {
        // Styling the li element with JavaScript
        var li = document.createElement("li2");
        li.style.width = "150px";
        li.style.height = "150px";
        li.style.top = y + "px";
        li.style.position = "absolute";
        li.style.left = x + "px";

        li.style.border = "1px solid blue";

        li.style.background = "#00fffb";
        li.style.borderRadius = "150px";
        li.style.color = "#00fffb";
        li.classList.add("list2");

        li.style.display = "flex";
        li.style.justifyContent = "center";
        li.style.alignItems = "center";
        li.innerHTML = getNumber;
        document.getElementById("elementArea2").appendChild(li);
        elements.push({
            x: x,
            y: y
        });
    }
    var myBox = $('.list2');
    myBox.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
            // code to execute after animation ends
            play++;
            //document.getElementsByClassName("list").style.visibility = "hidden";
            console.log("d");
            $('.list').remove();
            $('.list2').remove();
            document.getElementById("safeTimer").style.visibility = "hidden";

            document.getElementById("logo").style.visibility = "visible";
            document.getElementById("finish2").style.visibility = "visible";
            document.getElementById("finish2").style.display = "block";
            button2.style.visibility = "visible";
            button2.innerHTML = "Try again";
            button2.style.marginLeft = "41.5%";
            if (coop > 0) {
                document.getElementById("pointsDiv").style.marginTop = "18%";
                document.getElementById("pointsDiv").style.marginLeft = "60%";
                document.getElementById("pointsDiv2").style.marginTop = "18%";
                document.getElementById("pointsDiv2").style.marginLeft = "28%";
                document.getElementById("pointsDiv").classList.add("scale-up-center");
                document.getElementById("pointsDiv2").classList.add("scale-up-center");
            } else {
                document.getElementById("pointsDiv").style.marginTop = "18%";
                document.getElementById("pointsDiv").style.marginLeft = "44%";
                document.getElementById("pointsDiv").classList.add("scale-up-center");
            }
        });
    /* console.log(elements);*/
}
// Generating a random range
function randomRange(min, max) {
    return (Math.random() * (max - min) + min);
}
// Generating a random number
function randomNumber(num) {
    return (Math.floor(Math.random() * num) + 1);
}

function remove() {}
// Checking whether a number is an Odd number
function isOdd(num) {
    return num % 2;
}

function gamePlay() {
    createElements();
    if (coop > 0) {
        createElements2();
    }
    console.log(play);
    document.getElementById("elementArea").addEventListener('click', function (e) {
        var pointElem = document.getElementById("points");
        var multiplierElem = document.getElementById("multiplier");
        var removeElem = e.target;
        var listItems = document.querySelectorAll("li");
        var ul = document.getElementById("ul");
        if (listItems.length > 0) {
            points = points + 1;
            pointElem.innerHTML = "<span>Score: " + points + "</span>";
            removeElem.parentNode.removeChild(removeElem);
            document.getElementById("bap").play();

        }
    });
    document.getElementById("elementArea2").addEventListener('click', function (e) {
        var pointElem = document.getElementById("points2");
        var multiplierElem = document.getElementById("multiplier");
        var removeElem = e.target;
        var listItems = document.querySelectorAll("li2");
        var ul = document.getElementById("ul");
        if (listItems.length > 0) {
            points2 = points2 + 1;
            pointElem.innerHTML = "<span>Score: " + points2 + "</span>";
            removeElem.parentNode.removeChild(removeElem);
            document.getElementById("bip").play();

        }
    });
    if (difficulty === 0) {
        setInterval(createElements, randomRange(2000, 4500));
    } else if (difficulty === 1) {
        setInterval(createElements, randomRange(1500, 3500));
    } else if (difficulty === 2) {
        setInterval(createElements, randomRange(1000, 2200));
    }

    if (coop > 0) {
        if (difficulty === 0) {
            setInterval(createElements2, randomRange(2000, 4500));
        } else if (difficulty === 1) {
            setInterval(createElements2, randomRange(1500, 3500));
        } else if (difficulty === 2) {
            setInterval(createElements2, randomRange(1000, 2200));
        }
    }

}



var button = document.getElementById("start");
button.addEventListener('click', function () {
    document.getElementById("chosen").play();
    document.getElementById("chosen").volume = 0.5;
    play = 0;
    button.style.visibility = "hidden";
    collectData(url, showData);
    if (document.getElementById("inputs").checked == true) {
        coop = 1;
    }
    gamePlay();
    heading.style.display = "none";
    document.getElementById("logo").style.visibility = "hidden";
    document.getElementById("points").style.visibility = "visible";
    document.getElementById("pointsDiv").style.visibility = "visible";
    if (coop > 0) {

        document.getElementById("points2").style.visibility = "visible";
        document.getElementById("pointsDiv2").style.visibility = "visible";
    }
    display = document.querySelector('#safeTimerDisplay');
    startTimer(time, display);
    document.getElementById("safeTimer").style.visibility = "visible";
    document.getElementById("pointsDiv").style.marginTop = "1%";
    document.getElementById("pointsDiv").style.marginLeft = "82%";
    document.getElementById("finish2").style.visibilty = "hidden";
    document.getElementById("finish2").style.display = "none";
    document.getElementById("slider2").style.display = "none";

})
var button2 = document.getElementById("start2");
button2.addEventListener('click', function () {
    play = 0;
    button2.style.visibility = "hidden";
    heading.style.display = "none";
    document.getElementById("logo").style.visibility = "hidden";
    document.getElementById("points").style.visibility = "visible";
    document.getElementById("pointsDiv").style.visibility = "visible";
    display = document.querySelector('#safeTimerDisplay');
    document.getElementById("safeTimer").style.visibility = "visible";
    document.getElementById("pointsDiv").style.marginTop = "1%";
    document.getElementById("pointsDiv").style.marginLeft = "85%";
    document.getElementById("pointsDiv2").style.marginTop = "1%";
    document.getElementById("pointsDiv2").style.marginLeft = "2%";
    document.getElementById("finish2").style.visibilty = "hidden";
    document.getElementById("finish2").style.display = "none";
    document.getElementById("chosen").play();
})
var arrow = document.getElementById("arrow");
var heading = document.getElementById("gymHeading");
var introduction = document.getElementById("introduction");
arrow.addEventListener('click', function (e) {

    introduction.style.display = "none";
    document.getElementById("chooseLevel").style.display = "flex";
    document.getElementById("easy").style.display = "flex";
    document.getElementById("medium").style.display = "flex";
    document.getElementById("hard").style.display = "flex";
    arrow.style.display = "none";

})

var difficulty = 0;

document.getElementById("easy").addEventListener('click', function (e) {

    document.getElementById("chooseLevel").innerHTML = "MUSIC PLAYLIST";
    document.getElementById("easy").style.display = "none";
    document.getElementById("medium").style.display = "none";
    document.getElementById("hard").style.display = "none";
    document.getElementById("playlistHype").style.display = "flex";
    document.getElementById("playlistMotivation").style.display = "flex";
    document.getElementById("playlistDale").style.display = "flex";
    document.getElementById("playlistSummer").style.display = "flex";
    document.getElementById("playlistPower").style.display = "flex";
    difficulty = 0;
})
document.getElementById("medium").addEventListener('click', function (e) {

    document.getElementById("chooseLevel").innerHTML = "MUSIC PLAYLIST";
    document.getElementById("chooseLevel").classList.remove("scale-up-center");
    document.getElementById("chooseLevel").classList.add("scale-up-center");
    document.getElementById("easy").style.display = "none";
    document.getElementById("medium").style.display = "none";
    document.getElementById("hard").style.display = "none";
    document.getElementById("playlistHype").style.display = "flex";
    document.getElementById("playlistMotivation").style.display = "flex";
    document.getElementById("playlistDale").style.display = "flex";
    document.getElementById("playlistSummer").style.display = "flex";
    document.getElementById("playlistPower").style.display = "flex";
    difficulty = 1;
})
document.getElementById("hard").addEventListener('click', function (e) {

    document.getElementById("chooseLevel").innerHTML = "MUSIC PLAYLIST";
    document.getElementById("easy").style.display = "none";
    document.getElementById("medium").style.display = "none";
    document.getElementById("hard").style.display = "none";
    document.getElementById("playlistHype").style.display = "flex";
    document.getElementById("playlistMotivation").style.display = "flex";
    document.getElementById("playlistDale").style.display = "flex";
    document.getElementById("playlistSummer").style.display = "flex";
    document.getElementById("playlistPower").style.display = "flex";
    difficulty = 2;
})
document.getElementById("playlistHype").addEventListener('click', function (e) {
    document.getElementById("playlistHype").style.display = "none";
    document.getElementById("playlistMotivation").style.display = "none";
    document.getElementById("playlistDale").style.display = "none";
    document.getElementById("playlistSummer").style.display = "none";
    document.getElementById("playlistPower").style.display = "none";
    document.getElementById("chooseLevel").style.display = "none";
    document.getElementById("start").style.visibility = "visible";
    document.getElementById("nonstop").id = "chosen";
})
document.getElementById("playlistMotivation").addEventListener('click', function (e) {
    document.getElementById("playlistHype").style.display = "none";
    document.getElementById("playlistMotivation").style.display = "none";
    document.getElementById("playlistDale").style.display = "none";
    document.getElementById("playlistSummer").style.display = "none";
    document.getElementById("playlistPower").style.display = "none";
    document.getElementById("chooseLevel").style.display = "none";
    document.getElementById("start").style.visibility = "visible";
    document.getElementById("mind").id = "chosen";
})
document.getElementById("playlistDale").addEventListener('click', function (e) {
    document.getElementById("playlistHype").style.display = "none";
    document.getElementById("playlistMotivation").style.display = "none";
    document.getElementById("playlistDale").style.display = "none";
    document.getElementById("playlistSummer").style.display = "none";
    document.getElementById("playlistPower").style.display = "none";
    document.getElementById("chooseLevel").style.display = "none";
    document.getElementById("start").style.visibility = "visible";
    document.getElementById("dont").id = "chosen";
})
document.getElementById("playlistSummer").addEventListener('click', function (e) {
    document.getElementById("playlistHype").style.display = "none";
    document.getElementById("playlistMotivation").style.display = "none";
    document.getElementById("playlistDale").style.display = "none";
    document.getElementById("playlistSummer").style.display = "none";
    document.getElementById("playlistPower").style.display = "none";
    document.getElementById("chooseLevel").style.display = "none";
    document.getElementById("start").style.visibility = "visible";
    document.getElementById("dont").id = "chosen";
})
document.getElementById("playlistPower").addEventListener('click', function (e) {
    document.getElementById("playlistHype").style.display = "none";
    document.getElementById("playlistMotivation").style.display = "none";
    document.getElementById("playlistDale").style.display = "none";
    document.getElementById("playlistSummer").style.display = "none";
    document.getElementById("playlistPower").style.display = "none";
    document.getElementById("chooseLevel").style.display = "none";
    document.getElementById("start").style.visibility = "visible";
    document.getElementById("nonstop").id = "chosen";
})

function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        console.log(timer);

        if (--timer < 0) {
            timer = 0;
            play++;
            $('.list').remove();
            $('.list2').remove();
            document.getElementById("safeTimer").style.visibility = "hidden";
            document.getElementById("pointsDiv").style.marginTop = "25%";
            document.getElementById("pointsDiv").style.marginLeft = "44%";
            document.getElementById("logo").style.visibility = "visible";
            document.getElementById("finish").style.visibility = "visible";
            document.getElementById("finish").classList.add("scale-up-center");
            document.getElementById("pointsDiv").classList.add("scale-up-center");
            document.getElementById("chosen").pause();
            if(coop > 0)
                {
                                  document.getElementById("pointsDiv").style.marginTop = "22%";
                document.getElementById("pointsDiv").style.marginLeft = "60%";
                document.getElementById("pointsDiv2").style.marginTop = "22%";
                document.getElementById("pointsDiv2").style.marginLeft = "28%";
                    document.getElementById("pointsDiv2").classList.add("scale-up-center");
                }


            // timer = duration; // uncomment this line to reset timer automatically after reaching 0

        }
    }, 1000);
}

// This is a HttpRequest to the openweather.org API where we get the content
function collectData(url, callback_Function) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            callback_Function(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();

} /* END of collectData - function */

function showData(jsonData) {
    var jsonElements = JSON.parse(jsonData.responseText);
    if (jsonElements.weather[0].main == "Clear") {
        document.getElementById("background").style.visibility = "hidden";
        document.getElementById("backgroundClear").style.visibility = "visible";
    } else if (jsonElements.weather[0].main == "Clouds") {
        document.getElementById("background").style.visibility = "hidden";
        document.getElementById("backgroundClouds").style.visibility = "visible";
    } else if (jsonElements.weather[0].main == "Snow") {
        document.getElementById("background").style.visibility = "hidden";
        document.getElementById("backgroundSnow").style.visibility = "visible";
    } else if (jsonElements.weather[0].main == "Rain") {
        document.getElementById("background").style.visibility = "hidden";
        document.getElementById("backgroundRain").style.visibility = "visible";
    } else if (jsonElements.weather[0].main == "Thunderstorm") {
        document.getElementById("background").style.visibility = "hidden";
        document.getElementById("backgroundThunderstorm").style.visibility = "visible";
    }

}
