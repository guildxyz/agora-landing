<script>
  import {
    TwitterLogo,
    GithubLogo,
    ArticleMedium,
    DiscordLogo,
    TelegramLogo
  } from 'phosphor-svelte';

  export let dark = false;
</script>

<footer class={`${dark ? 'bg-agora-gray' : 'bg-agora-white'}`}>
  <div class="relative container grid md:grid-cols-3 lg:grid-cols-4">
    <div class="order-2 md:order-1 relative w-full">
      <picture class="absolute bottom-0 left-0 hidden w-full md:block">
        <source srcset="/images/agora-footer.webp" type="image/webp" />
        <source srcset="/images/png/agora-footer.png" type="image/png" />
        <img src="/images/png/agora-footer.png" width="100%" height="auto" alt="Agora Space" />
      </picture>

      <picture class="block w-screen md:hidden">
        <source srcset="/images/agora-footer-mobile.webp" type="image/webp" />
        <source srcset="/images/png/agora-footer-mobile.png" type="image/png" />
        <img
          src="/images/png/agora-footer-mobile.png"
          width="100%"
          height="auto"
          alt="Agora Space"
        />
      </picture>
    </div>

    <div
      class="flex order-1 w-full px-8 py-10 md:order-2 md:col-span-2 lg:col-span-3 md:justify-end lg:px-0 lg:pr-24 lg:pt-20"
    >
      <div class="flex flex-col justify-between md:flex-row lg:pl-28 md:space-x-20">
        <!-- Columns -->
        <div class="flex flex-col">
          <h2
            class={`mb-4 font-bold tracking-tight text-2xl 2xl:text-3xl font-display ${
              dark ? 'text-agora-white' : 'text-agora-pink-medium'
            }`}
          >
            Join the community
          </h2>
          <ul class="flex mb-12 space-x-2 text-lg font-medium">
            <li>
              <a
                href="https://twitter.com/agora_xyz"
                target="_blank"
                rel="noopener"
                class={`flex items-center justify-center w-8 h-8 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 ${
                  dark ? 'bg-agora-pink-medium' : 'bg-agora-blue-medium'
                } text-agora-white focus-visible:ring-opacity-50`}
              >
                <span class="sr-only">Twitter</span>
                <TwitterLogo size="1.2em" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/agoraxyz"
                target="_blank"
                rel="noopener"
                class={`flex items-center justify-center w-8 h-8 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 ${
                  dark ? 'bg-agora-pink-medium' : 'bg-agora-blue-medium'
                } text-agora-white focus-visible:ring-opacity-50`}
              >
                <span class="sr-only">Github</span>
                <GithubLogo size="1.2em" />
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@AgoraSpaceDAO"
                target="_blank"
                rel="noopener"
                class={`flex items-center justify-center w-8 h-8 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 ${
                  dark ? 'bg-agora-pink-medium' : 'bg-agora-blue-medium'
                } text-agora-white focus-visible:ring-opacity-50`}
              >
                <span class="sr-only">Medium</span>
                <ArticleMedium size="1.2em" />
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/KvXtEpDX8B"
                target="_blank"
                rel="noopener"
                class={`flex items-center justify-center w-8 h-8 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 ${
                  dark ? 'bg-agora-pink-medium' : 'bg-agora-blue-medium'
                } text-agora-white focus-visible:ring-opacity-50`}
              >
                <span class="sr-only">Discord</span>
                <DiscordLogo size="1.2em" />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/joinchat/UxeaoiNXDH5lN2Rk"
                target="_blank"
                rel="noopener"
                class={`flex items-center justify-center w-8 h-8 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 ${
                  dark ? 'bg-agora-pink-medium' : 'bg-agora-blue-medium'
                } text-agora-white focus-visible:ring-opacity-50`}
              >
                <span class="sr-only">Telegram</span>
                <TelegramLogo size="1.2em" />
              </a>
            </li>
          </ul>

          <span class={`hidden md:block mt-auto font-light ${dark && 'text-agora-white'}`}
            >&copy; 2021 Agora Space</span
          >
        </div>

        <div class="flex flex-col">
          <h2
            class={`mb-4 font-bold tracking-tight text-2xl 2xl:text-3xl font-display ${
              dark ? 'text-agora-white' : 'text-agora-pink-medium'
            }`}
          >
            Information
          </h2>
          <ul class={`mb-12 font-medium xl:text-lg ${dark ? 'text-agora-white' : 'text-gray-600'}`}>
            <li>
              <a
                href="/about"
                class="block py-2 lg:py-0 max-w-max focus:outline-none focus-visible:border-b-2 focus-visible:border-gray-300"
                >About</a
              >
            </li>
            <li>
              <a
                href="https://app.gitbook.com/@agora-space/s/agoraspace/"
                target="_blank"
                rel="noopener"
                class="block py-2 lg:py-0 max-w-max focus:outline-none focus-visible:border-b-2 focus-visible:border-gray-300"
                >Gitbook</a
              >
            </li>
            <li>
              <a
                href="/agora-space-brand-kit.zip"
                target="_blank"
                class="block py-2 lg:py-0 max-w-max focus:outline-none focus-visible:border-b-2 focus-visible:border-gray-300"
                >Brand kit</a
              >
            </li>
            <li>
              <a
                href="https://discord.gg/T3Pb7VkUBz"
                target="_blank"
                rel="noopener"
                class="block py-2 lg:py-0 max-w-max focus:outline-none focus-visible:border-b-2 focus-visible:border-gray-300"
                >Support</a
              >
            </li>
          </ul>
        </div>
        <span class={`md:hidden ${dark ? 'text-agora-white' : 'font-light'}`}
          >&copy; 2021 Agora Space</span
        >

        <div class="flex-col hidden xl:flex">
          <h2
            class={`mb-4 font-bold tracking-tight text-2xl 2xl:text-3xl font-display ${
              dark ? 'text-agora-white' : 'text-agora-pink-medium'
            }`}
          >
            Tools & Products
          </h2>
          <ul class={`mb-12 font-medium xl:text-lg ${dark ? 'text-agora-white' : 'text-gray-600'}`}>
            <li>
              <a
                href="/tools"
                class="block py-2 lg:py-0 max-w-max focus:outline-none focus-visible:border-b-2 focus-visible:border-gray-300"
                >Role management bot</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
