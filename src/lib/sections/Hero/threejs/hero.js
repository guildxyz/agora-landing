import * as THREE from 'three';
import { noise } from './noise';

let renderer, camera, scene, clock, bubbleGeometry, bubbleMaterial, bubble;

const vertexShaderHead = `
  uniform float uTime;
  uniform float uSpeed;
  uniform float uNoiseDensity;
  uniform float uNoiseStrength;

  ${noise}
`;

const vertexShaderBody = `
  float t = uTime * uSpeed;
  float distortion = pnoise((normal + t) * uNoiseDensity, vec3(10.0)) * uNoiseStrength;

  vec3 pos = position + (normal * distortion);
    
  vNormal = normal;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
`;

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
  bubbleMaterial.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = customUniforms.uTime;
    shader.uniforms.uSpeed = customUniforms.uSpeed;
    shader.uniforms.uNoiseDensity = customUniforms.uNoiseDensity;
    shader.uniforms.uNoiseStrength = customUniforms.uNoiseStrength;

    // Adding the necessary code to the vertex shader's header
    shader.vertexShader = shader.vertexShader.replace(
      '#include <common>',
      `

          #include <common>
  
          ${vertexShaderHead}
        `
    );

    shader.vertexShader = shader.vertexShader.replace(
      '#include <fog_vertex>',
      `
          #include <fog_vertex>
  
          ${vertexShaderBody}
        `
    );
  };

  bubble = new THREE.Mesh(bubbleGeometry, bubbleMaterial);
  bubble.position.set(0.2, 1.5, 0);
  bubble.scale.set(1, 0.8, 1);
  scene.add(bubble);

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
