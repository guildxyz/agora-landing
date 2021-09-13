import * as THREE from 'three';
import { createBubbleMaterial } from './customShader';

let renderer,
  camera,
  scene,
  clock,
  bubbleGeometry,
  bubbleMaterial,
  bubble,
  platonGeometry,
  video,
  platonVideoTexture,
  platonMaterial,
  platon,
  interval;

const customUniforms = {
  uTime: { value: 0 },
  uSpeed: { value: 0.25 },
  uNoiseDensity: { value: 2.5 },
  uNoiseStrength: { value: 0.1 }
};

let HOVER = false;
let SPEEDUP = false;
const msPerFrame = 1000 / 60;
export const onPlatonHover = () => {
  // interval = setInterval(() => {
  //   console.log(video.currentTime, video.duration);
  //   if (video.currentTime < video.duration) {
  //     video.currentTime += 0.01;
  //     platonVideoTexture.needsUpdate = true;
  //   } else {
  //     clearInterval(interval);
  //   }
  // }, msPerFrame);
  HOVER = true;
  // SPEEDUP = true;
};
export const onPlatonBlur = () => {
  // interval = setInterval(() => {
  //   console.log(video.currentTime, video.duration);
  //   if (video.currentTime > 0) {
  //     video.currentTime -= 0.01;
  //   } else {
  //     clearInterval(interval);
  //   }
  // }, msPerFrame);
  // SPEEDUP = false;
  HOVER = false;
};

const animate = () => {
  requestAnimationFrame(animate);

  // Update the necessary uniforms
  customUniforms.uTime.value = clock.getElapsedTime();
  renderer.render(scene, camera);
};

export const resizeThreeJS = (w, h) => {
  if (camera && renderer) {
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
};

export const initThreeJS = (element, callback) => {
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
  bubbleGeometry = new THREE.IcosahedronGeometry(0.8, 64);
  bubbleMaterial = new THREE.MeshMatcapMaterial({
    matcap: matCapTexture
  });

  // Modifying the vertex shader
  bubbleMaterial.onBeforeCompile = (shader) => createBubbleMaterial(shader, customUniforms);

  bubble = new THREE.Mesh(bubbleGeometry, bubbleMaterial);
  bubble.position.set(0.2, 1.5, 0);
  bubble.scale.set(1, 0.8, 1);
  scene.add(bubble);

  // Platon
  video = document.getElementById('platon-video');
  platonVideoTexture = new THREE.VideoTexture(video);
  platonVideoTexture.format = THREE.RGBAFormat;

  platonGeometry = new THREE.PlaneGeometry(6, 3.8);
  platonMaterial = new THREE.MeshBasicMaterial({ map: platonVideoTexture, transparent: true });
  platon = new THREE.Mesh(platonGeometry, platonMaterial);
  platon.position.set(0, -0.55, 1);
  scene.add(platon);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  video.currentTime = 0.01;

  // Renderer
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    canvas: element
  });
  renderer.setClearColor(0x000000, 0);

  resizeThreeJS(rect.width, rect.height);
  animate();

  callback();
};
