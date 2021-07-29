<script>
  import TeamMember from './components/TeamMembers.svelte';
</script>

<section id="the-team" class="relative bg-[#2E2093]">
  <div
    class="container mx-auto px-8 py-20 space-y-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-16 text-center"
  >
    <h2
      class="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-6 mb-16 text-[#D45EDF] text-4xl lg:text-6xl font-bold tracking-tight font-display uppercase"
    >
      The team
    </h2>

    <!-- Team members -->
    <TeamMember photo="/images/team/brunya.png" name="Brunya" label="Operation" />
    <TeamMember photo="/images/team/dovalid.png" name="Dovalid" label="Fullstack Dev" />
    <TeamMember photo="/images/team/ejay.png" name="Ejay" label="Fullstack Dev" />
    <TeamMember photo="/images/team/tomi_ohl.png" name="Tomi_Ohl" label="Smart contract Dev" />
    <TeamMember photo="/images/team/kovjonas.png" name="KovJonas" label="Frontend Dev" />
    <TeamMember photo="/images/team/balazs.png" name="Balazs" label="Frontend Dev" />
    <TeamMember photo="/images/team/shronk.png" name="Shronk" label="Backend Dev" />
    <TeamMember photo="/images/team/devid.png" name="Devid" label="Frontend dev" />
    <TeamMember photo="/images/team/d3v.png" name="D3v" label="Security advisor" />
    <TeamMember photo="/images/team/macy.png" name="Macy" label="Communication" />
    <TeamMember photo="/images/team/sito.png" name="Sito" label="Designer" />
    <TeamMember photo="/images/team/raz.png" name="R A Z" label="Strategic advisor" />
  </div>
</section>
