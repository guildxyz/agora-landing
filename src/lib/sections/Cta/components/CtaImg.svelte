<script>
  import { spring } from 'svelte/motion';
  import Button from '$lib/Button';
  import { ArrowRight } from 'phosphor-svelte';

  export let title;
  export let image; // WEBP image
  export let imagePng; // PNG fallback image
  export let url;
  export let openNewPage = false;
  export let comingSoon = false;

  let windowWidth;
  let parent;
  let shouldShowOnHover = true;

  $: parentX =
    (parent &&
      (windowWidth > 1024
        ? parent.getBoundingClientRect().x
        : parent.getBoundingClientRect().width)) ||
    0;
  $: parentY =
    (parent &&
      (windowWidth > 1024
        ? parent.getBoundingClientRect().y
        : parent.getBoundingClientRect().height)) ||
    0;
  $: mousePosition = spring(
    { x: parentX, y: parentY },
    {
      stiffness: 0.28,
      damping: 0.8
    }
  );

  const mouseStateHandler = () => {
    shouldShowOnHover =
      windowWidth < 1024 ||
      (parent.getBoundingClientRect().y < $mousePosition.y &&
        parent.getBoundingClientRect().y + parent.getBoundingClientRect().height >
          $mousePosition.y);
  };
</script>

<svelte:window
  bind:innerWidth={windowWidth}
  on:scroll={mouseStateHandler}
  on:mousemove={mouseStateHandler}
/>

<div class="space-y-12 lg:space-y-16">
  <h2
    class="relative text-center font-display text-2xl font-bold uppercase tracking-tight text-agora-white md:text-3xl xl:text-4xl"
  >
    {title}
    {#if comingSoon}
      <span
        class="absolute -bottom-4 left-0 h-4 w-full text-center text-base text-agora-pink-medium lg:-bottom-6 lg:text-lg"
        >Coming soon</span
      >
    {/if}
  </h2>

  <div class="group relative md:mx-8 lg:mx-16" bind:this={parent}>
    <a
      href={url}
      target={openNewPage ? '_blank' : '_self'}
      rel={openNewPage && 'noopener'}
      on:mousemove={(e) => {
        mousePosition.set({ x: e.clientX, y: e.clientY });
      }}
    >
      <span class="sr-only">{title}</span>
      <picture>
        <source srcset={image} type="image/webp" />
        <source srcset={imagePng} type="image/png" />
        <img src={imagePng} alt={title} class="w-full" />
      </picture>
    </a>

    <a
      href={url}
      target={openNewPage ? '_blank' : '_self'}
      rel={openNewPage && 'noopener'}
      class="absolute lg:fixed"
      style={`visibility: ${shouldShowOnHover ? 'visible' : 'hidden'}; left: ${
        windowWidth > 1024 ? $mousePosition.x : parentX
      }px; top: ${windowWidth > 1024 ? $mousePosition.y : parentY}px;`}
    >
      <span class="sr-only">{title}</span>
      <Button
        aria-label={title}
        class="flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-agora-pink-medium px-0 text-agora-white opacity-100 transition-all group-hover:opacity-100 lg:h-14 lg:w-14 lg:opacity-0"
      >
        <ArrowRight size="1.5em" weight="bold" />
      </Button>
    </a>
  </div>
</div>
