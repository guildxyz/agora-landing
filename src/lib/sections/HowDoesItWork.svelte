<script>
  import Header from '$lib/Header';
  import Button from '$lib/Button';
  import { ArrowRight } from 'phosphor-svelte';
</script>

<section id="how-does-it-work" class="relative">
  <div class="absolute left-0 right-0 top-0 z-50">
    <Header whiteLogo />
  </div>

  <!-- Background -->
  <div class="absolute hidden h-full w-full lg:flex">
    <div class="w-1/2 bg-agora-gray" />
    <div class="w-1/2 bg-agora-pink-dark" />
  </div>

  <div
    class="relative flex h-full flex-col overflow-hidden lg:container lg:grid lg:grid-cols-6 xl:grid-cols-5"
  >
    <!-- Left side -->
    <div
      class="relative flex h-full flex-col items-center justify-start space-y-8 bg-agora-gray px-8 pt-24 pb-10 text-center text-agora-white lg:col-span-3 lg:pr-20 lg:pt-40 xl:pr-40"
    >
      <picture>
        <source srcset="/images/how-does-it-work.webp" type="image/webp" />
        <source srcset="/images/png/how-does-it-work.png" type="image/png" />
        <img src="/images/png/how-does-it-work.png" alt="How does it work?" class="max-w-full" />
      </picture>
    </div>

    <!-- Right Side -->
    <div
      class="relative flex flex-col items-start justify-center space-y-4 bg-agora-pink-dark px-8 pt-10 pb-10 text-center text-agora-white md:text-left lg:col-span-3 lg:px-20 lg:pt-40 lg:pb-20 xl:col-span-2"
    >
      <h2
        class="mb-8 w-full font-display text-3xl font-bold uppercase tracking-tight lg:text-4xl 2xl:text-5xl"
      >
        How does it work?
      </h2>

      <p class="2xl:text-xl">
        On Agora.Space social media meets EVM-compatible blockchains in a two-way integration system
        to disrupt existing applications. We aggregate and build tools to give your existing tokens
        extra utility. These permissionless and independent tools are collectively governed by the
        Agora Space DAO.
      </p>

      <p class="2xl:text-xl">
        The special juice in Agora.Space is a social layer on the Witnet decentralized oracle
        network which we use in almost evers tool.
      </p>

      <Button
        href="https://medium.com/@AgoraSpaceDAO"
        rel="noopener"
        class="w-max text-agora-white"
        noPadding
      >
        Read more on Medium
        <ArrowRight slot="icon" weight="bold" size="1.2em" />
      </Button>
    </div>
  </div>
</section>
