<script>
  import Header from '$lib/Header';
  import Button from '$lib/Button';
  import { ArrowRight } from 'phosphor-svelte';
</script>

<section id="token-gated-access" class="relative">
  <div class="absolute left-0 right-0 top-0 z-50">
    <Header whiteLogo />
  </div>

  <!-- Background -->
  <div class="absolute hidden h-full w-full lg:flex">
    <div class="w-1/2 bg-agora-purple" />
    <div class="w-1/2 bg-agora-gray" />
  </div>

  <div
    class="relative flex h-full flex-col overflow-hidden lg:container lg:grid lg:grid-cols-6 xl:grid-cols-5"
  >
    <!-- Left side -->
    <div
      class="relative flex h-full flex-col items-center justify-center space-y-8 bg-agora-gray px-8 pt-24 pb-10 text-center text-agora-white lg:col-span-3 lg:items-start lg:bg-agora-purple lg:pr-20 lg:pt-40 lg:text-left xl:col-span-2"
    >
      <h2
        class="w-full font-display text-3xl font-bold uppercase tracking-tight lg:text-4xl 2xl:text-5xl"
      >
        Token-Gated Access
      </h2>

      <p class="2xl:text-xl">
        You can invite the bots to your channels with the press of a button and Medusa will manage
        all affairs of admitting and dismissing people from your groups based on how much they hold
        or stake of your token.
      </p>

      <p class="2xl:text-xl">
        Our fist tool and the open gateway to access the rest of what Agora Space has to offer.
      </p>

      <Button
        href="https://medium.com/@AgoraSpaceDAO"
        rel="noopener"
        class="w-max text-agora-white"
        noPadding
      >
        Read more on Medium
        <ArrowRight slot="icon" weight="bold" size="1.2em" />
      </Button>
    </div>

    <!-- Right Side -->
    <div
      class="relative flex flex-col items-start justify-center space-y-4 bg-agora-gray px-20 pb-10 pr-8 pl-10 text-agora-white lg:col-span-3 lg:pt-40 lg:pb-20 lg:pl-20 xl:pl-40"
    >
      <picture class="max-w-full">
        <source srcset="/images/token-gated-access.webp" type="image/webp" />
        <source srcset="/images/png/token-gated-access.png" type="image/png" />
        <img src="/images/png/token-gated-access.png" alt="Role management bot" />
      </picture>
    </div>
  </div>
</section>
