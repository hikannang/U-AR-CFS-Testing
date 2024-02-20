var loadingTimeout;
var distance; //Declaring this as a global Variable instead

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
// Function to calculate distance
function calculateDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = (lat2 - lat1) * (Math.PI / 180);
    var dLon = (lon2 - lon1) * (Math.PI / 180);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distance = R * c; // Distance in km
    return distance * 1000; // Convert to meters
}

function selectRed(){
    //Bicycle Crossing
    
    //Outside office 
    startCompass()
    target.latitude = 1.308544;
    target.longitude = 103.849942;

    showLoadingScreen();

    // Call calculateDistance with the appropriate coordinates
    distance = calculateDistance(current.latitude, current.longitude, target.latitude, target.longitude);

    if (distance <= 40) {
        openModalRed();
    }

    if (document.getElementById('redOff')) {
        
        // Turning Red On
        document.getElementById('redOff').id = 'red';
        var content = document.getElementById('red');
        content.innerHTML = '<a-entity id="red" gltf-model="./static/3D-file/Updated Assets from users/bicycleCrossing_textured.glb" look-at="[gps-projected-camera]" scale="10 10 10" gps-projected-entity-place="latitude: 1.308544; longitude: 103.849942" animation-mixer></a-entity>';
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
    //Cycling Path

    //Outside office 
    startCompass()
    target.latitude = 1.308544;
    target.longitude = 103.849942;

    showLoadingScreen();

    // Call calculateDistance with the appropriate coordinates
    distance = calculateDistance(current.latitude, current.longitude, target.latitude, target.longitude);

    if (distance <= 40) {
        openModalGreen();
    }

    if (document.getElementById('greenOff')){
        
        // Turning Green On
        document.getElementById('greenOff').id = 'green';
        var content = document.getElementById('green')
        // content.innerHTML = '<a-entity id="green" material="color: green" geometry="primitive: box" gps-projected-entity-place="latitude: 1.3082540241124714; longitude: 103.84929645038089" scale="10 10 10"></a-entity>'
        content.innerHTML = '<a-image id="green" src="./static/images/2D_Assets_low_res/CyclingPath_4k.png" look-at="[camera]" scale="10 10 10" gps-projected-entity-place="latitude: 1.308544; longitude: 103.849942"></a-image>';
        // Hide Loading Screen after 2 seconds
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

function selectYellow(){
    //Foot Path

    //Outside office 
    startCompass()
    target.latitude = 1.308544;
    target.longitude = 103.849942;

    showLoadingScreen();

    // Call calculateDistance with the appropriate coordinates
    distance = calculateDistance(current.latitude, current.longitude, target.latitude, target.longitude);

    if (distance <= 40) {
        openModalYellow();
    }
    

    if (document.getElementById('yellowOff')){
        // Turning Yellow On
        document.getElementById('yellowOff').id = 'yellow';
        var content = document.getElementById('yellow')
        content.innerHTML = '<a-image  id="yellow" src="./static/images/2D_Assets_low_res/FootPath.png" look-at="[gps-projected-camera]" scale="10 10 10" gps-projected-entity-place="latitude: 1.308544; longitude: 103.849942"></a-image>';
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

function selectBlue(){
    //Wayfinding
    
    //Outside office 
    startCompass()
    target.latitude = 1.308544;
    target.longitude = 103.849942;

    showLoadingScreen();

    // Call calculateDistance with the appropriate coordinates
    distance = calculateDistance(current.latitude, current.longitude, target.latitude, target.longitude);

    if (distance <= 40) {
        openModalBlue();
    }
    
    if (document.getElementById('blueOff')){
        // Turning Blue On
        document.getElementById('blueOff').id = 'blue';
        var content = document.getElementById('blue')
        content.innerHTML = '<a-image  id="blue" src="./static/images/2D_Assets_low_res/Wayfinding_grabbing.png" look-at="[gps-projected-camera]" scale="10 10 10" gps-projected-entity-place="latitude: 1.308544; longitude: 103.849942"></a-image>';
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

    //Outside office 
    startCompass()
    target.latitude = 1.308544;
    target.longitude = 103.849942;

    showLoadingScreen();

    // Call calculateDistance with the appropriate coordinates
    distance = calculateDistance(current.latitude, current.longitude, target.latitude, target.longitude);

    if (distance <= 40) {
        openModalYellow();
    }
    
    if (document.getElementById('orangeOff')){
        // Turning orange On
        document.getElementById('orangeOff').id = 'orange';
        var content = document.getElementById('orange')
        content.innerHTML = '<a-image  id="orange" src="./static/images/2D_Assets_low_res/YellowBox_sitting.png" look-at="[gps-projected-camera]" scale="10 10 10" gps-projected-entity-place="latitude: 1.308544; longitude: 103.849942"></a-image>';
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

/* All Locations

//659
    startCompass()
    target.latitude = 1.4020492;
    target.longitude = 103.7479795;

//Blk 673B
    startCompass()
    target.latitude = 1.4009471;
    target.longitude = 103.7474082;

// Blk 673
    startCompass()
    target.latitude = 1.4012957;
    target.longitude = 103.7478212;

// Carpark
    startCompass()
    target.latitude = 1.4020492;
    target.longitude = 103.7479795;

//7-11
    startCompass()
    target.latitude = 1.4029823;
    target.longitude = 103.7493179;


//Little India MRT
    startCompass()
    target.latitude = 1.306710; 
    target.longitude = 103.849284;
    

//Mobility Gallery
    startCompass()
    target.latitude = 1.308234;
    target.longitude = 103.849569;
    

//Block 6
    startCompass()
    target.latitude = 1.308608;
    target.longitude = 103.849900;
    

//Blk 5A
    startCompass()
    target.latitude = 1.308838;
    target.longitude = 103.849601;
    

//LTA Auditorium
    startCompass()
    target.latitude = 1.308685;
    target.longitude = 103.849421;
    


 //Woodlands Lib
    startCompass()
    target.latitude = 1.434903;
    target.longitude = 103.787336;


//Blk 365
    startCompass()
    target.latitude = 1.434200;
    target.longitude = 103.787520;


//Blk 364
    startCompass()
    target.latitude = 1.4340948;
    target.longitude = 103.786403;


//912 Bus stop
    startCompass()
    target.latitude = 1.4345781;
    target.longitude = 103.7860129;


//Woodlands MRT
    startCompass()
    target.latitude = 1.4365677;
    target.longitude = 103.7862248;



Template
    startCompass()
    target.latitude = ;
    target.longitude = ;

*/

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
function init() {
    // startBtn.addEventListener("click", startCompass);
    navigator.geolocation.watchPosition(setCurrentPosition,null,geolocationOptions);
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
    var distance = R * c; // Distance in km
    distance = distance * 1000; // Convert to meters
    var distanceElement = document.getElementById("distanceFromTarget");

    if (distance <= 20000) {
        // Display the actual distance
        distanceElement.innerHTML = Math.floor(distance) + "m";
    } else {
        // Display '0.00m' for distances above 20,000 meters
        distanceElement.innerHTML = '0m';
    }
    }}

// Modals

    // Function to open the red modal
function openModalRed() {
    var modalRed = document.getElementById('modalRed');
    modalRed.style.display = 'block';
}

// Function to open the green modal
function openModalGreen() {
    var modalGreen = document.getElementById('modalGreen');
    modalGreen.style.display = 'block';
}

// Function to open the yellow modal
function openModalYellow() {
    var modalYellow = document.getElementById('modalYellow');
    modalYellow.style.display = 'block';
}

// Function to open the blue modal
function openModalBlue() {
    var modalBlue = document.getElementById('modalBlue');
    modalBlue.style.display = 'block';
}

// Function to open the orange modal
function openModalOrange() {
    var modalOrange = document.getElementById('modalOrange');
    modalOrange.style.display = 'block';
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



    //Get the modal
    var modal = document.getElementById("modalMap");

    //Getting the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    function toggleModal(){
        modal.style.display="block";
    }

    span.onclick = function (){
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
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