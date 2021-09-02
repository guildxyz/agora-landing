<script>
  import HowDoesItWork from '$lib/sections/HowDoesItWork.svelte';
  import TheTeam from '$lib/sections/TheTeam';
  import StayUpToDate from '$lib/sections/StayUpToDate.svelte';
  import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
  <title>About - Agora Space</title>
  <meta property="og:title" content="About - Agora Space" />
  <meta
    name="description"
    content="Learn about how Agora Space works. Connect to our team and see our advisors."
  />
  <meta
    property="og:description"
    content="Learn about how Agora Space works. Connect to our team and see our advisors."
  />
</svelte:head>

<h1 class="sr-only">About - Agora Space</h1>
<HowDoesItWork />
<TheTeam />
<StayUpToDate />
<Footer purple />
