<script>
  import { onMount } from 'svelte';

  let windowWidth;
  let windowHeight;
  let scrollY;
  let videoContainer;
  let videoSrc;
  let video;
  let shouldPlay = true;

  const scrollHandler = () => {
    const rect = videoContainer.getBoundingClientRect();
    if (rect.bottom < windowHeight && shouldPlay) {
      video.play();
      shouldPlay = false;
    }
  };

  onMount(() => {
    if (windowWidth > 768) {
      videoSrc = '/animations/key-technologies.webm';
    } else {
      videoSrc = '/animations/mobile-key-technologies.webm';
    }
  });
</script>

<svelte:window bind:innerHeight={windowHeight} bind:scrollY on:scroll={scrollHandler} />

<section id="key-technologies" class="relative bg-agora-blue-medium text-agora-white">
  <div class="container relative pt-24 lg:pb-24 text-center">
    <div
      class="mx-auto lg:mx-0 max-w-lg lg:max-w-screen-md lg:text-left lg:grid lg:grid-cols-2 lg:gap-16"
    >
      <h2
        class="mb-8 text-3xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight font-display uppercase text-agora-pink-light lg:col-span-2"
      >
        Key technologies
      </h2>
      <div>
        <h3
          class="mb-2 lg:mb-3 text-xl lg:text-2xl font-bold tracking-tight font-display uppercase"
        >
          Social Oracle Layer
        </h3>
        <p class="mb-8 lg:font-semibold 2xl:text-lg">
          Two way social media integration Powered by Witnet to the blockchain creating a circular
          information flow.
        </p>

        <h3
          class="mb-2 lg:mb-3 text-xl lg:text-2xl font-bold tracking-tight font-display uppercase"
        >
          On-chain Privacy
        </h3>
        <p class="mb-8 lg:font-semibold 2xl:text-lg">
          Zero knowledge based self-sovereign identity management system for keeping the link
          between your social media accounts and wallets private. This allows a private decision
          making and sybil attack resistency for many cases.
        </p>
      </div>

      <div>
        <h3
          class="mb-2 lg:mb-3 text-xl lg:text-2xl font-bold tracking-tight font-display uppercase"
        >
          Permissionless Tools
        </h3>
        <p class="mb-8 lg:font-semibold 2xl:text-lg">Fully open-source, hosted on IPFS.</p>

        <h3
          class="mb-2 lg:mb-3 text-xl lg:text-2xl font-bold tracking-tight font-display uppercase"
        >
          Customizable
        </h3>
        <p class="mb-8 lg:font-semibold 2xl:text-lg">
          Spaces can have their own custom domain name and unique appearance.
        </p>

        <h3
          class="mb-2 lg:mb-3 text-xl lg:text-2xl font-bold tracking-tight font-display uppercase"
        >
          Multi-chain
        </h3>
        <p class="lg:font-semibold 2xl:text-lg">
          We integrate every major EVM-compatible blockchains and L2s besides Solana and Near.
        </p>
      </div>
    </div>

    <div
      class="lg:absolute lg:bottom-0 lg:-right-20 xl:right-0 w-full lg:w-2/5"
      bind:this={videoContainer}
    >
      <video
        poster="/images/pegasus.png"
        src={videoSrc}
        playsinline
        muted
        preload="auto"
        width="100%"
        height="auto"
        bind:this={video}
      >
        <img src="/images/pegasus.png" alt="Pegasus" />
      </video>
    </div>
  </div>
</section>
