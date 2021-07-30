<script>
  import { List } from 'phosphor-svelte';
  import Button from '$lib/Button';
  import { X } from 'phosphor-svelte';
  import { fade } from 'svelte/transition';

  export let white;
  let show = false;
</script>

<Button
  class={`lg:hidden px-0 py-0 w-8 h-8 ${
    white ? 'text-agora-white' : 'text-agora-gray md:text-agora-white'
  }`}
  on:click={() => (show = true)}
>
  <List size="1.5em" weight="bold" />
</Button>

{#if show}
  <div
    transition:fade={{ duration: 200 }}
    class="fixed inset-0 bg-agora-blue-bg text-agora-white font-display font-semibold"
  >
    <div class="flex justify-end p-4 mb-16">
      <Button class="p-2 focus-visible:ring-opacity-25" on:click={() => (show = false)}>
        <X slot="icon" />
      </Button>
    </div>

    <nav class="flex flex-col items-center justify-center space-y-4 text-xl">
      <a href="/explorer" class="hover:underline focus:outline-none focus:underline">Explorer</a>
      <a href="/tools" class="hover:underline focus:outline-none focus:underline">Tools</a>
      <a href="/about" class="hover:underline focus:outline-none focus:underline">About</a>
    </nav>
  </div>
{/if}
