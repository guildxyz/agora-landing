<script>
  import Button from '$lib/Button';
  import TwitterLogo from 'phosphor-svelte/lib/TwitterLogo';
  import DiscordLogo from 'phosphor-svelte/lib/DiscordLogo';
  import GithubLogo from 'phosphor-svelte/lib/GithubLogo';

  export let buttonClasses;
</script>

<Button href="https://twitter.com/AgoraSpaceDAO" class={buttonClasses}>
  <TwitterLogo weight="bold" slot="icon" />
</Button>
<Button href="https://discord.gg/3ga2Ah9a" class={buttonClasses}>
  <DiscordLogo weight="bold" slot="icon" />
</Button>
<Button href="https://github.com/AgoraSpaceDAO" class={buttonClasses}>
  <GithubLogo weight="bold" slot="icon" />
</Button>
