<script>
  import Header from '$lib/Header';
  import { SignIn, Users } from 'phosphor-svelte';
  import Button from '$lib/Button';
  import SocialLinks from '$lib/SocialLinks.svelte';
  import { initThreeJS, resizeThreeJS } from './threejs/hero';
  import { onMount } from 'svelte';

  let windowSize = 1920;
  let canvas;
  let canvasWidth;
  let canvasHeight;
  let opacity = 0;

  $: offset = windowSize > 1280 ? '-62%' : windowSize > 1024 ? '-48%' : '-48%';
  $: resizeThreeJS(canvasWidth, canvasHeight);

  const handleWindowResize = () => {
    resizeThreeJS(canvasWidth, canvasHeight);
  };

  onMount(() => {
    initThreeJS(canvas, () => {
      opacity = 100;
    });
  });
</script>

<svelte:window on:resize={handleWindowResize} bind:innerWidth={windowSize} />

<section id="hero" class="relative xl:h-screen">
  <!-- Hero background -->
  <div class="absolute hidden md:flex lg:flex-row w-full h-full">
    <div class="flex-grow bg-agora-white" />
    <div class="flex-grow bg-agora-blue-bg bg-circle-pattern bg-no-repeat bg-hero-right-bottom" />
  </div>

  <div class="absolute left-0 right-0 top-0 z-50">
    <Header />
  </div>

  <div
    class="relative md:container mx-auto lg:px-8 grid md:grid-cols-5 md:h-1/2 lg:h-2/3 xl:h-full"
  >
    <!-- Hero - left side -->
    <section
      class="flex flex-col relative md:col-span-3 -mx-4 md:mx-0 pt-4 lg:pt-20 px-4 lg:px-0 bg-agora-white"
    >
      <!-- Platon - large -->
      <div
        class={`hidden md:block absolute bottom-0 w-full xl:w-[130%] h-auto max-h-[90%] transition-all opacity-${opacity} duration-500`}
        style={`right: ${offset};`}
        bind:clientWidth={canvasWidth}
        bind:clientHeight={canvasHeight}
      >
        <div class="relative">
          <canvas
            bind:this={canvas}
            width={canvasWidth}
            height={canvasHeight}
            class="absolute inset-0 w-full h-full"
          />
          <img src="/images/hero-cropped.png" alt="Platon" class="relative select-none w-full" />
        </div>
      </div>

      <!-- Title / text -->
      <div class="mt-16 lg:mt-28 pb-32 md:pb-0 text-center md:text-left">
        <h2
          class="mb-4 lg:mb-8 font-bold tracking-tight text-4xl lg:text-6xl xl:text-7xl font-display"
        >
          Social token <br /><span class="text-agora-blue-bg">toolkit</span>
          <br class="inline md:hidden" />and oracle
        </h2>

        <p class="mb-4 lg:mb-10 font-semibold text-lg lg:text-xl leading-tight md:leading-normal">
          Two-way social media integration <br />to the blockchain
        </p>
      </div>

      <!-- Buttons -->
      <div class="hidden md:flex flex-col space-y-2 lg:space-y-4 mb-8">
        <Button
          href="https://app.agora.space"
          target="_blank"
          class="w-max bg-agora-blue-btn text-agora-white"
        >
          <span>Join a community</span>
          <SignIn slot="icon" weight="bold" size="1.2em" />
        </Button>

        <Button
          disabled
          disabledMessage="Coming soon"
          class="w-max bg-agora-purple-bg text-agora-white"
        >
          <span>Integrate your token</span>
          <Users slot="icon" weight="bold" size="1.2em" />
        </Button>
      </div>

      <!-- Social icons -->
      <div class="hidden md:flex mt-auto mb-4 xl:mb-20">
        <SocialLinks buttonClasses="text-xl xl:text-2xl text-gray-900" />
      </div>

      <!-- Mobile - purple section -->
      <div
        class="md:hidden relative -mx-4 pb-10 h-[50vh] bg-agora-blue-bg bg-circle-pattern bg-no-repeat bg-hero-right-bottom"
      >
        <img
          src="/images/hero.png"
          alt="Platon"
          class="select-none absolute left-0 -top-40 h-[75vh] object-cover object-bottom"
        />

        <!-- Buttons -->
        <div class="relative flex flex-col justify-end items-center space-y-4 h-full">
          <Button
            href="https://app.agora.space"
            target="_blank"
            class="w-max bg-agora-blue-btn text-agora-white"
          >
            <span>Join a community</span>
            <SignIn slot="icon" weight="bold" size="1.2em" />
          </Button>

          <!-- <Button disabled class="w-max bg-agora-purple-bg text-agora-white">
            <span>Integrate your token</span>
            <Users slot="icon" weight="bold" size="1.2em" />
          </Button> -->
        </div>
      </div>
    </section>
  </div>
</section>
