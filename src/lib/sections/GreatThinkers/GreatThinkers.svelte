<script>
  import Quote from './components/Quote.svelte';
</script>

<section id="great-thinkers-are-with-us" class="relative bg-agora-gray">
  <div
    class="container mx-auto px-8 py-20 2xl:py-28 space-y-4 2xl:space-y-10 md:grid md:grid-cols-3 gap-8 lg:gap-16 text-center"
  >
    <h2
      class="col-span-3 text-agora-pink-text text-3xl lg:text-4xl 2xl:text-6xl font-bold tracking-tight font-display uppercase"
    >
      Great thinkers are with us
    </h2>

    <Quote
      image="/images/plato-portrait.png"
      alt="Plato portrait"
      quote="I wish oracles would finally provide social data. Agora Space is very promising in that regard and also in easing the limitations of social tokens."
      name="Plato"
    />

    <Quote
      image="/images/aristotle-portrait.png"
      alt="Aristotle portrait"
      quote="The entire social token ecosystem is available on this one unified platform, catering to all the needs of communities."
      name="Aristotle"
    />

    <Quote
      image="/images/epikuros-portrait.png"
      alt="Epikuros portrait"
      quote="I am looking forward to seeing more use-cases available here for connecting social media and the blockchain, and how they provide a new financial system for creators."
      name="Epikuros"
    />
  </div>
</section>
