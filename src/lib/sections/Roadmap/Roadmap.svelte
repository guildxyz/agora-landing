<script>
  import Step from './components/Step.svelte';
</script>

<section id="roadmap" class="relative bg-agora-blue-medium">
  <!-- Background circles -->
  <div
    class="absolute bottom-0 left-0 h-[50vw] w-[50vw] -translate-x-3/4 translate-y-1/2 transform bg-circle-pattern bg-cover bg-no-repeat md:h-[25vw] md:w-[25vw]"
  />

  <div
    class="absolute top-0 right-0 h-[50vw] w-[50vw] translate-x-1/2 -translate-y-3/4 transform bg-circle-pattern bg-cover bg-no-repeat md:h-[25vw] md:w-[25vw]"
  />

  <div class="container space-y-16 px-8 pt-16 pb-20 text-center xl:pt-24 xl:pb-28">
    <h2
      class="col-span-3 font-display text-3xl font-bold uppercase tracking-tight text-agora-pink-light lg:text-4xl 2xl:text-5xl"
    >
      Roadmap <span class="text-lg tracking-normal">2021</span>
    </h2>

    <div class="light-scroll -mx-8 overflow-x-auto px-8 pb-4 lg:pb-0">
      <div class="grid w-max grid-cols-3 gap-16 pr-8 lg:w-full">
        <Step
          title="Testing"
          q="Q2"
          content={[
            'Telegram & Discord management bot',
            'Bridging chats between social platforms',
            'Audited smart contracts'
          ]}
        />
        <Step
          title="Releasing"
          q="Q3"
          content={[
            'Aragon and Gnosis integration',
            'Agora Social Oracle layer',
            'Agora Space, the “App Store” of social tokens'
          ]}
        />
        <Step
          title="More tools"
          q="Q4"
          content={[
            'Integrating other token issuers',
            'Token admin dashboard',
            'Bridge a token between blockchains with full utility'
          ]}
        />
      </div>
    </div>
  </div>
</section>
