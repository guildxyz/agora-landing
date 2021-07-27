<script>
  import Header from '$lib/Header.svelte';
  import { SignIn, Users } from 'phosphor-svelte';
  import SocialLinks from '$lib/SocialLinks.svelte';
</script>

<section id="hero" class="relative md:h-screen">
  <!-- Hero background -->
  <div class="absolute hidden lg:flex flex-col lg:flex-row w-full h-full">
    <div class="flex-grow bg-[#FDF7FF]" />
    <div class="flex-grow bg-[#2E2093] bg-circle-pattern bg-no-repeat bg-hero-right-bottom" />
  </div>

  <div class="absolute left-0 right-0 top-0 z-50">
    <Header />
  </div>

  <div class="relative lg:container mx-auto px-4 lg:px-8 grid grid-cols-5 lg:h-full">
    <!-- Hero - left side -->
    <section
      class="flex flex-col relative col-span-5 lg:col-span-3 -mx-4 lg:mx-0 pt-4 lg:pt-20 px-4 lg:px-0 bg-[#FDF7FF]"
    >
      <!-- Title / text -->
      <div class="relative mt-16 lg:mt-28 pb-24 lg:pb-0 text-center lg:text-left">
        <h2 class="mb-4 lg:mb-8 font-bold tracking-tight text-4xl md:text-6xl font-display">
          Social token <br /><span class="block lg:inline text-[#2E2093]">toolkit</span> and oracle
        </h2>

        <p class="mb-10 font-semibold text-lg md:text-2xl leading-tight md:leading-normal">
          Two-way social media integration <br />to the blockchain
        </p>
      </div>

      <!-- Platon - large -->
      <div class="hidden lg:block absolute bottom-0 lg:-right-2/3 w-[135%] h-auto">
        <img src="/images/hero.png" alt="Platon" class="w-full" />
      </div>

      <!-- Platon - small & buttons - only on mobile - I'll need to play with this one... -->
      <div
        class="lg:hidden relative -mx-4 pt-40 pb-10 bg-[#2E2093] bg-circle-pattern bg-no-repeat bg-hero-right-bottom"
      >
        <div class="absolute bottom-0 w-auto transform -translate-x-1/4 h-[200vw] max-h-[60vh]">
          <img src="/images/hero.png" alt="Platon" class="h-full w-auto max-w-[200%]" />
        </div>

        <!-- Buttons -->
        <div class="relative flex flex-col items-center space-y-4">
          <a href="/" class="button bg-[#3B2DA4] flex space-x-4">
            <span>Join a community</span>
            <SignIn weight="bold" size="1.2em" />
          </a>
          <a href="/" class="button bg-[#BA4CC4] flex space-x-4">
            <span>Create a community</span>
            <Users weight="bold" size="1.2em" />
          </a>
        </div>
      </div>

      <!-- Buttons -->
      <div class="hidden lg:flex flex-col space-y-4">
        <a href="/" class="button bg-[#3B2DA4] flex space-x-4">
          <span>Join a community</span>
          <SignIn weight="bold" size="1.2em" />
        </a>
        <a href="/" class="button bg-[#BA4CC4] flex space-x-4">
          <span>Create a community</span>
          <Users weight="bold" size="1.2em" />
        </a>
      </div>

      <div class="hidden lg:flex mt-auto mb-20">
        <SocialLinks buttonClasses="text-3xl text-gray-900" />
      </div>
    </section>
  </div>
</section>
