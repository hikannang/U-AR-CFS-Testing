var loadingTimeout;
var distance; //Declaring this as a global Variable instead
var modal;
var colour = 'white';
var target = {
    latitude: 0,
    longitude: 0
};
var isViewed = false;


// Add this function at the beginning of your script
function showLoadingScreen() {
    var loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'flex';

    // Set a timeout to hide the loading screen after 2  seconds
    loadingTimeout = setTimeout(function () {
        hideLoadingScreen();
    }, 3000);
}

function hideLoadingScreen() {
    var loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'none';

    // Clear the timeout if it hasn't been triggered yet
    clearTimeout(loadingTimeout);
}

window.onload = function() {
    toggleLModal();
    toggleIModal();
    colour = 'black';
};


function selectRed(){
    //Bicycle Crossing


     ///Healthy Living Zone , 
     startCompass()
     target.latitude = 1.291844;
     target.longitude = 103.852875;

    showLoadingScreen();

    colour = 'red';

    if (document.getElementById('redOff')) {
        // Turning Red On
        document.getElementById('redOff').id = 'red';
        var content = document.getElementById('red');
        content.innerHTML = '<a-image id="red" src="./static/images/2D_Assets_low_res/BicycleCrossing_hanging.png" look-at="[camera]" scale="16 16 16" gps-projected-entity-place="latitude: 1.291844; longitude: 103.852875"></a-image>';
    }

    if(document.getElementById('green')){
        // Turning Green Off
        document.getElementById('green').id = 'greenOff';
        var content = document.getElementById('greenOff')
        content.innerHTML = '<a-entity id="greenOff"></a-entity>'
    }

    if(document.getElementById('yellow')){
        // Turning Yellow Off
        document.getElementById('yellow').id = 'yellowOff';
        var content = document.getElementById('yellowOff')
        content.innerHTML = '<a-entity id="yellowOff"></a-entity>'
    }

    if(document.getElementById('blue')){
        // Turning blue Off
        document.getElementById('blue').id = 'blueOff';
        var content = document.getElementById('blueOff')
        content.innerHTML = '<a-entity id="blueOff"></a-entity>'
    }

    if(document.getElementById('orange')){
        // Turning orange Off
        document.getElementById('orange').id = 'orangeOff';
        var content = document.getElementById('orangeOff')
        content.innerHTML = '<a-entity id="orangeOff"></a-entity>'
    }

    if(document.getElementById('purple')){
        // Turning purple Off
        document.getElementById('purple').id = 'purpleOff';
        var content = document.getElementById('purpleOff')
        content.innerHTML = '<a-entity id="purpleOff"></a-entity>'
    }
}

function showRed(){
    if (document.getElementById('redOff')){
        // Turning Red On
        document.getElementById('redOff').id = 'red';
        var content = document.getElementById('red')
        // content.innerHTML = '<a-entity id="red" material="color: red" geometry="primitive: box" gps-projected-entity-place="latitude: 1.3082540241124714; longitude: 103.84929645038089" scale="10 10 10"></a-entity>'
        content.innerHTML = '<a-image id="red" src="./static/images/2D_Assets_low_res/BicycleCrossing_hanging.png" look-at="[camera]" scale="16 16 16" gps-projected-entity-place="latitude: 1.291844; longitude: 103.852875"></a-image>';
    }
}

function hideRed(){
    if(document.getElementById('red')){
        // Turning Red Off
        document.getElementById('red').id = 'redOff';
        var content = document.getElementById('redOff')
        content.innerHTML = '<a-entity id="redOff"></a-entity>'
    }
}

function selectGreen(){
    //Reimagine Active Mobility Zone
    startCompass()
    target.latitude = 1.290731;
    target.longitude = 103.852240;


    showLoadingScreen();

    colour = 'green';

    if (document.getElementById('greenOff')){ 
        // Turning Green On
        document.getElementById('greenOff').id = 'green';
        var content = document.getElementById('green')
        // content.innerHTML = '<a-entity id="green" material="color: green" geometry="primitive: box" gps-projected-entity-place="latitude: 1.3082540241124714; longitude: 103.84929645038089" scale="10 10 10"></a-entity>'
        content.innerHTML = '<a-image id="green" src="./static/images/2D_Assets_low_res/CyclingPath_4k.png" look-at="[camera]" scale="16 16 16" gps-projected-entity-place="latitude: 1.290731; longitude: 103.852240"></a-image>';
    }

    if(document.getElementById('red')){
        // Turning Red Off
        document.getElementById('red').id = 'redOff';
        var content = document.getElementById('redOff')
        content.innerHTML = '<a-entity id="redOff"></a-entity>'
    }

    if(document.getElementById('yellow')){
        // Turning Yellow Off
        document.getElementById('yellow').id = 'yellowOff';
        var content = document.getElementById('yellowOff')
        content.innerHTML = '<a-entity id="yellowOff"></a-entity>'
    }

    if(document.getElementById('blue')){
        // Turning blue Off
        document.getElementById('blue').id = 'blueOff';
        var content = document.getElementById('blueOff')
        content.innerHTML = '<a-entity id="blueOff"></a-entity>'
    }

    if(document.getElementById('orange')){
        // Turning orange Off
        document.getElementById('orange').id = 'orangeOff';
        var content = document.getElementById('orangeOff')
        content.innerHTML = '<a-entity id="orangeOff"></a-entity>'
    }

    if(document.getElementById('purple')){
        // Turning purple Off
        document.getElementById('purple').id = 'purpleOff';
        var content = document.getElementById('purpleOff')
        content.innerHTML = '<a-entity id="purpleOff"></a-entity>'
    }
}

