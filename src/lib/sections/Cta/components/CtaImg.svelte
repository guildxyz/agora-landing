<script>
  import { spring } from 'svelte/motion';
  import Button from '$lib/Button';
  import { ArrowRight } from 'phosphor-svelte';

  export let title;
  export let image;
  export let url;

  let parent;
  let mousePosition = spring(
    { x: 0, y: 0 },
    {
      stiffness: 0.1,
      damping: 0.25
    }
  );
</script>

<div class="space-y-8">
  <h2
    class="text-agora-white text-3xl lg:text-4xl font-bold tracking-tight font-display uppercase text-center"
  >
    {title}
  </h2>

  <div class="group relative md:mx-8 lg:mx-16">
    <a
      href={url}
      bind:this={parent}
      on:mousemove={(e) => {
        const offset = parent.getBoundingClientRect();
        mousePosition.set({ x: e.clientX - offset.x, y: e.clientY - offset.y });
      }}
    >
      <img src={image} alt="Join a community" class="w-full" />
    </a>

    <a href={url}>
      <Button
        class="flex items-center justify-center absolute px-0 w-12 lg:w-14 h-12 lg:h-14 bg-agora-pink-text-darker text-agora-white rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
        style={`left: ${$mousePosition.x}px; top: ${$mousePosition.y}px`}
      >
        <ArrowRight size="1.5em" weight="bold" />
      </Button>
    </a>
  </div>
</div>
