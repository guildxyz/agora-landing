<script>
  let showStartVideo = true;
  let windowHeight;
  let scrollY;
  let firstVideo;
  let loopingVideo;

  const handleStartEnd = () => {
    showStartVideo = false;
    loopingVideo.play();
  };

  $: if (scrollY >= windowHeight / 2 && firstVideo && loopingVideo) {
    firstVideo.play();
  }
</script>

<svelte:window bind:innerHeight={windowHeight} bind:scrollY />

<section id="what-is-agora-space" class="relative bg-agora-purple">
  <div class="relative w-full max-fullhd-container mx-auto flex flex-col">
    <div class="flex flex-col lg:flex-row text-agora-white">
      <div
        class="order-2 lg:order-1 flex lg:self-end flex-col justify-end h-full w-full max-w-3xl pt-16"
      >
        <!-- svelte-ignore a11y-media-has-caption -->
        <video
          src="/animations/what-is-agora-space-start.webm"
          muted
          width="100%"
          height="auto"
          on:ended={handleStartEnd}
          bind:this={firstVideo}
          style={`display: ${showStartVideo ? 'block' : 'none'};`}
        >
          <img src="/images/what-is-agora-space-bg.png" alt="What is Agora Space?" class="w-full" />
        </video>
        <!-- svelte-ignore a11y-media-has-caption -->
        <video
          src="/animations/what-is-agora-space.webm"
          muted
          width="100%"
          height="auto"
          loop
          bind:this={loopingVideo}
          style={`display: ${showStartVideo ? 'none' : 'block'};`}
        >
          <img src="/images/what-is-agora-space-bg.png" alt="What is Agora Space?" class="w-full" />
        </video>
      </div>

      <div
        class="order-1 lg:order-2 container self-center pt-16 px-8 xl:px-32 2xl:px-38 max-w-5xl md:pt-20 lg:py-28 2xl:py-32 lg:max-w-3/5 text-center"
      >
        <h2
          class="mb-8 text-3xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight font-display uppercase"
        >
          What is <br class="md:hidden" />Agora Space?
        </h2>
        <p class="mb-4 lg:font-semibold 2xl:text-xl">
          Agora Space connects Discord, Twitter and other social media platforms with the blockchain
          providing a range of tools to upgrade DAOs and Social Token communities.
        </p>
        <p class="lg:font-semibold 2xl:text-xl">
          Our vision is to supercharge Web3 adoption by creating gasless, multichain and
          platform-agnostic solutions, without sacrificing decentralisation or privacy.
        </p>
      </div>
    </div>
  </div>
</section>
