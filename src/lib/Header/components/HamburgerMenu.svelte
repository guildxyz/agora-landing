<script>
  import Button from '$lib/Button';
  import { fly } from 'svelte/transition';
  import { List, X } from 'phosphor-svelte';

  export let white;
  let show = false;
</script>

<Button
  aria-label="Menu"
  class={`lg:hidden px-0 py-0 focus:bg-transparent active:bg-transparent ${
    white ? 'text-agora-white' : 'text-agora-gray md:text-agora-white'
  }`}
  on:click={() => (show = true)}
>
  <List slot="icon" size="1.5em" weight="bold" />
</Button>

{#if show}
  <div
    transition:fly={{ x: 100, duration: 200 }}
    class="fixed top-0 right-0 w-1/2 h-full bg-agora-gray text-agora-white font-display font-semibold"
  >
    <div class="flex justify-end pt-1 pr-2 w-full">
      <Button on:click={() => (show = false)}>
        <X slot="icon" size="1.5em" weight="bold" />
      </Button>
    </div>

    <nav class="p-10 flex flex-col items-start justify-start h-full text-xl font-bold">
      <a href="/tools" class="mb-6 hover:underline focus:outline-none focus:underline">Tools</a>
      <a href="/about" class="mb-6 hover:underline focus:outline-none focus:underline">About</a>
      <a href="/" class="mt-auto mb-20 hover:underline focus:outline-none focus:underline">Home</a>
    </nav>
  </div>
{/if}
