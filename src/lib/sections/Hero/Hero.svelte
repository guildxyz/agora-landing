<script>
  import Header from '$lib/Header';
  import { SignIn, Users } from 'phosphor-svelte';
  import Button from '$lib/Button';
  import { initThreeJS, resizeThreeJS } from './threejs/hero';
  import { onMount } from 'svelte';
  let hideHeroImg = false;
  let windowSize = 1920;
  let canvas;
  let canvasWidth;
  let canvasHeight;
  let opacity = 0;
  $: offset = windowSize > 1280 ? '-70%' : windowSize > 1024 ? '-48%' : '-48%';
  $: canvasWidth && canvasHeight && resizeThreeJS(canvasWidth, canvasHeight);
  onMount(() => {
    initThreeJS(canvas, () => {
      opacity = 100;
      hideHeroImg = true;
    });
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

  <div class="relative md:container px-6 lg:px-8 grid md:grid-cols-5 md:h-1/2 lg:h-2/3 xl:h-full">
    <!-- Hero - left side -->
    <section
      class="flex flex-col relative md:col-span-4 lg:col-span-3 -mx-6 md:mx-0 pt-4 lg:pt-10 xl:pt-20 px-4 lg:px-0 bg-agora-white"
    >
      <!-- Platon - large -->
      <div
        class="hidden md:block w-full xl:w-[150%] h-auto max-h-[95%]"
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
      <div class="h-full flex flex-col justify-center">
        <div class="relative mt-20 xl:mt-0 pb-32 md:pb-0 text-center md:text-left">
          <h2
            class="mb-4 lg:mb-8 font-bold tracking-tight text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-display"
          >
            Social <span class="text-agora-blue-medium">oracle</span> <br />and token utility
            <br />toolkit
          </h2>

          <p
            class="mb-8 lg:mb-10 font-semibold text-lg lg:text-xl leading-tight md:leading-normal text-gray-600"
          >
            Two-way social media integration <br />to the blockchain
          </p>
        </div>

        <!-- Buttons -->
        <div class="hidden md:flex flex-col space-y-2 mb-20">
          <Button
            href="https://app.agora.space"
            target="_blank"
            class="w-max bg-agora-blue-medium text-agora-white"
          >
            <span>Join a community</span>
            <SignIn slot="icon" weight="bold" size="1.2em" />
          </Button>

          <Button
            disabled
            disabledMessage="Coming soon"
            class="w-max bg-agora-purple text-agora-white"
          >
            <span>Integrate your token</span>
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
            class="w-max bg-agora-blue-light text-agora-white shadow-md"
          >
            <span>Join a community</span>
            <SignIn slot="icon" weight="bold" size="1.2em" />
          </Button>

          <!-- <Button disabled class="w-max bg-agora-purple text-agora-white shadow-md">
            <span>Integrate your token</span>
            <Users slot="icon" weight="bold" size="1.2em" />
          </Button> -->
        </div>
      </div>
    </section>
  </div>
</section>
