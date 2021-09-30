<script>
  export let image;
  export let video;
  export let alt;
  export let quoteStart;
  export let quote;
  export let name;
  let _class = null;
  export { _class as class };

  let videoElement;

  const onMouseEnter = () => {
    videoElement?.play();
  };

  const onMouseLeave = () => {
    videoElement?.stop();
  };
</script>

<div class={`mx-auto max-w-sm h-full flex flex-col items-center text-md ${_class}`}>
  <div class="relative mb-8 h-52 2xl:h-72">
    <video
      bind:this={videoElement}
      muted
      playsinline
      width="100%"
      height="auto"
      src={video}
      on:mouseenter={onMouseEnter}
      on:mouseleave={onMouseLeave}
      class="w-full h-full object-contain"
    >
      <img src={image} {alt} class="w-full h-full object-contain" />
    </video>
  </div>
  <p class="mb-3 text-agora-white lg:font-semibold 2xl:text-lg">
    “<strong>{quoteStart}</strong><br />
    {quote}”
  </p>
  <p class="mt-auto text-lg text-agora-pink-light font-bold tracking-tight font-display">
    -{name}-
  </p>
</div>
