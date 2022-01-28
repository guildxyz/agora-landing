<script>
  import Logo from './components/Logo.svelte';
  import HamburgerMenu from './components/HamburgerMenu.svelte';

  export let whiteLogo = false;
</script>

<header class="container flex items-center justify-between pt-4 lg:pt-8 xl:pt-16">
  <!-- Logo -->
  <Logo fill={whiteLogo ? '#FDF7FF' : '#252525'} />

  <!-- Menu -->
  <nav
    class="relative hidden justify-end space-x-10 font-display text-lg font-semibold text-agora-white lg:flex xl:space-x-12 xl:text-xl"
  >
    <a href="/tools" class="hover:underline focus:underline focus:outline-none">Tools</a>
    <a href="/about" class="hover:underline focus:underline focus:outline-none">About</a>
  </nav>

  <!-- Hamburger menu -->
  <HamburgerMenu white={whiteLogo} />
</header>
