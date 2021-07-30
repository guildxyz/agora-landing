<script>
  import Header from '$lib/Header';
</script>

<section
  id="social-token-admin"
  class="relative pt-16 lg:pt-28 bg-agora-purple-bg text-agora-white"
>
  <div class="absolute left-0 right-0 top-0 z-50">
    <Header whiteLogo />
  </div>

  <!-- Background circles -->
  <div
    class="absolute bottom-0 left-0 w-[50vw] h-[50vw] md:w-[25vw] md:h-[25vw] transform -translate-x-1/2 translate-y-1/2 bg-circle-pattern bg-no-repeat bg-cover"
  />

  <div class="container mx-auto py-20 px-8 grid lg:grid-cols-12 gap-16 lg:gap-0">
    <!-- Image -->
    <div class="order-2 lg:order-1 lg:col-span-8 flex items-center justify-center lg:pr-20">
      <img src="/images/community-explorer.png" alt="Community explorer" class="max-w-full" />
    </div>

    <!-- Text -->
    <div
      class="order-1 lg:order-2 lg:col-span-4 flex flex-col items-start justify-center space-y-8 text-center lg:text-left"
    >
      <h2 class="w-full text-4xl 2xl:text-6xl font-bold tracking-tight font-display uppercase">
        Community explorer
      </h2>

      <p class="text-lg 2xl:text-xl">
        Browse all existing social tokens in our explorer from Aragon, Rally, Stake Social,
        Colony.io Issue your token on your favourite platforms and DAO frameworks then add utility
        to them with Agora Space’s tools.
      </p>
    </div>
  </div>
</section>
