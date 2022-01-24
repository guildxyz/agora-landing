<script>
  import { TwitterLogo, GithubLogo } from 'phosphor-svelte';

  export let advisor = false;
  export let photo; // WEBP image
  export let photoPng; // PNG fallback image
  export let name;
  export let label;
  export let twitter = null;
  export let github = null;
  export let about = null;
</script>

<div class="group flex flex-col">
  <div class="flex flex-col items-end mb-2 h-52 max-h-52 lg:h-64">
    {#if about}
      <div class="group relative w-full h-52 lg:h-64 overflow-hidden">
        <picture
          class="absolute left-0 bottom-0 w-full h-full object-contain object-bottom group-hover:-left-full group-hover:opacity-0 group-focus-within:-left-full group-focus-within:opacity-0 transition-all duration-500"
        >
          <source srcset={photo} type="image/webp" />
          <source srcset={photoPng} type="image/png" />
          <img src={photoPng} alt={name} class="max-h-full" />
        </picture>
        <div
          class="absolute -right-full bottom-0 w-full h-full text-agora-white group-hover:right-0 opacity-0 group-hover:opacity-100 group-focus-within:right-0 group-focus-within:opacity-100 transition-all duration-500"
        >
          <p>{about}</p>
        </div>
      </div>
    {:else}
      <picture class="w-full h-full object-contain object-bottom">
        <source srcset={photo} type="image/webp" />
        <source srcset={photoPng} type="image/png" />
        <img src={photoPng} alt={name} class="max-h-full" />
      </picture>
    {/if}
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
      class={`absolute inset-y-0 right-1 flex flex-col space-y-1 justify-center ${
        advisor ? 'text-agora-purple' : 'text-agora-blue-medium'
      }`}
    >
      {#if twitter || github}
        <div
          class={`absolute inset-y-0 -right-4 group-hover:right-0 group-focus-within:right-0 w-10 bg-gradient-to-l ${
            advisor
              ? 'from-agora-purple  via-agora-purple'
              : 'from-agora-blue-medium  via-agora-blue-medium'
          } opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-500`}
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
</div>