function showGreen(){
    if (document.getElementById('greenOff')){
        // Turning Green On
        document.getElementById('greenOff').id = 'green';
        var content = document.getElementById('green')
        // content.innerHTML = '<a-entity id="green" material="color: green" geometry="primitive: box" gps-projected-entity-place="latitude: 1.3082540241124714; longitude: 103.84929645038089" scale="10 10 10"></a-entity>'
        content.innerHTML = '<a-image id="green" src="./static/images/2D_Assets_low_res/CyclingPath_4k.png" look-at="[camera]" scale="16 16 16" gps-projected-entity-place="latitude: 1.290731; longitude: 103.852240"></a-image>';
    }
}

function hideGreen(){
    if(document.getElementById('green')){
        // Turning Green Off
        document.getElementById('green').id = 'greenOff';
        var content = document.getElementById('greenOff')
        content.innerHTML = '<a-entity id="greenOff"></a-entity>'
    }
}



function selectYellow(){
    //Foot Path

    ///MarketPlace
    startCompass()
    target.latitude = 1.288074;
    target.longitude = 103.854033;


    showLoadingScreen();

    colour = 'yellow';

    if (document.getElementById('yellowOff')){
        // Turning Yellow On
        document.getElementById('yellowOff').id = 'yellow';
        var content = document.getElementById('yellow')
        content.innerHTML = '<a-image id="yellow" src="./static/images/2D_Assets_low_res/FootPath.png" look-at="[gps-projected-camera]" scale="16 16 16" gps-projected-entity-place="latitude: 1.288074; longitude: 103.854033"></a-image>';
    }   

    if(document.getElementById('red')){
        // Turning Red Off
        document.getElementById('red').id = 'redOff';
        var content = document.getElementById('redOff')
        content.innerHTML = '<a-entity id="redOff"></a-entity>'
    }

    if(document.getElementById('green')){
        // Turning Green Off
        document.getElementById('green').id = 'greenOff';
        var content = document.getElementById('greenOff')
        content.innerHTML = '<a-entity id="greenOff"></a-entity>'
    }

    if(document.getElementById('blue')){
        // Turning blue Off
        document.getElementById('blue').id = 'blueOff';
        var content = document.getElementById('blueOff')
        content.innerHTML = '<a-entity id="blueOff"></a-entity>'
    }

    if(document.getElementById('orange')){
        // Turning orange Off
        document.getElementById('orange').id = 'orangeOff';
        var content = document.getElementById('orangeOff')
        content.innerHTML = '<a-entity id="orangeOff"></a-entity>'
    }

    if(document.getElementById('purple')){
        // Turning purple Off
        document.getElementById('purple').id = 'purpleOff';
        var content = document.getElementById('purpleOff')
        content.innerHTML = '<a-entity id="purpleOff"></a-entity>'
    }
}

function showYellow(){
    if (document.getElementById('yellowOff')){
        // Turning Yellow On
        document.getElementById('yellowOff').id = 'yellow';
        var content = document.getElementById('yellow')
        // content.innerHTML = '<a-entity id="yellow" material="color: yellow" geometry="primitive: box" gps-projected-entity-place="latitude: 1.3082540241124714; longitude: 103.84929645038089" scale="10 10 10"></a-entity>'
        content.innerHTML = '<a-image id="yellow" src="./static/images/2D_Assets_low_res/FootPath.png" look-at="[gps-projected-camera]" scale="16 16 16" gps-projected-entity-place="latitude: 1.288074; longitude: 103.854033"></a-image>';
    }
}

function hideYellow(){
    if(document.getElementById('yellow')){
        // Turning Yellow Off
        document.getElementById('yellow').id = 'yellowOff';
        var content = document.getElementById('yellowOff')
        content.innerHTML = '<a-entity id="yellowOff"></a-entity>'
    }
}



