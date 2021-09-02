<script>
  import Hero from '$lib/sections/Hero';
  import WhatIsAgora from '$lib/sections/WhatIsAgora.svelte';
  import GreatThinkers from '$lib/sections/GreatThinkers';
  import WhoIsAgoraFor from '$lib/sections/WhoIsAgoraFor.svelte';
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
<WhatIsAgora />
<GreatThinkers />
<WhoIsAgoraFor />
<Cta />
<Footer />
