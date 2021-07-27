<script>
  export let title;
  export let q;
  export let content;
</script>

<div
  class="group flex flex-col justify-center items-center space-y-8 relative px-8 py-16 max-w-xs lg:max-w-none border-2 border-[#FDF7FF] bg-[#2E2093]"
>
  <h3 class="relative text-[#E77FF0] text-3xl font-bold tracking-tight font-display uppercase">
    {title}<span class="absolute -top-3 -right-2 w-4 h-4 text-base font-semibold">{q}</span>
  </h3>

  <p class="text-[#FDF7FF] font-semibold text-xl">{content}</p>

  <div class="group-last:hidden absolute top-3/5 -right-20 w-20 h-0.5 bg-[#FDF7FF]" />
</div>
