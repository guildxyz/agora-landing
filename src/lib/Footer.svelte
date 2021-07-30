<script>
  import Button from '$lib/Button';
  import {
    TwitterLogo,
    GithubLogo,
    ArticleMedium,
    DiscordLogo,
    TelegramLogo,
    At
  } from 'phosphor-svelte';

  export let purple = false;
</script>

<footer class={purple ? 'bg-agora-purple-bg' : 'bg-agora-white'}>
  <div class="container mx-auto">
    <div
      class="flex md:justify-end px-8 lg:px-24 py-10 lg:py-20 w-full bg-david-mirrored md:bg-david-default bg-footer-mobile md:bg-left-bottom bg-no-repeat bg-contain"
    >
      <div class="xl:w-3/5">
        <div class="flex flex-col md:flex-row justify-evenly md:space-x-16">
          <!-- Columns -->
          <div class="flex flex-col">
            <h2
              class={`mb-4 font-bold tracking-tight text-2xl font-display ${
                purple ? 'text-agora-pink-text' : 'text-agora-pink-text-darker'
              }`}
            >
              Join the community
            </h2>
            <ul class="flex space-x-2 mb-12 font-medium text-lg">
              <li>
                <a
                  href="https://twitter.com/AgoraSpaceDAO"
                  class={`flex items-center justify-center w-8 h-8 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 ${
                    purple
                      ? 'bg-agora-white text-agora-blue-bg focus-visible:ring-opacity-50 '
                      : 'bg-agora-blue-bg text-agora-white'
                  }`}
                >
                  <span class="sr-only">Twitter</span>
                  <TwitterLogo size="1.2em" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AgoraSpaceDAO"
                  class={`flex items-center justify-center w-8 h-8 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 ${
                    purple
                      ? 'bg-agora-white text-agora-blue-bg focus-visible:ring-opacity-50'
                      : 'bg-agora-blue-bg text-agora-white'
                  }`}
                >
                  <span class="sr-only">Github</span>
                  <GithubLogo size="1.2em" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class={`flex items-center justify-center w-8 h-8 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 ${
                    purple
                      ? 'bg-agora-white text-agora-blue-bg focus-visible:ring-opacity-50'
                      : 'bg-agora-blue-bg text-agora-white'
                  }`}
                >
                  <span class="sr-only">Medium</span>
                  <ArticleMedium size="1.2em" />
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/KvXtEpDX8B"
                  class={`flex items-center justify-center w-8 h-8 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 ${
                    purple
                      ? 'bg-agora-white text-agora-blue-bg focus-visible:ring-opacity-50'
                      : 'bg-agora-blue-bg text-agora-white'
                  }`}
                >
                  <span class="sr-only">Discord</span>
                  <DiscordLogo size="1.2em" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class={`flex items-center justify-center w-8 h-8 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 ${
                    purple
                      ? 'bg-agora-white text-agora-blue-bg focus-visible:ring-opacity-50'
                      : 'bg-agora-blue-bg text-agora-white'
                  }`}
                >
                  <span class="sr-only">Telegram</span>
                  <TelegramLogo size="1.2em" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class={`flex items-center justify-center w-8 h-8 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 ${
                    purple
                      ? 'bg-agora-white text-agora-blue-bg focus-visible:ring-opacity-50'
                      : 'bg-agora-blue-bg text-agora-white'
                  }`}
                >
                  <span class="sr-only">Email</span>
                  <At size="1.2em" />
                </a>
              </li>
            </ul>
          </div>

          <div class="flex flex-col">
            <h2
              class={`mb-4 font-bold tracking-tight text-2xl font-display ${
                purple ? 'text-agora-pink-text' : 'text-agora-pink-text-darker'
              }`}
            >
              Information
            </h2>
            <ul
              class={`mb-12 font-medium text-lg ${purple ? 'text-agora-white' : 'text-agora-gray'}`}
            >
              <li>
                <a
                  href="/"
                  class="focus:outline-none focus-visible:border-b-2 focus-visible:border-gray-300"
                  >About</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="focus:outline-none focus-visible:border-b-2 focus-visible:border-gray-300"
                  >Gitbook</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="focus:outline-none focus-visible:border-b-2 focus-visible:border-gray-300"
                  >Brandbook</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="focus:outline-none focus-visible:border-b-2 focus-visible:border-gray-300"
                  >Support</a
                >
              </li>
            </ul>
          </div>

          <div class="hidden xl:flex flex-col">
            <h2
              class={`mb-4 font-bold tracking-tight text-2xl font-display ${
                purple ? 'text-agora-pink-text' : 'text-agora-pink-text-darker'
              }`}
            >
              Tools & Products
            </h2>
            <ul
              class={`mb-12 font-medium text-lg ${purple ? 'text-agora-white' : 'text-agora-gray'}`}
            >
              <li>
                <a
                  href="/"
                  class="focus:outline-none focus-visible:border-b-2 focus-visible:border-gray-300"
                  >Community explorer</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="focus:outline-none focus-visible:border-b-2 focus-visible:border-gray-300"
                  >Role management bot</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="focus:outline-none focus-visible:border-b-2 focus-visible:border-gray-300"
                  >Social Token Admin</a
                >
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom links -->
        <div
          class={`flex flex-col md:flex-row lg:justify-evenly md:space-x-8 lg:space-x-16 lg:text-center font-extralight ${
            purple ? 'text-agora-white' : 'text-agora-gray'
          }`}
        >
          <span class="h-8 mt-auto font-light">2021 Agora Space</span>
          <a
            href="/"
            class="h-8 mt-auto font-light focus:outline-none focus-visible:border-b-2 focus-visible:border-gray-300"
            >Privacy Policy</a
          >
          <a
            href="/"
            class="h-8 mt-auto font-light focus:outline-none focus-visible:border-b-2 focus-visible:border-gray-300"
            >Terms of Service</a
          >
        </div>
      </div>
    </div>
  </div>
</footer>
