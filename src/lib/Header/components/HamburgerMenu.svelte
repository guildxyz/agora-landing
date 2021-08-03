<script>
  import Button from '$lib/Button';
  import Hamburger from './Hamburger.svelte';
  import X from './X.svelte';
  import { fly } from 'svelte/transition';

  export let white;
  let show = false;
</script>

<Button
  aria-label="Menu"
  class={`lg:hidden px-0 py-0 w-8 h-8 focus:bg-transparent active:bg-transparent ${
    white ? 'text-agora-white' : 'text-agora-gray md:text-agora-white'
  }`}
  on:click={() => (show = true)}
>
  <Hamburger slot="icon" />
</Button>

{#if show}
  <div
    transition:fly={{ x: 100, duration: 200 }}
    class="fixed top-0 right-0 w-1/2 h-full bg-agora-gray text-agora-white font-display font-semibold"
  >
    <div class="flex justify-end pr-4 w-full h-16">
      <Button
        class="p-0 focus-visible:ring-opacity-25 active:bg-transparent"
        on:click={() => (show = false)}
      >
        <X slot="icon" />
      </Button>
    </div>

    <nav class="p-10 flex flex-col items-start justify-start h-full text-2xl font-bold">
      <a href="/explorer" class="mb-6 hover:underline focus:outline-none focus:underline"
        >Explorer</a
      >
      <a href="/tools" class="mb-6 hover:underline focus:outline-none focus:underline">Tools</a>
      <a href="/about" class="mb-6 hover:underline focus:outline-none focus:underline">About</a>
      <a href="/" class="mt-auto mb-20 hover:underline focus:outline-none focus:underline">Home</a>
    </nav>
  </div>
{/if}
