<script>
  import { onMount } from 'svelte';
  import { initThreeJS, resizeThreeJS, startAnimation } from '$lib/threejs/agoraSpaceDao';

  let showStartVideo = true;
  let windowWidth;
  let windowHeight;
  let scrollY;
  let videoContainer;
  let firstVideoSrc;
  let firstVideo;
  let loopingVideoSrc;
  let loopingVideo;
  let shouldPlay = true;
  let isSafari = false;

  const handleStartEnd = () => {
    showStartVideo = false;
    loopingVideo.play();
  };

  const scrollHandler = () => {
    if (!shouldPlay) return;
    const rect = videoContainer.getBoundingClientRect();
    if (rect.bottom < windowHeight + rect.bottom / 4) {
      firstVideo.play();
      shouldPlay = false;
    }
  };

  let canvas;
  let canvasWidth;
  let canvasHeight;
  $: canvasWidth && canvasHeight && resizeThreeJS(canvasWidth, canvasHeight);

  onMount(() => {
    isSafari =
      navigator?.userAgent?.indexOf('Safari') !== -1 &&
      navigator?.userAgent?.indexOf('Chrome') === -1;

    if (windowWidth > 768) {
      firstVideoSrc = '/animations/agora-space-dao-in.webm';
      loopingVideoSrc = '/animations/agora-space-dao.webm';
    } else {
      firstVideoSrc = '/animations/mobile-agora-space-dao-in.webm';
      loopingVideoSrc = '/animations/mobile-agora-space-dao.webm';
    }

    initThreeJS(canvas, isSafari);
  });
</script>

<svelte:window
  bind:innerWidth={windowWidth}
  bind:innerHeight={windowHeight}
  bind:scrollY
  on:scroll={scrollHandler}
/>

<section id="agora-space-dao" class="relative bg-agora-gray lg:h-screen">
  <!-- Background -->
  <div class="absolute hidden h-full w-full lg:flex">
    <div class="w-1/2 bg-agora-gray" />
    <div class="w-1/2 bg-agora-purple" />
  </div>

  <div
    class="custom-container relative grid h-full w-full overflow-hidden md:overflow-visible lg:grid-cols-5"
  >
    <!-- Left side -->
    <div
      class="relative order-2 h-[80vh] bg-agora-gray lg:order-1 lg:col-span-3 lg:h-auto"
      bind:clientWidth={canvasWidth}
      bind:clientHeight={canvasHeight}
    >
      <div
        class="absolute left-1/2 bottom-0 flex w-full max-w-screen-md -translate-x-1/2 transform items-end"
        bind:this={videoContainer}
      >
        <div class="relative w-full" style={`height: ${canvasHeight}px`}>
          {#if isSafari}
            <picture>
              <source srcset="/images/agora-space-dao.webp" type="image/webp" />
              <source srcset="/images/png/agora-space-dao.webp" type="image/png" />
              <img
                src="/images/png/agora-space-dao.webp"
                alt="Agora Space DAO"
                class="absolute bottom-0 left-0 px-16"
              />
            </picture>
          {:else}
            <video
              id="agora-space-dao-video"
              src={firstVideoSrc}
              muted
              playsinline
              preload="auto"
              width="100%"
              height="auto"
              on:ended={handleStartEnd}
              bind:this={firstVideo}
              on:play={startAnimation}
              class={`absolute bottom-0 left-0 max-h-full ${
                showStartVideo ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-75 delay-75`}
            >
              <source src={firstVideoSrc} type="video/webm" />
              <img
                src="/images/png/agora-space-dao.png"
                alt="Agora Space DAO"
                class="object-contain w-full h-full"
              />
            </video>
          {/if}

          {#if !isSafari}
            <video
              muted
              playsinline
              width="100%"
              height="auto"
              loop
              bind:this={loopingVideo}
              class={`absolute bottom-0 left-0 max-h-full ${
                showStartVideo ? 'opacity-0' : 'opacity-100'
              } transition-opacity duration-75`}
            >
              <source src={loopingVideoSrc} type="video/webm" />
            </video>
          {/if}
        </div>
      </div>

      <canvas
        bind:this={canvas}
        class="absolute inset-0"
        width={canvasWidth}
        height={canvasHeight}
      />
    </div>

    <!-- Right Side -->
    <div
      class="relative order-1 flex flex-col items-center justify-center space-y-4 overflow-hidden bg-agora-purple text-agora-white lg:order-2 lg:col-span-2 lg:min-h-full"
    >
      <!-- Background circle left -->
      <div
        class="absolute bottom-0 left-0 h-[50vw] w-[50vw] -translate-x-1/2 translate-y-1/2 transform bg-circle-pattern bg-cover bg-no-repeat md:h-[25vw] md:w-[25vw]"
      />
      <!-- Background circle right -->
      <div
        class="absolute top-0 right-0 h-[50vw] w-[50vw] translate-x-1/2 -translate-y-1/2 transform bg-circle-pattern bg-cover bg-no-repeat md:h-[25vw] md:w-[25vw]"
      />

      <!-- Content -->
      <div
        class="relative flex h-full flex-col items-center justify-center overflow-hidden px-4 py-28 text-center text-agora-white lg:px-20"
      >
        <h2
          class="mb-12 font-display text-3xl font-bold uppercase tracking-tight lg:text-4xl 2xl:text-5xl"
        >
          Agora Space Dao
        </h2>
        <p class="font-semibold lg:text-lg xl:text-xl 2xl:text-2xl">
          Our tools are collectively governed by a group of the most experienced Web3 builders,
          token community managers and DAOs.
        </p>
      </div>
    </div>
  </div>
</section>
