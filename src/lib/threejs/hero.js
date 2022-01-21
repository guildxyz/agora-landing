import {
  OrthographicCamera,
  Scene,
  Clock,
  TextureLoader,
  IcosahedronGeometry,
  MeshMatcapMaterial,
  Mesh,
  VideoTexture,
  RGBAFormat,
  PlaneGeometry,
  MeshBasicMaterial,
  WebGLRenderer
} from 'three';
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
  const elapsedTime = clock.getElapsedTime();

  // Update the necessary uniforms
  customUniforms.uTime.value = elapsedTime;

  if (!isVideoPlaying(video) && elapsedTime % 5 >= 0 && elapsedTime % 5 <= 1) {
    video.play();
  }

  const timing = -Math.sin(Math.abs(video.currentTime - video.duration / 2)) * 0.2;
  bubble.position.x = 0.064 + timing * 0.064;

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
  camera = new OrthographicCamera(-1, 1, 1, -1, 0.01, 10);
  camera.position.z = 1;

  // Scene
  scene = new Scene();

  // Clock
  clock = new Clock();

  // Texture
  const textureLoader = new TextureLoader();
  const matCapTexture = textureLoader.load('/images/bubble-matcap.png');

  // Object
  bubbleGeometry = new IcosahedronGeometry(1, 64);
  bubbleMaterial = new MeshMatcapMaterial({
    matcap: matCapTexture
  });

  // Modifying the vertex shader
  bubbleMaterial.onBeforeCompile = (shader) => createBubbleMaterial(shader, customUniforms);

  bubble = new Mesh(bubbleGeometry, bubbleMaterial);
  bubble.position.set(0, 0.55, -0.5);
  bubble.scale.set(0.2, 0.28, 0.2);
  scene.add(bubble);

  // Platon
  video = document.getElementById('platon-video');
  platonVideoTexture = new VideoTexture(video);
  platonVideoTexture.format = RGBAFormat;

  platonGeometry = new PlaneGeometry(1.64, 1.64);
  platonMaterial = new MeshBasicMaterial({
    map: platonVideoTexture,
    transparent: true
  });
  platon = new Mesh(platonGeometry, platonMaterial);
  platon.position.set(0, -0.25, 0);
  scene.add(platon);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  video.currentTime = 0;

  // Renderer
  renderer = new WebGLRenderer({
    antialias: true,
    alpha: true,
    canvas: element
  });
  renderer.setClearColor(0x252525, 0);

  resizeThreeJS(rect.width, rect.height);
  animate();

  callback();
};
