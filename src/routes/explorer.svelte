<script>
  import Footer from '$lib/Footer.svelte';
  import CommunityExplorer from '$lib/sections/CommunityExplorer.svelte';
  import SocialTokenAdmin from '$lib/sections/SocialTokenAdmin.svelte';
</script>

<svelte:head>
  <title>Explorer - Agora Space</title>
  <meta property="og:title" content="Explorer - Agora Space" />
  <meta
    name="description"
    content="Find all existing social tokens in the explorer from your favourite communities."
  />
  <meta
    property="og:description"
    content="Find all existing social tokens in the explorer from your favourite communities."
  />
</svelte:head>

<h1 class="sr-only">Explorer - Agora Space</h1>
<CommunityExplorer />
<SocialTokenAdmin />
<Footer />
