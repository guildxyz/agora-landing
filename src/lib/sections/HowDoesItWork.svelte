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
      <img src="/images/how-does-it-work.png" alt="How does it work?" class="max-w-full" />
    </div>

    <!-- Right Side -->
    <div
      class="flex flex-col items-start justify-center space-y-4 lg:col-span-3 xl:col-span-2 relative px-8 lg:px-20 pt-10 lg:pt-40 pb-10 lg:pb-20 bg-agora-pink-dark text-agora-white text-center md:text-left"
    >
      <h2 class="mb-8 w-full text-4xl 2xl:text-6xl font-bold tracking-tight font-display uppercase">
        How does it work?
      </h2>

      <p class="2xl:text-xl">
        Agora Space creates a bridge between social media and the blockchain with the help of the
        Agora Social Oracle layer while utilizing existing solutions.
      </p>

      <p class="2xl:text-xl">
        We collect and utilize the best blockchain projects in our tools to make your DeFi
        experience smoother and more efficient. Browse our explorer for all social tokens existing
        on the blockchain or use our comprehensive toolkit. Integrate your social token on our admin
        page and let the role management bots handle your token gated communities.
      </p>

      <Button href="https://medium.com/@AgoraSpaceDAO" class="px-0 w-max text-agora-white">
        <span>Read more on Medium</span>
        <ArrowRight slot="icon" weight="bold" size="1.2em" />
      </Button>
    </div>
  </div>
</section>
