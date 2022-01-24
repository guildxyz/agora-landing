<script>
  import Swiper from 'swiper/esm/svelte/swiper.svelte';
  import SwiperSlide from 'swiper/esm/svelte/swiper-slide.svelte';
  import { Pagination } from 'swiper';
  import 'swiper/swiper-bundle.min.css';
  import '../../../css/swiper-custom.css';

  import Div from '$lib/Div.svelte';
  import TeamMember from './components/TeamMember.svelte';

  let windowWidth;
  $: sectionWrapper = windowWidth >= 1024 ? Div : Swiper;
  $: membersWrapper = windowWidth >= 1024 ? Div : SwiperSlide;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<section id="the-team" class="relative bg-agora-blue-medium">
  <div class="flex flex-col px-8 py-10 lg:py-20">
    <div class="container space-y-16">
      <h2
        class="text-agora-pink-light text-3xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight font-display uppercase text-center"
      >
        The team
      </h2>

      <!-- Team members -->
      <svelte:component
        this={sectionWrapper}
        modules={[Pagination]}
        class="relative flex flex-col lg:space-y-16 pb-12 lg:pb-0"
        pagination={{ clickable: true }}
      >
        <!-- Block 1 -->
        <svelte:component this={membersWrapper} class="flex justify-center px-1 md:px-0">
          <div
            class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 xl:gap-32 max-w-xs lg:max-w-none"
          >
            <TeamMember
              photo="/images/team/brunya.webp"
              photoPng="/images/png/team/brunya.png"
              name="Brunya"
              label="Operation"
              github="https://github.com/Brunya"
            />
            <TeamMember
              photo="/images/team/dovalid.webp"
              photoPng="/images/png/team/dovalid.png"
              name="Dovalid"
              label="Frontend Dev"
              github="https://github.com/dovalid"
              twitter="https://twitter.com/dovalid"
            />
            <TeamMember
              photo="/images/team/shronk.webp"
              photoPng="/images/png/team/shronk.png"
              name="Shronk"
              label="Backend Dev"
              github="https://github.com/schronck"
              twitter="https://twitter.com/5hr0nk"
            />
            <TeamMember
              photo="/images/team/devid.webp"
              photoPng="/images/png/team/devid.png"
              name="Devid"
              label="Backend Dev"
              github="https://github.com/DevidAbt"
            />
          </div>
        </svelte:component>

        <!-- Block 2 -->
        <svelte:component this={membersWrapper} class="flex justify-center  px-1 md:px-0">
          <div
            class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 xl:gap-32 max-w-xs lg:max-w-none"
          >
            <TeamMember
              photo="/images/team/ejay.webp"
              photoPng="/images/png/team/ejay.png"
              name="Ejay"
              label="Backend Dev"
              github="https://github.com/dezsim"
              twitter="https://twitter.com/dezsim_"
            />
            <TeamMember
              photo="/images/team/tomi_ohl.webp"
              photoPng="/images/png/team/tomi_ohl.png"
              name="Tomi_Ohl"
              label="Smart contract Dev"
              github="https://github.com/TomiOhl"
            />
            <TeamMember
              photo="/images/team/macy.webp"
              photoPng="/images/png/team/macy.png"
              name="Réka"
              label="Communication"
              twitter="https://twitter.com/reka_eth"
            />
            <TeamMember
              photo="/images/team/balazs.webp"
              photoPng="/images/png/team/balazs.png"
              name="Balazs"
              label="Frontend Dev"
              github="https://github.com/cs-balazs"
            />
          </div>
        </svelte:component>

        <!-- Block 3 -->
        <svelte:component this={membersWrapper} class="flex justify-center  px-1 md:px-0">
          <div
            class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 xl:gap-32 max-w-xs lg:max-w-none"
          >
            <div class="hidden lg:block" />
            <TeamMember
              photo="/images/team/johnny.webp"
              photoPng="/images/png/team/johnny.png"
              name="Johnny"
              label="Frontend Dev"
              github="https://github.com/BrickheadJohnny"
            />
            <TeamMember
              photo="/images/team/sito.webp"
              photoPng="/images/png/team/sito.png"
              name="Sito"
              label="Designer"
            />
          </div>
        </svelte:component>
      </svelte:component>
    </div>
  </div>
</section>
