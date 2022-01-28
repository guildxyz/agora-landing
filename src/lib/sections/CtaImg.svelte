<script>
  import { spring } from 'svelte/motion';
  import Button from '$lib/Button';
  import { ArrowRight } from 'phosphor-svelte';

  export let title;
  export let image; // WEBP image
  export let imagePng; // PNG fallback image
  export let url;

  let parent;
  let mousePosition = spring(
    { x: 0, y: 0 },
    {
      stiffness: 0.2,
      damping: 0.4
    }
  );
</script>

<div class="space-y-8">
  <h2
    class="text-center font-display text-3xl font-bold uppercase tracking-tight text-agora-white lg:text-4xl"
  >
    {title}
  </h2>

  <div class="group relative md:mx-8 lg:mx-16" bind:this={parent}>
    <a
      href={url}
      on:mousemove={(e) => {
        const offset = parent.getBoundingClientRect();
        mousePosition.set({ x: e.clientX - offset.x, y: e.clientY - offset.y });
      }}
    >
      <span class="sr-only">{title}</span>
      <picture class="w-full">
        <source srcset={image} type="image/webp" />
        <source srcset={imagePng} type="image/png" />
        <img src={imagePng} alt={title} />
      </picture>
    </a>

    <a
      href={url}
      class="absolute"
      style={`left: ${$mousePosition.x}px; top: ${$mousePosition.y}px`}
    >
      <span class="sr-only">{title}</span>
      <Button
        aria-label={title}
        class="flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-agora-pink-medium px-0 text-agora-white opacity-0 transition-opacity group-hover:opacity-100 lg:h-14 lg:w-14"
      >
        <ArrowRight size="1.5em" weight="bold" />
      </Button>
    </a>
  </div>
</div>