function selectBlue(){
    //Wayfinding
    
    //Active Play Zone
    startCompass()
    target.latitude = 1.290616;
    target.longitude = 103.854532;

    showLoadingScreen();

    colour = 'blue';
    
    if (document.getElementById('blueOff')){
        // Turning Blue On
        document.getElementById('blueOff').id = 'blue';
        var content = document.getElementById('blue')
        content.innerHTML = '<a-image id="blue" src="./static/images/2D_Assets_low_res/Wayfinding_grabbing.png" look-at="[gps-projected-camera]" scale="16 16 16" gps-projected-entity-place="latitude: 1.290616; longitude: 103.854532"></a-image>';
    }
    

    if(document.getElementById('red')){
        // Turning Red Off
        document.getElementById('red').id = 'redOff';
        var content = document.getElementById('redOff')
        content.innerHTML = '<a-entity id="redOff"></a-entity>'
    }

    if(document.getElementById('green')){
        // Turning Green Off
        document.getElementById('green').id = 'greenOff';
        var content = document.getElementById('greenOff')
        content.innerHTML = '<a-entity id="greenOff"></a-entity>'
    }

    if(document.getElementById('yellow')){
        // Turning yellow Off
        document.getElementById('yellow').id = 'yellowOff';
        var content = document.getElementById('yellowOff')
        content.innerHTML = '<a-entity id="yellowOff"></a-entity>'
    }

    if(document.getElementById('orange')){
        // Turning orange Off
        document.getElementById('orange').id = 'orangeOff';
        var content = document.getElementById('orangeOff')
        content.innerHTML = '<a-entity id="orangeOff"></a-entity>'
    }

    if(document.getElementById('purple')){
        // Turning purple Off
        document.getElementById('purple').id = 'purpleOff';
        var content = document.getElementById('purpleOff')
        content.innerHTML = '<a-entity id="purpleOff"></a-entity>'
    }

}

function showBlue(){
    if (document.getElementById('blueOff')){
        // Turning Blue On
        document.getElementById('blueOff').id = 'blue';
        var content = document.getElementById('blue')
        // content.innerHTML = '<a-entity id="blue" material="color: blue" geometry="primitive: box" gps-projected-entity-place="latitude: 1.3082540241124714; longitude: 103.84929645038089" scale="10 10 10"></a-entity>'
        content.innerHTML = '<a-image id="blue" src="./static/images/2D_Assets_low_res/Wayfinding_grabbing.png" look-at="[gps-projected-camera]" scale="16 16 16" gps-projected-entity-place="latitude: 1.290616; longitude: 103.854532"></a-image>';
    }
}

function hideBlue(){
    if(document.getElementById('blue')){
        // Turning Blue Off
        document.getElementById('blue').id = 'blueOff';
        var content = document.getElementById('blueOff')
        content.innerHTML = '<a-entity id="blueOff"></a-entity>'
    }
}

function selectOrange(){
    //YellowBox_sitting
    
    //Bicycle Park (Reimagine Active Mobility Zone)
    startCompass()
    target.latitude = 1.289254;
    target.longitude = 103.851201;;

    showLoadingScreen();

    colour = 'orange';

    if (document.getElementById('orangeOff')){
        // Turning Orange On
        document.getElementById('orangeOff').id = 'orange';
        var content = document.getElementById('orange')
        content.innerHTML = '<a-image id="orange" src="./static/images/2D_Assets_low_res/YellowBox_sitting.png" look-at="[gps-projected-camera]" scale="16 16 16" gps-projected-entity-place="latitude: 1.289254; longitude: 103.851201"></a-image>';
    }
    

    if(document.getElementById('red')){
        // Turning Red Off
        document.getElementById('red').id = 'redOff';
        var content = document.getElementById('redOff')
        content.innerHTML = '<a-entity id="redOff"></a-entity>'
    }

    if(document.getElementById('green')){
        // Turning Green Off
        document.getElementById('green').id = 'greenOff';
        var content = document.getElementById('greenOff')
        content.innerHTML = '<a-entity id="greenOff"></a-entity>'
    }

    if(document.getElementById('yellow')){
        // Turning yellow Off
        document.getElementById('yellow').id = 'yellowOff';
        var content = document.getElementById('yellowOff')
        content.innerHTML = '<a-entity id="yellowOff"></a-entity>'
    }

    if(document.getElementById('blue')){
        // Turning blue Off
        document.getElementById('blue').id = 'blueOff';
        var content = document.getElementById('blueOff')
        content.innerHTML = '<a-entity id="blueOff"></a-entity>'
    }

    if(document.getElementById('purple')){
        // Turning purple Off
        document.getElementById('purple').id = 'purpleOff';
        var content = document.getElementById('purpleOff')
        content.innerHTML = '<a-entity id="purpleOff"></a-entity>'
    }

}

function showOrange(){
    if (document.getElementById('orangeOff')){
        // Turning Orange On
        document.getElementById('orangeOff').id = 'orange';
        var content = document.getElementById('orange')
        // content.innerHTML = '<a-entity id="orange" material="color: orange" geometry="primitive: box" gps-projected-entity-place="latitude: 1.3082540241124714; longitude: 103.84929645038089" scale="10 10 10"></a-entity>'
        content.innerHTML = '<a-image id="orange" src="./static/images/2D_Assets_low_res/YellowBox_sitting.png" look-at="[gps-projected-camera]" scale="16 16 16" gps-projected-entity-place="latitude: 1.289254; longitude: 103.851201"></a-image>';
    }
}

