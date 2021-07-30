<script>
  import Button from '$lib/Button';
  import TwitterLogo from 'phosphor-svelte/lib/TwitterLogo';
  import DiscordLogo from 'phosphor-svelte/lib/DiscordLogo';
  import GithubLogo from 'phosphor-svelte/lib/GithubLogo';

  export let buttonClasses;
</script>

<Button
  href="https://twitter.com/AgoraSpaceDAO"
  target="_BLANK"
  class={buttonClasses}
  aria-label="Twitter"
>
  <TwitterLogo weight="bold" slot="icon" />
</Button>
<Button
  href="https://discord.gg/KvXtEpDX8B"
  target="_BLANK"
  class={buttonClasses}
  aria-label="Discord"
>
  <DiscordLogo weight="bold" slot="icon" />
</Button>
<Button
  href="https://github.com/AgoraSpaceDAO"
  target="_BLANK"
  class={buttonClasses}
  aria-label="Github"
>
  <GithubLogo weight="bold" slot="icon" />
</Button>
