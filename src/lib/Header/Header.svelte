<script>
  import Logo from './components/Logo.svelte';
  import HamburgerMenu from './components/HamburgerMenu.svelte';

  export let whiteLogo = false;
</script>

<header
  class="container flex justify-between items-center px-4 md:px-10 lg:px-8 pt-4 lg:pt-8 xl:pt-16"
>
  <!-- Logo -->
  <Logo fill={whiteLogo ? '#FDF7FF' : '#252525'} />

  <!-- Menu -->
  <nav
    class="relative hidden lg:flex justify-end space-x-12 text-agora-white font-semibold text-lg font-display"
  >
    <a href="/tools" class="hover:underline focus:outline-none focus:underline">Tools</a>
    <a href="/about" class="hover:underline focus:outline-none focus:underline">About</a>
  </nav>

  <!-- Hamburger menu -->
  <HamburgerMenu white={whiteLogo} />
</header>
