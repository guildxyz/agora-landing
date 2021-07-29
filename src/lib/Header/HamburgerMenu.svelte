<script>
  import { List } from 'phosphor-svelte';
  import Button from '$lib/Button';
  import { X } from 'phosphor-svelte';
  import { fade } from 'svelte/transition';

  let show = false;
</script>

<Button class="lg:hidden px-0 py-0 text-[#252525] md:text-[#FDF7FF]" on:click={() => (show = true)}>
  <List size="1.5em" weight="bold" />
</Button>

{#if show}
  <div
    transition:fade={{ duration: 200 }}
    class="fixed inset-0 bg-[#2E2093] text-[#FDF7FF] font-display font-semibold"
  >
    <div class="flex justify-end p-4 mb-16">
      <Button class="p-2" on:click={() => (show = false)}>
        <X slot="icon" />
      </Button>
    </div>

    <nav class="flex flex-col items-center justify-center space-y-4 text-xl">
      <a href="/explore" class="hover:underline focus:outline-none focus:underline">Explore</a>
      <a href="/tools" class="hover:underline focus:outline-none focus:underline">Tools</a>
      <a href="/about" class="hover:underline focus:outline-none focus:underline">About</a>
    </nav>
  </div>
{/if}
