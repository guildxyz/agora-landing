<script>
  import CtaImg from './components/CtaImg.svelte';
</script>

<section id="join-or-create-a-community" class="relative bg-agora-blue-medium overflow-hidden">
  <!-- Background circles -->
  <div
    class="absolute bottom-0 left-0 w-[50vw] h-[50vw] md:w-[25vw] md:h-[25vw] transform -translate-x-1/4 translate-y-1/2 bg-circle-pattern bg-no-repeat bg-cover"
  />

  <div
    class="absolute top-0 right-0 w-[50vw] h-[50vw] md:w-[25vw] md:h-[25vw] transform translate-x-1/2 -translate-y-1/2 bg-circle-pattern bg-no-repeat bg-cover"
  />

  <div
    class="container grid gap-16 md:gap-0 md:grid-cols-2 pt-16 lg:pt-20 xl:pt-28 2xl:pt-28 pb-20 lg:pb-24 xl:pb-40 2xl:pb-40"
  >
    <CtaImg
      title="Join a community"
      image="/images/community-explorer.png"
      url="https://app.agora.space/"
      openNewPage
    />

    <CtaImg
      title="Build your Agora"
      image="/images/social-token-admin.png"
      url="https://app.agora.space/register"
      openNewPage
    />
  </div>
</section>
