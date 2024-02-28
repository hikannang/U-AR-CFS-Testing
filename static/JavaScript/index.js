var loadingTimeout;
var distance; //Declaring this as a global Variable instead
var modal;
var colour = 'white';
var target = {
    latitude: 0,
    longitude: 0
};


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


function selectRed(){
    //Bicycle Crossing
    
     //My Office,
     startCompass()
     target.latitude = 1.401304;
     target.longitude = 103.749401;

    showLoadingScreen();

    colour = 'red';

    if (document.getElementById('redOff')) {
        // Turning Red On
        document.getElementById('redOff').id = 'red';
        var content = document.getElementById('red');
        content.innerHTML = '<a-image id="red" src="./static/images/2D_Assets_low_res/BicycleCrossing_hanging.png" look-at="[camera]" scale="15 15 15" gps-projected-entity-place="latitude: 1.401304; longitude: 103.749401"></a-image>';
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
}

function selectGreen(){
    
    //In front of lao pa sat ,
    startCompass()
    target.latitude = 1.281238;
    target.longitude = 103.850447;

    showLoadingScreen();

    colour = 'green';

    if (document.getElementById('greenOff')){ 
        // Turning Green On
        document.getElementById('greenOff').id = 'green';
        var content = document.getElementById('green')
        // content.innerHTML = '<a-entity id="green" material="color: green" geometry="primitive: box" gps-projected-entity-place="latitude: 1.3082540241124714; longitude: 103.84929645038089" scale="10 10 10"></a-entity>'
        content.innerHTML = '<a-image id="green" src="./static/images/2D_Assets_low_res/CyclingPath_4k.png" look-at="[camera]" scale="16 16 16" gps-projected-entity-place="latitude: 1.281238; longitude: 103.850447"></a-image>';
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
}

function showGreen(){
    if (document.getElementById('greenOff')){
        // Turning Green On
        document.getElementById('greenOff').id = 'green';
        var content = document.getElementById('green')
        // content.innerHTML = '<a-entity id="green" material="color: green" geometry="primitive: box" gps-projected-entity-place="latitude: 1.3082540241124714; longitude: 103.84929645038089" scale="10 10 10"></a-entity>'
        content.innerHTML = '<a-image id="green" src="./static/images/2D_Assets_low_res/CyclingPath_4k.png" look-at="[camera]" scale="12 12 12" gps-projected-entity-place="latitude: 1.281238; longitude: 103.850447"></a-image>';
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

    //In front of clifford centre
    startCompass()
    target.latitude = 1.284529;
    target.longitude = 103.852975;

    showLoadingScreen();

    colour = 'yellow';

    if (document.getElementById('yellowOff')){
        // Turning Yellow On
        document.getElementById('yellowOff').id = 'yellow';
        var content = document.getElementById('yellow')
        content.innerHTML = '<a-image  id="yellow" src="./static/images/2D_Assets_low_res/FootPath.png" look-at="[gps-projected-camera]" scale="14 14 14" gps-projected-entity-place="latitude: 1.284529; longitude: 103.852975"></a-image>';
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
}

function showYellow(){
    if (document.getElementById('yellowOff')){
        // Turning Yellow On
        document.getElementById('yellowOff').id = 'yellow';
        var content = document.getElementById('yellow')
        // content.innerHTML = '<a-entity id="yellow" material="color: yellow" geometry="primitive: box" gps-projected-entity-place="latitude: 1.3082540241124714; longitude: 103.84929645038089" scale="10 10 10"></a-entity>'
        content.innerHTML = '<a-image id="yellow" src="./static/images/2D_Assets_low_res/CyclingPath_4k.png" look-at="[camera]" scale="16 16 16" gps-projected-entity-place="latitude: 1.281238; longitude: 103.850447"></a-image>';
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
    
    //St Andrew's Road (Padang)
    startCompass()
    target.latitude = 1.289253;
    target.longitude = 103.851488;

    showLoadingScreen();

    colour = 'blue';
    
    if (document.getElementById('blueOff')){
        // Turning Blue On
        document.getElementById('blueOff').id = 'blue';
        var content = document.getElementById('blue')
        content.innerHTML = '<a-image  id="blue" src="./static/images/2D_Assets_low_res/Wayfinding_grabbing.png" look-at="[gps-projected-camera]" scale="16 16 16" gps-projected-entity-place="latitude: 1.289253; longitude: 103.851488"></a-image>';
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

}

function selectOrange(){
    //YellowBox

    //Near Capitol Tower
    startCompass()
    target.latitude = 1.277589;
    target.longitude = 103.847113;

    showLoadingScreen();

    colour = 'orange';

    if (document.getElementById('orangeOff')){
        // Turning orange On
        document.getElementById('orangeOff').id = 'orange';
        var content = document.getElementById('orange')
        content.innerHTML = '<a-image  id="orange" src="./static/images/2D_Assets_low_res/YellowBox_sitting.png" look-at="[gps-projected-camera]" scale="20 20 20" gps-projected-entity-place="atitude: 1.277589; longitude: 103.847113"></a-image>';
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
    if (distance > 10000) {
        distanceElement.innerHTML = 'Please Select Destination!';
    } else {
    // Display the actual distance
        distanceElement.innerHTML = Math.floor(distance) + "m to destination!";
    }
        

    if (colour != 'black') {
        switch (colour) {
            case 'white':
                {
                    toggleIModal();
                    colour = 'black';
                }
                break;
            case 'red':
                if (distance > 1000000){
                    hideRed();
                    toggleEModal();
                } else if (distance > 10000){
                    hideRed();
                    toggleOModal();
                }else if (distance <= 10000){
                    showRed();
                    toggleModalRed120();
                    colour = 'red2';
                }
                break;
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
                    toggleModalRed15(); 
                }else if(distance >= 15){
                    showRed();
                }
                break;
            case 'green':
                if (distance > 1000000){
                    hideGreen();
                    toggleEModal();
                } else if (distance > 10000){
                    hideGreen();
                    toggleOModal();
                }else if (distance <= 10000){
                    showGreen();
                    toggleModalGreen120();
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
                    toggleModalGreen15(); 
                }else if(distance >= 15){
                    showGreen();
                }
                break;
            case 'yellow':
                if (distance > 1000000){
                    hideYellow();
                    toggleEModal();
                } else if (distance > 10000){
                    hideYellow();
                    toggleOModal();
                }else if (distance <= 10000){
                    showYellow();
                    toggleModalYellow120();
                    colour = 'yellow2';
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
                    toggleModalYellow15(); 
                }else if(distance >= 15){
                    showYellow();
                }
                break;
            case 'blue':
                if (distance > 1000000){
                    hideBlue();
                    toggleEModal();
                } else if (distance > 10000){
                    hideBlue();
                    toggleOModal();
                }else if (distance <= 10000){
                    showBlue();
                    toggleModalBlue120();
                    colour = 'blue2';
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
                    toggleModalBlue15(); 
                }else if(distance >= 15){
                    showBlue();
                }
                break;
            case 'orange':
                if (distance < 20000){ 
                    toggleModalOrange120();
                    colour = 'orange2';
                }
                break;
            case 'orange2':
                if (distance <= 80){ 
                    toggleModalOrange80();
                    colour = 'orange3';
                }
                break;
            case 'orange3':
                if (distance <= 40){ 
                    toggleModalOrange40();
                    colour = 'black';
                }
                break;
            default:
                break;
        }
    }
    }
}   

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

function hideRed(){
    if(document.getElementById('red')){
        // Turning Red Off
        document.getElementById('red').id = 'redOff';
        var content = document.getElementById('redOff')
        content.innerHTML = '<a-entity id="redOff"></a-entity>'
    }
}

function showRed(){
    if (document.getElementById('redOff')) {
        // Turning Red On
        document.getElementById('redOff').id = 'red';
        var content = document.getElementById('red');
        content.innerHTML = '<a-image id="red" src="./static/images/2D_Assets_low_res/BicycleCrossing_hanging.png" look-at="[camera]" scale="10 10 10" gps-projected-entity-place="latitude: 1.308544; longitude: 103.849942"></a-image>';
    }
}
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

    function hideGreen(){
        if(document.getElementById('green')){
            // Turning Green Off
            document.getElementById('green').id = 'greenOff';
            var content = document.getElementById('greenOff')
            content.innerHTML = '<a-entity id="greenOff"></a-entity>'
        }
    }
    
    function showGreen(){
        if (document.getElementById('greenOff')) {
            // Turning Green On
            document.getElementById('greenOff').id = 'green';
            var content = document.getElementById('green');
            content.innerHTML = '<a-image id="green" src="./static/images/2D_Assets_low_res/CyclingPath_4k.png" look-at="[camera]" scale="16 16 16" gps-projected-entity-place="latitude: 1.308544; longitude: 103.849942"></a-image>';
        }
    }
    
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

    function hideYellow(){
        if(document.getElementById('yellow')){
            // Turning Yellow Off
            document.getElementById('yellow').id = 'yellowOff';
            var content = document.getElementById('yellowOff')
            content.innerHTML = '<a-entity id="yellowOff"></a-entity>'
        }
    }
    
    function showYellow(){
        if (document.getElementById('yellowOff')) {
            // Turning Yellow On
            document.getElementById('yellowOff').id = 'yellow';
            var content = document.getElementById('yellow');
            content.innerHTML = '<a-image id="yellow" src="./static/images/2D_Assets_low_res/CyclingPath_4k.png" look-at="[camera]" scale="16 16 16" gps-projected-entity-place="latitude: 1.308544; longitude: 103.849942"></a-image>';
        }
    }
    
    //Yellow Modal End

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

    function hideBlue(){
        if(document.getElementById('blue')){
            // Turning Blue Off
            document.getElementById('blue').id = 'blueOff';
            var content = document.getElementById('blueOff')
            content.innerHTML = '<a-entity id="blueOff"></a-entity>'
        }
    }
    
    function showBlue(){
        if (document.getElementById('blueOff')) {
            // Turning Blue On
            document.getElementById('blueOff').id = 'blue';
            var content = document.getElementById('blue');
            content.innerHTML = '<a-image id="blue" src="./static/images/2D_Assets_low_res/CyclingPath_4k.png" look-at="[camera]" scale="16 16 16" gps-projected-entity-place="latitude: 1.308544; longitude: 103.849942"></a-image>';
        }
    }
    
    //Blue Modal End

// Start Orange Models
    // Function to open the Orange modal
    function toggleModalOrange120() {
        var modalOrange120 = document.getElementById("modalOrange120");
        modalOrange120.style.display = 'block';
    }
    
    function toggleModalOrange80() {
        var modalOrange120 = document.getElementById("modalOrange120");
        modalOrange120.style.display = 'none';
        var modalOrange80 = document.getElementById("modalOrange80");
        modalOrange80.style.display = 'block';
    }
    
    function toggleModalOrange40() {
        var modalOrange120 = document.getElementById("modalOrange120");
        modalOrange120.style.display = 'none';
        var modalOrange80 = document.getElementById("modalOrange80");
        modalOrange80.style.display = 'none';
        var modalOrange40 = document.getElementById("modalOrange40");
        modalOrange40.style.display = 'block';
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
    function closeOrangeModal80() {
        var modalOrange80 = document.getElementById("modalOrange80");
        modalOrange80.style.display = 'none';
    }
    
    // span.onclick for the Orange modal
    document.getElementById("modalOrangeClose80").onclick = function () {
        closeOrangeModal80();
    };
    
    // Function to close the Orange modal
    function closeOrangeModal40() {
        var modalOrange40 = document.getElementById("modalOrange40");
        modalOrange40.style.display = 'none';
    }
    
    // span.onclick for the Orange modal
    document.getElementById("modalOrangeClose40").onclick = function () {
        closeOrangeModal40();
    };
    //Orange Modal End

    function showAllElements() {
        var compassDiv = document.getElementById('compassDiv');
        var topBox = document.querySelector('.translucent-box.top-box');
        var bottomBox = document.querySelector('.translucent-box.bottom-box');
    
        compassDiv.style.display = 'block';
        topBox.style.display = 'block';
        bottomBox.style.display = 'block';
    }
    
    function hideAllElements() {
        var compassDiv = document.getElementById('compassDiv');
        var topBox = document.querySelector('.translucent-box.top-box');
        var bottomBox = document.querySelector('.translucent-box.bottom-box');
    
        compassDiv.style.display = 'none';
        topBox.style.display = 'none';
        bottomBox.style.display = 'none';
    }

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