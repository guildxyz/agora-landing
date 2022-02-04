<!-- We don't use this component currently, but I left it here just in case we need it again, or if we'll need to make a similar section in the future -->
<script>
  import Header from '$lib/Header';
  import Button from '$lib/Button';
  import { ArrowRight } from 'phosphor-svelte';
</script>

<section id="role-management-bot" class="relative">
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
        Role management bot
      </h2>

      <p class="2xl:text-xl">
        Our bot Hermes bridges Telegram and Discord channels and his ally Medusa guards your token
        gated communities. You can invite the bots to your channels with the press of a button and
        Medusa will manage all affairs of admitting and dismissing people from your groups based on
        how much they hold or stake of your token.
      </p>

      <Button
        href="https://app.agora.space/"
        rel="noopener"
        target="_blank"
        class="w-max px-0 text-agora-white"
      >
        <span>Try out our bot</span>
        <ArrowRight slot="icon" weight="bold" size="1.2em" />
      </Button>
    </div>

    <!-- Right Side -->
    <div
      class="relative flex flex-col items-start justify-center space-y-4 bg-agora-gray px-20 pb-10 pr-8 pl-10 text-agora-white lg:col-span-3 lg:pt-40 lg:pb-20 lg:pl-20 xl:pl-40"
    >
      <picture class="max-w-full">
        <source srcset="/images/role-management-bot.webp" type="image/webp" />
        <source srcset="/images/png/role-management-bot.png" type="image/png" />
        <img src="/images/png/role-management-bot.png" alt="Role management bot" />
      </picture>
    </div>
  </div>
</section>
