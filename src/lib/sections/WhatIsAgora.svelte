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
  let shouldPlay = true;
  let isSafari = false;

  const handleStartEnd = () => {
    showStartVideo = false;
    loopingVideo.play();
  };

  $: if (
    shouldPlay &&
    showStartVideo &&
    scrollY >= windowHeight / 2 &&
    firstVideo &&
    loopingVideo
  ) {
    firstVideo.play();
    shouldPlay = false;
  }

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
  });
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} bind:scrollY />

<section id="what-is-agora-space" class="relative bg-agora-purple">
  <div class="max-fullhd-container relative mx-auto flex w-full flex-col">
    <div class="flex flex-col text-agora-white lg:flex-row">
      <div
        class="order-2 flex h-full w-full max-w-3xl flex-col justify-end pt-16 lg:order-1 lg:self-end lg:pt-20"
      >
        <div class="relative">
          <!-- svelte-ignore a11y-media-has-caption -->
          {#if isSafari}
            <picture>
              <source srcset="/images/what-is-agora-space.webp" type="image/webp" />
              <source srcset="/images/png/what-is-agora-space.png" type="image/png" />
              <img
                src="/images/png/what-is-agora-space.png"
                alt="What is Agora Space?"
                width="100%"
                height="auto"
              />
            </picture>
          {:else}
            <video
              muted
              playsinline
              preload="auto"
              width="100%"
              height="auto"
              poster="/images/what-is-agora-space-poster.webp"
              on:ended={handleStartEnd}
              bind:this={firstVideo}
              class={`relative -bottom-px ${
                showStartVideo ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-75 delay-75`}
            >
              <source src={firstVideoSrc} type="video/webm" />
              <img
                src="/images/png/what-is-agora-space.png"
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
              class={`absolute -bottom-px left-0 ${
                showStartVideo ? 'opacity-0' : 'opacity-100'
              } transition-opacity duration-75`}
            >
              <source src={loopingVideoSrc} type="video/webm" />
              <img
                src="/images/png/what-is-agora-space.png"
                alt="What is Agora Space?"
                class="w-full"
              />
            </video>
          {/if}
        </div>
      </div>

      <div
        class="2xl:px-38 container order-1 self-center pt-16 text-center sm:max-w-lg md:pt-20 lg:order-2 lg:max-w-5xl lg:py-28 xl:px-32 2xl:py-32"
      >
        <h2
          class="mb-8 font-display text-3xl font-bold uppercase tracking-tight lg:text-4xl 2xl:text-5xl"
        >
          What is <br class="md:hidden" />Agora Space?
        </h2>
        <p class="mx-auto mb-4 max-w-md lg:font-semibold 2xl:max-w-xl 2xl:text-xl">
          Agora Space connects Discord, Twitter and other social media platforms with the blockchain
          providing a range of tools to upgrade DAOs and Social Token communities.
        </p>
        <p class="mx-auto max-w-md lg:font-semibold 2xl:max-w-xl 2xl:text-xl">
          Our vision is to supercharge Web3 adoption by creating gasless, multichain and
          platform-agnostic solutions, without sacrificing decentralisation or privacy.
        </p>
      </div>
    </div>
  </div>
</section>
