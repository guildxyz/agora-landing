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
      class="mb-24 col-span-3 text-agora-pink-light text-3xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight font-display uppercase"
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
          image="/images/thinkers-aristotle.png"
          video="/animations/thinkers-aristotle.webm"
          alt="Aristotle portrait"
          quoteStart="Trustless financial contracts"
          quote="are essential for a DAO2DAO future."
          name="Aristotle"
        />
      </svelte:component>

      <svelte:component this={quoteWrapper}>
        <Quote
          image="/images/thinkers-platon.png"
          video="/animations/thinkers-platon.webm"
          alt="Plato portrait"
          quoteStart="Token-gated communities"
          quote="create the perfect foundation for Sybil-Resistant decision-making and rewarding mechanisms."
          name="Plato"
        />
      </svelte:component>

      <svelte:component this={quoteWrapper}>
        <Quote
          image="/images/thinkers-epikuros.png"
          video="/animations/thinkers-epikuros.webm"
          alt="Epikuros portrait"
          quoteStart="Gasless web3 applications"
          quote="unleash the burden of onboarding millions to DAOs"
          name="Epikuros"
        />
      </svelte:component>
    </svelte:component>
  </div>
</section>
