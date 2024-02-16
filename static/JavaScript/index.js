// Function to initialize geolocation and device orientation. Runs automatically.
function init() {
    // Add your initialization code here
    navigator.geolocation.watchPosition(setCurrentPosition, null, geolocationOptions);
    if (!isIOS) {
        window.addEventListener("deviceorientationabsolute", runCalculation);
    }

    // Start the UI updates
    updateUI();
}

// Function to update the rotation of an entity to always face the camera
function updateEntityLookAt(entityId) {
    const camera = document.querySelector("[gps-projected-camera]");
    const entity = document.getElementById(entityId);

    if (camera && entity) {
        const entityPosition = entity.object3D.position.clone();
        const cameraPosition = camera.object3D.position.clone();

        const direction = new THREE.Vector3();
        direction.subVectors(cameraPosition, entityPosition).normalize();

        const rotationY = Math.atan2(direction.x, direction.z);
        const rotationX = Math.atan2(Math.sqrt(direction.x * direction.x + direction.z * direction.z), direction.y);

        entity.setAttribute("rotation", { x: THREE.Math.radToDeg(rotationX), y: THREE.Math.radToDeg(rotationY), z: 0 });
    }
}

// Function to create or update an entity
function createOrUpdateEntity(id, attributes) {
    let entity = document.getElementById(id);
    if (!entity) {
        entity = document.createElement('a-entity');
        entity.setAttribute('id', id);
        document.querySelector('a-scene').appendChild(entity);
    }

    for (const [key, value] of Object.entries(attributes)) {
        entity.setAttribute(key, value);
    }

    // Add look-at attribute if present
    if (attributes.lookAt) {
        entity.setAttribute('look-at', attributes.lookAt);
    }
}

// Function to turn off specified entities
function turnOffEntities(ids) {
    ids.forEach(id => {
        const entity = document.getElementById(id);
        if (entity) {
            entity.id = `${id}Off`;
            entity.innerHTML = '';
        }
    });
}

function selectRed(){
    //Bicycle Crossing
    
    //Boss's Car Park
    startCompass()
    target.latitude = 1.308664;
    target.longitude = 103.849736;

    createOrUpdateEntity('red', {
        'gltf-model': './static/3D-file/Updated Assets from users/bicycleCrossing_textured.glb',
        'scale': '10 10 10',
        'gps-projected-entity-place': 'latitude: 1.308664; longitude: 103.849736',
        'rotation': '0 90 0',
        'animation-mixer': '',
        'lookAt': '[gps-projected-camera]'
    });

    turnOffEntities(['green', 'yellow', 'blue', 'orange']);
}

function selectGreen(){
    //Where Boss Seats
    startCompass()
    target.latitude = 1.308538;
    target.longitude = 103.849886;

    createOrUpdateEntity('green', {
        'src': './static/images/2D assets from users/CyclingPath_4k.png',
        'look-at': '[gps-projected-camera]',
        'scale': '10 10 10',
        'gps-projected-entity-place': 'latitude: 1.308664; longitude: 103.849736',
    });

    turnOffEntities(['red', 'yellow', 'blue', 'orange']);

}

function selectYellow(){
    //Foot Path
    
    //Woodlands Lib
    startCompass()
    target.latitude = 1.434888;
    target.longitude = 103.787359;

    createOrUpdateEntity('yellow', {
        'gltf-model': './static/3D-file/Updated Assets from users/bicycleCrossing_textured.glb',
        'scale': '10 10 10',
        'gps-projected-entity-place': 'latitude: 1.434888; longitude: 103.787359',
        'lookAt': '[gps-projected-camera]',
        'rotation': '0 90 0',
        'animation-mixer': ''
    });

    turnOffEntities(['red', 'green', 'blue', 'orange']);
}

function selectBlue(){
    //Wayfinding
    
    //Woodlands Lib
    startCompass()
    target.latitude = 1.434888;
    target.longitude = 103.787359;

    createOrUpdateEntity('blue', {
        'src': './static/images/2D assets from users/CyclingPath_4k.png',
        'look-at': '[gps-projected-camera]',
        'scale': '10 10 10',
        'gps-projected-entity-place': 'latitude: 1.434888; longitude: 103.787359',
    });

    turnOffEntities(['red', 'green', 'yellow', 'orange']);

    
}

function selectOrange(){
    //Woodlands MRT
    startCompass()
    target.latitude = 1.4365677;
    target.longitude = 103.7862248;

    if (document.getElementById('orangeOff')){
        // Turning orange On
        document.getElementById('orangeOff').id = 'orange';
        var content = document.getElementById('orange')
        content.innerHTML = '<a-entity id="orange" gltf-model="static/3D-file/Updated Assets from users/yellowBox_textured.glb" scale="1.5 1.5 1.5" gps-projected-entity-place="latitude: 1.4029823; longitude: 103.7493179" animation-mixer/>'
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

//My House
    startCompass()
    target.latitude = 1.401492;
    target.longitude = 103.749418;

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
    target.latitude = 1.434888;
    target.longitude = 103.787359;


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

// Function to update the rotation of an entity to always face the camera
function updateEntityLookAt(entityId) {
    const camera = document.querySelector("[gps-projected-camera]");
    const entity = document.getElementById(entityId);

    if (camera && entity) {
        const entityPosition = entity.object3D.position.clone();
        const cameraPosition = camera.object3D.position.clone();

        const direction = new THREE.Vector3();
        direction.subVectors(cameraPosition, entityPosition).normalize();

        const rotationY = Math.atan2(direction.x, direction.z);
        const rotationX = Math.atan2(Math.sqrt(direction.x * direction.x + direction.z * direction.z), direction.y);

        entity.setAttribute("rotation", { x: THREE.Math.radToDeg(rotationX), y: THREE.Math.radToDeg(rotationY), z: 0 });
    }
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
    var modal = document.getElementById("myModal");

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