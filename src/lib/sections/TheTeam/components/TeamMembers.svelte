<script>
  export let photo;
  export let name;
  export let label;
</script>

<div class="flex flex-col">
  <div class="flex flex-col items-end mb-2 h-52 lg:h-64">
    <img src={photo} alt={name} class="w-full h-full object-contain" />
  </div>
  <span class="text-agora-pink-text text-xl font-bold tracking-tight font-display">{name}</span>
  <span class="text-agora-white font-display font-light">{label}</span>
</div>
