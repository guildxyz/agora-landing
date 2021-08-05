<script>
  import Step from './components/Step.svelte';
</script>

<section id="roadmap" class="relative bg-agora-blue-medium">
  <!-- Background circles -->
  <div
    class="absolute bottom-0 left-0 w-[50vw] h-[50vw] md:w-[25vw] md:h-[25vw] transform -translate-x-3/4 translate-y-1/2 bg-circle-pattern bg-no-repeat bg-cover"
  />

  <div
    class="absolute top-0 right-0 w-[50vw] h-[50vw] md:w-[25vw] md:h-[25vw] transform translate-x-1/2 -translate-y-3/4 bg-circle-pattern bg-no-repeat bg-cover"
  />

  <div class="container px-8 pt-20 xl:pt-24 pb-24 xl:pb-28 space-y-16 text-center">
    <h2
      class="col-span-3 text-agora-pink-light text-3xl lg:text-5xl 2xl:text-6xl font-bold tracking-tight font-display uppercase"
    >
      Roadmap <span class="text-lg tracking-normal">2021</span>
    </h2>

    <div class="-mx-8 px-8 pb-4 lg:pb-0 overflow-x-auto light-scroll">
      <div class="pr-8 w-max lg:w-full grid grid-cols-3 gap-16">
        <Step
          title="Testing"
          q="Q2"
          content="Telegram & Discord management bot. Bridging chats between social platforms. Audited smart contracts."
        />
        <Step
          title="Releasing"
          q="Q3"
          content="Aragon and Gnosis integration Agora Social Oracle layer Agora Space, the “App Store” of social tokens."
        />
        <Step
          title="More tools"
          q="Q4"
          content="Integrating other token issuers Token admin dashboard Bridge a token between blockchains with full utility."
        />
      </div>
    </div>
  </div>
</section>
