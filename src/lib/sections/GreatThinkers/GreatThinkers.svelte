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
  <div class="container space-y-4 py-28 text-center 2xl:space-y-10 2xl:py-36">
    <h2
      class="col-span-3 mb-24 font-display text-3xl font-bold uppercase tracking-tight text-agora-pink-light lg:text-4xl 2xl:text-5xl"
    >
      Great thinkers are with us
    </h2>

    <svelte:component
      this={sectionWrapper}
      modules={[Pagination]}
      class="relative gap-4 pb-12 lg:grid lg:grid-cols-3 lg:pb-0 2xl:gap-11"
      pagination={{ clickable: true }}
    >
      <svelte:component this={quoteWrapper}>
        <Quote
          image="/images/thinkers-aristotle.webp"
          imagePng="/images/png/thinkers-aristotle.png"
          video="/animations/mobile-thinkers-aristotle.webm"
          alt="Aristotle portrait"
          quoteStart="Trustless financial contracts"
          quote="are essential for a DAO2DAO future."
          name="Aristotle"
        />
      </svelte:component>

      <svelte:component this={quoteWrapper}>
        <!-- TODO: mp4 video -->
        <Quote
          image="/images/thinkers-platon.webp"
          imagePng="/images/png/thinkers-platon.png"
          video="/animations/mobile-thinkers-platon.webm"
          alt="Plato portrait"
          quoteStart="Token-gated communities"
          quote="create the perfect foundation for Sybil-Resistant decision-making and rewarding mechanisms."
          name="Plato"
        />
      </svelte:component>

      <svelte:component this={quoteWrapper}>
        <Quote
          image="/images/thinkers-epikuros.webp"
          imagePng="/images/png/thinkers-epikuros.png"
          video="/animations/mobile-thinkers-epikuros.webm"
          alt="Epikuros portrait"
          quoteStart="Gasless web3 applications"
          quote="unleash the burden of onboarding millions to DAOs"
          name="Epikuros"
        />
      </svelte:component>
    </svelte:component>
  </div>
</section>
