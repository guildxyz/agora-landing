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
    class="fixed top-0 right-0 h-full w-1/2 bg-agora-gray font-display font-semibold text-agora-white"
  >
    <div class="flex w-full justify-end pt-1 pr-2">
      <Button on:click={() => (show = false)}>
        <X slot="icon" size="1.5em" weight="bold" />
      </Button>
    </div>

    <nav class="flex h-full flex-col items-start justify-start p-10 text-xl font-bold">
      <a href="/tools" class="mb-6 hover:underline focus:underline focus:outline-none">Tools</a>
      <a href="/about" class="mb-6 hover:underline focus:underline focus:outline-none">About</a>
      <a href="/" class="mt-auto mb-20 hover:underline focus:underline focus:outline-none">Home</a>
    </nav>
  </div>
{/if}
