<script>
	import '../app.css'
  import arnaud from '$lib/images/arnaud.png'
  import anthony from '$lib/images/anthony.jpg'
</script>

<div class="app bg-base-200">
	<main class="container mx-auto">
		<slot />
	</main>

  <footer class="footer p-10 bg-base-300 text-base-content mt-10">
    <div>
      <span class="footer-title">Qui sommes nous ?</span>
      <div class="flex flex-row">
        <div class="avatar-group -space-x-4">
          <div class="avatar">
            <div class="w-14">
              <img src={anthony} alt="Anthony" />

            </div>
          </div>
          <div class="avatar">
            <div class="w-14">
              <img src={arnaud} alt="Arnaud" />
            </div>
          </div>
        </div>
      <p class="pl-4">Arnaud et Anthony, nous sommes simplement deux malades du Covid Long, Arnaud depuis Avril 2020, et Anthony depuis Novembre 2021. Notre objectif est simplement de partager notre experience avec d'autres malades en offrant un minimum d'organisation et un lieu de rencontre.</p>
      </div>
    </div>
    <div>
      <span class="footer-title">Nous contacter en cas de besoin</span>
      <a class="link link-hover" href="mailto:azzouz.arnaud@gmail.com">✉️ Contacter Arnaud par mail</a>
      <a class="link link-hover" href="https://metacovidlong.substack.com"> 📥 La newsletter - Meta Covid Long</a>
      <a class="link link-hover" href="https://twitter.com/anthokhun"> 🐥Contacter Anthony sur Twitter</a>
    </div>
  </footer>
</div>

<style>

</style>
