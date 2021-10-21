<script>
  import Hero from '$lib/sections/Hero.svelte';
  import WhatIsAgora from '$lib/sections/WhatIsAgora.svelte';
  import GreatThinkers from '$lib/sections/GreatThinkers';
  import WhoIsAgoraFor from '$lib/sections/WhoIsAgoraFor.svelte';
  import KeyTechnologies from '$lib/sections/KeyTechnologies.svelte';
  import AgoraSpaceDao from '$lib/sections/AgoraSpaceDao';
  import Cta from '$lib/sections/Cta';
  import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
  <title>Agora Space</title>
  <meta property="og:title" content="Agora Space" />
  <meta
    name="description"
    content="Agora Space is an aggregator and builder of token utility tools with a social oracle twist."
  />
  <meta
    property="og:description"
    content="Agora Space is an aggregator and builder of token utility tools with a social oracle twist."
  />
</svelte:head>

<h1 class="sr-only">Agora Space</h1>
<Hero />
<!-- <WhatIsAgora />
<GreatThinkers />
<WhoIsAgoraFor />
<KeyTechnologies />
<AgoraSpaceDao />
<Cta />
<Footer /> -->
