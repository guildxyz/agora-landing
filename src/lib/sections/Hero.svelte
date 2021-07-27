<script>
  import Header from '$lib/Header.svelte';
  import { SignIn, Users } from 'phosphor-svelte';
  import SocialLinks from '$lib/SocialLinks.svelte';
</script>

<section id="hero" class="relative xl:h-screen">
  <!-- Hero background -->
  <div class="absolute hidden md:flex lg:flex-row w-full h-full">
    <div class="flex-grow bg-[#FDF7FF]" />
    <div class="flex-grow bg-[#2E2093] bg-circle-pattern bg-no-repeat bg-hero-right-bottom" />
  </div>

  <div class="absolute left-0 right-0 top-0 z-50">
    <Header />
  </div>

  <div
    class="relative md:container mx-auto lg:px-8 grid md:grid-cols-5 md:h-1/2 lg:h-2/3 xl:h-full"
  >
    <!-- Hero - left side -->
    <section
      class="flex flex-col relative md:col-span-3 -mx-4 md:mx-0 pt-4 lg:pt-20 px-4 lg:px-0 bg-[#FDF7FF]"
    >
      <!-- Platon - large -->
      <div class="hidden md:block absolute bottom-0 md:-right-2/3 w-full xl:w-[125%] h-auto">
        <img src="/images/hero.png" alt="Platon" class="w-full" />
      </div>

      <!-- Title / text -->
      <div class="mt-16 lg:mt-28 pb-32 md:pb-0 text-center md:text-left">
        <h2 class="mb-4 lg:mb-8 font-bold tracking-tight text-4xl lg:text-6xl font-display">
          Social token <br /><span class="text-[#2E2093]">toolkit</span>
          <br class="inline md:hidden" />and oracle
        </h2>

        <p class="mb-4 lg:mb-10 font-semibold text-lg lg:text-2xl leading-tight md:leading-normal">
          Two-way social media integration <br />to the blockchain
        </p>
      </div>

      <!-- Buttons -->
      <div class="hidden md:flex flex-col space-y-2 lg:space-y-4 mb-8">
        <a href="/" class="button small bg-[#3B2DA4] flex space-x-4">
          <span>Join a community</span>
          <SignIn weight="bold" size="1.2em" />
        </a>
        <a href="/" class="button small bg-[#BA4CC4] flex space-x-4">
          <span>Create a community</span>
          <Users weight="bold" size="1.2em" />
        </a>
      </div>

      <!-- Social icons -->
      <div class="hidden md:flex mt-auto mb-4 xl:mb-20">
        <SocialLinks buttonClasses="text-2xl xl:text-3xl text-gray-900" />
      </div>

      <!-- Mobile - purple section -->
      <div
        class="md:hidden relative -mx-4 pb-10 h-[50vh] bg-[#2E2093] bg-circle-pattern bg-no-repeat bg-hero-right-bottom"
      >
        <img
          src="/images/hero.png"
          alt="Platon"
          class="absolute left-0 -top-40 h-[75vh] object-cover object-bottom"
        />

        <!-- Buttons -->
        <div class="relative flex flex-col justify-end items-center space-y-4 h-full">
          <a href="/" class="button bg-[#3B2DA4] flex space-x-4">
            <span>Join a community</span>
            <SignIn weight="bold" size="1.2em" />
          </a>
          <a href="/" class="button bg-[#4F1D85] flex space-x-4">
            <span>Create a community</span>
            <Users weight="bold" size="1.2em" />
          </a>
        </div>
      </div>
    </section>
  </div>
</section>
