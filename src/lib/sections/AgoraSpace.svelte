<script>
  import Header from '$lib/Header';
  import { SignIn } from 'phosphor-svelte';
  import Button from '$lib/Button';
</script>

<section
  id="agora-space"
  class="relative overflow-hidden bg-agora-purple pt-16 text-agora-white lg:pt-28"
>
  <div class="absolute left-0 right-0 top-0 z-50">
    <Header whiteLogo />
  </div>

  <div class="container relative grid max-w-screen-xl gap-16 py-20 px-8 lg:grid-cols-5 lg:gap-0">
    <!-- Background circles -->
    <div
      class="absolute bottom-0 left-0 h-[50vw] w-[50vw] -translate-x-1/2 translate-y-1/2 transform bg-circle-pattern bg-cover bg-no-repeat md:h-[25vw] md:w-[25vw]"
    />

    <!-- Image -->
    <div
      class="order-2 flex items-start justify-center lg:order-1 lg:col-span-3 lg:justify-end lg:pr-20"
    >
      <picture class="max-w-full">
        <source srcset="/images/community-explorer.webp" type="image/webp" />
        <source srcset="/images/png/community-explorer.png" type="image/png" />
        <img src="/images/png/community-explorer.png" alt="Agora Space" />
      </picture>
    </div>

    <!-- Text -->
    <div
      class="group relative order-1 flex flex-col items-start justify-center text-center lg:order-2 lg:col-span-2 lg:text-left"
    >
      <h2
        class="mb-8 w-full font-display text-3xl font-bold tracking-tight lg:text-4xl 2xl:text-5xl"
      >
        Agora Space
      </h2>

      <p class="mb-8 lg:mb-16 2xl:text-xl">
        Browse all existing social tokens in our explorer from Aragon, Rally, Stake Social,
        Colony.io Issue your token on your favourite platforms and DAO frameworks then add utility
        to them with Agora Space’s tools.
      </p>

      <Button
        href="https://app.agora.space"
        target="_blank"
        rel="noopener"
        class="mx-auto w-max bg-agora-pink-medium text-agora-white lg:mx-0"
      >
        Integrate your token
        <SignIn slot="icon" weight="bold" size="1.2em" />
      </Button>
    </div>
  </div>
</section>
