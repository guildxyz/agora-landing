<script>
  import { onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';

  const images = ['agora.png', 'caviar.png', 'ethane.png'];

  let actImageIndex = 0;
  let interval = setInterval(() => {
    if (actImageIndex === 2) {
      actImageIndex = 0;
      return;
    }
    actImageIndex++;
  }, 5000);

  onDestroy(() => clearInterval(interval));
</script>

<!-- absolute so it's content's height will be set to the outer grid height,
     and not vica versa
     grid so we can 1/1 match content's size to the helper svg's size
     w-max so it's width will be it's content's width, not the wrapper grid -->
<div class="absolute grid h-full w-max">
  <!-- 4/3 aspect ratio empty svg (same as images) to set size -->
  <svg viewBox="0 0 4 3" class="h-full" />
  {#each images as image, i}
    <img
      transition:fade
      class="absolute z-10 left-0 h-full transition duration-300	shadow-xl rounded-2xl hover:shadow-2xl {i ===
      actImageIndex
        ? 'opacity-100 '
        : 'opacity-0 pointer-events-none'}"
      src={`/images/${image}`}
      alt="App screenshot"
    />
  {/each}
  <div class="pattern absolute w-1/2 h-1/3 left-[-80px] top-[-30px] xl:top-[-50px]" />
  <div
    class="absolute w-2/3 h-3/4 right-[-80px] bottom-[-40px] xl:bottom-[-60px] bg-gray-100 rounded-3xl"
  />
</div>

<style>
  .grid > * {
    grid-area: 1/1;
  }
  img {
    /* fix downscale blurryness on Chrome & Safari */
    image-rendering: -webkit-optimize-contrast;
  }
  .pattern {
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d1d5db' fill-opacity='0.45'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
</style>
