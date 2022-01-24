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
  <div class="absolute hidden lg:flex w-full h-full">
    <div class="bg-agora-gray w-1/2" />
    <div class="bg-agora-pink-dark w-1/2" />
  </div>

  <div
    class="relative lg:container flex flex-col lg:grid lg:grid-cols-6 xl:grid-cols-5 h-full overflow-hidden"
  >
    <!-- Left side -->
    <div
      class="flex flex-col items-center justify-start space-y-8 relative lg:col-span-3 px-8 lg:pr-20 xl:pr-40 pt-24 lg:pt-40 pb-10 h-full bg-agora-gray text-agora-white text-center"
    >
      <picture class="max-w-full">
        <source srcset="/images/how-does-it-work.webp" type="image/webp" />
        <source srcset="/images/png/how-does-it-work.png" type="image/png" />
        <img src="/images/png/how-does-it-work.png" alt="How does it work?" />
      </picture>
    </div>

    <!-- Right Side -->
    <div
      class="flex flex-col items-start justify-center space-y-4 lg:col-span-3 xl:col-span-2 relative px-8 lg:px-20 pt-10 lg:pt-40 pb-10 lg:pb-20 bg-agora-pink-dark text-agora-white text-center md:text-left"
    >
      <h2
        class="mb-8 w-full text-3xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight font-display uppercase"
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
