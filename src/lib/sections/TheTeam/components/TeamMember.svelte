<script>
  import { TwitterLogo, GithubLogo } from 'phosphor-svelte';

  export let photo;
  export let name;
  export let label;
  export let twitter = null;
  export let github = null;
  export let links = []; // format: [{ text: string, url?: string }, ...]
</script>

<div class="group flex flex-col">
  <div class="flex flex-col items-end mb-2 h-50 max-h-50 lg:h-64">
    <img src={photo} alt={name} class="w-full h-full object-contain object-bottom" />
  </div>
  <div class="relative flex flex-col">
    <span
      class={`relative left-1/2 inline-block max-w-max text-agora-pink-light text-lg lg:text-xl font-bold tracking-tight font-display transition-all duration-500 -translate-x-1/2 ${
        (twitter || github) &&
        'group-hover:left-0 group-focus-within:left-0 group-hover:-translate-x-0 group-focus-within:-translate-x-0'
      }`}
    >
      {name}
    </span>
    <span
      class={`relative left-1/2 inline-block max-w-max text-agora-white font-display text-sm lg:text-base font-light transition-all duration-500 -translate-x-1/2 ${
        (twitter || github) &&
        'group-hover:left-0 group-focus-within:left-0 group-hover:-translate-x-0 group-focus-within:-translate-x-0'
      } delay-100`}
    >
      {label}
    </span>
    <div
      class="absolute inset-y-0 right-1 flex flex-col space-y-1 justify-center text-agora-blue-medium"
    >
      {#if twitter || github}
        <div
          class="absolute inset-y-0 -right-4 group-hover:right-0 group-focus-within:right-0 w-10 bg-gradient-to-l from-agora-blue-medium  via-agora-blue-medium opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-500"
        />
      {/if}
      {#if twitter}
        <a
          href={twitter}
          target="_blank"
          rel="noopener"
          alt={`${name} - Twitter`}
          class="relative -right-4 group-hover:right-0 group-focus-within:right-0 flex items-center justify-center w-5 h-5 bg-white rounded-sm opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
        >
          <TwitterLogo />
        </a>
      {/if}
      {#if github}
        <a
          href={github}
          target="_blank"
          rel="noopener"
          alt={`${name} - Github`}
          class="relative -right-4 group-hover:right-0 group-focus-within:right-0 flex items-center justify-center w-5 h-5 bg-white rounded-sm opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-500 delay-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
        >
          <GithubLogo />
        </a>
      {/if}
    </div>
  </div>

  {#if links.length > 0}
    <div class="mt-2 flex flex-col space-y-1 text-agora-pink-light font-semibold">
      {#each links as link}
        <span class="flex items-center justify-center space-x-2 text-center">
          {#if link.url}
            <a href={link.url} target="_blank">
              {link.text}
            </a>
          {:else}
            {link.text}
          {/if}
        </span>
      {/each}
    </div>
  {/if}
</div>
