var loadingTimeout;
var distance; //Declaring this as a global Variable instead
var modal;
var colour = 'black';
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

function selectRed(){
    //Bicycle Crossing, 
    // Expo, closer to road: 1.3335879, 103.9570899
     ///Healthy Living Zone , 1.308356, 103.849796
    startCompass()
    // target.latitude = 1.3333318;
    // target.longitude = 103.9575690;
    target.latitude = 1.308356;
    target.longitude = 103.849796;

    showLoadingScreen();

    colour = 'red';

    if (document.getElementById('redOff')) {
        // Turning Red On
        document.getElementById('redOff').id = 'red';
        var content = document.getElementById('red');
        // content.innerHTML = '<a-entity id="red" gltf-model="./static/3dModels/GLB/fireExtinguisher/fire_extinguisher.glb" scale="2 2 2" gps-projected-entity-place="latitude: 1.3333318; longitude: 103.9575690" animation-mixer/>'
        content.innerHTML = '<a-entity id="red" gltf-model="./static/3dModels/GLB/fireExtinguisher/fire_extinguisher.glb" scale="2 2 2" gps-projected-entity-place="latitude: 1.308356; longitude: 103.849796" animation-mixer/>'

    }

    if(document.getElementById('green')){
        // Turning Green Off
        document.getElementById('green').id = 'greenOff';
        var content = document.getElementById('greenOff')
        content.innerHTML = '<a-entity id="greenOff"></a-entity>'
    }

    if(document.getElementById('orange')){
        // Turning orange Off
        document.getElementById('orange').id = 'orangeOff';
        var content = document.getElementById('orangeOff')
        content.innerHTML = '<a-entity id="orangeOff"></a-entity>'
    }
}

function showRed(){
    if (document.getElementById('redOff')){
        // Turning Red On
        document.getElementById('redOff').id = 'red';
        var content = document.getElementById('red')
        // content.innerHTML = '<a-entity id="red" gltf-model="./static/3dModels/GLB/fireExtinguisher/fire_extinguisher.glb" scale="2 2 2" gps-projected-entity-place="latitude: 1.401514; longitude: 103.749411" animation-mixer/>'
        content.innerHTML = '<a-entity id="red" gltf-model="./static/3dModels/GLB/fireExtinguisher/fire_extinguisher.glb" scale="2 2 2" gps-projected-entity-place="latitude: 1.308356; longitude: 103.849796" animation-mixer/>'

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
    // Expo, middle, aiming at esclators: 1.3334206, 103.9572350
    startCompass()
    // target.latitude = 1.3334206;
    // target.longitude = 103.9572350; 
    target.latitude = 1.308356;
    target.longitude = 103.849796;


    showLoadingScreen();

    colour = 'green';

    if (document.getElementById('greenOff')){ 
        // Turning Green On
        document.getElementById('greenOff').id = 'green';
        var content = document.getElementById('green')
        // content.innerHTML = '<a-entity id="green" gltf-model="./static/3dModels/GLB/helmet/construction_helmet.glb" scale="2 2 2" gps-projected-entity-place="latitude: 1.3334206; longitude: 103.9572350" animation-mixer/>'
        content.innerHTML = '<a-entity id="green" gltf-model="./static/3dModels/GLB/helmet/construction_helmet.glb" scale="2 2 2" gps-projected-entity-place="latitude: 1.308356; longitude: 103.849796" animation-mixer/>'

    }

    if(document.getElementById('red')){
        // Turning Red Off
        document.getElementById('red').id = 'redOff';
        var content = document.getElementById('redOff')
        content.innerHTML = '<a-entity id="redOff"></a-entity>'
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
        // content.innerHTML = '<a-entity id="green" gltf-model="./static/3dModels/GLB/helmet/construction_helmet.glb" scale="2 2 2" gps-projected-entity-place="latitude: 1.3334206; longitude: 103.9572350" animation-mixer/>'
        content.innerHTML = '<a-entity id="green" gltf-model="./static/3dModels/GLB/helmet/construction_helmet.glb" scale="2 2 2" gps-projected-entity-place="latitude: 1.308356; longitude: 103.849796" animation-mixer/>'
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

function selectOrange(){
    // Closer to hall 1: 1.3333318, 103.9575690
    //Bicycle Park (Reimagine Active Mobility Zone)
    startCompass()
    // target.latitude = 1.3335879;
    // target.longitude = 103.9570899;
    target.latitude = 1.308356;
    target.longitude = 103.849796;
    

    showLoadingScreen();

    colour = 'orange';

    if (document.getElementById('orangeOff')) {
        // Turning Orange On
        document.getElementById('orangeOff').id = 'orange';
        var content = document.getElementById('orange');
        // content.innerHTML = '<a-entity id="orange" gltf-model="./static/3dModels/GLB/trafficCone/traffic_cone_game_ready.glb" scale="2 2 2" gps-projected-entity-place="latitude: 1.3335879; longitude: 103.9570899" animation-mixer/>'
        content.innerHTML = '<a-entity id="orange" gltf-model="./static/3dModels/GLB/trafficCone/traffic_cone_game_ready.glb" scale="2 2 2" gps-projected-entity-place="latitude: 1.308356; longitude: 103.849796" animation-mixer/>'

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

}

function showOrange(){
    if (document.getElementById('orangeOff')){
        // Turning Orange On
        document.getElementById('orangeOff').id = 'orange';
        var content = document.getElementById('orange')
        // content.innerHTML = '<a-entity id="orange" gltf-model="./static/3dModels/GLB/trafficCone/traffic_cone_game_ready.glb" scale="2 2 2" gps-projected-entity-place="latitude: 1.3335879; longitude: 103.9570899" animation-mixer/>'
        content.innerHTML = '<a-entity id="orange" gltf-model="./static/3dModels/GLB/trafficCone/traffic_cone_game_ready.glb" scale="2 2 2" gps-projected-entity-place="latitude: 1.308356; longitude: 103.849796" animation-mixer/>'
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
                    colour = 'red2';
                    break;
                }
            case 'red2':
                if (distance < 10){ 
                    hideRed();
                    if(isViewed == false){
                        toggleModalRed15();
                        isViewed = true;
                    }
                } else if (distance >= 10){
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
                    isViewed = false;
                    colour = 'green2';
                }
                break;
            case 'green2':
                if (distance < 10){ 
                    hideGreen();
                    if(isViewed == false){
                        isViewed = true; 
                    }
                } else if (distance >= 10){
                    showGreen();
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
                    colour = 'orange2';
                    isViewed = false;
                }
                break;
            case 'orange2':
                if (distance < 10){ 
                    hideOrange();
                    if(isViewed == false){
                        isViewed = true;
                    }
                }else if (distance >= 10){
                    showOrange();
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