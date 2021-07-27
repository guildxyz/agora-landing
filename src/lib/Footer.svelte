<script>
  import {
    TwitterLogo,
    GithubLogo,
    ArticleMedium,
    DiscordLogo,
    TelegramLogo,
    At
  } from 'phosphor-svelte';
</script>

<footer class="bg-[#FDF7FF]">
  <div class="container mx-auto px-8 lg:px-24">
    <div
      class="flex md:justify-end py-10 lg:py-20 w-full bg-david-mirrored md:bg-david-default bg-right-bottom md:bg-left-bottom bg-no-repeat bg-contain"
    >
      <div class="xl:w-3/5">
        <div class="flex flex-col md:flex-row justify-evenly md:space-x-16">
          <!-- Columns -->
          <div class="flex flex-col">
            <h4 class="mb-4 text-[#BA4CC4] font-bold tracking-tight text-2xl font-display">
              Join the community
            </h4>
            <ul class="flex space-x-2 mb-12 font-medium text-lg">
              <li>
                <a
                  href="/"
                  class="flex items-center justify-center w-8 h-8 bg-[#2E2093] text-[#FDF7FF]"
                >
                  <TwitterLogo size="1.2em" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="flex items-center justify-center w-8 h-8 bg-[#2E2093] text-[#FDF7FF]"
                >
                  <GithubLogo size="1.2em" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="flex items-center justify-center w-8 h-8 bg-[#2E2093] text-[#FDF7FF]"
                >
                  <ArticleMedium size="1.2em" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="flex items-center justify-center w-8 h-8 bg-[#2E2093] text-[#FDF7FF]"
                >
                  <DiscordLogo size="1.2em" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="flex items-center justify-center w-8 h-8 bg-[#2E2093] text-[#FDF7FF]"
                >
                  <TelegramLogo size="1.2em" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="flex items-center justify-center w-8 h-8 bg-[#2E2093] text-[#FDF7FF]"
                >
                  <At size="1.2em" />
                </a>
              </li>
            </ul>
          </div>

          <div class="flex flex-col">
            <h4 class="mb-4 text-[#BA4CC4] font-bold tracking-tight text-2xl font-display">
              Information
            </h4>
            <ul class="mb-12 font-medium text-lg">
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
            <h4 class="mb-4 text-[#BA4CC4] font-bold tracking-tight text-2xl font-display">
              Tools & Products
            </h4>
            <ul class="mb-12 font-medium text-lg">
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
          class="flex flex-col md:flex-row lg:justify-evenly md:space-x-8 lg:space-x-16 lg:text-center"
        >
          <span class="mt-auto font-light">2021 Agora Space</span>
          <a href="/" class="mt-auto font-light">Privacy Policy</a>
          <a href="/" class="mt-auto font-light">Terms of Service</a>
        </div>
      </div>
    </div>
  </div>
</footer>
