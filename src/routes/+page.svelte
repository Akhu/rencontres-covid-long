<script>
  import heroImage from "$lib/images/hero-image.png"
  import papeteriesImage from "$lib/images/papet.jpeg"
  import metaCovidLong from "$lib/images/meta-covidlong-logo.png"
</script>

<section>
  <div class="flex flex-col min-h-screen w-full">
    <div class="hero pt-16">
      <div class="hero-content flex-row gap-8 items-start">
        <img src={heroImage} alt="Personnes écoutants lors d'une conférence" class="w-28 hidden md:block lg:w-40"/>
        <div>
          <h1 class="text-5xl font-bold">Rencontres Covid Long</h1>
          <p class="py-6 text-xl">Nous organisons des sessions de rencontres entre malades et concernés (proches, amis de malades) <br/>
            S’entraider, se soutenir et partager les expériences de chacun pour ne plus affronter la maladie seul. </p>
          <div class="flex flex-col md:flex-row gap-4">
            <a href="#how" class="btn btn-primary">Comment participer ?</a>
            <a href="#about" class="btn btn-outline">En quoi cela consiste ?</a>
          </div>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="my-8">
      <h2 class="text-3xl font-extrabold my-4">
        <div class="badge badge-sm badge-error shadow-lg mr-2"></div>
        Prochaine date : à définir...
      </h2>
      <p>Hésitez pas à nous <a class="link-hover btn-link" href="#contact">contacter</a> pour manifester votre intérêt.</p>
    </div>
    <div class="flex flex-col min-h-full my-8">
      <!-- Content Next Date-->
      <div>
        <h1 class="text-3xl font-black mb-6">Vous n'êtes pas seuls ! Des infos sur le Covid Long ⬇️</h1>
        <div class="flex flex-col mb-4">
          <div class="flex flex-col lg:flex-row lg:space-x-8 lg:space-y-0 space-y-4 space-x-0 items-stretch">
            <div class="card bg-secondary shadow-md flex flex-col">
              <div class="card-body">
                <div class="card-title font-black">Groupe de soutiens et de rencontres</div>
                <div class="flex flex-col items-start space-y-4">
                <div class="flex flex-col-reverse items-stretch sm:flex-row sm:items-center sm:space-x-3 space-x-0">
                  <a class="btn btn-outline" href="https://www.facebook.com/groups/913274646358443/?ref=share_group_link">Consulter</a><span>Groupe Facebook de solidarité pour les malades du Covid Long</span>
                </div>
                <div class="flex flex-col-reverse items-stretch sm:flex-row sm:items-center sm:space-x-3 space-x-0">
                  <a class="btn btn-outline" href="https://www.facebook.com/groups/962932755081307/?ref=share_group_link">Consulter</a><span>Groupe Facebook de rencontre physique entre malades du Covid Long</span>
                </div>
              </div>
              </div>
            </div>
            <div class="card bg-primary shadow-md flex flex-col flex-grow">
              <div class="card-body">
                <div class="card-title font-black">Associations</div>
                <div class="flex flex-row space-x-3 ">
                  <a class="btn btn-outline" href="https://winslowsantepublique.wordpress.com/">Winslow Santé Publique</a>
                </div>
                <div class="flex flex-row space-x-3 ">
                  <a class="btn btn-outline" href="https://www.helloasso.com/associations/covid-long-solidarite/">Covid Long Solidarité</a>
                </div>
                <div class="flex flex-row items-center space-x-3">  
                  <a class="btn btn-outline" href="https://www.apresj20.fr/accueil">Après J20</a>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col lg:flex-row lg:space-x-8 space-y-6 lg:align-top lg:items-center">
            <div class="card lg:card-side bg-accent text-white shadow-md mt-4 flex flex-col">
              <figure class="w-1/5">
                <img  src="{metaCovidLong}" alt="logo meta covid long" class="ml-8 rounded-xl h-12 w-12 aspect-square" />
              </figure>
              <div class="card-body">
                <div class="card-title font-black">Blog : Meta Covid Long</div>
                  <div class="flex flex-col space-y-4 items-start">
                    <span>Reflexions sur le Covid Long. Structurer et diffuser des informations scientifiques et objectives sur le Covid Long, mais aussi les problèmes sociaux et sociétaux provoqués par le Covid Long, par un malade du Covid Long</span>
                    <a class="btn-outline btn flex-shrink text-white" href="https://metacovidlong.substack.com">Consulter</a>
                  </div>
                </div>
              </div>
              
            </div>
            
          </div>
      </div>
      <h3 class="text-lg text-slate-500 mb-6">Vous avez une ressource à partager pour les Covid Long ? <a class="btn-link link-primary" href="">Contactez moi sur Twitter</a>, je l'ajouterai ici</h3>

      <!-- Content Instructions -->
      <div class="flex flex-row my-8 md:px-0" id="about">
        <div class="prose min-w-full ">
          <h2 class="text-3xl">Pourquoi se connecter avec d'autres malades ?</h2>
          <p>Une simple rencontre pour partager notre condition de malade, se sentir moins seul. Se rendre compte que cela n'arrive pas qu'à soi, partager conseils et solutions pour soulager la maladie.</p>
          <blockquote>
            « Lorsque vous vous sentez déprimé, l'idée d'affronter une conversation avec quelqu'un peut sembler épuisante et accablante. C'est le piège de la dépression induite par la maladie. On a envie de se retirer, de se cacher, de ne voir personne jusqu'à se sentir mieux.
            Alors on attend de se sentir mieux. Mais ce faisant, nous nous retenons.
            Prendre du temps pour être seul peut être réénergisant, mais cela peut aussi très facilement devenir une spirale vicieuse de rumination et de dégoût de soi qui alimente la dépression et la maintient. » <br/>

            « Le soutien social a des effets positifs à la fois pour celui qui le reçoit et pour celui qui le fournit (Inagaki et al., 2012). »
          </blockquote>
          <p class="font-semibold text-sm">Extrait de
            Why Has Nobody Told Me This Before?
            Dr Julie Smith</p>
        </div>
      </div>
      <div class="archive my-9">
        <h2 class="text-2xl font-extrabold">
          <div class="badge badge-sm badge-secondary shadow-lg mr-2"></div>
          La dernière rencontre, c'était le 26/01/2023 (Merci aux participants !)
        </h2>
        <div class="card bg-base-100 shadow-xl md:pr-0 mt-4 flex flex-col">
          <div class="flex flex-col md:flex-row md:px-8">
            <figure class="hidden">
              <img alt="Les Papeteries Images Factory Immeuble de bureaux" class="grid w-68 rounded-2xl bg-primary text-primary-content place-content-center" width="350" src={papeteriesImage}/>
            </figure>
            <div class="card-body">
              <h2 class="card-title bg-base-200 rounded-full py-2 max-w-fit px-4 "><span class="material-symbols-rounded">location_on</span>Annecy, Haute-Savoie</h2>
              <p class="prose">Groupe de parole : <b>Ouvert à tous</b></p>
              <div class="px-6">
                  <ul class="list-disc prose">
                    <li>Le 26 Janvier 2023</li>
                    <li>Dès 14h</li>
                    <li>Les Papeteries Images Factory,
                      1 Esplanade Augustin Aussedat,
                      74960, Annecy <br/>
                      Salle de Réunion (RDC)
                    </li>
                    <li><a href="https://www.lespapeteries.com/plan.php">Informations pratiques (parking, bus etc.)</a></li>
                  </ul>
              </div>
            </div>
          </div>
          <div class="prose pb-6 min-w-fit leading-normal px-8" id="how">
            <h2><span class="text-amber-500 material-symbols-rounded">commute</span> Comment venir ? </h2>
            <h3>1. Se rendre à Annecy </h3>
            <ul>
              <li>Par le train, la gare d’Annecy est bien desservie par les TER et TGV également depuis les grandes villes</li>
              <li>En bus, la gare routière d’Annecy est dense et bien desservie (FlixBus, BlaBla, Kelbus, etc.)</li>
              <li>Pensez à Blabla Car également</li>
            </ul>
            <div class="flex flex-col md:flex-row items-center gap-2"><a class="btn-outline btn" href="https://www.sncf-connect.com/train/france/auvergne-rhone-alpes/annecy">Réserver un billet de train vers Annecy</a><a class="btn-outline btn" href="https://www.blablacar.fr/">BlaBlaCar</a></div>
            <h3>2. Une fois sur Annecy </h3>
            <div class="flex flex-col">
              <a class="btn-accent btn mb-6 gap-2" href="https://www.lespapeteries.com/plan.php">Instructions pour se rendre sur le lieu (parking, bus etc.) <span class="material-symbols-rounded">directions</span></a>

              <div class="flex flex-col md:flex-row items-center gap-2">
                <a href="https://goo.gl/maps/uFskPZAbnh6ka23S7" class="btn-outline btn">Voir sur Google Maps</a><a class="btn-outline btn" href="https://www.sibra.fr/">Site de la Sibra</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</section>

<style>
</style>
