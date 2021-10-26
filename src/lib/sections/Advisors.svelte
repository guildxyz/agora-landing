<script>
  import TeamMember from '$lib/sections/TheTeam/components/TeamMember.svelte';
</script>

<section id="advisors" class="relative bg-agora-purple">
  <div class="flex flex-col px-8 py-10 lg:py-20">
    <div class="container space-y-16">
      <h2
        class="text-agora-pink-medium text-3xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight font-display uppercase text-center"
      >
        Advisors
      </h2>

      <div class="flex justify-center px-1 md:px-0">
        <div
          class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 xl:gap-32 max-w-xs lg:max-w-none"
        >
          <TeamMember
            advisor
            photo="/images/team/raz.png"
            name="R A Z"
            label="Strategic advisor"
            twitter="https://twitter.com/L1sp3r"
            links={[
              {
                text: 'Supernova Fund',
                url: 'https://supernova.fund'
              }
            ]}
          />
          <TeamMember
            advisor
            photo="/images/team/petermm.png"
            name="Peter MM"
            label="Advisor"
            links={[
              {
                text: 'Supernova Fund',
                url: 'https://supernova.fund'
              },
              {
                text: 'Prev.: J.P. Morgan'
              }
            ]}
          />
          <TeamMember
            advisor
            photo="/images/team/d3v.png"
            name="D3v"
            label="Security advisor"
            links={[
              {
                text: 'Former SSNS NCSC',
                url: 'https://mi.nemzetilabor.hu/partners/special-service-national-security'
              }
            ]}
          />
          <TeamMember
            advisor
            photo="/images/team/nima.png"
            name="NiMA"
            label="Advisor"
            twitter="https://twitter.com/insidenima"
            links={[
              {
                text: 'Seedclub',
                url: 'https://seedclub.xyz'
              },
              {
                text: 'Mintbase',
                url: 'https://www.mintbase.io'
              }
            ]}
          />
        </div>
      </div>
    </div>
  </div>
</section>
