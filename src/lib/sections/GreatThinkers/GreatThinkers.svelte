<script>
  import Swiper from 'swiper/esm/svelte/swiper.svelte';
  import SwiperSlide from 'swiper/esm/svelte/swiper-slide.svelte';
  import { Pagination } from 'swiper';
  import 'swiper/swiper-bundle.min.css';
  import '../../../css/swiper-custom.css';

  import Div from '$lib/Div.svelte';
  import Quote from './components/Quote.svelte';

  let windowWidth;
  $: sectionWrapper = windowWidth >= 1024 ? Div : Swiper;
  $: quoteWrapper = windowWidth >= 1024 ? Div : SwiperSlide;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<section id="great-thinkers-are-with-us" class="relative bg-agora-gray">
  <div class="container px-8 py-24 2xl:py-28 space-y-4 2xl:space-y-10 text-center">
    <h2
      class="mb-24 col-span-3 text-agora-pink-light text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold tracking-tight font-display uppercase"
    >
      Great thinkers are with us
    </h2>

    <svelte:component
      this={sectionWrapper}
      modules={[Pagination]}
      class="relative pb-12 lg:pb-0 lg:grid lg:grid-cols-3 gap-8 lg:gap-16"
      pagination={{ clickable: true }}
    >
      <svelte:component this={quoteWrapper}>
        <Quote
          image="/images/plato-portrait.png"
          alt="Plato portrait"
          quote="I wish oracles would finally provide social data. Agora Space is very promising in that regard and also in easing the limitations of social tokens."
          name="Plato"
        />
      </svelte:component>

      <svelte:component this={quoteWrapper}>
        <Quote
          image="/images/aristotle-portrait.png"
          alt="Aristotle portrait"
          quote="The entire social token ecosystem is available on this one unified platform, catering to all the needs of communities."
          name="Aristotle"
        />
      </svelte:component>

      <svelte:component this={quoteWrapper}>
        <Quote
          image="/images/epikuros-portrait.png"
          alt="Epikuros portrait"
          quote="I am looking forward to seeing more use-cases available here for connecting social media and the blockchain, and how they provide a new financial system for creators."
          name="Epikuros"
        />
      </svelte:component>
    </svelte:component>
  </div>
</section>
