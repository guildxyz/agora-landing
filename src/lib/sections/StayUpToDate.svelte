<script>
  import Button from '$lib/Button';
  import { ArrowRight } from 'phosphor-svelte';
</script>

<section id="what-is-agora-space" class="relative bg-agora-white overflow-hidden">
  <div class="container mx-auto grid lg:grid-cols-12 px-8">
    <!-- Text -->
    <div
      class="lg:col-span-5 flex flex-col items-center justify-center space-y-8 lg:px-20 py-20 text-center"
    >
      <h2
        class="text-agora-purple-bg text-3xl lg:text-4xl font-bold tracking-tight font-display uppercase"
      >
        Stay up to date
      </h2>

      <p class="font-semibold text-lg xl:text-xl">
        Join the Agora Space Discord server to see all the interesting news.
      </p>

      <Button
        href="https://discord.gg/KvXtEpDX8B"
        class="w-max bg-agora-purple-bg text-agora-white"
      >
        <span>Join our community</span>
        <ArrowRight slot="icon" weight="bold" size="1.2em" />
      </Button>
    </div>

    <!-- Photo -->
    <div class="lg:col-span-7 relative -mx-8 h-[40vh] lg:h-full">
      <div
        class="absolute bottom-0 -right-1/2 md:right-0 w-[150vw] sm:w-[125vw] md:w-full xl:w-2/3"
      >
        <img
          src="/images/stay-up-to-date.png"
          alt="Stay up to date"
          class="w-full h-full object-contain transform -translate-x-1/4 md:translate-x-0"
        />
      </div>
    </div>
  </div>
</section>
