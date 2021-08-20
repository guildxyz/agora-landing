<script>
  export let title;
  export let q;
  export let content;
</script>

<div
  class="group flex flex-col justify-center items-center space-y-8 relative px-8 py-16 max-w-xs lg:max-w-none border-2 border-agora-white bg-agora-blue-medium"
>
  <h3 class="relative text-agora-pink-light text-2xl 2xl:text-3xl font-bold font-display">
    {title}<span class="absolute -top-3 -right-2 w-4 h-4 text-base 2xl:text-lg font-semibold"
      >{q}</span
    >
  </h3>

  <ul class="space-y-3">
    {#each content as text}
      <li class="text-agora-white font-semibold text-md 2xl:text-lg">{text}</li>
    {/each}
  </ul>

  <div class="group-last:hidden absolute top-3/5 -right-20 w-20 h-0.5 bg-agora-white" />
</div>
