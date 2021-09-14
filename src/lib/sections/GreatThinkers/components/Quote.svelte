<script>
  export let image;
  export let alt;
  export let quoteStart;
  export let quote;
  export let name;
  let _class = null;
  export { _class as class };
</script>

<div class={`mx-auto max-w-sm h-full flex flex-col items-center text-md ${_class}`}>
  <img src={image} {alt} class="mb-8 h-52 2xl:h-72" />
  <p class="mb-3 text-agora-white lg:font-semibold 2xl:text-lg">
    “<strong>{quoteStart}</strong><br />
    {quote}”
  </p>
  <p class="mt-auto text-lg text-agora-pink-light font-bold tracking-tight font-display">
    -{name}-
  </p>
</div>
