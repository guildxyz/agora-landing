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
  <div class="absolute hidden lg:flex w-full h-full">
    <div class="bg-agora-purple-bg w-1/2" />
    <div class="bg-agora-gray w-1/2" />
  </div>

  <div
    class="relative lg:container mx-auto flex flex-col lg:grid lg:grid-cols-6 xl:grid-cols-5 h-full overflow-hidden"
  >
    <!-- Left side -->
    <div
      class="flex flex-col items-center lg:items-start justify-center space-y-8 relative lg:col-span-3 xl:col-span-2 px-8 lg:pr-20 pt-24 lg:pt-40 pb-10 h-full bg-agora-gray lg:bg-agora-purple-bg text-agora-white text-center lg:text-left"
    >
      <h2 class="w-full text-4xl 2xl:text-6xl font-bold tracking-tight font-display uppercase">
        Role management bot
      </h2>

      <p class="text-lg 2xl:text-xl">
        Our bot Hermes bridges Telegram and Discord channels and his ally Medousa guards your token
        gated communities. You can invite the bots to your channels with the press of a button and
        Medousa will manage all affairs of admitting and dismissing people from your groups based on
        how much they hold or stake of your token.
      </p>

      <Button href="https://medium.com/@AgoraSpace" class="lg:-ml-6 px-0 w-max text-agora-white">
        <span>Read more on Medium</span>
        <ArrowRight slot="icon" weight="bold" size="1.2em" />
      </Button>
    </div>

    <!-- Right Side -->
    <div
      class="flex flex-col items-start justify-center space-y-4 lg:col-span-3 relative px-20 lg:pt-40 pb-10 lg:pb-20 pr-8 pl-10 lg:pl-20 xl:pl-40 bg-agora-gray text-agora-white"
    >
      <img src="/images/role-management-bot.png" alt="Role management bot" class="max-w-full" />
    </div>
  </div>
</section>
