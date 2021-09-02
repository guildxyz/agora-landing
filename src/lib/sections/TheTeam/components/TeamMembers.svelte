<script>
  import { Link, TwitterLogo } from 'phosphor-svelte';

  export let textAlign = 'center';
  export let photo;
  export let name;
  export let label;
  export let twitter = null;
  export let links = []; // format: [{ text: string, url?: string }, ...]
</script>

<div class="flex flex-col">
  <div class="flex flex-col items-end mb-2 h-52 lg:h-64">
    <img src={photo} alt={name} class="w-full h-full object-contain" />
  </div>
  <span
    class={`flex ${
      textAlign === 'left' ? 'justify-between' : 'justify-center'
    } items-center space-x-2 text-agora-pink-light text-xl font-bold tracking-tight font-display`}
  >
    {#if twitter}
      <span>{name}</span>
      {#if twitter}
        <a
          href={twitter}
          target="_blank"
          alt={`${name} - Twitter`}
          class="flex items-center justify-center w-5 h-5 bg-white rounded-sm text-agora-gray transition-all duration-500 delay-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
        >
          <TwitterLogo size={16} />
        </a>
      {/if}
    {:else}
      {name}
    {/if}
  </span>
  <span
    class={`text-agora-white font-display font-light ${
      textAlign === 'left' ? 'text-left' : 'text-center'
    }`}>{label}</span
  >

  {#if links.length > 0}
    <div class="mt-2 flex flex-col space-y-1 text-agora-pink-light font-semibold">
      {#each links as link}
        <span class="flex items-center justify-start space-x-2 text-left">
          {#if link.url}
            <a href={link.url} target="_blank">
              {link.text}
            </a>
            <span class="hidden lg:inline">
              <Link />
            </span>
          {:else}
            {link.text}
          {/if}
        </span>
      {/each}
    </div>
  {/if}
</div>
