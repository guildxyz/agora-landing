<script>
  import Button from '$lib/Button';
  import { ArrowRight } from 'phosphor-svelte';
</script>

<section id="what-is-agora-space" class="relative overflow-hidden bg-agora-white">
  <div class="container grid lg:grid-cols-12">
    <!-- Text -->
    <div
      class="flex flex-col items-center justify-center space-y-8 py-20 text-center lg:col-span-5 lg:px-20"
    >
      <h2
        class="font-display text-3xl font-bold uppercase tracking-tight text-agora-purple lg:text-4xl"
      >
        Stay up to date
      </h2>

      <p class="text-lg font-semibold xl:text-xl">
        Join the Agora Space Discord server to see all the interesting news.
      </p>

      <Button
        href="https://discord.gg/KvXtEpDX8B"
        rel="noopener"
        class="w-max bg-agora-purple text-agora-white"
      >
        <span>Join our community</span>
        <ArrowRight slot="icon" weight="bold" size="1.2em" />
      </Button>
    </div>

    <!-- Photo -->
    <div class="relative -mx-8 h-[40vh] lg:col-span-7 lg:h-full">
      <div
        class="absolute bottom-0 -right-1/2 w-[150vw] sm:w-[125vw] md:right-0 md:w-full xl:w-2/3"
      >
        <picture class="h-full w-full -translate-x-1/4 transform object-contain md:translate-x-0">
          <source srcset="/images/stay-up-to-date.webp" type="image/webp" />
          <source srcset="/images/png/stay-up-to-date.png" type="image/png" />
          <img src="/images/png/stay-up-to-date.png" alt="Stay up to date" />
        </picture>
      </div>
    </div>
  </div>
</section>
