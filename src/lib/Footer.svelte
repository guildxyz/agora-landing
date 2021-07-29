<script>
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
            <h4
              class={`mb-4 font-bold tracking-tight text-2xl font-display ${
                purple ? 'text-agora-pink-text' : 'text-agora-pink-text-darker'
              }`}
            >
              Join the community
            </h4>
            <ul class="flex space-x-2 mb-12 font-medium text-lg">
              <li>
                <a
                  href="/"
                  class={`flex items-center justify-center w-8 h-8 rounded-sm ${
                    purple
                      ? 'bg-agora-white text-agora-blue-bg'
                      : 'bg-agora-blue-bg text-agora-white'
                  }`}
                >
                  <TwitterLogo size="1.2em" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class={`flex items-center justify-center w-8 h-8 rounded-sm ${
                    purple
                      ? 'bg-agora-white text-agora-blue-bg'
                      : 'bg-agora-blue-bg text-agora-white'
                  }`}
                >
                  <GithubLogo size="1.2em" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class={`flex items-center justify-center w-8 h-8 rounded-sm ${
                    purple
                      ? 'bg-agora-white text-agora-blue-bg'
                      : 'bg-agora-blue-bg text-agora-white'
                  }`}
                >
                  <ArticleMedium size="1.2em" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class={`flex items-center justify-center w-8 h-8 rounded-sm ${
                    purple
                      ? 'bg-agora-white text-agora-blue-bg'
                      : 'bg-agora-blue-bg text-agora-white'
                  }`}
                >
                  <DiscordLogo size="1.2em" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class={`flex items-center justify-center w-8 h-8 rounded-sm ${
                    purple
                      ? 'bg-agora-white text-agora-blue-bg'
                      : 'bg-agora-blue-bg text-agora-white'
                  }`}
                >
                  <TelegramLogo size="1.2em" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class={`flex items-center justify-center w-8 h-8 rounded-sm ${
                    purple
                      ? 'bg-agora-white text-agora-blue-bg'
                      : 'bg-agora-blue-bg text-agora-white'
                  }`}
                >
                  <At size="1.2em" />
                </a>
              </li>
            </ul>
          </div>

          <div class="flex flex-col">
            <h4
              class={`mb-4 font-bold tracking-tight text-2xl font-display ${
                purple ? 'text-agora-pink-text' : 'text-agora-pink-text-darker'
              }`}
            >
              Information
            </h4>
            <ul
              class={`mb-12 font-medium text-lg ${purple ? 'text-agora-white' : 'text-agora-gray'}`}
            >
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Gitbook</a>
              </li>
              <li>
                <a href="/">Brandbook</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
            </ul>
          </div>

          <div class="hidden xl:flex flex-col">
            <h4
              class={`mb-4 font-bold tracking-tight text-2xl font-display ${
                purple ? 'text-agora-pink-text' : 'text-agora-pink-text-darker'
              }`}
            >
              Tools & Products
            </h4>
            <ul
              class={`mb-12 font-medium text-lg ${purple ? 'text-agora-white' : 'text-agora-gray'}`}
            >
              <li>
                <a href="/">Community explorer</a>
              </li>
              <li>
                <a href="/">Role management bot</a>
              </li>
              <li>
                <a href="/">Social Token Admin</a>
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
          <span class="mt-auto font-light">2021 Agora Space</span>
          <a href="/" class="mt-auto font-light">Privacy Policy</a>
          <a href="/" class="mt-auto font-light">Terms of Service</a>
        </div>
      </div>
    </div>
  </div>
</footer>
