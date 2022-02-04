<script>
  import Header from '$lib/Header';
  import { SignIn, Users } from 'phosphor-svelte';
  import Button from '$lib/Button';
  import { initThreeJS, resizeThreeJS } from '$lib/threejs/hero';
  import { onDestroy, onMount } from 'svelte';
  let hideHeroImg = false;
  let windowSize = 1920;
  let canvas;
  let canvasWidth;
  let canvasHeight;
  let opacity = 0;

  $: offset =
    windowSize > 1536 ? '-62%' : windowSize > 1280 ? '-58%' : windowSize > 1024 ? '-48%' : '-48%';
  $: canvasWidth && canvasHeight && resizeThreeJS(canvasWidth, canvasHeight);

  onMount(() => {
    initThreeJS(canvas, () =>
      setTimeout(() => {
        opacity = 100;
        hideHeroImg = true;
      }, 1000)
    );
  });

  // Heading animation
  const headlines = [
    'Token-Gated Access',
    'Gamification',
    'Trustless Financial Contracts',
    'Decision-making tools'
  ];
  let currentHeadline = 0;
  $: headline = headlines[currentHeadline % headlines.length];

  const headlineTimeout = setInterval(() => {
    currentHeadline++;
  }, 3000);

  // Custom 3D transition
  const cubeIn = (node, { rotateFrom, duration }) => ({
    duration,
    css: (t) => {
      const o = +getComputedStyle(node).opacity;

      return `
        transform: translateZ(${-64 + t * 64}px) translateY(${-64 + t * 64}%) rotate3d(1, 0, 0, ${
        rotateFrom - t * 90
      }deg);
        opacity: ${0.25 + t * o}
      `;
    }
  });

  const cubeOut = (node, { rotateTo, duration }) => ({
    duration,
    css: (t) => {
      const o = +getComputedStyle(node).opacity;

      return `
        transform: translateZ(${-64 + t * 64}px) translateY(${(1 - t) * 64}%) rotate3d(1, 0, 0, ${
        (1 - t) * rotateTo
      }deg);
        opacity: ${0.25 + t * o}
      `;
    }
  });

  onDestroy(() => {
    if (headlineTimeout) {
      clearInterval(headlineTimeout);
    }
  });
</script>

<svelte:window bind:innerWidth={windowSize} />

<section id="hero" class="relative xl:h-screen">
  <!-- Hero background -->
  <div class="absolute hidden h-full w-full md:flex lg:flex-row">
    <div class="flex-grow bg-agora-gray" />
    <div
      class="bg-hero-right-bottom flex-grow bg-agora-blue-medium bg-circle-pattern bg-no-repeat"
    />
  </div>

  <div class="absolute top-0 left-0 right-0 z-50">
    <Header whiteLogo />
  </div>

  <div
    class="relative grid px-6 md:container md:h-1/2 md:grid-cols-9 lg:h-2/3 lg:grid-cols-7 xl:h-full"
  >
    <!-- Hero - left side -->
    <section
      class="relative -mx-6 flex flex-col bg-agora-gray px-4 pt-4 sm:px-0 md:col-span-7 md:mx-0 lg:col-span-5 lg:px-0 lg:pt-10 xl:pt-20"
    >
      <!-- Platon - large -->
      <div
        class="absolute bottom-0 hidden w-full md:block xl:w-[120%] 2xl:w-[130%]"
        style={`right: ${offset};`}
      >
        <canvas
          bind:this={canvas}
          width={canvasWidth}
          height={canvasHeight}
          class={`absolute left-0 right-0 bottom-0 w-full h-full object-contain transition-opacity opacity-${opacity} duration-500`}
        />
        <div
          class="invisible w-full"
          bind:clientWidth={canvasWidth}
          bind:clientHeight={canvasHeight}
        >
          <video id="platon-video" playsinline muted preload="auto" width="100%">
            <source src="/animations/safari/platon.mov" type="video/mp4; codecs=hvc1" />
            <source src="/animations/platon.webm" type="video/webm" />
          </video>
        </div>
        <picture
          class={`absolute bottom-0 select-none transition-all duration-500 ${
            hideHeroImg ? 'invisible opacity-0' : 'visible opacity-100'
          }`}
          style={`left: ${canvasWidth * 0.1}px; width: ${canvasWidth * 0.8}; height: ${
            canvasHeight * 0.8
          }`}
        >
          <source srcset="/images/hero.webp" type="image/webp" />
          <source srcset="/images/png/hero.png" type="image/png" />
          <img
            src="/images/png/hero.png"
            alt="Platon"
            width={canvasWidth * 0.8}
            height={canvasHeight * 0.8}
          />
        </picture>
      </div>

      <!-- Title / text -->
      <div class="flex h-full w-full flex-col justify-center">
        <div class="relative mt-24 pb-32 text-center text-agora-white md:pb-0 md:text-left xl:mt-0">
          <h2
            class="mb-4 font-display text-3xl font-bold tracking-tight lg:text-4xl xl:mb-8 xl:text-5xl 2xl:text-6xl"
          >
            <span
              class="relative block w-full pt-20 md:pt-10 xl:pt-14"
              style="perspective: 1600px;"
            >
              {#key headline}
                <span
                  class="absolute top-0 left-0 flex h-1/2 w-full flex-col justify-end text-agora-pink-dark transition-all md:max-w-md xl:max-w-full"
                  in:cubeIn={{ rotateFrom: 90, duration: 600 }}
                  out:cubeOut={{ rotateTo: -90, duration: 600 }}>{headline}</span
                >
              {/key}
              <span>for DAOs and Social Tokens</span>
            </span>
          </h2>

          <p
            class="2xl:mb-15 mb-8 font-semibold leading-tight md:leading-normal lg:mb-10 lg:text-lg xl:text-xl 2xl:text-2xl"
          >
            Building essentials for internet<br /> communities.
          </p>

          <p class="mb-2 font-semibold leading-tight md:leading-normal 2xl:text-lg">
            View our first tool:
          </p>
        </div>

        <!-- Buttons -->
        <div class="mb-20 hidden flex-col space-y-3 md:flex 2xl:mb-10 2xl:space-y-4">
          <Button
            href="https://alpha.guild.xyz"
            target="_blank"
            rel="noopener"
            class="w-max bg-agora-blue-medium text-agora-white"
          >
            Guild.xyz
            <img slot="icon-left" src="/svg/guild-logo.svg" alt="Guild.xyz" class="h-4 w-4" />
          </Button>
        </div>
      </div>

      <!-- Mobile - purple section -->
      <div
        class="bg-hero-right-bottom relative -mx-4 bg-agora-blue-medium bg-circle-pattern bg-no-repeat md:hidden"
      >
        <picture class="-mt-28 w-full select-none object-cover object-bottom">
          <source srcset="/images/hero-mobile.webp" type="image/webp" />
          <source srcset="/images/png/hero-mobile.png" type="image/png" />
          <img src="/images/png/hero-mobile.png" alt="Platon" />
        </picture>

        <!-- Buttons -->
        <div
          class="absolute left-0 bottom-8 flex h-full w-full flex-col items-center justify-end space-y-2"
        >
          <Button
            href="https://alpha.guild.xyz"
            target="_blank"
            rel="noopener"
            class="w-max bg-agora-blue-light text-agora-white shadow-md"
          >
            Guild.xyz
            <img slot="icon-left" src="/svg/guild-logo.svg" alt="Guild.xyz" class="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  </div>
</section>
