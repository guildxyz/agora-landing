<script>
  import TeamMember from '$lib/sections/TheTeam/components/TeamMember.svelte';
</script>

<section id="advisors" class="relative bg-agora-purple">
  <div class="flex flex-col px-8 py-10 lg:py-20">
    <div class="container space-y-16">
      <h2
        class="text-center font-display text-3xl font-bold uppercase tracking-tight text-agora-pink-medium lg:text-4xl 2xl:text-5xl"
      >
        Advisors
      </h2>

      <div class="flex justify-center px-1 md:px-0">
        <div
          class="grid max-w-xs grid-cols-2 gap-8 lg:max-w-none lg:grid-cols-4 lg:gap-16 xl:gap-32"
        >
          <TeamMember
            advisor
            photo="/images/team/raz.webp"
            photoPng="/images/png/team/raz.png"
            name="R A Z"
            label="Strategic advisor"
            twitter="https://twitter.com/L1sp3r"
          />
          <TeamMember
            advisor
            photo="/images/team/petermm.webp"
            photoPng="/images/png/team/petermm.png"
            name="Peter MM"
            label="Advisor"
          />
          <TeamMember
            advisor
            photo="/images/team/d3v.webp"
            photoPng="/images/png/team/d3v.png"
            name="D3v"
            label="Security advisor"
          />
          <TeamMember
            advisor
            photo="/images/team/nima.webp"
            photoPng="/images/png/team/nima.png"
            name="NiMA"
            label="Advisor"
            twitter="https://twitter.com/insidenima"
          />
        </div>
      </div>
    </div>
  </div>
</section>
