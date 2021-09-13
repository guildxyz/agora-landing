<script>
  import {
    TwitterLogo,
    GithubLogo,
    ArticleMedium,
    DiscordLogo,
    TelegramLogo
  } from 'phosphor-svelte';

  export let purple = false;
  export let pink = false;
</script>

<footer
  class={`${!purple && !pink && 'bg-agora-white'} ${purple && 'bg-agora-purple'} ${
    pink && 'bg-agora-pink-dark'
  }`}
>
  <div class="relative container">
    <!-- Mobile bg -->
    <img
      src="/images/david-mirrored.png"
      alt="David"
      class="absolute md:hidden h-[90%] sm:h-full object-contain bottom-0 -right-6"
    />
    <!-- Desktop bg -->
    <img
      src="/images/david.png"
      alt="David"
      class="absolute hidden md:block h-full object-contain left-6 xl:left-16 bottom-0 right-auto"
    />

    <div class="flex md:justify-end px-8 lg:px-24 py-10 lg:pt-20 w-full">
      <div class="xl:w-4/5">
        <div class="flex flex-col md:flex-row justify-between lg:pl-28 md:space-x-20">
          <!-- Columns -->
          <div class="flex flex-col">
            <h2
              class={`mb-4 font-bold tracking-tight text-2xl 2xl:text-3xl font-display ${
                !pink && !purple && 'text-agora-pink-medium'
              } ${purple && 'text-agora-pink-light'} ${pink && 'text-agora-white'}`}
            >
              Join the community
            </h2>
            <ul class="flex space-x-2 mb-12 font-medium text-lg">
              <li>
                <a
                  href="https://twitter.com/AgoraSpaceDAO"
                  target="_blank"
                  rel="noopener"
                  class={`flex items-center justify-center w-8 h-8 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 ${
                    purple || pink
                      ? 'bg-agora-white text-agora-blue-medium focus-visible:ring-opacity-50'
                      : 'bg-agora-blue-medium text-agora-white'
                  }`}
                >
                  <span class="sr-only">Twitter</span>
                  <TwitterLogo size="1.2em" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AgoraSpaceDAO"
                  target="_blank"
                  rel="noopener"
                  class={`flex items-center justify-center w-8 h-8 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 ${
                    purple || pink
                      ? 'bg-agora-white text-agora-blue-medium focus-visible:ring-opacity-50'
                      : 'bg-agora-blue-medium text-agora-white'
                  }`}
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
                    purple || pink
                      ? 'bg-agora-white text-agora-blue-medium focus-visible:ring-opacity-50'
                      : 'bg-agora-blue-medium text-agora-white'
                  }`}
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
                    purple || pink
                      ? 'bg-agora-white text-agora-blue-medium focus-visible:ring-opacity-50'
                      : 'bg-agora-blue-medium text-agora-white'
                  }`}
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
                    purple || pink
                      ? 'bg-agora-white text-agora-blue-medium focus-visible:ring-opacity-50'
                      : 'bg-agora-blue-medium text-agora-white'
                  }`}
                >
                  <span class="sr-only">Telegram</span>
                  <TelegramLogo size="1.2em" />
                </a>
              </li>
            </ul>

            <span
              class={`hidden md:block mt-auto ${
                purple || pink ? 'text-agora-white' : 'font-light'
              }`}>&copy; 2021 Agora Space</span
            >
          </div>

          <div class="flex flex-col">
            <h2
              class={`mb-4 font-bold tracking-tight text-2xl 2xl:text-3xl font-display ${
                !pink && !purple && 'text-agora-pink-medium'
              } ${purple && 'text-agora-pink-light'} ${pink && 'text-agora-white'}`}
            >
              Information
            </h2>
            <ul
              class={`mb-12 font-medium xl:text-lg ${
                purple || pink ? 'text-agora-white' : 'text-gray-600'
              }`}
            >
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
              <!--
                <li>
                  <a
                    href="/"
                    class="block py-2 lg:py-0 max-w-max focus:outline-none focus-visible:border-b-2 focus-visible:border-gray-300"
                    >Brandbook</a
                  >
                </li>
              -->
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
          <span class={`md:hidden ${purple || pink ? 'text-agora-white' : 'font-light'}`}
            >&copy; 2021 Agora Space</span
          >

          <div class="hidden xl:flex flex-col">
            <h2
              class={`mb-4 font-bold tracking-tight text-2xl 2xl:text-3xl font-display ${
                !pink && !purple && 'text-agora-pink-medium'
              } ${purple && 'text-agora-pink-light'} ${pink && 'text-agora-white'}`}
            >
              Tools & Products
            </h2>
            <ul
              class={`mb-12 font-medium xl:text-lg ${
                purple || pink ? 'text-agora-white' : 'text-gray-600'
              }`}
            >
              <li>
                <a
                  href="https://app.agora.space/"
                  target="_blank"
                  rel="noopener"
                  class="block py-2 lg:py-0 max-w-max focus:outline-none focus-visible:border-b-2 focus-visible:border-gray-300"
                  >Community explorer</a
                >
              </li>
              <li>
                <a
                  href="/tools"
                  class="block py-2 lg:py-0 max-w-max focus:outline-none focus-visible:border-b-2 focus-visible:border-gray-300"
                  >Role management bot</a
                >
              </li>
              <li>
                <a
                  href="https://app.agora.space/register"
                  target="_blank"
                  rel="noopener"
                  class="block py-2 lg:py-0 max-w-max focus:outline-none focus-visible:border-b-2 focus-visible:border-gray-300"
                  >Social Token Admin</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
