<script>
  import Button from '$lib/Button';
  import PitchdeckModal from '$lib/PitchdeckModal.svelte';
  import HeroPresentation from '$lib/HeroPresentation.svelte';
  import SocialIcons from '$lib/SocialIcons.svelte';
  import { ArrowRight, Cards } from 'phosphor-svelte';

  let open = false;
</script>

<div
  class="grid gap-32 px-4 py-4 m-auto lg:p-16 xl:p-28 lg:grid-cols-[1fr,1fr] xl:grid-cols-[2fr,3fr] max-w-[1800px] h-full max-h-[1200px] sm:px-6"
>
  <div class="flex flex-col sm:h-auto">
    <div class="flex justify-between w-full lg:mt-8">
      <div class="flex items-center space-x-4">
        <img class="h-8" src="icon/32x32.png" alt="Agora Space logo" />
        <p class="font-semibold tracking-tight md:text-lg font-display">Agora Space</p>
      </div>
      <div class="flex items-center">
        <SocialIcons buttonClasses="text-xl text-gray-900" />
      </div>
    </div>
    <div class="mt-4 lg:hidden">
      <video autoplay loop muted playsinline class="mx-auto max-h-72">
        <source src="medusa.webm" type="video/webm" />
        <!-- mp4 for browsers that don't support webm yet, like iOS Safari -->
        <source src="medusa.mp4" type="video/mp4" />
      </video>
    </div>
    <main class="pt-6 lg:pb-24 sm:pt-12 lg:my-auto">
      <div class="max-w-lg mx-auto text-center lg:text-left lg:max-w-none">
        <h1
          class="text-4xl font-extrabold tracking-tight text-gray-900 font-display lg:text-5xl 2xl:text-6xl"
        >
          <span class="block xl:inline">Manage tokenized</span>
          <span class="block text-primary-600 xl:inline">communities</span>
        </h1>
        <p class="mt-5 font-semibold text-gray-500 sm:text-lg xl:text-xl lg:mx-0 lg:mt-8">
          User-friendly way to create tokenized, private communities on multiple blockchains.
        </p>
        <div class="items-center my-8 space-y-3 sm:flex sm:space-y-0 sm:space-x-4 lg:mb-0 lg:mt-12">
          <Button
            class="w-full text-white shadow bg-primary-600 lg:w-auto hover:bg-primary-700"
            on:click={() => (open = true)}
          >
            Pitch deck
            <Cards weight="bold" slot="icon" />
          </Button>
          <Button
            href="https://cj2ttd5kqqx.typeform.com/to/X4bXPcE1"
            target="_blank"
            class="w-full text-primary-600 bg-primary-100 lg:w-auto hover:bg-primary-200"
          >
            Roll in
            <ArrowRight weight="bold" slot="icon" />
          </Button>
        </div>
      </div>
    </main>
  </div>
  <div class="relative hidden lg:block">
    <HeroPresentation />
  </div>
</div>
<PitchdeckModal bind:open />
