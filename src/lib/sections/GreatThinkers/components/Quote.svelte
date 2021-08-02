<script>
  export let image;
  export let alt;
  export let quote;
  export let name;
  let _class = null;
  export { _class as class };
</script>

<div class={`flex flex-col items-center text-lg lg:text-xl ${_class}`}>
  <img src={image} {alt} class="mb-8 h-80" />
  <p class="mb-8 text-agora-white lg:font-semibold">
    “{quote}”
  </p>
  <p class="mt-auto text-agora-pink-text font-bold tracking-tight font-display">-{name}-</p>
</div>
