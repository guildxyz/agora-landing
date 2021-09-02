<script>
  import linkPreviewImage from '$lib/assets/img/link-preview.png';
  import '../css/app.css';
</script>

<svelte:head>
  <meta property="og:image" content={`https://agora.space${linkPreviewImage}`} />
</svelte:head>

<slot />
