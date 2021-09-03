import { noise } from '$lib/threejs/noise';

export const vertexShaderHead = `
  uniform float uTime;
  uniform float uSpeed;
  uniform float uNoiseDensity;
  uniform float uNoiseStrength;

  ${noise}
`;

export const vertexShaderBody = `
  float t = uTime * uSpeed;
  float distortion = pnoise((normal + t) * uNoiseDensity, vec3(10.0)) * uNoiseStrength;

  vec3 pos = position + (normal * distortion);
    
  vNormal = normal;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
`;

export const createBubbleMaterial = (shader, customUniforms) => {
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
