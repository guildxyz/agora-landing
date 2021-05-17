<script>
  import A from './helpers/A.svelte';
  import Button from './helpers/Button.svelte';

  export let href = null;

  export let component = href === null ? Button : A;

  $: hasIconOnly = $$slots?.icon && !$$slots?.default;

  let baseClasses = 'flex items-center justify-center gap-3 border border-transparent';
  let defaultNormalClasses = 'px-8 py-3 text-base font-semibold rounded-2xl md:text-lg';
  let defaultIconOnlyClasses = 'p-3 rounded-full hover:bg-gray-100';

  $: defaultClasses = baseClasses.concat(
    ' ',
    hasIconOnly ? defaultIconOnlyClasses : defaultNormalClasses
  );
  $: classes = defaultClasses.concat(' ', $$restProps.class);
</script>

<svelte:component this={component} {href} class={classes}>
  <slot />
  <slot name="icon" />
</svelte:component>
