function selectRed(){
    startCompass()
    target.latitude = 1.3068866777147514;
    target.longitude = 103.84940595788129;

    if (document.getElementById('redOff')){
        // Turning Red On
        document.getElementById('redOff').id = 'red';
        var content = document.getElementById('red')
        // content.innerHTML = '<a-entity id="red" material="color: red" geometry="primitive: box" gps-projected-entity-place="latitude: 1.3068866777147514; longitude: 103.84940595788129" scale="10 10 10"></a-entity>'
        content.innerHTML = '<a-entity id="red" gltf-model="./static/3D-file/gltf/chinese_dragon_trim/test1.gltf" scale="0.001 0.001 0.001" gps-projected-entity-place="latitude: 1.3068866777147514; longitude: 103.84940595788129" animation-mixer/>'
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
}

function selectGreen(){
    startCompass()
    target.latitude = 1.3082540241124714;
    target.longitude = 103.84929645038089;

    if (document.getElementById('greenOff')){
        // Turning Green On
        document.getElementById('greenOff').id = 'green';
        var content = document.getElementById('green')
        // content.innerHTML = '<a-entity id="green" material="color: green" geometry="primitive: box" gps-projected-entity-place="latitude: 1.3082540241124714; longitude: 103.84929645038089" scale="10 10 10"></a-entity>'
        content.innerHTML = '<a-entity id="green" gltf-model="./static/3D-file/glb/dragon_island.glb" scale="0.2 0.2 0.2" gps-projected-entity-place="latitude: 1.3082540241124714; longitude: 103.84929645038089" animation-mixer/>'
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
}

function selectYellow(){
    startCompass()
    target.latitude = 1.309015643055378;
    target.longitude = 103.84985852957914;

    if (document.getElementById('yellowOff')){
        // Turning Yellow On
        document.getElementById('yellowOff').id = 'yellow';
        var content = document.getElementById('yellow')
        content.innerHTML = '<a-entity id="yellow" material="color: yellow" geometry="primitive: box" gps-projected-entity-place="latitude: 1.309015643055378; longitude: 103.84985852957914" scale="10 10 10"></a-entity>'
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
    document.getElementById("distanceFromTarget").innerHTML =
        distance.toFixed(2) + "m";
    }
}

// starts updating the UI.
function updateUI() {
    // Update arrow rotation
    const arrow = document.querySelector(".arrow");
    arrow.style.transform = `translate(-50%, -50%) rotate(${direction}deg)`;
    requestAnimationFrame(updateUI);
}

// function littleIndie() {
//     startCompass()
//     target.latitude = 1.3068866777147514;
//     target.longitude = 103.84940595788129;
// };
init();