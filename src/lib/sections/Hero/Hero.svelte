<script>
  import Header from '$lib/Header';
  import { SignIn, Users } from 'phosphor-svelte';
  import Button from '$lib/Button';
  import { initThreeJS, resizeThreeJS } from './threejs/hero';
  import { onMount, onDestroy } from 'svelte';

  let hideHeroImg = false;
  let windowSize = 1920;
  let canvas;
  let canvasWidth;
  let canvasHeight;
  let opacity = 0;

  $: offset = windowSize > 1280 ? '-62%' : windowSize > 1024 ? '-48%' : '-48%';
  $: canvasWidth && canvasHeight && resizeThreeJS(canvasWidth, canvasHeight);

  onMount(() => {
    initThreeJS(canvas, () => {
      opacity = 100;
      hideHeroImg = true;
    });
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

<section id="hero" class="relative xl:h-screen h-webkit-fill-available">
  <!-- Hero background -->
  <div class="absolute hidden md:flex lg:flex-row w-full h-full">
    <div class="flex-grow bg-agora-white" />
    <div
      class="flex-grow bg-agora-blue-medium bg-circle-pattern bg-no-repeat bg-hero-right-bottom"
    />
  </div>

  <div class="absolute left-0 right-0 top-0 z-50">
    <Header />
  </div>

  <div
    class="relative md:container px-6 lg:px-8 grid md:grid-cols-9 lg:grid-cols-7 md:h-1/2 lg:h-2/3 xl:h-full"
  >
    <!-- Hero - left side -->
    <section
      class="flex flex-col relative md:col-span-7 lg:col-span-5 -mx-6 md:mx-0 pt-4 lg:pt-10 xl:pt-20 px-4 lg:px-0 bg-agora-white"
    >
      <!-- Platon - large -->
      <div
        class="hidden md:block w-full xl:w-[120%] 2xl:w-[130%] h-auto max-h-[95%]"
        style={`position: absolute; bottom:0; right: ${offset};`}
      >
        <div class="relative">
          <canvas
            bind:this={canvas}
            width={canvasWidth}
            height={canvasHeight}
            class={`absolute inset-0 w-full h-full transition-opacity opacity-${opacity} duration-500`}
          />
          <div bind:clientWidth={canvasWidth} bind:clientHeight={canvasHeight}>
            <img
              src="/images/hero-cropped.png"
              alt="Platon"
              class={`relative select-none w-full`}
            />
          </div>
          <img
            src="/images/hero.png"
            alt="Platon"
            class={`absolute left-0 bottom-0 select-none w-full transition-all duration-500 ${
              hideHeroImg ? 'invisible opacity-0' : 'visible opacity-100'
            }`}
          />
        </div>
      </div>

      <!-- Title / text -->
      <div class="w-full h-full flex flex-col justify-center">
        <div class="relative mt-24 xl:mt-0 pb-32 md:pb-0 text-center md:text-left">
          <h2
            class="mb-4 xl:mb-8 font-bold tracking-tight text-3xl xl:text-5xl 2xl:text-6xl font-display"
          >
            <span
              class="block w-full relative pt-20 md:pt-10 xl:pt-14"
              style="perspective: 1600px;"
            >
              {#key headline}
                <span
                  class="absolute left-0 top-0 flex flex-col justify-center w-full md:max-w-md xl:max-w-full h-1/2 text-agora-blue-medium transition-all"
                  in:cubeIn={{ rotateFrom: 90, duration: 600 }}
                  out:cubeOut={{ rotateTo: -90, duration: 600 }}>{headline}</span
                >
              {/key}
              <span>for DAOs and Social Tokens</span>
            </span>
          </h2>

          <p
            class="mb-8 lg:mb-10 font-semibold lg:text-lg 2xl:text-xl leading-tight md:leading-normal text-gray-600"
          >
            Building essentials for future internet<br /> communities.
          </p>
        </div>

        <!-- Buttons -->
        <div class="hidden md:flex flex-col space-y-2 mb-20">
          <Button
            href="https://app.agora.space"
            target="_blank"
            rel="noopener"
            class="w-max bg-agora-blue-medium text-agora-white"
          >
            Join a community
            <SignIn slot="icon" weight="bold" size="1.2em" />
          </Button>

          <Button
            href="https://app.agora.space/register"
            target="_blank"
            rel="noopener"
            class="w-max bg-agora-pink-medium text-agora-white"
          >
            Build your Agora
            <Users slot="icon" weight="bold" size="1.2em" />
          </Button>
        </div>
      </div>

      <!-- Mobile - purple section -->
      <div
        class="md:hidden relative -mx-4 bg-agora-blue-medium bg-circle-pattern bg-no-repeat bg-hero-right-bottom"
      >
        <img
          src="/images/hero-mobile.png"
          alt="Platon"
          class="-mt-28 select-none w-full object-cover object-bottom"
        />

        <!-- Buttons -->
        <div
          class="absolute left-0 bottom-8 flex flex-col justify-end items-center space-y-4 w-full h-full"
        >
          <Button
            href="https://app.agora.space"
            target="_blank"
            rel="noopener"
            class="w-max bg-agora-blue-light text-agora-white shadow-md"
          >
            Join a community
            <SignIn slot="icon" weight="bold" size="1.2em" />
          </Button>

          <Button
            href="https://app.agora.space/register"
            target="_blank"
            rel="noopener"
            class="w-max bg-agora-purple text-agora-white shadow-md"
          >
            Build your Agora
            <Users slot="icon" weight="bold" size="1.2em" />
          </Button>
        </div>
      </div>
    </section>
  </div>
</section>
