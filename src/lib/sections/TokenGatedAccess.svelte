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
  <div class="absolute hidden lg:flex w-full h-full">
    <div class="bg-agora-purple w-1/2" />
    <div class="bg-agora-gray w-1/2" />
  </div>

  <div
    class="relative lg:container flex flex-col lg:grid lg:grid-cols-6 xl:grid-cols-5 h-full overflow-hidden"
  >
    <!-- Left side -->
    <div
      class="flex flex-col items-center lg:items-start justify-center space-y-8 relative lg:col-span-3 xl:col-span-2 px-8 lg:pr-20 pt-24 lg:pt-40 pb-10 h-full bg-agora-gray lg:bg-agora-purple text-agora-white text-center lg:text-left"
    >
      <h2 class="w-full text-4xl 2xl:text-6xl font-bold tracking-tight font-display uppercase">
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
        class="px-0 w-max text-agora-white"
      >
        <span>Read more on Medium</span>
        <ArrowRight slot="icon" weight="bold" size="1.2em" />
      </Button>
    </div>

    <!-- Right Side -->
    <div
      class="flex flex-col items-start justify-center space-y-4 lg:col-span-3 relative px-20 lg:pt-40 pb-10 lg:pb-20 pr-8 pl-10 lg:pl-20 xl:pl-40 bg-agora-gray text-agora-white"
    >
      <img src="/images/token-gated-access.png" alt="Role management bot" class="max-w-full" />
    </div>
  </div>
</section>
