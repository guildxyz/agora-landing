<script>
  import { onMount } from 'svelte';

  let windowWidth;
  let videoSrc;
  let imgSrc;
  let isSafari = false;
  let videoSrcSafari;

  onMount(() => {
    isSafari =
      navigator?.userAgent?.indexOf('Safari') !== -1 &&
      navigator?.userAgent?.indexOf('Chrome') === -1;

    if (windowWidth > 768) {
      imgSrc = '/images/who-is-agora-space-for.webp';
      videoSrc = '/animations/who-is-agora-space-for.webm';
    } else {
      imgSrc = '/images/mobile-who-is-agora-space-for.webp';
      videoSrc = '/animations/mobile-who-is-agora-space-for.webm';
      videoSrcSafari = '/animations/safari/mobile-who-is-agora-space-for.mp4';
    }
  });
</script>

<svelte:window bind:innerWidth={windowWidth} />

<section id="who-is-agora-space-for" class="relative overflow-hidden">
  <!-- Background -->
  <div class="absolute hidden lg:flex w-full h-full">
    <div class="bg-agora-purple w-1/2" />
    <div class="bg-agora-white w-1/2" />
  </div>

  <div
    class="relative w-full custom-container lg:grid lg:grid-cols-5 overflow-hidden md:overflow-visible"
  >
    <!-- Left side -->
    <div class="relative lg:col-span-2 bg-agora-purple">
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
        class="relative flex flex-col items-center justify-center px-4 lg:px-24 py-28 h-full text-agora-white text-center overflow-hidden"
      >
        <h2
          class="mb-8 text-3xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight font-display uppercase"
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
      class="flex flex-col items-center justify-center space-y-4 relative lg:col-span-3 bg-agora-white overflow-hidden"
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
        class="max-w-1/2 transform scale-105"
        src={isSafari && videoSrcSafari ? videoSrcSafari : videoSrc}
      >
        <img
          src={imgSrc}
          alt="Who is Agora Space for"
          width="auto"
          height="80vh"
          class="max-w-1/2"
        />
      </video>
    </div>
  </div>
</section>
