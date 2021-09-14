<script>
  import { onMount } from 'svelte';
  import { initThreeJS, resizeThreeJS, startAnimation } from '$lib/threejs/agoraSpaceDao';

  let showStartVideo = true;
  let windowHeight;
  let scrollY;
  let videoContainer;
  let firstVideo;
  let loopingVideo;

  const handleStartEnd = () => {
    showStartVideo = false;
    loopingVideo.play();
  };

  $: if (scrollY >= windowHeight && firstVideo && loopingVideo && showStartVideo) {
    const rect = videoContainer.getBoundingClientRect();
    if (rect.bottom <= windowHeight + rect.bottom / 2) {
      firstVideo.play();
      startAnimation();
    }
  }

  let canvas;
  let canvasWidth;
  let canvasHeight;
  $: canvasWidth && canvasHeight && resizeThreeJS(canvasWidth, canvasHeight);

  onMount(() => {
    initThreeJS(canvas);
  });
</script>

<svelte:window bind:innerHeight={windowHeight} bind:scrollY />

<section id="agora-space-dao" class="relative h-screen bg-agora-gray">
  <!-- Background -->
  <div class="absolute hidden lg:flex w-full h-full">
    <div class="bg-agora-gray w-1/2" />
    <div class="bg-agora-purple w-1/2" />
  </div>

  <div
    class="relative w-full custom-container lg:grid lg:grid-cols-5 h-full overflow-hidden md:overflow-visible"
  >
    <!-- Left side -->
    <div
      class="relative lg:col-span-3 bg-agora-gray"
      bind:clientWidth={canvasWidth}
      bind:clientHeight={canvasHeight}
    >
      <div
        class="absolute left-1/2 bottom-0 w-full max-w-screen-md h-full flex items-end transform -translate-x-1/2"
        bind:this={videoContainer}
      >
        <video
          src="/animations/agora-space-dao-in.webm"
          muted
          width="100%"
          height="auto"
          on:ended={handleStartEnd}
          bind:this={firstVideo}
          style={`display: ${showStartVideo ? 'block' : 'none'};`}
        />
        <video
          src="/animations/agora-space-dao.webm"
          muted
          width="100%"
          height="auto"
          loop
          bind:this={loopingVideo}
          style={`display: ${showStartVideo ? 'none' : 'block'};`}
        />
      </div>

      <canvas bind:this={canvas} class="absolute inset-0 w-full h-full" />
    </div>

    <!-- Right Side -->
    <div
      class="flex flex-col items-center justify-center space-y-4 relative lg:col-span-2 lg:min-h-full bg-agora-purple text-agora-white overflow-hidden"
    >
      <!-- Background circle left -->
      <div
        class="absolute bottom-0 left-0 w-[50vw] h-[50vw] md:w-[25vw] md:h-[25vw] transform -translate-x-1/2 translate-y-1/2 bg-circle-pattern bg-no-repeat bg-cover"
      />
      <!-- Background circle right -->
      <div
        class="absolute top-0 right-0 w-[50vw] h-[50vw] md:w-[25vw] md:h-[25vw] transform translate-x-1/2 -translate-y-1/2 bg-circle-pattern bg-no-repeat bg-cover"
      />

      <!-- Content -->
      <div
        class="relative flex flex-col items-center justify-center px-4 lg:px-20 py-28 h-full text-agora-white text-center overflow-hidden"
      >
        <h2
          class="mb-12 text-3xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight font-display uppercase"
        >
          Agora Space Dao
        </h2>
        <p class="font-semibold 2xl:text-2xl">
          Our tools are collectively governed by a group of the most experienced Web3 builders,
          token community managers and DAOs.
        </p>
      </div>
    </div>
  </div>
</section>
