<script>
  import Header from '$lib/Header';
  import { ArrowRight } from 'phosphor-svelte';
</script>

<section id="social-token-admin" class="relative bg-agora-purple pt-16 text-agora-white lg:pt-28">
  <div class="absolute left-0 right-0 top-0 z-50">
    <Header whiteLogo />
  </div>

  <!-- Background circles -->
  <div
    class="absolute bottom-0 left-0 h-[50vw] w-[50vw] -translate-x-1/2 translate-y-1/2 transform bg-circle-pattern bg-cover bg-no-repeat md:h-[25vw] md:w-[25vw]"
  />

  <div class="container grid gap-16 py-20 lg:grid-cols-12 lg:gap-0">
    <!-- Image -->
    <div class="order-2 flex items-center justify-center lg:order-1 lg:col-span-8 lg:pr-20">
      <a href="https://app.agora.space" target="_blank" rel="noopener">
        <picture class="max-w-full">
          <source srcset="/images/community-explorer.webp" type="image/webp" />
          <source srcset="/images/png/community-explorer.png" type="image/png" />
          <img src="/images/png/community-explorer.png" alt="Community explorer" />
        </picture>
      </a>
    </div>

    <!-- Text -->
    <div
      class="order-1 flex flex-col items-start justify-center text-center lg:order-2 lg:col-span-4 lg:text-left"
    >
      <h2
        class="mb-8 w-full font-display text-3xl font-bold uppercase tracking-tight lg:text-4xl 2xl:text-5xl"
      >
        Community explorer
      </h2>

      <p class="mb-4 2xl:text-xl">
        Browse all existing social tokens in our explorer from Aragon, tryroll, Stakes Social,
        Colony.io.
      </p>

      <ol class="text-left leading-loose">
        <li class="itmes-start flex space-x-2">
          <span class="relative top-2">
            <ArrowRight weight="bold" size={16} />
          </span>
          <span>Issue your token on your favourite platforms and DAO frameworks,</span>
        </li>

        <li class="itmes-start flex space-x-2">
          <span class="relative top-2">
            <ArrowRight weight="bold" size={16} />
          </span>
          <span>Find it in our explorer,</span>
        </li>

        <li class="itmes-start flex space-x-2">
          <span class="relative top-2">
            <ArrowRight weight="bold" size={16} />
          </span>
          <span>Verify that it is yours,</span>
        </li>

        <li class="itmes-start flex space-x-2">
          <span class="relative top-2">
            <ArrowRight weight="bold" size={16} />
          </span>
          <span>Add Agora Space’s tools to your community.</span>
        </li>
      </ol>
    </div>
  </div>
</section>
