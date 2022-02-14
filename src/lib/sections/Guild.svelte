<script>
  import Header from '$lib/Header';
  import { SignIn } from 'phosphor-svelte';
  import Button from '$lib/Button';
</script>

<section id="guild" class="relative pt-16 lg:pt-28 bg-agora-gray text-agora-white">
  <div class="absolute left-0 right-0 top-0 z-50">
    <Header whiteLogo />
  </div>

  <div class="container xl:max-w-screen-xl py-20 px-8 grid lg:grid-cols-5 gap-16 lg:gap-0">
    <!-- Text -->
    <div
      class="lg:col-span-2 group relative flex flex-col items-start justify-center text-center lg:text-left"
    >
      <h2
        class="mb-8 w-full text-3xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight font-display"
      >
        Guild.xyz
      </h2>

      <p class="mb-8 lg:mb-16 2xl:text-xl">
        Authorization layer for Web 3 and a no-code tool for token-gated access. <br />
        Create gated access into any platform with advanced logic of entry requirements: NFTs, NFT attributes,
        tokens, whitelists, Snapshot strategies.
      </p>

      <Button
        href="https://guild.xyz"
        target="_blank"
        rel="noopener"
        class="mx-auto lg:mx-0 w-max bg-agora-pink-medium text-agora-white"
      >
        Use Guild
        <img slot="icon-left" src="/svg/guild-logo.svg" alt="Guild.xyz" class="w-4 h-4" />
      </Button>
    </div>

    <!-- Image -->
    <div class="lg:col-span-3 flex items-start justify-center lg:justify-end lg:pl-20">
      <div class="relative">
        <div class="absolute inset-0 filter blur-md bg-agora-pink-medium scale-105 opacity-20" />
        <img src="/images/guild.png" alt="Agora Space" class="relative max-w-full" />
      </div>
    </div>
  </div>
</section>