function hideOrange(){
    if(document.getElementById('orange')){
        // Turning Orange Off
        document.getElementById('orange').id = 'orangeOff';
        var content = document.getElementById('orangeOff')
        content.innerHTML = '<a-entity id="orangeOff"></a-entity>'
    }
}

function selectPurple(){
    //YellowBox Standing

    //Bicycle Zone(Market Place)  
    startCompass()
    target.latitude = 1.286627;
    target.longitude = 103.853648;

    showLoadingScreen();

    colour = 'purple';

    if (document.getElementById('purpleOff')){
        // Turning purple On
        document.getElementById('purpleOff').id = 'purple';
        var content = document.getElementById('purple')
        content.innerHTML = '<a-image id="purple" src="./static/images/2D_Assets_low_res/YellowBox.png" look-at="[gps-projected-camera]" scale="16 16 16" gps-projected-entity-place="latitude: 1.286627; longitude: 103.853648"></a-image>';
    }

    if(document.getElementById('red')){
        // Turning Red Off
        document.getElementById('red').id = 'redOff';
        var content = document.getElementById('redOff')
        content.innerHTML = '<a-entity id="redOff"></a-entity>'
    }

    if(document.getElementById('green')){
        // Turning Green Off
        document.getElementById('green').id = 'greenOff';
        var content = document.getElementById('greenOff')
        content.innerHTML = '<a-entity id="greenOff"></a-entity>'
    }

    if(document.getElementById('yellow')){
        // Turning yellow Off
        document.getElementById('yellow').id = 'yellowOff';
        var content = document.getElementById('yellowOff')
        content.innerHTML = '<a-entity id="yellowOff"></a-entity>'
    }

    if(document.getElementById('blue')){
        // Turning blue Off
        document.getElementById('blue').id = 'blueOff';
        var content = document.getElementById('blueOff')
        content.innerHTML = '<a-entity id="blueOff"></a-entity>'
    }

    if(document.getElementById('orange')){
        // Turning orange Off
        document.getElementById('orange').id = 'orangeOff';
        var content = document.getElementById('orangeOff')
        content.innerHTML = '<a-entity id="orangeOff"></a-entity>'
    }

}

function hidePurple(){
    if(document.getElementById('purple')){
        // Turning Purple Off
        document.getElementById('purple').id = 'purpleOff';
        var content = document.getElementById('purpleOff')
        content.innerHTML = '<a-entity id="purpleOff"></a-entity>'
    }
}

function showPurple(){
    if (document.getElementById('purpleOff')) {
        // Turning Purple On
        document.getElementById('purpleOff').id = 'purple';
        var content = document.getElementById('purple');
        content.innerHTML = '<a-image id="purple" src="./static/images/2D_Assets_low_res/YellowBox.png" look-at="[gps-projected-camera]" scale="16 16 16" gps-projected-entity-place="latitude: 1.286627; longitude: 103.853648"></a-image>';
    }
}



// ##################################################################################################
var current = { latitude: null, longitude: null };
var target = { latitude: 0, longitude: 0 };
var lastAlpha = 0;
var direction = 0;
const isIOS =
    navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
    navigator.userAgent.match(/AppleWebKit/);
// const startBtn = document.querySelector(".start-btn");
const geolocationOptions = { enableHighAccuracy: true };

// function to initialize geolocation and device oroentation. runs automatically
// function to initialize geolocation and device orientation. runs automatically
function init() {
    // startBtn.addEventListener("click", startCompass);
    navigator.geolocation.watchPosition(setCurrentPosition, null, geolocationOptions);
    if (!isIOS) {
        window.addEventListener("deviceorientationabsolute", runCalculation);
    }

    // Start the UI updates
    updateUI();
}


// on clicking the start compass button, request permission to use device orientation.
// only IOS devices need to click the button
function startCompass() {
    if (isIOS) {
        DeviceOrientationEvent.requestPermission()
            .then((response) => {
            if (response === "granted") {
                window.addEventListener("deviceorientation", runCalculation);
            } else {
                alert("has to be allowed!");
            }
            })
            .catch(() => alert("not supported"));
    }
}

// takes values retrieved from th geolocation API and stores them in the current object
// for use in calculating compass direction and distance
function setCurrentPosition(position) {
    current.latitude = position.coords.latitude;
    current.longitude = position.coords.longitude;
}

