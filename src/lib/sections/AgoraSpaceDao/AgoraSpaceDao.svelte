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
    const rect = videoContainer.getBoundingClientRect();
    if (rect.bottom < windowHeight + rect.bottom / 4 && shouldPlay) {
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

<section id="agora-space-dao" class="relative lg:h-screen bg-agora-gray">
  <!-- Background -->
  <div class="absolute hidden lg:flex w-full h-full">
    <div class="bg-agora-gray w-1/2" />
    <div class="bg-agora-purple w-1/2" />
  </div>

  <div
    class="relative w-full custom-container grid lg:grid-cols-5 h-full overflow-hidden md:overflow-visible"
  >
    <!-- Left side -->
    <div
      class="order-2 lg:order-1 relative lg:col-span-3 h-[80vh] lg:h-auto bg-agora-gray"
      bind:clientWidth={canvasWidth}
      bind:clientHeight={canvasHeight}
    >
      <div
        class="absolute left-1/2 bottom-0 w-full max-w-screen-md flex items-end transform -translate-x-1/2"
        bind:this={videoContainer}
      >
        <div class="relative w-full" style={`height: ${canvasHeight}px`}>
          {#if isSafari}
            <img
              src="/images/agora-space-dao.png"
              alt="Agora Space DAO"
              class="absolute bottom-0 left-0 px-16"
            />
          {:else}
            <video
              id="agora-space-dao-video"
              src={firstVideoSrc}
              muted
              playsinline
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
                src="/images/agora-space-dao.png"
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
      class="order-1 lg:order-2 flex flex-col items-center justify-center space-y-4 relative lg:col-span-2 lg:min-h-full bg-agora-purple text-agora-white overflow-hidden"
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
        <p class="font-semibold lg:text-lg xl:text-xl 2xl:text-2xl">
          Our tools are collectively governed by a group of the most experienced Web3 builders,
          token community managers and DAOs.
        </p>
      </div>
    </div>
  </div>
</section>
