<script>
  export let title;
  export let q;
  export let content;
</script>

<div
  class="group relative flex max-w-xs flex-col items-center justify-center space-y-8 border-2 border-agora-white bg-agora-blue-medium px-8 py-16 lg:max-w-none"
>
  <h3 class="relative font-display text-2xl font-bold text-agora-pink-light 2xl:text-3xl">
    {title}<span class="absolute -top-3 -right-2 h-4 w-4 text-base font-semibold 2xl:text-lg"
      >{q}</span
    >
  </h3>

  <ul class="space-y-3">
    {#each content as text}
      <li class="text-md font-semibold text-agora-white 2xl:text-lg">{text}</li>
    {/each}
  </ul>

  <div class="top-3/5 absolute -right-20 h-0.5 w-20 bg-agora-white group-last:hidden" />
</div>