// runs the calculation for getting the direction which the arrow needs to point
function runCalculation(event) {
    var alpha = Math.abs(360 - event.webkitCompassHeading) || event.alpha;

    if (alpha == null || Math.abs(alpha - lastAlpha) > 1) {
    var lat1 = current.latitude * (Math.PI / 180);
    var lon1 = current.longitude * (Math.PI / 180);
    var lat2 = target.latitude * (Math.PI / 180);
    var lon2 = target.longitude * (Math.PI / 180);

    // calculate compass direction
    var y = Math.sin(lon2 - lon1) * Math.cos(lat2);
    var x =
        Math.cos(lat1) * Math.sin(lat2) -
        Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
    var bearing = Math.atan2(y, x) * (180 / Math.PI);

    direction = (alpha + bearing + 360) % 360;
    direction = direction.toFixed(0);

    lastAlpha = alpha;

    var R = 6371; // Radius of the earth in km
    var dLat = lat2 - lat1; // below
    var dLon = lon2 - lon1;
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    distance = R * c; // Distance in km
    distance = distance * 1000; // Convert to meters

    var distanceElement = document.getElementById("distanceFromTarget");
    if (distance > 20000) {
        distanceElement.innerHTML = 'Please Select Destination!';
    } else if (distance <= 15){
        distanceElement.innerHTML = '';
    }else{
    // Display the actual distance
        distanceElement.innerHTML = Math.floor(distance) + "m to destination!";
    }
        

    if (colour != 'black') {
        switch (colour) {
            case 'red':
                if (distance > 1000000){
                    hideRed();
                    toggleEModal();
                } else if (distance > 3000){
                    hideRed();
                    toggleOModal();
                }else if (distance <= 3000){
                    isViewed = false;
                    showRed();
                    toggleModalRed120();
                    colour = 'red2';
                    break;
                }
            case 'red2':
                if (distance < 50){ 
                    showRed();
                    toggleModalRed50();
                    colour = 'red3';
                }
                break;
            case 'red3':
                if (distance < 15){ 
                    hideRed();
                    if(isViewed == false){
                        toggleModalRed15();
                        isViewed = true;
                    }
                } else if (distance >= 15){
                    showRed();
                }
                break;
            case 'green':
                if (distance > 1000000){
                    hideGreen();
                    toggleEModal();
                } else if (distance > 3000){
                    hideGreen();
                    toggleOModal();
                }else if (distance <= 3000){
                    showGreen();
                    toggleModalGreen120();
                    isViewed = false;
                    colour = 'green2';
                }
                break;
            case 'green2':
                if (distance < 50){ 
                    showGreen();
                    toggleModalGreen50();
                    colour = 'green3';
                }
                break;
            case 'green3':
                if (distance < 15){ 
                    hideGreen();
                    if(isViewed == false){
                        toggleModalGreen15();
                        isViewed = true; 
                    }
                } else if (distance >= 15){
                    showGreen();
                }
                break;
            case 'yellow':
                if (distance > 1000000){
                    hideYellow();
                    toggleEModal();
                } else if (distance > 3000){
                    hideYellow();
                    toggleOModal();
                }else if (distance <= 3000){
                    showYellow();
                    toggleModalYellow120();
                    colour = 'yellow2';
                    isViewed = false;
                }
                break;
            case 'yellow2':
                if (distance < 50){ 
                    showYellow();
                    toggleModalYellow50();
                    colour = 'yellow3';
                }
                break;
            case 'yellow3':
                if (distance < 15){ 
                    hideYellow();
                    if(isViewed == false){
                        toggleModalYellow15();
                        isViewed = true;
                    }
                }else if(distance >= 15){
                    showYellow();
                }
                break;
            case 'blue':
                if (distance > 1000000){
                    hideBlue();
                    toggleEModal();
                } else if (distance > 3000){
                    hideBlue();
                    toggleOModal();
                }else if (distance <= 3000){
                    showBlue();
                    toggleModalBlue120();
                    colour = 'blue2';
                    isViewed = false;
                }
                break;
            case 'blue2':
                if (distance < 50){ 
                    showBlue();
                    toggleModalBlue50();
                    colour = 'blue3';
                }
                break;
            case 'blue3':
                if (distance < 15){ 
                    hideBlue();
                    if(isViewed == false){
                        toggleModalBlue15(); 
                        isViewed = true;
                    }
                } else if (distance >= 15){
                    showBlue();
                }
                break;
            case 'orange':
                if (distance > 1000000){
                    hideOrange();
                    toggleEModal();
                } else if (distance > 3000){
                    hideOrange();
                    toggleOModal();
                }else if (distance <= 3000){
                    showOrange();
                    toggleModalOrange120();
                    colour = 'orange2';
                    isViewed = false;
                }
                break;
            case 'orange2':
                if (distance < 50){ 
                    showOrange();
                    toggleModalOrange50();
                    colour = 'orange3';
                }
                break;
            case 'orange3':
                if (distance < 15){ 
                    hideOrange();
                    if(isViewed == false){
                       toggleModalOrange15(); 
                        isViewed = true;
                    }
                }else if (distance >= 15){
                    showOrange();
                }
                break;
            case 'purple':
                if (distance > 1000000){
                    hidePurple();
                    toggleEModal();
                } else if (distance > 3000){
                    hidePurple();
                    toggleOModal();
                }else if (distance <= 3000){
                    showPurple();
                    toggleModalPurple120();
                    colour = 'purple2';
                    isViewed = false;
                }
                break;
            case 'purple2':
                if (distance < 50){ 
                    showPurple();
                    toggleModalPurple50();
                    colour = 'purple3';
                }
                break;
            case 'purple3':
                if (distance < 15){ 
                    hidePurple();
                    if(isViewed == false){
                        toggleModalPurple15();
                        isViewed = true;
                    }
                }else if (distance >= 15){
                    showPurple();
                }
                break;
            default:
                break;
        }
    }
    }
}   

