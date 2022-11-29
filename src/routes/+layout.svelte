<script>
	import '../app.css'
</script>

<div class="app bg-base-200">
	<main class="container mx-auto">
		<slot />
	</main>

  <footer class="footer p-10 bg-base-300 text-base-content mt-10">
    <div>
      <span class="footer-title">Qui sommes nous ?</span>
      <p>Arnaud et Anthony, nous sommes deux malades du Covid Long, Arnaud depuis Avril 2020, et Anthony depuis Novembre 2021. Notre objectif est simplement de partager notre experience avec d'autres malades en offrant un minimum d'organisation et un lieu de rencontre.</p>
    </div>
    <div>
      <span class="footer-title">Des liens</span>
      <a class="link link-hover" href="mailto:azzouz.arnaud@gmail.com">✉️ Nous contacter par mail</a>
      <a class="link link-hover" href="https://metacovidlong.substack.com"> 📥 La newsletter - Meta Covid Long</a>
      <a class="link link-hover" href="https://twitter.com/anthokhun"> 🐥Contacter Anthony sur Twitter</a>
    </div>
  </footer>
</div>

<style>

</style>
