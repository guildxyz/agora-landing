<script>
  import Header from '$lib/Header';
  import { ArrowRight } from 'phosphor-svelte';
</script>

<section id="social-token-admin" class="relative pt-16 lg:pt-28 bg-agora-purple text-agora-white">
  <div class="absolute left-0 right-0 top-0 z-50">
    <Header whiteLogo />
  </div>

  <!-- Background circles -->
  <div
    class="absolute bottom-0 left-0 w-[50vw] h-[50vw] md:w-[25vw] md:h-[25vw] transform -translate-x-1/2 translate-y-1/2 bg-circle-pattern bg-no-repeat bg-cover"
  />

  <div class="container py-20 grid lg:grid-cols-12 gap-16 lg:gap-0">
    <!-- Image -->
    <div class="order-2 lg:order-1 lg:col-span-8 flex items-center justify-center lg:pr-20">
      <a href="https://app.agora.space" target="_blank" rel="noopener">
        <img src="/images/community-explorer.png" alt="Community explorer" class="max-w-full" />
      </a>
    </div>

    <!-- Text -->
    <div
      class="order-1 lg:order-2 lg:col-span-4 flex flex-col items-start justify-center text-center lg:text-left"
    >
      <h2
        class="mb-8 w-full text-3xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight font-display uppercase"
      >
        Community explorer
      </h2>

      <p class="mb-4 2xl:text-xl">
        Browse all existing social tokens in our explorer from Aragon, tryroll, Stakes Social,
        Colony.io.
      </p>

      <ol class="leading-loose text-left">
        <li class="flex itmes-start space-x-2">
          <span class="relative top-2">
            <ArrowRight weight="bold" size={16} />
          </span>
          <span>Issue your token on your favourite platforms and DAO frameworks,</span>
        </li>

        <li class="flex itmes-start space-x-2">
          <span class="relative top-2">
            <ArrowRight weight="bold" size={16} />
          </span>
          <span>Find it in our explorer,</span>
        </li>

        <li class="flex itmes-start space-x-2">
          <span class="relative top-2">
            <ArrowRight weight="bold" size={16} />
          </span>
          <span>Verify that it is yours,</span>
        </li>

        <li class="flex itmes-start space-x-2">
          <span class="relative top-2">
            <ArrowRight weight="bold" size={16} />
          </span>
          <span>Add Agora Space’s tools to your community.</span>
        </li>
      </ol>
    </div>
  </div>
</section>
