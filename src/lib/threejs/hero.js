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
  platon;

const sizes = {
  width: 0,
  height: 0
};

const mouse = new THREE.Vector2(-Infinity, -Infinity);

const raycaster = new THREE.Raycaster();

const customUniforms = {
  uTime: { value: 0 },
  uSpeed: { value: 0.25 },
  uNoiseDensity: { value: 2.5 },
  uNoiseStrength: { value: 0.1 }
};

const isVideoPlaying = (video) =>
  !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);

const animate = () => {
  requestAnimationFrame(animate);

  // Update the necessary uniforms
  customUniforms.uTime.value = clock.getElapsedTime();

  // Cast a ray with the raycaster in the "mouse direction"
  raycaster.setFromCamera(mouse, camera);

  const objectsToTest = [bubble, platon];
  const intersects = raycaster.intersectObjects(objectsToTest);

  if (intersects?.length > 0) {
    if (video.currentTime === 0) {
      video.play();
    }

    if (
      video.currentTime >= video.duration / 2 - 0.015 &&
      video.currentTime <= video.duration / 2 + 0.015
    ) {
      video.pause();
    }

    if (bubble.position.x < 0.28 && isVideoPlaying(video)) {
      bubble.position.x += 0.0016;
      bubble.rotation.z -= Math.PI * 0.0004;
    }
  } else {
    if (video.currentTime > 0) {
      video.play();
    } else {
      video.pause();
    }

    if (bubble.position.x > 0.2 && isVideoPlaying(video)) {
      bubble.position.x -= 0.0016;
      bubble.rotation.z += Math.PI * 0.0004;
    }
  }

  renderer.render(scene, camera);
};

export const resizeThreeJS = (w, h) => {
  sizes.width = w;
  sizes.height = h;

  if (camera && renderer) {
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
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
  platonMaterial = new THREE.MeshBasicMaterial({
    map: platonVideoTexture,
    transparent: true
  });
  platon = new THREE.Mesh(platonGeometry, platonMaterial);
  platon.position.set(0, -0.55, 1);
  scene.add(platon);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  video.currentTime = 0;

  // Needed for the raycaster
  if (element) {
    element.addEventListener('mousemove', (e) => {
      mouse.x = (e.offsetX / sizes.width) * 2 - 1;
      mouse.y = -(e.offsetY / sizes.height) * 2 + 1;
    });

    element.addEventListener('mouseleave', () => {
      mouse.x = -Infinity;
      mouse.y = -Infinity;
    });
  }

  // Renderer
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    canvas: element
  });
  renderer.setClearColor(0x252525, 0);

  resizeThreeJS(rect.width, rect.height);
  animate();

  callback();
};
