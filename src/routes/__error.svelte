<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        title: `${status}: ${error.message}`
      }
    };
  }
</script>

<script>
  export let title;
</script>

<h1 class="pt-20 font-display font-bold tracking-tight text-2xl text-center">An error occurred!</h1>
<p class="text-center">{title}</p>
