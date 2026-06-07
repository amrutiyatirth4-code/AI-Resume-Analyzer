const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({
canvas:document.querySelector('#bg')
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

camera.position.z = 30;

const geometry =
new THREE.TorusKnotGeometry(
10,
3,
100,
16
);

const material =
new THREE.MeshStandardMaterial({
color:0x00ffff
});

const knot =
new THREE.Mesh(
geometry,
material
);

scene.add(knot);

const light =
new THREE.PointLight(
0xffffff,
2
);

light.position.set(
20,
20,
20
);

scene.add(light);

function animate(){

requestAnimationFrame(
animate
);

knot.rotation.x += 0.01;
knot.rotation.y += 0.01;

renderer.render(
scene,
camera
);
}

animate();