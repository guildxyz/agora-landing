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
  <div class="absolute hidden w-full h-full md:flex lg:flex-row">
    <div class="flex-grow bg-agora-gray" />
    <div
      class="flex-grow bg-no-repeat bg-agora-blue-medium bg-circle-pattern bg-hero-right-bottom"
    />
  </div>

  <div class="absolute top-0 left-0 right-0 z-50">
    <Header whiteLogo />
  </div>

  <div
    class="relative grid px-6 md:container md:grid-cols-9 lg:grid-cols-7 md:h-1/2 lg:h-2/3 xl:h-full"
  >
    <!-- Hero - left side -->
    <section
      class="relative flex flex-col px-4 pt-4 -mx-6 sm:px-0 md:col-span-7 lg:col-span-5 md:mx-0 lg:pt-10 xl:pt-20 lg:px-0 bg-agora-gray"
    >
      <!-- Platon - large -->
      <div
        class="hidden md:block absolute bottom-0 w-full xl:w-[120%] 2xl:w-[130%]"
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
        <img
          src="/images/hero.webp"
          alt="Platon"
          width={canvasWidth * 0.8}
          height={canvasHeight * 0.8}
          class={`absolute bottom-0 select-none transition-all duration-500 ${
            hideHeroImg ? 'invisible opacity-0' : 'visible opacity-100'
          }`}
          style={`left: ${canvasWidth * 0.1}px;`}
        />
      </div>

      <!-- Title / text -->
      <div class="flex flex-col justify-center w-full h-full">
        <div class="relative pb-32 mt-24 text-center xl:mt-0 md:pb-0 md:text-left text-agora-white">
          <h2
            class="mb-4 text-3xl font-bold tracking-tight xl:mb-8 lg:text-4xl xl:text-5xl 2xl:text-6xl font-display"
          >
            <span
              class="relative block w-full pt-20 md:pt-10 xl:pt-14"
              style="perspective: 1600px;"
            >
              {#key headline}
                <span
                  class="absolute top-0 left-0 flex flex-col justify-end w-full transition-all md:max-w-md xl:max-w-full h-1/2 text-agora-pink-dark"
                  in:cubeIn={{ rotateFrom: 90, duration: 600 }}
                  out:cubeOut={{ rotateTo: -90, duration: 600 }}>{headline}</span
                >
              {/key}
              <span>for DAOs and Social Tokens</span>
            </span>
          </h2>

          <p
            class="mb-8 font-semibold leading-tight lg:mb-10 2xl:mb-15 lg:text-lg xl:text-xl 2xl:text-2xl md:leading-normal"
          >
            Building essentials for internet<br /> communities.
          </p>

          <p class="mb-2 font-semibold 2xl:text-lg leading-tight md:leading-normal">
            View our first tool:
          </p>
        </div>

        <!-- Buttons -->
        <div class="flex-col hidden mb-20 space-y-3 md:flex 2xl:space-y-4 2xl:mb-10">
          <Button
            href="https://alpha.guild.xyz"
            target="_blank"
            rel="noopener"
            class="w-max bg-agora-blue-medium text-agora-white"
          >
            Guild.xyz
            <img slot="icon-left" src="/svg/guild-logo.svg" alt="Guild.xyz" class="w-4 h-4" />
          </Button>
        </div>
      </div>

      <!-- Mobile - purple section -->
      <div
        class="relative -mx-4 bg-no-repeat md:hidden bg-agora-blue-medium bg-circle-pattern bg-hero-right-bottom"
      >
        <img
          src="/images/hero-mobile.webp"
          alt="Platon"
          class="object-cover object-bottom w-full select-none -mt-28"
        />

        <!-- Buttons -->
        <div
          class="absolute left-0 bottom-8 flex flex-col justify-end items-center space-y-2 w-full h-full"
        >
          <Button
            href="https://alpha.guild.xyz"
            target="_blank"
            rel="noopener"
            class="shadow-md w-max bg-agora-blue-light text-agora-white"
          >
            Guild.xyz
            <img slot="icon-left" src="/svg/guild-logo.svg" alt="Guild.xyz" class="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  </div>
</section>
