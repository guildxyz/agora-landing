<script>
  import { spring } from 'svelte/motion';
  import Button from '$lib/Button';
  import { ArrowRight } from 'phosphor-svelte';

  export let title;
  export let image;
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
    class="relative text-agora-white text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight font-display uppercase text-center"
  >
    {title}
    {#if comingSoon}
      <span
        class="absolute -bottom-4 lg:-bottom-6 left-0 w-full h-4 text-base lg:text-lg text-agora-pink-medium text-center"
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
      <img src={image} alt={title} class="w-full" />
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
        class="flex items-center justify-center px-0 w-12 lg:w-14 h-12 lg:h-14 bg-agora-pink-medium text-agora-white rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all"
      >
        <ArrowRight size="1.5em" weight="bold" />
      </Button>
    </a>
  </div>
</div>
