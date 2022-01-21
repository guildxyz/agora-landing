<script>
  import Button from '$lib/Button';
  import { ArrowRight } from 'phosphor-svelte';
</script>

<div
  class="min-h-screen flex flex-col items-center justify-center px-20 lg:px-36 xl:px-44 bg-agora-gray text-agora-white"
>
  <div class="relative w-full md:w-auto max-w-5xl">
    <img class="hidden md:block" src="/images/404.webp" alt="404 - Page not found!" />
    <div
      class="md:absolute top-0 left-0 flex flex-col mx-auto xl:mx-0 max-w-sm h-full text-center md:text-left"
    >
      <h1
        class="mb-8 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight font-display uppercase text-agora-pink-medium"
      >
        404<br />Page not found
      </h1>
      <p class="mb-8 font-semibold xl:text-xl">
        Sorry, something went wrong and the page you’re looking for cannot be accessed.
      </p>
      <Button href="/" class="mx-auto md:mx-0 max-w-max bg-agora-pink-medium">
        <span>Go Back</span>
        <ArrowRight slot="icon" weight="bold" size="1.2em" />
      </Button>
      <a
        href="https://discord.gg/T3Pb7VkUBz"
        target="_blank"
        class="mt-8 md:mt-auto mb-4 font-semibold xl:text-axl">Contact us</a
      >
    </div>
  </div>
</div>
