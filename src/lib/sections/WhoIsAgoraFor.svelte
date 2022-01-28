<script>
  import { onMount } from 'svelte';

  let windowWidth;
  let videoSrc;
  let imgSrc;
  let imgSrcPng;
  let isSafari = false;
  let videoSrcSafari;

  onMount(() => {
    isSafari =
      navigator?.userAgent?.indexOf('Safari') !== -1 &&
      navigator?.userAgent?.indexOf('Chrome') === -1;

    if (windowWidth > 768) {
      imgSrc = '/images/who-is-agora-space-for.webp';
      imgSrcPng = '/images/png/who-is-agora-space-for.png';
      videoSrc = '/animations/who-is-agora-space-for.webm';
    } else {
      imgSrc = '/images/mobile-who-is-agora-space-for.webp';
      imgSrcPng = '/images/png/mobile-who-is-agora-space-for.png';
      videoSrc = '/animations/mobile-who-is-agora-space-for.webm';
      videoSrcSafari = '/animations/safari/mobile-who-is-agora-space-for.mp4';
    }
  });
</script>

<svelte:window bind:innerWidth={windowWidth} />

<section id="who-is-agora-space-for" class="relative overflow-hidden">
  <!-- Background -->
  <div class="absolute hidden h-full w-full lg:flex">
    <div class="w-1/2 bg-agora-purple" />
    <div class="w-1/2 bg-agora-white" />
  </div>

  <div
    class="custom-container relative w-full overflow-hidden md:overflow-visible lg:grid lg:grid-cols-5"
  >
    <!-- Left side -->
    <div class="relative bg-agora-purple lg:col-span-2">
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
        class="relative flex h-full flex-col items-center justify-center overflow-hidden px-4 py-28 text-center text-agora-white lg:px-24"
      >
        <h2
          class="mb-8 font-display text-3xl font-bold uppercase tracking-tight lg:text-4xl 2xl:text-5xl"
        >
          Who is Agora Space for?
        </h2>

        <p class="font-semibold lg:text-lg xl:text-xl 2xl:text-2xl">
          Those who want to make their community more efficient and rewarding
        </p>
      </div>
    </div>

    <!-- Right Side -->
    <div
      class="relative flex flex-col items-center justify-center space-y-4 overflow-hidden bg-agora-white lg:col-span-3"
    >
      <video
        poster={imgSrc}
        muted
        autoplay
        playsinline
        loop
        preload="auto"
        width="auto"
        height="80vh"
        class="max-w-1/2 scale-105 transform"
        src={isSafari && videoSrcSafari ? videoSrcSafari : videoSrc}
      >
        <img
          src={imgSrcPng}
          alt="Who is Agora Space for"
          width="auto"
          height="80vh"
          class="max-w-1/2"
        />
      </video>
    </div>
  </div>
</section>
