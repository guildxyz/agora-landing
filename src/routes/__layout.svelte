<script>
  import linkPreviewImage from '$lib/assets/img/link-preview.jpg';
  import '../css/app.css';
</script>

<svelte:head>
  <meta property="og:image" content={`https://agora.xyz${linkPreviewImage}`} />
</svelte:head>

<slot />
