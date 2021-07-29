<script>
  import { ArrowRight } from 'phosphor-svelte';
</script>

<section id="join-or-create-a-community" class="relative bg-agora-blue-bg overflow-hidden">
  <!-- Background circles -->
  <div
    class="absolute bottom-0 left-0 w-[50vw] h-[50vw] md:w-[25vw] md:h-[25vw] transform -translate-x-1/4 translate-y-1/2 bg-circle-pattern bg-no-repeat bg-cover"
  />

  <div
    class="absolute top-0 right-0 w-[50vw] h-[50vw] md:w-[25vw] md:h-[25vw] transform translate-x-1/2 -translate-y-1/2 bg-circle-pattern bg-no-repeat bg-cover"
  />

  <div class="container grid gap-16 md:gap-0 md:grid-cols-2 mx-auto px-8 py-20">
    <div class="space-y-8">
      <h2
        class="text-agora-white text-3xl lg:text-4xl font-bold tracking-tight font-display uppercase text-center"
      >
        Join a community
      </h2>

      <div class="relative md:px-8 lg:px-16">
        <img src="/images/community-explorer.png" alt="Join a community" class="w-full" />

        <a
          href="https://app.agora.space/"
          class="flex items-center justify-center absolute -right-4 md:right-0 lg:right-12 -bottom-8 w-16 lg:w-20 h-16 lg:h-20 bg-agora-pink-text-darker text-agora-white rounded-full"
        >
          <ArrowRight size="2em" weight="bold" />
        </a>
      </div>
    </div>

    <div class="space-y-8">
      <h2
        class="text-agora-white text-3xl lg:text-4xl font-bold tracking-tight font-display uppercase text-center"
      >
        Create a community
      </h2>

      <div class="relative md:px-8 lg:px-16">
        <img src="/images/social-token-admin.png" alt="Create a community" class="w-full" />
      </div>
    </div>
  </div>
</section>