function toggleWModal(){
    //Get the modal
    modalW = document.getElementById("modalW");
    modalW.style.zIndex = "6000";
    modalW.style.display="block";
}

function closeModalW(){
    modalW = document.getElementById("modalW");
    modalW.style.display='none';
}

document.getElementsByClassName("closeW")[0].onclick = function () {
    modalW.style.display = "none";
};

function toggleEModal(){
    //Get the modal
    modalE = document.getElementById("modalE");
    modalE.style.display="block";
}

function closeModalE(){
    modalE = document.getElementById("modalE");
    modalE.style.display='none';
}

document.getElementsByClassName("closeE")[0].onclick = function () {
    modalE.style.display = "none";
};

function toggleOModal(){
    //Get the modal
    modalO = document.getElementById("modalO");
    modalO.style.display="block";
}

function closeModalO(){
    modalO = document.getElementById("modalE");
    modalO.style.display='none';
}

document.getElementsByClassName("closeO")[0].onclick = function () {
    modalO.style.display = "none";
};

function toggleIModal(){
    //Get the modal
    modalI = document.getElementById("modalI");
    modalI.style.display="block";
}

function closeModalI(){
    modalI = document.getElementById("modalI");
    modalI.style.display='none';
}

document.getElementsByClassName("closeI")[0].onclick = function () {
    modalI.style.display = "none";
};

function toggleLModal(){
    //Get the modal
    modalL = document.getElementById("modalL");
    modalL.style.zIndex = "6000";
    modalL.style.display="block";
}

function closeModalL(){
    modalL = document.getElementById("modalL");
    modalL.style.display='none';
}

document.getElementsByClassName("closeL")[0].onclick = function () {
    modalL.style.display = "none";
};

function toggleHTModal(){
    //Get the modal
    modalHT = document.getElementById("modalHT");
    modalHT.style.display="block";
}

function closeModalHT(){
    modalHT = document.getElementById("modalHT");
    modalHT.style.display='none';
}

document.getElementsByClassName("closeHT")[0].onclick = function () {
    modalHT.style.display = "none";
};

function toggleMModal(){
    //Get the modal
    modalMap = document.getElementById("modalMap");
    modalMap.style.display="block";
}

function closeModal(){
    modalMap = document.getElementById("modalMap");
    modalMap.style.display='none';
}

document.getElementsByClassName("closeM")[0].onclick = function () {
    modalMap.style.display = "none";
};

// Modals
    // Start Red Models
    // Function to open the red modal
function toggleModalRed120() {
    var modalRed120 = document.getElementById("modalRed120");
    modalRed120.style.display = 'block';
}

function toggleModalRed50() {
    var modalRed120 = document.getElementById("modalRed120");
    modalRed120.style.display = 'none';
    var modalRed50 = document.getElementById("modalRed50");
    modalRed50.style.display = 'block';
}

function toggleModalRed15() {
    var modalRed120 = document.getElementById("modalRed120");
    modalRed120.style.display = 'none';
    var modalRed50 = document.getElementById("modalRed50");
    modalRed50.style.display = 'none';
    var modalRed15 = document.getElementById("modalRed15");
    modalRed15.style.display = 'block';
}

//Functions to close the red modals
function closeRedModal120() {
    var modalRed120 = document.getElementById("modalRed120");
    modalRed120.style.display = 'none';
}

// span.onclick for the red modal
document.getElementById("modalRedClose120").onclick = function () {
    closeRedModal120();
};

// Function to close the red modal
function closeRedModal50() {
    var modalRed50 = document.getElementById("modalRed50");
    modalRed50.style.display = 'none';
}

// span.onclick for the red modal
document.getElementById("modalRedClose50").onclick = function () {
    closeRedModal50();
};

// Function to close the red modal
function closeRedModal15() {
    var modalRed15 = document.getElementById("modalRed15");
    modalRed15.style.display = 'none';
}

// span.onclick for the red modal
document.getElementById("modalRedClose15").onclick = function () {
    closeRedModal15();
};
//Red Modal End

