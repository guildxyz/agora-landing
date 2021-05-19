<script>
  export let open = false;
  import { onMount } from 'svelte';
  import Button from './Button';
  import X from 'phosphor-svelte/lib/X';

  const handleEsc = (e) => (e.key === 'Escape' || e.key === 'Esc') && (open = false);
  onMount(() => {
    window.addEventListener('keydown', handleEsc);
  });

  let returnFocusTo;
  let contentRef;
  $: if (open) {
    returnFocusTo = document.activeElement;
    window.addEventListener(
      'keydown',
      (e) => (e.key === 'ArrowRight' || e.key === 'ArrowDown') && contentRef.focus(),
      {
        once: true
      }
    );
  } else {
    returnFocusTo?.focus();
  }
</script>

<div
  class="fixed flex inset-0 z-10 overflow-y-auto {!open && 'pointer-events-none'}"
  aria-labelledby="modal-title"
  role="dialog"
  aria-modal="true"
>
  <!-- Background overlay -->
  <div
    class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75
      {open ? 'ease-in duration-200 opacity-100' : 'ease-out duration-300 opacity-0'}"
    aria-hidden="true"
    on:click={() => (open = false)}
  />

  <div
    class="absolute inset-0 m-auto max-h-screen max-w-[175vh] w-screen h-[75vw] p-2 sm:p-8 "
    on:click={() => (open = false)}
  >
    <!-- Modal panel -->
    <div
      class="relative h-full w-full transition-all transform bg-white rounded-lg shadow-xl sm:align-middle sm:w-full
      {open
        ? 'ease-out duration-300 opacity-100 translate-y-0 sm:scale-100'
        : 'ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}"
    >
      <iframe
        bind:this={contentRef}
        src="https://slides.com/zawiasa/agora/embed?style=light&byline=hidden&share=hidden"
        class="w-full h-full absolute inset-0 rounded-lg"
        scrolling="no"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
        title="Pitch deck"
      />
      <Button
        on:click={() => (open = false)}
        class="absolute -top-4 -right-4 text-xl text-gray-700 bg-white shadow hidden md:block"
      >
        <X slot="icon" weight="bold" />
      </Button>
    </div>
  </div>
</div>
