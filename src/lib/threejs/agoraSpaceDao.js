import {
  Vector3,
  PerspectiveCamera,
  Scene,
  Clock,
  TextureLoader,
  Object3D,
  IcosahedronGeometry,
  MeshMatcapMaterial,
  Mesh,
  SphereGeometry,
  MeshBasicMaterial,
  PlaneGeometry,
  WebGLRenderer
} from 'three';
import { createBubbleMaterial } from './customShader';

let renderer,
  camera,
  scene,
  clock,
  centerAxis,
  bigBubbleMaterial,
  bigBubbleGeometry,
  bigBubble,
  smallBubbleGeometry,
  video;

let isSafariBrowser = false;
let ANIMATE = false;

export const startAnimation = () => (ANIMATE = true);

const smallBubblesData = [
  {
    color: 0x000000,
    position: new Vector3(1.5, 0, 0),
    object: null,
    image: '/images/logos/witnet.svg'
  },
  {
    color: 0xc9fba6,
    position: new Vector3(-1.5, 0.5, 0),
    object: null,
    image: '/images/logos/seedclub.svg'
  },
  {
    color: 0xf4f4f4,
    position: new Vector3(0.25, 0.8, -1.5),
    object: null,
    image: '/images/logos/aragon.svg'
  },
  {
    color: 0xf4f4f4,
    position: new Vector3(-1, 1.2, 1),
    object: null,
    image: '/images/logos/colony.svg'
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

  const elapsedTime = clock.getElapsedTime();

  // Update the necessary uniforms
  customUniforms.uTime.value = elapsedTime;

  smallBubblesData.forEach((bubble) => bubble.object.lookAt(camera.position));

  // Intro animation
  if (ANIMATE && bigBubble.position.y < 0.64 && video) {
    bigBubble.position.y += (video.currentTime / 12) * 0.64;
    if (bigBubble.position.y >= 0.64) ANIMATE = false;
  }

  // If we don't need to animate (Safari PLS), then just put the bubble in the right position
  if (isSafariBrowser) bigBubble.position.y = 0.5;

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

export const initThreeJS = (element, isSafari) => {
  isSafariBrowser = isSafari;
  const rect = element.getBoundingClientRect();

  // Camera
  camera = new PerspectiveCamera(45, rect.width / rect.height, 0.01, 10);
  camera.position.z = 6.4;

  // Scene
  scene = new Scene();

  // Clock
  clock = new Clock();

  // Bubble texture
  const textureLoader = new TextureLoader();
  const matCapTexture = textureLoader.load('/images/bubble-matcap.png');

  centerAxis = new Object3D();
  centerAxis.position.y = -0.6;

  bigBubbleGeometry = new IcosahedronGeometry(1.2, 24);
  bigBubbleMaterial = new MeshMatcapMaterial({
    matcap: matCapTexture
  });
  bigBubbleMaterial.onBeforeCompile = (shader) => createBubbleMaterial(shader, customUniforms);

  bigBubble = new Mesh(bigBubbleGeometry, bigBubbleMaterial);
  bigBubble.position.y = -2;

  smallBubbleGeometry = new SphereGeometry(0.6, 32);

  // Setting up the positions
  smallBubblesData.forEach((bubble) => {
    const currentMaterial = new MeshBasicMaterial({
      color: bubble.color
    });
    bubble.object = new Mesh(smallBubbleGeometry, currentMaterial);
    bubble.object.position.set(bubble.position.x, bubble.position.y, bubble.position.z);
    bubble.object.scale.set(0.5, 0.5, 0.5);

    const imagePlane = new Mesh(
      new PlaneGeometry(0.5, 0.5),
      new MeshBasicMaterial({ map: textureLoader.load(bubble.image), transparent: true })
    );

    bubble.object.add(imagePlane);
    imagePlane.position.z = 0.7;

    centerAxis.add(bubble.object);
  });

  bigBubble.add(centerAxis);
  scene.add(bigBubble);

  video = document.getElementById('agora-space-dao-video');

  // Renderer
  renderer = new WebGLRenderer({
    antialias: true,
    alpha: true,
    canvas: element
  });
  renderer.setClearColor(0x252525, 0);

  resizeThreeJS(rect.width, rect.height);
  animate();
};
