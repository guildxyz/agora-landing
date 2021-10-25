<script>
  import Header from '$lib/Header';
  import { SignIn } from 'phosphor-svelte';
  import Button from '$lib/Button';
</script>

<section id="agora-space" class="relative pt-16 lg:pt-28 bg-agora-purple text-agora-white">
  <div class="absolute left-0 right-0 top-0 z-50">
    <Header whiteLogo />
  </div>

  <div class="container py-20 px-8 grid lg:grid-cols-5 gap-16 lg:gap-0">
    <!-- Image -->
    <div
      class="order-2 lg:order-1 lg:col-span-3 flex items-start justify-center lg:justify-end lg:pr-20"
    >
      <img src="/images/community-explorer.png" alt="Agora Space" class="max-w-full xl:max-w-xl" />
    </div>

    <!-- Text -->
    <div
      class="order-1 lg:order-2 lg:col-span-2 group relative flex flex-col items-start justify-center text-center lg:text-left"
    >
      <h2
        class="mb-8 w-full text-3xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight font-display"
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
        class="mx-auto lg:mx-0 w-max bg-agora-pink-medium text-agora-white"
      >
        Integrate your token
        <SignIn slot="icon" weight="bold" size="1.2em" />
      </Button>
    </div>
  </div>
</section>
