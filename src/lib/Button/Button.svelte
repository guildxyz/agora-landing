<script>
  import A from './helpers/A.svelte';
  import Button from './helpers/Button.svelte';

  export let href = null;
  let _class = null;
  export { _class as class };

  export let component = href === null ? Button : A;

  $: hasIconOnly = $$slots?.icon && !$$slots?.default;

  let baseClasses =
    'flex items-center justify-center space-x-3 border border-transparent focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-200';
  let defaultNormalClasses = 'px-6 py-3 text-base font-semibold rounded-2xl md:text-lg';
  let defaultIconOnlyClasses = 'p-3 rounded-full hover:bg-gray-100';

  $: defaultClasses = baseClasses.concat(
    ' ',
    hasIconOnly ? defaultIconOnlyClasses : defaultNormalClasses
  );
  $: classes = defaultClasses.concat(' ', _class);
</script>

<svelte:component this={component} {href} class={classes} {...$$restProps} on:click>
  {#if $$slots.default}
    <span><slot /></span>
  {/if}
  <slot name="icon" />
</svelte:component>
