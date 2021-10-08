<script>
  import { onMount } from 'svelte';

  let showStartVideo = true;
  let windowWidth;
  let windowHeight;
  let scrollY;
  let firstVideo;
  let loopingVideo;
  let firstVideoSrc;
  let loopingVideoSrc;

  const handleStartEnd = () => {
    showStartVideo = false;
    loopingVideo.play();
  };

  $: if (scrollY >= windowHeight / 2 && firstVideo && loopingVideo) {
    firstVideo.play();
  }

  onMount(() => {
    if (windowWidth > 768) {
      firstVideoSrc = '/animations/what-is-agora-space-start.webm';
      loopingVideoSrc = '/animations/what-is-agora-space.webm';
    } else {
      firstVideoSrc = '/animations/mobile-what-is-agora-space-start.webm';
      loopingVideoSrc = '/animations/mobile-what-is-agora-space.webm';
    }
  });
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} bind:scrollY />

<section id="what-is-agora-space" class="relative bg-agora-purple">
  <div class="relative w-full max-fullhd-container mx-auto flex flex-col">
    <div class="flex flex-col lg:flex-row text-agora-white">
      <div
        class="order-2 lg:order-1 w-full h-80 sm:h-96 md:h-[50vh] lg:h-auto flex flex-col max-w-3xl pt-16"
      >
        <div class="relative h-full">
          <!-- svelte-ignore a11y-media-has-caption -->
          <video
            src={firstVideoSrc}
            muted
            playsinline
            preload="auto"
            width="100%"
            height="auto"
            poster="/images/what-is-agora-space.png"
            on:ended={handleStartEnd}
            bind:this={firstVideo}
            class={`absolute bottom-0 left-0 ${
              showStartVideo ? 'opacity-1' : 'opacity-0'
            } transition-opacity duration-75 delay-75`}
          >
            <img
              src="/images/what-is-agora-space-bg.png"
              alt="What is Agora Space?"
              class="w-full"
            />
          </video>
          <!-- svelte-ignore a11y-media-has-caption -->
          <video
            src={loopingVideoSrc}
            muted
            playsinline
            preload="auto"
            width="100%"
            height="auto"
            loop
            bind:this={loopingVideo}
            class={`absolute bottom-0 left-0 ${
              showStartVideo ? 'opacity-0' : 'opacity-1'
            } transition-opacity duration-75`}
          >
            <img src="/images/what-is-agora-space.png" alt="What is Agora Space?" class="w-full" />
          </video>
        </div>
      </div>

      <div
        class="order-1 lg:order-2 container self-center pt-16 px-8 xl:px-32 2xl:px-38 max-w-5xl md:pt-20 lg:py-28 2xl:py-32 lg:max-w-3/5 text-center"
      >
        <h2
          class="mb-8 text-3xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight font-display uppercase"
        >
          What is <br class="md:hidden" />Agora Space?
        </h2>
        <p class="mb-4 lg:font-semibold 2xl:text-xl">
          Agora Space connects Discord, Twitter and other social media platforms with the blockchain
          providing a range of tools to upgrade DAOs and Social Token communities.
        </p>
        <p class="lg:font-semibold 2xl:text-xl">
          Our vision is to supercharge Web3 adoption by creating gasless, multichain and
          platform-agnostic solutions, without sacrificing decentralisation or privacy.
        </p>
      </div>
    </div>
  </div>
</section>
