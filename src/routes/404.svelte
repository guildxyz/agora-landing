<script>
  import Button from '$lib/Button';
  import { ArrowRight } from 'phosphor-svelte';
</script>

<div
  class="flex min-h-screen flex-col items-center justify-center bg-agora-gray px-20 text-agora-white lg:px-36 xl:px-44"
>
  <div class="relative w-full max-w-5xl md:w-auto">
    <picture>
      <source srcset="/images/404.webp" type="image/webp" />
      <source srcset="/images/png/404.png" type="image/png" />
      <img class="hidden md:block" src="/images/png/404.png" alt="404 - Page not found!" />
    </picture>
    <div
      class="top-0 left-0 mx-auto flex h-full max-w-sm flex-col text-center md:absolute md:text-left xl:mx-0"
    >
      <h1
        class="mb-8 font-display text-3xl font-bold uppercase tracking-tight text-agora-pink-medium md:text-4xl lg:text-5xl xl:text-6xl"
      >
        404<br />Page not found
      </h1>
      <p class="mb-8 font-semibold xl:text-xl">
        Sorry, something went wrong and the page you’re looking for cannot be accessed.
      </p>
      <Button href="/" class="mx-auto max-w-max bg-agora-pink-medium md:mx-0">
        <span>Go Back</span>
        <ArrowRight slot="icon" weight="bold" size="1.2em" />
      </Button>
      <a
        href="https://discord.gg/T3Pb7VkUBz"
        target="_blank"
        class="xl:text-axl mt-8 mb-4 font-semibold md:mt-auto">Contact us</a
      >
    </div>
  </div>
</div>
