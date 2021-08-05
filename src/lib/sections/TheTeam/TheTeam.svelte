<script>
  import Swiper from 'swiper/esm/svelte/swiper.svelte';
  import SwiperSlide from 'swiper/esm/svelte/swiper-slide.svelte';
  import { Pagination } from 'swiper';
  import 'swiper/swiper-bundle.min.css';
  import '../../../css/swiper-custom.css';

  import Div from '$lib/Div.svelte';
  import TeamMember from './components/TeamMembers.svelte';

  let windowWidth;
  $: sectionWrapper = windowWidth >= 1024 ? Div : Swiper;
  $: membersWrapper = windowWidth >= 1024 ? Div : SwiperSlide;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<section id="the-team" class="relative bg-agora-blue-medium">
  <div class="container px-8 py-10 lg:py-20 space-y-10 text-center">
    <h2
      class="text-agora-pink-light text-3xl lg:text-4xl font-bold tracking-tight font-display uppercase"
    >
      The team
    </h2>

    <!-- Team members -->
    <svelte:component
      this={sectionWrapper}
      modules={[Pagination]}
      class="relative pb-12 lg:pb-0 lg:grid lg:grid-cols-3 gap-8 lg:gap-16"
      pagination={{ clickable: true }}
    >
      <!-- Block 1 -->
      <svelte:component this={membersWrapper} class="flex justify-center">
        <div class="grid grid-cols-2 gap-8 lg:gap-16 max-w-xs lg:max-w-none">
          <TeamMember photo="/images/team/brunya.png" name="Brunya" label="Operation" />
          <TeamMember photo="/images/team/dovalid.png" name="Dovalid" label="Fullstack Dev" />
          <TeamMember photo="/images/team/shronk.png" name="Shronk" label="Backend Dev" />
          <TeamMember photo="/images/team/devid.png" name="Devid" label="Backend Dev" />
        </div>
      </svelte:component>

      <!-- Block 2 -->
      <svelte:component this={membersWrapper} class="flex justify-center">
        <div class="grid grid-cols-2 gap-8 lg:gap-16 max-w-xs lg:max-w-none">
          <TeamMember photo="/images/team/ejay.png" name="Ejay" label="Fullstack Dev" />
          <TeamMember
            photo="/images/team/tomi_ohl.png"
            name="Tomi_Ohl"
            label="Smart contract Dev"
          />
          <TeamMember photo="/images/team/d3v.png" name="D3v" label="Security advisor" />
          <TeamMember photo="/images/team/macy.png" name="Macy" label="Communication" />
        </div>
      </svelte:component>

      <!-- Block 3 -->
      <svelte:component this={membersWrapper} class="flex justify-center">
        <div class="grid grid-cols-2 gap-8 lg:gap-16 max-w-xs lg:max-w-none">
          <TeamMember photo="/images/team/kovjonas.png" name="KovJonas" label="Frontend Dev" />
          <TeamMember photo="/images/team/balazs.png" name="Balazs" label="Frontend Dev" />
          <TeamMember photo="/images/team/sito.png" name="Sito" label="Designer" />
          <TeamMember photo="/images/team/raz.png" name="R A Z" label="Strategic advisor" />
        </div>
      </svelte:component>
    </svelte:component>
  </div>
</section>
