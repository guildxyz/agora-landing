<script>
  import { onMount } from 'svelte';
  import { initThreeJS, resizeThreeJS } from '$lib/threejs/agoraSpaceDao';

  let canvas;
  let canvasWidth;
  let canvasHeight;
  $: canvasWidth && canvasHeight && resizeThreeJS(canvasWidth, canvasHeight);

  onMount(() => {
    initThreeJS(canvas);
  });
</script>

<section
  id="agora-space-dao"
  class="relative h-screen bg-agora-gray"
  bind:clientWidth={canvasWidth}
  bind:clientHeight={canvasHeight}
>
  <canvas bind:this={canvas} class="absolute inset-0 w-full h-full" />
  <div class="relative container px-8 max-w-screen-md text-center">
    <h2
      class="mt-24 mb-12 text-3xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight font-display uppercase text-agora-pink-light"
    >
      Agora Space Dao
    </h2>
    <p class="font-semibold 2xl:text-2xl text-agora-white">
      Our tools are collectively governed by a group of the most experienced Web3 builders, token
      community managers and DAOs.
    </p>
  </div>
</section>
