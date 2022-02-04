<script>
  import Header from '$lib/Header';
  import { SignIn } from 'phosphor-svelte';
  import Button from '$lib/Button';
</script>

<section id="guild" class="relative bg-agora-gray pt-16 text-agora-white lg:pt-28">
  <div class="absolute left-0 right-0 top-0 z-50">
    <Header whiteLogo />
  </div>

  <div class="container grid gap-16 py-20 px-8 lg:grid-cols-5 lg:gap-0 xl:max-w-screen-xl">
    <!-- Text -->
    <div
      class="group relative flex flex-col items-start justify-center text-center lg:col-span-2 lg:text-left"
    >
      <h2
        class="mb-8 w-full font-display text-3xl font-bold tracking-tight lg:text-4xl 2xl:text-5xl"
      >
        Guild.xyz
      </h2>

      <p class="mb-8 lg:mb-16 2xl:text-xl">
        Authorization layer for Web 3 and a no-code tool for token-gated access. <br />
        Create gated access into any platform with advanced logic of entry requirements: NFTs, NFT attributes,
        tokens, whitelists, Snapshot strategies.
      </p>

      <Button
        href="https://alpha.guild.xyz"
        target="_blank"
        rel="noopener"
        class="mx-auto w-max bg-agora-pink-medium text-agora-white lg:mx-0"
      >
        Use Guild
        <img slot="icon-left" src="/svg/guild-logo.svg" alt="Guild.xyz" class="h-4 w-4" />
      </Button>
    </div>

    <!-- Image -->
    <div class="flex items-start justify-center lg:col-span-3 lg:justify-end lg:pl-20">
      <div class="relative">
        <div class="absolute inset-0 scale-105 bg-agora-pink-medium opacity-20 blur-md filter" />
        <picture class="relative max-w-full">
          <source srcset="/images/guild.webp" type="image/webp" />
          <source srcset="/images/png/guild.png" type="image/png" />
          <img src="/images/png/guild.png" alt="Agora Space" />
        </picture>
      </div>
    </div>
  </div>
</section>
