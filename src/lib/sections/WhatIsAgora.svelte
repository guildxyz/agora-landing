<script>
  import { onMount } from 'svelte';

  let showStartVideo = true;
  let windowWidth;
  let windowHeight;
  let scrollY;
  let firstVideo;
  let videoWidth;
  let videoHeight;
  let videoCanvas;
  let loopingVideo;
  let firstVideoSrc;
  let loopingVideoSrc;
  let isSafari = false;

  $: ctx = videoCanvas?.getContext('2d');

  const handleStartEnd = () => {
    showStartVideo = false;
    loopingVideo.play();
  };

  $: if (scrollY >= windowHeight / 2 && firstVideo && loopingVideo) {
    firstVideo.play();
  }

  const update = () => {
    ctx?.drawImage(showStartVideo ? firstVideo : loopingVideo, 0, 0, videoWidth, videoHeight);
    requestAnimationFrame(update);
  };

  onMount(() => {
    isSafari =
      navigator?.userAgent?.indexOf('Safari') !== -1 &&
      navigator?.userAgent?.indexOf('Chrome') === -1;

    if (windowWidth > 768) {
      firstVideoSrc = '/animations/what-is-agora-space-start.webm';
      loopingVideoSrc = '/animations/what-is-agora-space.webm';
    } else {
      firstVideoSrc = '/animations/mobile-what-is-agora-space-start.webm';
      loopingVideoSrc = '/animations/mobile-what-is-agora-space.webm';
    }

    update();
  });
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} bind:scrollY />

<section id="what-is-agora-space" class="relative bg-agora-purple">
  <div class="relative w-full max-fullhd-container mx-auto flex flex-col">
    <div class="flex flex-col lg:flex-row text-agora-white">
      <div
        class="order-2 lg:order-1 flex lg:self-end flex-col justify-end h-full w-full max-w-3xl pt-16 lg:pt-20"
      >
        <div class="relative" style={`width: ${videoWidth}px; height: ${videoHeight}px;`}>
          <!-- svelte-ignore a11y-media-has-caption -->
          {#if isSafari}
            <img src="/images/what-is-agora-space.png" alt="What is Agora Space?" class="w-full" />
          {:else}
            <canvas
              width={videoWidth}
              height={videoHeight}
              class="absolute bottom-0 left-0 bg-transparent"
              bind:this={videoCanvas}
            />
            <video
              muted
              playsinline
              preload="auto"
              width="100%"
              height="auto"
              poster="/images/what-is-agora-space.png"
              on:ended={handleStartEnd}
              bind:this={firstVideo}
              bind:clientWidth={videoWidth}
              bind:clientHeight={videoHeight}
              class="absolute bottom-0 left-0 opacity-0"
            >
              <source src={firstVideoSrc} type="video/webm" />
              <img
                src="/images/what-is-agora-space.png"
                alt="What is Agora Space?"
                class="w-full"
              />
            </video>
          {/if}
          <!-- svelte-ignore a11y-media-has-caption -->
          {#if !isSafari}
            <video
              muted
              playsinline
              preload="auto"
              width="100%"
              height="auto"
              loop
              bind:this={loopingVideo}
              class="absolute bottom-0 left-0 opacity-0"
            >
              <source src={loopingVideoSrc} type="video/webm" />
              <img
                src="/images/what-is-agora-space.png"
                alt="What is Agora Space?"
                class="w-full"
              />
            </video>
          {/if}
        </div>
      </div>

      <div
        class="order-1 lg:order-2 container self-center pt-16 xl:px-32 2xl:px-38 sm:max-w-lg md:pt-20 lg:py-28 2xl:py-32 lg:max-w-5xl text-center"
      >
        <h2
          class="mb-8 text-3xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight font-display uppercase"
        >
          What is <br class="md:hidden" />Agora Space?
        </h2>
        <p class="mb-4 lg:font-semibold max-w-md 2xl:text-xl 2xl:max-w-xl mx-auto">
          Agora Space connects Discord, Twitter and other social media platforms with the blockchain
          providing a range of tools to upgrade DAOs and Social Token communities.
        </p>
        <p class="lg:font-semibold max-w-md 2xl:text-xl 2xl:max-w-xl mx-auto">
          Our vision is to supercharge Web3 adoption by creating gasless, multichain and
          platform-agnostic solutions, without sacrificing decentralisation or privacy.
        </p>
      </div>
    </div>
  </div>
</section>
