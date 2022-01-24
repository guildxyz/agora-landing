<script>
  import { onMount } from 'svelte';

  export let image; // WEBP image
  export let imagePng; // PNG fallback image
  export let video;
  export let alt;
  export let quoteStart;
  export let quote;
  export let name;
  let _class = null;
  export { _class as class };

  let videoElement;
  let isSafari = false;

  const onMouseEnter = () => {
    videoElement?.play();
  };

  onMount(() => {
    isSafari =
      navigator?.userAgent?.indexOf('Safari') !== -1 &&
      navigator?.userAgent?.indexOf('Chrome') === -1;
  });
</script>

<div class={`mx-auto max-w-sm h-full flex flex-col items-center text-md ${_class}`}>
  <div class="relative mb-8 h-52 2xl:h-72">
    {#if isSafari}
      <picture class="object-contain w-full h-full">
        <source srcset={image} type="image/webp" />
        <source srcset={imagePng} type="image/png" />
        <img src={imagePng} {alt} />
      </picture>
    {:else}
      <video
        bind:this={videoElement}
        muted
        playsinline
        preload="auto"
        width="100%"
        height="auto"
        poster={image}
        on:mouseenter={onMouseEnter}
        class="hidden md:block object-contain w-full h-full"
      >
        <source src={video} type="video/webm" />
        <img src={imagePng} {alt} class="object-contain w-full h-full" />
      </video>
      <picture class="md:hidden object-contain w-full h-full">
        <source srcset={image} type="image/webp" />
        <source srcset={imagePng} type="image/png" />
        <img src={imagePng} {alt} />
      </picture>
    {/if}
  </div>
  <p class="mx-3 mb-3 text-agora-white lg:font-semibold 2xl:text-lg">
    “<strong>{quoteStart}</strong><br />
    {quote}”
  </p>
  <p class="mt-auto text-lg font-bold tracking-tight text-agora-pink-light font-display">
    -{name}-
  </p>
</div>
