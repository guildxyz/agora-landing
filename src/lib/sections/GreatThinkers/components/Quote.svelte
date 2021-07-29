<script>
  export let image;
  export let alt;
  export let quote;
  export let name;
</script>

<div class="flex flex-col items-center h-full text-lg lg:text-xl">
  <img src={image} {alt} class="mb-8 h-80" />
  <p class="mb-8 text-agora-white lg:font-semibold">
    “{quote}”
  </p>
  <p class="mt-auto text-agora-pink-text font-bold tracking-tight font-display">-{name}-</p>
</div>
