defineThreeUniverse(function (THREE) {

    var geometry = new THREE.BoxGeometry( 100, 100, 100 );
    var material = new THREE.MeshStandardMaterial( {color: 0x00ff00} );
    var cube = new THREE.Mesh( geometry, material );

    return cube;
});