<script>
  import Button from '$lib/Button';
  import SocialIcons from '$lib/SocialIcons.svelte';
  import ArrowRight from 'phosphor-svelte/lib/ArrowRight';
</script>

<div
  class="grid gap-32 px-4 py-4 m-auto lg:p-16 xl:p-28 lg:grid-cols-[1fr,1fr] xl:grid-cols-[2fr,3fr] max-w-[1800px] h-full max-h-[1200px] sm:px-6"
>
  <div class="flex flex-col sm:h-auto">
    <div class="flex justify-between w-full lg:mt-8">
      <div class="flex items-center gap-4">
        <img class="h-8" src="icon/logo.svg" alt="" />
        <p class="font-semibold tracking-tight md:text-lg font-display">Agora Space</p>
      </div>
      <div class="flex items-center lg:hidden">
        <SocialIcons buttonClasses="text-xl text-gray-900" />
      </div>
    </div>
    <div class="mt-4 lg:hidden">
      <video autoplay loop muted playsinline class="mx-auto max-h-72">
        <!-- <source
          src="https://rotato.netlify.app/alpha-demo/movie-hevc.mov"
          type='video/mp4; codecs="hvc1"'
        /> -->
        <source src="medusa.mp4" type="video/mp4" />
      </video>
    </div>
    <main class="pt-6 lg:pb-24 sm:pt-12 lg:my-auto">
      <div class="max-w-lg mx-auto text-center lg:text-left lg:max-w-none">
        <h1
          class="text-4xl font-extrabold tracking-tight text-gray-900 font-display lg:text-5xl 2xl:text-6xl"
        >
          <span class="block xl:inline">Manage tokenized</span>
          <span class="block text-primary-600 xl:inline">communities</span>
        </h1>
        <p class="mt-5 font-semibold text-gray-500 sm:text-lg xl:text-xl lg:mx-0 lg:mt-8">
          Create a unique space for your community with the power of blockchain and crypto.‌
        </p>
        <div class="flex items-center mt-8 lg:justify-between lg:mt-12">
          <Button
            href="#"
            class="w-full text-white shadow bg-primary-600 lg:w-auto hover:bg-primary-700"
            >Pitch deck
            <ArrowRight weight="bold" slot="icon" />
          </Button>
          <div class="flex-initial hidden gap-3 ml-3 lg:flex">
            <SocialIcons buttonClasses="text-xl text-gray-700 bg-white shadow lg:text-2xl" />
          </div>
        </div>
      </div>
    </main>
  </div>
  <div class="relative hidden lg:flex">
    <div class="absolute flex flex-initial w-auto h-full">
      <img
        class="left-0 z-10 h-full shadow-xl rounded-2xl max-w-none"
        src="/images/agora.png"
        alt="App screenshot"
      />
      <div class="pattern absolute w-1/2 h-1/3 left-[-80px] top-[-30px] xl:top-[-50px]" />
      <div
        class="absolute w-2/3 h-3/4 right-[-80px] bottom-[-40px] xl:bottom-[-60px] bg-gray-100 rounded-3xl"
      />
    </div>
  </div>
</div>

<style>
  .pattern {
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d1d5db' fill-opacity='0.45'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
</style>
