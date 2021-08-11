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
        class="text-agora-pink-light text-3xl lg:text-4xl 2xl:text-6xl font-bold tracking-tight font-display uppercase text-center"
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
        <svelte:component this={membersWrapper} class="flex justify-center">
          <div
            class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 xl:gap-32 max-w-xs lg:max-w-none"
          >
            <TeamMember
              photo="/images/team/brunya.png"
              name="Brunya"
              label="Operation"
              twitter="https://twitter.com/BrunoZawiasa"
              github="https://github.com/Brunya"
            />
            <TeamMember
              photo="/images/team/dovalid.png"
              name="Dovalid"
              label="Frontend Dev"
              github="https://github.com/dovalid"
              twitter="https://twitter.com/dovalid"
            />
            <TeamMember
              photo="/images/team/shronk.png"
              name="Shronk"
              label="Backend Dev"
              github="https://github.com/schronck"
            />
            <TeamMember
              photo="/images/team/devid.png"
              name="Devid"
              label="Backend Dev"
              github="https://github.com/DevidAbt"
            />
          </div>
        </svelte:component>

        <!-- Block 2 -->
        <svelte:component this={membersWrapper} class="flex justify-center">
          <div
            class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 xl:gap-32 max-w-xs lg:max-w-none"
          >
            <TeamMember
              photo="/images/team/ejay.png"
              name="Ejay"
              label="Backend Dev"
              github="https://github.com/dezsim"
            />
            <TeamMember
              photo="/images/team/tomi_ohl.png"
              name="Tomi_Ohl"
              label="Smart contract Dev"
              github="https://github.com/TomiOhl"
            />
            <TeamMember photo="/images/team/macy.png" name="Macy" label="Communication" />
            <TeamMember
              photo="/images/team/balazs.png"
              name="Balazs"
              label="Frontend Dev"
              github="https://github.com/cs-balazs"
            />
          </div>
        </svelte:component>

        <!-- Block 3 -->
        <svelte:component this={membersWrapper} class="flex justify-center">
          <div
            class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 xl:gap-32 max-w-xs lg:max-w-none"
          >
            <div class="hidden lg:block" />
            <TeamMember
              photo="/images/team/kovjonas.png"
              name="KovJonas"
              label="Frontend Dev"
              github="https://github.com/KovJonas"
            />
            <TeamMember photo="/images/team/sito.png" name="Sito" label="Designer" />
          </div>
        </svelte:component>
      </svelte:component>
    </div>

    <div class="container space-y-16">
      <h2
        class="mt-32 text-agora-pink-light text-3xl lg:text-4xl 2xl:text-6xl font-bold tracking-tight font-display uppercase text-center"
      >
        Advisors
      </h2>
      <!-- Advisors -->
      <svelte:component
        this={sectionWrapper}
        modules={[Pagination]}
        class="relative pb-12 lg:pb-0"
        pagination={{ clickable: true }}
      >
        <!-- Block 1 -->
        <svelte:component this={membersWrapper} class="flex justify-center">
          <div
            class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 xl:gap-32 max-w-xs lg:max-w-none"
          >
            <TeamMember
              photo="/images/team/raz.png"
              name="R A Z"
              label="Strategic advisor"
              twitter="https://twitter.com/L1sp3r"
            />
            <TeamMember photo="/images/team/petermm.png" name="Peter MM" label="Advisor" />
            <TeamMember
              photo="/images/team/d3v.png"
              name="D3v"
              label="Security advisor"
              github="https://github.com/D3vl0per"
              twitter="https://twitter.com/D3v___"
            />
            <TeamMember
              photo="/images/team/nima.png"
              name="NiMA"
              label="Advisor"
              twitter="https://twitter.com/insidenima"
            />
          </div>
        </svelte:component>
      </svelte:component>
    </div>
  </div>
</section>
