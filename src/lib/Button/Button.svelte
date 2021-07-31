<script>
  import A from './helpers/A.svelte';
  import Button from './helpers/Button.svelte';

  export let href = null;
  export let disabled = false;
  export let disabledMessage = null;
  let _class = null;
  export { _class as class };

  export let component = href === null ? Button : A;

  $: hasIconOnly = $$slots?.icon && !$$slots?.default;

  let baseClasses =
    'group relative flex items-center justify-center space-x-3 border border-transparent focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-200 disabled:bg-opacity-25 disabled:cursor-default';
  let defaultNormalClasses =
    'px-4 lg:px-6 py-2 lg:py-3 text-base font-semibold rounded-2xl lg:text-lg';
  let defaultIconOnlyClasses = 'p-3 rounded-full hover:bg-gray-100';

  $: defaultClasses = baseClasses.concat(
    ' ',
    hasIconOnly ? defaultIconOnlyClasses : defaultNormalClasses
  );
  $: classes = defaultClasses.concat(' ', _class);
</script>

<svelte:component this={component} {href} {disabled} class={classes} {...$$restProps} on:click>
  {#if $$slots.default}
    <span><slot /></span>
  {/if}
  {#if disabledMessage}
    <span
      class="absolute -bottom-12 -left-2 lg:-left-3 flex items-center justify-center w-full h-10 bg-agora-gray text-sm uppercase rounded-2xl invisible group-hover:visible transform -translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
      >{disabledMessage}</span
    >
  {/if}
  <slot name="icon" />
</svelte:component>
