<script>
  import HamburgerMenu from './HamburgerMenu.svelte';

  export let whiteLogo = false;
</script>

<header class="container flex justify-between mx-auto px-4 lg:px-8 pt-4 lg:pt-20">
  <!-- Logo -->
  <a
    href="/"
    class={`flex space-x-4 focus:outline-none focus-visible:border-b-2 focus-visible:border-gray-300 ${
      whiteLogo ? 'text-[#FDF7FF]' : 'text-[#252525]'
    }`}
  >
    <svg
      fill={whiteLogo ? '#FDF7FF' : '#252525'}
      viewBox="0 0 125 122"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="w-7 h-7"
    >
      <rect width="22.9497" height="121.761" />
      <path d="M55.4443 50.9678L70.6557 68.1386L23.0169 121.647L3.63184 109.149L55.4443 50.9678Z" />
      <path
        d="M5.32799 13.8702L23.0867 0.0313432L118.984 121.687L90.5697 121.687L5.32799 13.8702Z"
      />
      <rect
        x="101.313"
        y="121.825"
        width="95.0978"
        height="22.9975"
        transform="rotate(-90 101.313 121.825)"
      />
    </svg>
    <h1 class="font-bold tracking-tight text-2xl font-display">Agora Space</h1>
  </a>

  <!-- Menu -->
  <nav
    class="relative hidden lg:flex justify-end space-x-12 text-[#FDF7FF] font-semibold text-lg font-display"
  >
    <a href="/explorer" class="hover:underline focus:outline-none focus:underline">Explorer</a>
    <a href="/tools" class="hover:underline focus:outline-none focus:underline">Tools</a>
    <a href="/about" class="hover:underline focus:outline-none focus:underline">About</a>
  </nav>

  <!-- Hamburger menu -->
  <HamburgerMenu white={whiteLogo} />
</header>
