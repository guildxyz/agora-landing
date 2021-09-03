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
  smallBubble2Geometry,
  smallBubble2;

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

const generateRandomSpeed = () => {
  // TODO
};

const generateRandomZPosition = () => {
  // TODO
};

const animate = () => {
  requestAnimationFrame(animate);

  // Update the necessary uniforms
  customUniforms.uTime.value = clock.getElapsedTime();

  // Update bubble position:
  smallBubble1.position.y += 0.002;
  smallBubble1.rotation.x += 0.001;
  smallBubble1.rotation.y += 0.001;

  // Reset its Y position & set a random X position
  if (smallBubble1.position.y > 5) {
    smallBubble1.position.y = -5;
    smallBubble1.position.x = generateRandomXPosition();
  }

  smallBubble2.position.y += 0.0015;
  smallBubble2.rotation.y += 0.0015;
  smallBubble2.rotation.z += 0.001;

  // Reset its position & set a random X position
  if (smallBubble2.position.y > 5) {
    smallBubble2.position.y = -6;

    smallBubble2.position.x = generateRandomXPosition();
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
  bigBubble.scale.set(1.8, 1.8, 1.8);
  scene.add(bigBubble);
  bigBubble.position.y = -0.8;

  smallBubble1Geometry = new THREE.IcosahedronGeometry(0.6, 32);
  smallBubble1 = new THREE.Mesh(smallBubble1Geometry, bubbleMaterial);
  scene.add(smallBubble1);
  // smallBubble1.position.set(2, -5, -2);
  smallBubble1.position.set(generateRandomXPosition(), -5, -2);

  smallBubble2Geometry = new THREE.IcosahedronGeometry(0.64, 48);
  smallBubble2 = new THREE.Mesh(smallBubble2Geometry, bubbleMaterial);
  scene.add(smallBubble2);
  // smallBubble2.position.set(-2.5, -6, -1.5);
  smallBubble2.position.set(generateRandomXPosition(), -6, -1.5);

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