// Start Green Models
    // Function to open the Green modal
    function toggleModalGreen120() {
        var modalGreen120 = document.getElementById("modalGreen120");
        modalGreen120.style.display = 'block';
    }
    
    function toggleModalGreen50() {
        var modalGreen120 = document.getElementById("modalGreen120");
        modalGreen120.style.display = 'none';
        var modalGreen50 = document.getElementById("modalGreen50");
        modalGreen50.style.display = 'block';
    }
    
    function toggleModalGreen15() {
        var modalGreen120 = document.getElementById("modalGreen120");
        modalGreen120.style.display = 'none';
        var modalGreen50 = document.getElementById("modalGreen50");
        modalGreen50.style.display = 'none';
        var modalGreen15 = document.getElementById("modalGreen15");
        modalGreen15.style.display = 'block';
    }

    //Functions to close the Green modals
    function closeGreenModal120() {
        var modalGreen120 = document.getElementById("modalGreen120");
        modalGreen120.style.display = 'none';
    }
    
    // span.onclick for the Green modal
    document.getElementById("modalGreenClose120").onclick = function () {
        closeGreenModal120();
    };
    
    // Function to close the Green modal
    function closeGreenModal50() {
        var modalGreen50 = document.getElementById("modalGreen50");
        modalGreen50.style.display = 'none';
    }
    
    // span.onclick for the Green modal
    document.getElementById("modalGreenClose50").onclick = function () {
        closeGreenModal50();
    };
    
    // Function to close the Green modal
    function closeGreenModal15() {
        var modalGreen15 = document.getElementById("modalGreen15");
        modalGreen15.style.display = 'none';
    }
    
    // span.onclick for the Green modal
    document.getElementById("modalGreenClose15").onclick = function () {
        closeGreenModal15();
    };
    //Green Modal End

// Start Yellow Models
    // Function to open the Yellow modal
    function toggleModalYellow120() {
        var modalYellow120 = document.getElementById("modalYellow120");
        modalYellow120.style.display = 'block';
    }
    
    function toggleModalYellow50() {
        var modalYellow120 = document.getElementById("modalYellow120");
        modalYellow120.style.display = 'none';
        var modalYellow50 = document.getElementById("modalYellow50");
        modalYellow50.style.display = 'block';
    }
    
    function toggleModalYellow15() {
        var modalYellow120 = document.getElementById("modalYellow120");
        modalYellow120.style.display = 'none';
        var modalYellow50 = document.getElementById("modalYellow50");
        modalYellow50.style.display = 'none';
        var modalYellow15 = document.getElementById("modalYellow15");
        modalYellow15.style.display = 'block';
    }
    //Functions to close the Yellow modals
    function closeYellowModal120() {
        var modalYellow120 = document.getElementById("modalYellow120");
        modalYellow120.style.display = 'none';
    }
    
    // span.onclick for the Yellow modal
    document.getElementById("modalYellowClose120").onclick = function () {
        closeYellowModal120();
    };
    
    // Function to close the Yellow modal
    function closeYellowModal50() {
        var modalYellow50 = document.getElementById("modalYellow50");
        modalYellow50.style.display = 'none';
    }
    
    // span.onclick for the Yellow modal
    document.getElementById("modalYellowClose50").onclick = function () {
        closeYellowModal50();
    };
    
    // Function to close the Yellow modal
    function closeYellowModal15() {
        var modalYellow15 = document.getElementById("modalYellow15");
        modalYellow15.style.display = 'none';
    }
    
    // span.onclick for the Yellow modal
    document.getElementById("modalYellowClose15").onclick = function () {
        closeYellowModal15();
    };

    //Yellow ends

// Start Blue Models
    // Function to open the Blue modal
    function toggleModalBlue120() {
        var modalBlue120 = document.getElementById("modalBlue120");
        modalBlue120.style.display = 'block';
    }
    
    function toggleModalBlue50() {
        var modalBlue120 = document.getElementById("modalBlue120");
        modalBlue120.style.display = 'none';
        var modalBlue50 = document.getElementById("modalBlue50");
        modalBlue50.style.display = 'block';
    }
    
    function toggleModalBlue15() {
        var modalBlue120 = document.getElementById("modalBlue120");
        modalBlue120.style.display = 'none';
        var modalBlue50 = document.getElementById("modalBlue50");
        modalBlue50.style.display = 'none';
        var modalBlue15 = document.getElementById("modalBlue15");
        modalBlue15.style.display = 'block';
    }
    //Functions to close the Blue modals
    function closeBlueModal120() {
        var modalBlue120 = document.getElementById("modalBlue120");
        modalBlue120.style.display = 'none';
    }
    
    // span.onclick for the Blue modal
    document.getElementById("modalBlueClose120").onclick = function () {
        closeBlueModal120();
    };
    
    // Function to close the Blue modal
    function closeBlueModal50() {
        var modalBlue50 = document.getElementById("modalBlue50");
        modalBlue50.style.display = 'none';
    }
    
    // span.onclick for the Blue modal
    document.getElementById("modalBlueClose50").onclick = function () {
        closeBlueModal50();
    };
    
    // Function to close the Blue modal
    function closeBlueModal15() {
        var modalBlue15 = document.getElementById("modalBlue15");
        modalBlue15.style.display = 'none';
    }
    
    // span.onclick for the Blue modal
    document.getElementById("modalBlueClose15").onclick = function () {
        closeBlueModal15();
    };    
