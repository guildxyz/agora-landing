import * as THREE from 'three';
import { createBubbleMaterial } from './customShader';

let renderer,
  camera,
  scene,
  clock,
  centerAxis,
  bigBubbleMaterial,
  bigBubbleGeometry,
  bigBubble,
  smallBubbleGeometry;

let ANIMATE = false;

export const startAnimation = () => (ANIMATE = true);

const smallBubblesData = [
  {
    color: 0x000000,
    position: new THREE.Vector3(1.5, 0, 0),
    object: null,
    image: '/images/logos/witnet.svg'
  },
  {
    color: 0xc9fba6,
    position: new THREE.Vector3(-1.5, 0.5, 0),
    object: null,
    image: '/images/logos/seedclub.svg'
  },
  {
    color: 0xf4f4f4,
    position: new THREE.Vector3(0.25, 0.8, -1.5),
    object: null,
    image: '/images/logos/aragon.svg'
  },
  {
    color: 0xf4f4f4,
    position: new THREE.Vector3(-1, 1.2, 1),
    object: null,
    image: '/images/logos/colony.svg'
  },
  {
    color: 0x304ffe,
    position: new THREE.Vector3(1, 1, 1),
    object: null,
    image: '/images/logos/dxdao.svg'
  }
];

const customUniforms = {
  uTime: { value: 0 },
  uSpeed: { value: 0.25 },
  uNoiseDensity: { value: 2.5 },
  uNoiseStrength: { value: 0.1 }
};

const animate = () => {
  requestAnimationFrame(animate);

  // Update the necessary uniforms
  customUniforms.uTime.value = clock.getElapsedTime();

  smallBubblesData.forEach((bubble) => bubble.object.lookAt(camera.position));

  // Intro animation
  if (ANIMATE && bigBubble.position.y < 0.64 && centerAxis.position.y < 0) {
    bigBubble.position.y += 0.028;
    centerAxis.position.y += 0.028;
  }

  // Updating the main axis rotation
  centerAxis.rotation.y = clock.getElapsedTime() * 0.2;

  renderer.render(scene, camera);
};

export const resizeThreeJS = (w, h) => {
  if (camera && renderer) {
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
};

export const initThreeJS = (element) => {
  const rect = element.getBoundingClientRect();

  // Camera
  camera = new THREE.PerspectiveCamera(45, rect.width / rect.height, 0.01, 10);
  camera.position.z = 6.4;

  // Scene
  scene = new THREE.Scene();

  // Clock
  clock = new THREE.Clock();

  // Bubble texture
  const textureLoader = new THREE.TextureLoader();
  const matCapTexture = textureLoader.load('/images/bubble-matcap.png');

  centerAxis = new THREE.Object3D();
  centerAxis.position.y = -2.6;

  bigBubbleGeometry = new THREE.IcosahedronGeometry(0.8, 64);
  bigBubbleMaterial = new THREE.MeshMatcapMaterial({
    matcap: matCapTexture
  });
  bigBubbleMaterial.onBeforeCompile = (shader) => createBubbleMaterial(shader, customUniforms);

  bigBubble = new THREE.Mesh(bigBubbleGeometry, bigBubbleMaterial);
  bigBubble.scale.set(1.5, 1.5, 1.5);
  bigBubble.position.y = -2;
  scene.add(bigBubble);

  smallBubbleGeometry = new THREE.IcosahedronGeometry(0.6, 32);

  // Setting up the positions
  smallBubblesData.forEach((bubble) => {
    const currentMaterial = new THREE.MeshMatcapMaterial({
      color: bubble.color
    });
    currentMaterial.onBeforeCompile = (shader) => createBubbleMaterial(shader, customUniforms);
    bubble.object = new THREE.Mesh(smallBubbleGeometry, currentMaterial);
    bubble.object.position.set(bubble.position.x, bubble.position.y, bubble.position.z);
    bubble.object.scale.set(0.5, 0.5, 0.5);

    const imagePlane = new THREE.Mesh(
      new THREE.PlaneGeometry(0.5, 0.5),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(bubble.image), transparent: true })
    );

    bubble.object.add(imagePlane);
    imagePlane.position.z = 0.7;

    centerAxis.add(bubble.object);
  });

  scene.add(centerAxis);

  // Renderer
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    canvas: element
  });
  renderer.setClearColor(0x252525, 0);

  resizeThreeJS(rect.width, rect.height);
  animate();
};
