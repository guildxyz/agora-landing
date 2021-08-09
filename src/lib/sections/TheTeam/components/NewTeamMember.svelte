<script>
  import { TwitterLogo, GithubLogo } from 'phosphor-svelte';

  export let photo;
  export let name;
  export let label;
  export let twitter = null;
  export let github = null;

  let svgPhoto;

  const hoverAnimation = () => {
    const rectangle = svgPhoto.contentDocument.querySelector('.rectangle');
    rectangle.style.transition = '0.5s ease';
    rectangle.style.opacity = 0;
  };

  const hoverOutAnimation = () => {
    const rectangle = svgPhoto.contentDocument.querySelector('.rectangle');
    rectangle.style.opacity = 1;
  };
</script>

<div
  class="relative group flex flex-col"
  on:mouseover={hoverAnimation}
  on:focus={hoverAnimation}
  on:mouseleave={hoverOutAnimation}
  on:blur={hoverOutAnimation}
>
  <div class="flex flex-col items-end mb-2 h-52 lg:h-64">
    <object
      class="w-full h-full"
      type="image/svg+xml"
      data={photo}
      aria-label={name}
      bind:this={svgPhoto}
    >
      {name}
    </object>
  </div>
  <span class="flex flex-col">
    <span
      class="relative left-1/2 group-hover:left-0 inline-block max-w-max text-agora-pink-light text-xl font-bold tracking-tight font-display transition-all duration-500 -translate-x-1/2 group-hover:-translate-x-0"
    >
      {name}
    </span>
    <span
      class="relative left-1/2 group-hover:left-0 inline-block max-w-max text-agora-white font-display font-light transition-all duration-500 -translate-x-1/2 group-hover:-translate-x-0 delay-100"
    >
      {label}
    </span>
  </span>

  <div class="absolute bottom-1 right-1 flex flex-col space-y-1 text-agora-blue-medium">
    {#if twitter}
      <a
        href={twitter}
        target="_blank"
        alt={`${name} - Twitter`}
        class="relative -right-4 group-hover:right-0 flex items-center justify-center w-5 h-5 bg-white rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"
      >
        <TwitterLogo />
      </a>
    {/if}

    {#if github}
      <a
        href={github}
        target="_blank"
        alt={`${name} - Github`}
        class="relative -right-4 group-hover:right-0 flex items-center justify-center w-5 h-5 bg-white rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"
      >
        <GithubLogo />
      </a>
    {/if}
  </div>
</div>
