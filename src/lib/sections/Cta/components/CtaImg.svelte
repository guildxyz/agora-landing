<script>
  import { spring } from 'svelte/motion';
  import Button from '$lib/Button';
  import { ArrowRight } from 'phosphor-svelte';

  export let title;
  export let image;
  export let url;

  let windowWidth;
  let parent;
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
      stiffness: 0.2,
      damping: 0.4
    }
  );
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="space-y-8 lg:space-y-16">
  <h2
    class="text-agora-white text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight font-display uppercase text-center"
  >
    {title}
  </h2>

  <div class="group relative md:mx-8 lg:mx-16" bind:this={parent}>
    <a
      href={url}
      on:mousemove={(e) => {
        mousePosition.set({ x: e.clientX - parentX, y: e.clientY - parentY });
      }}
    >
      <span class="sr-only">{title}</span>
      <img src={image} alt={title} class="w-full" />
    </a>

    <a
      href={url}
      class="absolute"
      style={`left: ${$mousePosition.x}px; top: ${$mousePosition.y}px`}
    >
      <span class="sr-only">{title}</span>
      <Button
        aria-label={title}
        class="flex items-center justify-center px-0 w-12 lg:w-14 h-12 lg:h-14 bg-agora-pink-text-darker text-agora-white rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ArrowRight size="1.5em" weight="bold" />
      </Button>
    </a>
  </div>
</div>
