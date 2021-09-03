import * as THREE from 'three';
import { createBubbleMaterial } from './customShader';

let renderer,
  camera,
  scene,
  clock,
  bubbleMaterial,
  bigBubbleGeometry,
  bigBubble,
  smallBubble1Geometry,
  smallBubble1,
  smallBubble1Speed,
  smallBubble2Geometry,
  smallBubble2,
  smallBubble2Speed;

const customUniforms = {
  uTime: { value: 0 },
  uSpeed: { value: 0.25 },
  uNoiseDensity: { value: 2.5 },
  uNoiseStrength: { value: 0.1 }
};

let latestRandomPosition = null;
const generateRandomXPosition = () => {
  let randomPosition = Math.random() * 11 - 5;

  if (latestRandomPosition) {
    while (
      (randomPosition < latestRandomPosition + 2 && randomPosition > latestRandomPosition - 2) ||
      (latestRandomPosition > 0 && randomPosition > 0) ||
      (latestRandomPosition < 0 && randomPosition < 0)
    ) {
      randomPosition = Math.random() * 11 - 5;
    }
  }

  if (randomPosition < 0 && randomPosition > -2) randomPosition -= 2;
  if (randomPosition > 0 && randomPosition < 2) randomPosition += 2;

  latestRandomPosition = randomPosition;
  return randomPosition;
};

const generateRandomSpeed = () => Math.random() * 0.005;

const generateRandomZPosition = () => Math.random() * 4 - 2;

const animate = () => {
  requestAnimationFrame(animate);

  // Update the necessary uniforms
  customUniforms.uTime.value = clock.getElapsedTime();

  // Update bubble position:
  smallBubble1.position.y += smallBubble1Speed;
  smallBubble1.rotation.x += 0.001;
  smallBubble1.rotation.y += 0.001;

  // Reset its Y position & set a random X position
  if (smallBubble1.position.y > 5) {
    smallBubble1Speed = generateRandomSpeed();
    smallBubble2.position.set(generateRandomXPosition(), -5, generateRandomZPosition());
  }

  smallBubble2.position.y += smallBubble2Speed;
  smallBubble2.rotation.y += 0.0015;
  smallBubble2.rotation.z += 0.001;

  // Reset its position & set a random X position
  if (smallBubble2.position.y > 5) {
    smallBubble2Speed = generateRandomSpeed();
    smallBubble2.position.set(generateRandomXPosition(), -6, generateRandomZPosition());
  }

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

  // Texture
  const textureLoader = new THREE.TextureLoader();
  const matCapTexture = textureLoader.load('/images/bubble-matcap.png');

  // Object
  bigBubbleGeometry = new THREE.IcosahedronGeometry(0.8, 64);
  bubbleMaterial = new THREE.MeshMatcapMaterial({
    matcap: matCapTexture
  });

  // Modifying the vertex shader
  bubbleMaterial.onBeforeCompile = (shader) => createBubbleMaterial(shader, customUniforms);

  bigBubble = new THREE.Mesh(bigBubbleGeometry, bubbleMaterial);
  bigBubble.scale.set(2, 2, 2);
  scene.add(bigBubble);
  bigBubble.position.y = -0.64;

  smallBubble1Geometry = new THREE.IcosahedronGeometry(0.6, 32);
  smallBubble1 = new THREE.Mesh(smallBubble1Geometry, bubbleMaterial);
  smallBubble1Speed = generateRandomSpeed();
  scene.add(smallBubble1);
  smallBubble1.position.set(generateRandomXPosition(), -5, generateRandomZPosition());

  smallBubble2Geometry = new THREE.IcosahedronGeometry(0.64, 48);
  smallBubble2 = new THREE.Mesh(smallBubble2Geometry, bubbleMaterial);
  smallBubble2Speed = generateRandomSpeed();
  scene.add(smallBubble2);
  smallBubble2.position.set(generateRandomXPosition(), -6, generateRandomZPosition());

  // Renderer
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    canvas: element
  });
  renderer.setClearColor(0x000000, 0);

  resizeThreeJS(rect.width, rect.height);
  animate();
};
