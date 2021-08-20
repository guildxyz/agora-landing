<script>
  import RoleManagementBot from '$lib/sections/RoleManagementBot.svelte';
  import TwitterActivity from '$lib/sections/TwitterActivity.svelte';
  import CreatorContracts from '$lib/sections/CreatorContracts.svelte';
  import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
  <title>Tools - Agora Space</title>
  <meta property="og:title" content="Tools - Agora Space" />
  <meta
    name="description"
    content="Elevate your tokenized communities and DAOs by using the tools collectively governed by Agora Space DAO."
  />
  <meta
    property="og:description"
    content="Elevate your tokenized communities and DAOs by using the tools collectively governed by Agora Space DAO."
  />
</svelte:head>

<h1 class="sr-only">Tools - Agora Space</h1>
<RoleManagementBot />
<TwitterActivity />
<CreatorContracts />
<Footer purple />
