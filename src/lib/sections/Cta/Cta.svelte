<script>
  import CtaImg from './components/CtaImg.svelte';
</script>

<section id="join-or-create-a-community" class="relative overflow-hidden bg-agora-blue-medium">
  <!-- Background circles -->
  <div
    class="absolute bottom-0 left-0 h-[50vw] w-[50vw] -translate-x-1/4 translate-y-1/2 transform bg-circle-pattern bg-cover bg-no-repeat md:h-[25vw] md:w-[25vw]"
  />

  <div
    class="absolute top-0 right-0 h-[50vw] w-[50vw] translate-x-1/2 -translate-y-1/2 transform bg-circle-pattern bg-cover bg-no-repeat md:h-[25vw] md:w-[25vw]"
  />

  <div
    class="container grid gap-16 pt-16 pb-20 md:grid-cols-2 md:gap-0 lg:pt-20 lg:pb-24 xl:pt-28 xl:pb-40 2xl:pt-28 2xl:pb-40"
  >
    <CtaImg
      title="Join a community"
      image="/images/community-explorer.webp"
      imagePng="/images/png/community-explorer.png"
      url="https://app.agora.space/"
      openNewPage
    />

    <CtaImg
      title="Build your Agora"
      image="/images/social-token-admin.webp"
      imagePng="/images/png/social-token-admin.png"
      url="https://app.agora.space/register"
      openNewPage
    />
  </div>
</section>
