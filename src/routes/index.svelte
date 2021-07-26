<script>
  import { ArrowRight } from 'phosphor-svelte';
  import SocialLinks from '$lib/SocialLinks.svelte';
</script>

<section id="hero" class="relative h-screen">
  <!-- Hero background -->
  <div class="absolute flex w-full h-full">
    <div class="flex-grow bg-[#FDF7FF]" />
    <div class="flex-grow bg-[#2E2093] bg-circle-pattern bg-no-repeat bg-hero-right-bottom" />
  </div>

  <div class="relative container mx-auto px-8 grid grid-cols-5 h-full">
    <!-- Hero - left side -->
    <section class="flex flex-col relative col-span-3 pt-20 bg-[#FDF7FF]">
      <header>
        <!-- Logo -->
        <div class="flex space-x-4 text-[#252525]">
          <img src="/logo.svg" alt="Agora Space" class="w-7 h-7" />
          <h1 class="font-bold tracking-tight text-2xl font-display">Agora Space</h1>
        </div>
      </header>

      <!-- Platon -->
      <div class="absolute bottom-0 -right-3/4 w-[70vw] h-auto">
        <img src="/images/platon-hero.png" alt="Platon" class="w-full" />
      </div>

      <!-- Title -->
      <div class="relative mt-28">
        <h2 class="mb-8 font-bold tracking-tight text-6xl font-display">
          Social token <br /><span class="text-[#2E2093]">toolkit</span> and oracle
        </h2>

        <p class="mb-10 font-semibold text-2xl">
          Two-way social media integration <br />to the blockchain
        </p>
      </div>

      <!-- Buttons -->
      <div class="flex flex-col space-y-4">
        <a href="/" class="button bg-[#3B2DA4] flex space-x-4">
          <span>Join a community</span>
          <ArrowRight weight="bold" size="1.2em" />
        </a>
        <a href="/" class="button bg-[#BA4CC4]">Create a community</a>
      </div>

      <div class="flex mt-auto mb-20">
        <SocialLinks buttonClasses="text-xl text-gray-900" />
      </div>
    </section>

    <!-- Hero - right side -->
    <aside class="relative col-span-2 pt-20">
      <!-- Menu -->
      <nav
        class="relative flex justify-end space-x-12 text-[#FDF7FF] font-semibold text-lg font-display"
      >
        <a href="/" class="hover:underline focus:outline-none focus:underline">Home</a>
        <a href="/" class="hover:underline focus:outline-none focus:underline">Tools</a>
        <a href="/" class="hover:underline focus:outline-none focus:underline">About</a>
      </nav>
    </aside>
  </div>
</section>

<section id="what-is-agora-space" class="relative bg-[#4F1D85]">
  <div class="flex justify-end container mx-auto px-8 py-40 text-[#FDF7FF]">
    <div
      class="absolute left-0 bottom-0 w-2/5 h-full bg-what-is-agora-space bg-contain bg-no-repeat bg-left-bottom"
    />
    <div class="w-3/5 text-center">
      <h2 class="mb-8 text-6xl font-bold tracking-tight font-display uppercase">
        What is Agora Space?
      </h2>
      <p class="font-semibold text-xl">
        A framework for all social token tools. <br />
        A broad service pack elevating tokenized communities, <br />
        helping their founders and members alike. <br />
        It provides the first use-case for social oracle networks.
      </p>
    </div>
  </div>
</section>

