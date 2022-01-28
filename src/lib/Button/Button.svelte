<script>
  import A from './helpers/A.svelte';
  import Button from './helpers/Button.svelte';

  export let href = null;
  export let noPadding = false;
  export let disabled = false;
  export let disabledMessage = null;
  let _class = null;
  export { _class as class };

  export let component = href === null ? Button : A;

  $: hasIconOnly = $$slots?.icon && !$$slots?.default;

  let baseClasses =
    'group relative flex items-center justify-center space-x-3 border border-transparent focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-200 disabled:bg-opacity-25 disabled:cursor-default';
  let defaultNormalClasses = `${
    !noPadding && 'px-4 xl:px-6 py-2 xl:py-3'
  } text-base font-semibold rounded-2xl 2xl:text-lg`;
  let defaultIconOnlyClasses = 'p-3 rounded-full hover:bg-gray-100';

  $: defaultClasses = baseClasses.concat(
    ' ',
    hasIconOnly ? defaultIconOnlyClasses : defaultNormalClasses
  );
  $: classes = defaultClasses.concat(' ', _class);
</script>

<svelte:component this={component} {href} {disabled} class={classes} {...$$restProps} on:click>
  <slot name="icon-left" />
  {#if $$slots.default}
    <span><slot /></span>
  {/if}
  {#if disabledMessage}
    <span
      class="invisible absolute -bottom-12 -left-2 flex h-10 w-full -translate-y-4 transform items-center justify-center rounded-2xl bg-agora-gray text-sm uppercase opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 lg:-left-3"
      >{disabledMessage}</span
    >
  {/if}
  <slot name="icon" />
</svelte:component>
