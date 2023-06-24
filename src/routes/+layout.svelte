<script>
	import '../app.css'
  import arnaud from '$lib/images/arnaud.png'
  import anthony from '$lib/images/anthony.jpg'
</script>

<div class="app bg-base-100">
	<main class="container mx-auto max-w-6xl px-4">
		<slot />
	</main>

  <footer class="px-6 py-9 bg-base-300 mt-10">
    <div class="container mx-auto w-screen max-w-full md:max-w-6xl">
      <div class="text-base-content flex lg:flex-row flex-col space-x-0 lg:space-x-4 space-y-10 lg:space-y-0">
      <div class="flex flex-col flex-grow w-3/5">
        <h1 class="footer-title" id="contact">Nous contacter</h1>
        <a class="link link-hover" href="mailto:azzouz.arnaud@gmail.com">✉️ Contacter Arnaud par mail</a>
        <a class="link link-hover" href="https://metacovidlong.substack.com"> 📥 La newsletter - Meta Covid Long</a>
        <a class="link link-hover" href="https://twitter.com/anthokhun"> 🐥Contacter Anthony sur Twitter</a>
      </div>
      <div class="flex flex-col flex-shrink flex-grow-0">
        <span class="footer-title">Qui sommes nous ?</span>
        <div class="avatar-group -space-x-4">
          <div class="avatar">
            <div class="w-14 h-14">
              <img src={anthony} alt="Anthony" />

            </div>
          </div>
          <div class="avatar">
            <div class="w-14 h-14">
              <img src={arnaud} alt="Arnaud" />
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row">

        <p>Arnaud et Anthony, nous sommes simplement deux malades du Covid Long, Arnaud depuis Avril 2020, et Anthony depuis Novembre 2021. </p>
        <p>Notre objectif est simplement de partager notre experience avec d'autres malades en offrant un minimum d'organisation et un lieu de rencontre.</p>
        </div>
      </div>
    </div>
    </div>
  </footer>
</div>

<style>

</style>
