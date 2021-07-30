<script>
  export let title;
  export let q;
  export let content;
</script>

<div
  class="group flex flex-col justify-center items-center space-y-8 relative px-8 py-16 max-w-xs lg:max-w-none border-2 border-agora-white bg-agora-blue-bg"
>
  <h3 class="relative text-agora-pink-text text-3xl font-bold font-display">
    {title}<span class="absolute -top-3 -right-2 w-4 h-4 text-base font-semibold">{q}</span>
  </h3>

  <p class="text-agora-white font-semibold text-lg lg:text-xl">{content}</p>

  <div class="group-last:hidden absolute top-3/5 -right-20 w-20 h-0.5 bg-agora-white" />
</div>
