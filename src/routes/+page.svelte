<script>
  import heroImage from "$lib/images/hero-image.png"
  import nextDateImage from "$lib/images/next-date-image.png"
  import papeteriesImage from "$lib/images/papet.jpeg"
</script>

<section>
  <div class="flex flex-col min-h-screen w-full">
    <div class="hero pt-16">
      <div class="hero-content flex-row gap-8 items-start">
        <img src={heroImage} alt="Personnes écoutants lors d'une conférence" class="w-28 hidden md:block lg:w-40"/>
        <div>
          <h1 class="text-5xl font-bold">Rencontres Covid Long</h1>
          <p class="pb-6 text-xl">Nous organisons des sessions de rencontres entre malades et concernés (proches, amis de malades) <br/>
            S’entraider, se soutenir et partager les expériences de chacun pour ne plus affronter la maladie seul. </p>
          <div class="flex flex-col md:flex-row gap-4">
            <a href="#how" class="btn btn-primary">Comment participer ?</a>
            <a href="#about" class="btn btn-outline">En quoi cela consiste ?</a>
          </div>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="flex flex-col min-h-full p-4">
      <!-- Content Next Date-->
      <div>
        <h2 class="text-2xl font-extrabold">
          <div class="badge badge-sm badge-error shadow-lg shadow-red-500 mr-2"></div>
          Prochaine date : 26/01/2023
        </h2>
        <div class="card bg-base-100 shadow-xl md:pr-0 mt-4 flex flex-col">
          <div class="flex flex-row md:px-8">
            <figure class="hidden">
              <img alt="Les Papeteries Images Factory Immeuble de bureaux" class="grid w-68 rounded-2xl bg-primary text-primary-content place-content-center" width="350" src={papeteriesImage}/>
            </figure>
            <div class="card-body">
              <h2 class="card-title bg-base-200 rounded-full py-2 max-w-fit px-4 "><span class="material-symbols-rounded">location_on</span>Annecy, Haute-Savoie</h2>
              <p class="prose">Première édition du groupe de parole : <b>Ouvert à tous</b></p>
              <div class="px-6">
                  <ul class="list-disc prose">
                    <li>Le 26 Janvier 2023</li>
                    <li>Dès 14h</li>
                    <li>Les Papeteries Images Factory,
                      1 Esplanade Augustin Aussedat,
                      74960, Annecy <br/>
                      Salle de Réunion (RDC)
                    </li>
                    <li><a href="https://www.lespapeteries.com/">Informations pratiques (parking, bus etc.)</a></li>
                  </ul>
              </div>
            </div>
          </div>
          <div class="prose pb-6 min-w-fit leading-normalpx-8" id="how">
            <h2><span class="text-amber-500 material-symbols-rounded">commute</span> Comment venir ? </h2>
            <h3>1. Se rendre à Annecy </h3>
            <ul>
              <li>Par le train, la gare d’Annecy est bien desservie par les TER et TGV également depuis les grandes villes</li>
              <li>En bus, la gare routière d’Annecy est dense et bien desservie (FlixBus, BlaBla, Kelbus, etc.)</li>
              <li>Pensez à Blabla Car également</li>
            </ul>
            <div class="flex flex-col md:flex-row items-center gap-2 px-8"><a class="btn-outline btn" href="https://www.sncf-connect.com/train/france/auvergne-rhone-alpes/annecy">Reserver un billet de train vers Annecy</a><a class="btn-outline btn" href="https://www.blablacar.fr/">BlaBlaCar</a></div>
            <h3>2. Une fois sur Annecy </h3>
            <div class="flex flex-col md:flex-row items-center gap-2"><a class="btn-accent btn" href="https://www.lespapeteries.com/">Instructions pour se rendre sur le lieu (parking, bus etc.)</a><a href="https://goo.gl/maps/uFskPZAbnh6ka23S7" class="btn-outline btn">Voir sur Google Maps</a><a class="btn-outline btn" href="https://www.sibra.fr/">Site de la Sibra</a></div>

          </div>
        </div>

      </div>
      <!-- Content Instructions -->
      <div class="flex flex-row mt-12 md:px-0" id="about">
        <div class="prose min-w-full ">
          <h2>En quoi cela consiste ?</h2>
          <p>Une simple rencontre pour partager notre condition de malade, se sentir moins seul. Se rendre compte que cela n'arrive pas qu'à soi, partager conseils et solutions pour soulager la maladie.</p>
          <blockquote>
            « Lorsque vous vous sentez déprimé, l'idée d'affronter une conversation avec quelqu'un peut sembler épuisante et accablante. C'est le piège de la dépression induite par la maladie. On a envie de se retirer, de se cacher, de ne voir personne jusqu'à se sentir mieux.
            Alors on attend de se sentir mieux. Mais ce faisant, nous nous retenons.
            Prendre du temps pour être seul peut être réénergisant, mais cela peut aussi très facilement devenir une spirale vicieuse de rumination et de dégoût de soi qui alimente la dépression et la maintient. » <br/>

            « Le soutien social a des effets positifs à la fois pour celui qui le reçoit et pour celui qui le fournit (Inagaki et al., 2012). »
          </blockquote>
          <span class="badge badge-outline">Extrait de
            Why Has Nobody Told Me This Before?
            Dr Julie Smith</span>
        </div>
      </div>

    </div>

  </div>
</section>

<style>
</style>