<section id="great-thinkers-are-with-us" class="relative bg-[#252525]">
  <div class="container mx-auto px-8 py-20 grid grid-cols-3 gap-16 text-center">
    <h2
      class="col-span-3 mb-16 text-[#E77FF0] text-6xl font-bold tracking-tight font-display uppercase"
    >
      Great thinkers are with us
    </h2>

    <div class="flex flex-col items-center space-y-8 text-xl">
      <img src="/images/plato-portrait.png" alt="Plato portrait" class="h-80" />
      <p class="text-[#FDF7FF] font-semibold">
        “I wish oracles would finally <br />
        provide social data. Agora Space <br />
        is very promising in that regard <br />
        and also in easing the limitations <br />
        of social tokens.”
      </p>
      <p class="text-[#E77FF0] font-bold tracking-tight font-display">-Plato-</p>
    </div>

    <div class="flex flex-col items-center space-y-8 text-xl">
      <img src="/images/aristotle-portrait.png" alt="Aristotle portrait" class="h-80" />
      <p class="text-[#FDF7FF] font-semibold">
        “The entire social token <br />
        ecosystem is available on this <br />
        one unified platform, catering <br />
        to all the needs of <br />
        communities.”
      </p>
      <p class="text-[#E77FF0] font-bold tracking-tight font-display">-Aristotle-</p>
    </div>

    <div class="flex flex-col items-center space-y-8 text-xl">
      <img src="/images/epikuros-portrait.png" alt="Epikuros portrait" class="h-80" />
      <p class="text-[#FDF7FF] font-semibold">
        “I am looking forward to seeing <br />
        more use-cases available here for <br />
        connecting social media and the <br />
        blockchain, and how they provide a <br />
        new financial system for creators.”
      </p>
      <p class="text-[#E77FF0] font-bold tracking-tight font-display">-Epikuros-</p>
    </div>
  </div>
</section>

<section id="who-is-agora-space-for" class="relative h-[600px]">
  <!-- Background -->
  <div class="absolute flex w-full h-full">
    <div class="relative flex-grow bg-[#4F1D85] overflow-hidden">
      <div
        class="absolute -left-1/4 -bottom-1/3 w-1/2 aspect-w-2 aspect-h-1 bg-circle-pattern bg-no-repeat bg-cover"
      />
      <div
        class="absolute -right-1/4 -top-1/3 w-1/2 aspect-w-2 aspect-h-1 bg-circle-pattern bg-no-repeat bg-cover"
      />
    </div>
    <div class="flex-grow bg-[#FDF7FF]" />
  </div>
</section>

<footer class="bg-[#FDF7FF]">
  <div
    class="container mx-auto px-8 py-20 bg-michelangelo-david bg-right-bottom bg-no-repeat bg-contain"
  >
    <div class="w-3/5 flex space-x-16">
      <div class="flex flex-col">
        <h4 class="mb-4 text-[#BA4CC4] font-bold tracking-tight text-2xl font-display">
          Join the community
        </h4>
        <ul class="mb-12 font-medium text-lg">
          <li>
            <a href="/">Twitter</a>
          </li>
          <li>
            <a href="/">Github</a>
          </li>
          <li>
            <a href="/">Medium</a>
          </li>
          <li>
            <a href="/">Discord</a>
          </li>
          <li>
            <a href="/">Telegram</a>
          </li>
        </ul>

        <span class="mt-auto font-light">2021 Agora Space</span>
      </div>

      <div class="flex flex-col">
        <h4 class="mb-4 text-[#BA4CC4] font-bold tracking-tight text-2xl font-display">
          Information
        </h4>
        <ul class="mb-12 font-medium text-lg">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Gitbook</a>
          </li>
          <li>
            <a href="/">Brandbook</a>
          </li>
          <li>
            <a href="/">Support</a>
          </li>
        </ul>

        <a href="/" class="mt-auto font-light">Privacy Policy</a>
      </div>

      <div class="flex flex-col">
        <h4 class="mb-4 text-[#BA4CC4] font-bold tracking-tight text-2xl font-display">
          Tools & Products
        </h4>
        <ul class="mb-12 font-medium text-lg">
          <li>
            <a href="/">Community explorer</a>
          </li>
          <li>
            <a href="/">Role management bot</a>
          </li>
          <li>
            <a href="/">Social Token Admin</a>
          </li>
        </ul>

        <a href="/" class="mt-auto font-light">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