//Blue Modal End


// Start Orange Models
    // Function to open the Orange modal
    function toggleModalOrange120() {
        var modalOrange120 = document.getElementById("modalOrange120");
        modalOrange120.style.display = 'block';
    }
    
    function toggleModalOrange50() {
        var modalOrange120 = document.getElementById("modalOrange120");
        modalOrange120.style.display = 'none';
        var modalOrange50 = document.getElementById("modalOrange50");
        modalOrange50.style.display = 'block';
    }
    
    function toggleModalOrange15() {
        var modalOrange120 = document.getElementById("modalOrange120");
        modalOrange120.style.display = 'none';
        var modalOrange50 = document.getElementById("modalOrange50");
        modalOrange50.style.display = 'none';
        var modalOrange15 = document.getElementById("modalOrange15");
        modalOrange15.style.display = 'block';
    }
    //Functions to close the Orange modals
    function closeOrangeModal120() {
        var modalOrange120 = document.getElementById("modalOrange120");
        modalOrange120.style.display = 'none';
    }
    
    // span.onclick for the Orange modal
    document.getElementById("modalOrangeClose120").onclick = function () {
        closeOrangeModal120();
    };
    
    // Function to close the Orange modal
    function closeOrangeModal50() {
        var modalOrange50 = document.getElementById("modalOrange50");
        modalOrange50.style.display = 'none';
    }
    
    // span.onclick for the Orange modal
    document.getElementById("modalOrangeClose50").onclick = function () {
        closeOrangeModal50();
    };
    
    // Function to close the Orange modal
    function closeOrangeModal15() {
        var modalOrange15 = document.getElementById("modalOrange15");
        modalOrange15.style.display = 'none';
    }
    
    // span.onclick for the Orange modal
    document.getElementById("modalOrangeClose15").onclick = function () {
        closeOrangeModal15();
    };
//Orange Modal End

// Start Purple Models
    // Function to open the Purple modal
    function toggleModalPurple120() {
        var modalPurple120 = document.getElementById("modalPurple120");
        modalPurple120.style.display = 'block';
    }
    
    function toggleModalPurple50() {
        var modalPurple120 = document.getElementById("modalPurple120");
        modalPurple120.style.display = 'none';
        var modalPurple50 = document.getElementById("modalPurple50");
        modalPurple50.style.display = 'block';
    }
    
    function toggleModalPurple15() {
        var modalPurple120 = document.getElementById("modalPurple120");
        modalPurple120.style.display = 'none';
        var modalPurple50 = document.getElementById("modalPurple50");
        modalPurple50.style.display = 'none';
        var modalPurple15 = document.getElementById("modalPurple15");
        modalPurple15.style.display = 'block';
    }
    //Functions to close the Purple modals
    function closePurpleModal120() {
        var modalPurple120 = document.getElementById("modalPurple120");
        modalPurple120.style.display = 'none';
    }
    
    // span.onclick for the Purple modal
    document.getElementById("modalPurpleClose120").onclick = function () {
        closePurpleModal120();
    };
    
    // Function to close the Purple modal
    function closePurpleModal50() {
        var modalPurple50 = document.getElementById("modalPurple50");
        modalPurple50.style.display = 'none';
    }
    
    // span.onclick for the Purple modal
    document.getElementById("modalPurpleClose50").onclick = function () {
        closePurpleModal50();
    };
    
    // Function to close the Purple modal
    function closePurpleModal15() {
        var modalPurple15 = document.getElementById("modalPurple15");
        modalPurple15.style.display = 'none';
    }
    
    // span.onclick for the Purple modal
    document.getElementById("modalPurpleClose15").onclick = function () {
        closePurpleModal15();
    };
//Purple Modal End


function toggleCircles() {
    var additionalCircles = document.getElementById("additionalCircles");
    var threeLines = document.getElementById("threeLines");

    if (additionalCircles.style.display === "none") {
        additionalCircles.style.display = "flex";
        threeLines.style.background = "url('./static/images/icons/cross.png') center no-repeat";
        threeLines.style.backgroundSize = "contain";
    } else {
        additionalCircles.style.display = "none";
        threeLines.style.background = "url('./static/images/icons/menu.png') center no-repeat";
        threeLines.style.backgroundSize = "contain";
    }
}

// starts updating the UI.
function updateUI() {
    // Update arrow rotation
    const arrow = document.querySelector(".arrow");
    arrow.style.transform = `translate(-50%, -50%) rotate(${direction}deg)`;
    requestAnimationFrame(updateUI);
}

init();