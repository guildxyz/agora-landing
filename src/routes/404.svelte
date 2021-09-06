<script>
  import Button from '$lib/Button';
  import { ArrowRight } from 'phosphor-svelte';
</script>

<div
  class="min-h-screen flex flex-col items-center xl:items-start justify-center bg-agora-gray text-agora-white"
>
  <div
    class="container h-[80vh] text-center xl:text-left xl:bg-notfound bg-no-repeat bg-top bg-cover"
  >
    <div class="flex flex-col mx-auto xl:mx-0 max-w-sm h-full">
      <h1
        class="mb-8 text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight font-display uppercase text-agora-pink-medium"
      >
        404<br />Page not found
      </h1>
      <p class="mb-16 font-semibold 2xl:text-2xl">
        Sorry, something went wrong and the page you’re looking for cannot be accessed.
      </p>
      <Button href="/" class="mx-auto xl:mx-0 max-w-max bg-agora-pink-medium">
        <span>Go Back</span>
        <ArrowRight slot="icon" weight="bold" size="1.2em" />
      </Button>
      <a
        href="https://discord.gg/T3Pb7VkUBz"
        target="_blank"
        class="mt-auto mb-4 font-semibold 2xl:text-2xl">Contact us</a
      >
    </div>
  </div>
</div>
