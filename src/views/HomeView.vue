<script setup>
</script>

<template>
   <main>

<div class="bg-white/50 rounded-2xl border shadow ">
	<div class="flex items-center justify-center">
		<img class="h-96" src="../assets/logo.png"></img>		
	</div>
		<section id="about-logisprint" class="about-section">
		<div class="container">
			<div class="flex-container">
			<div class="about-text">
				<h2>OLÁ, <span>SOMOS A LOGISPRINT</span></h2>
				<p>Na Logisprint, acreditamos que a organização eficiente de dados é a base para o sucesso de qualquer negócio. Somos uma empresa especializada no cadastro de clientes e produtos, combinando tecnologia de ponta com gestão de dados. Com uma equipe dedicada e altamente qualificada, garantimos que suas informações sejam registradas de maneira precisa, segura e acessível.</p>
			</div>
			</div>
		</div>
		</section>
</div>
  
		<section id="contact-form" class="contact-section">
		  <div class="container">
			<h2 class="section-title">ENTRE EM <span>CONTATO:</span></h2>
			<form action="https://formspree.io/f/mqkrbwdl" method="POST">
			  <input type="text" name="nome" placeholder="Nome da sua empresa:" required>
			  <input type="email" name="_replyto" placeholder="E-mail:" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required>
			  <input type="text" name="celular" placeholder="Celular:" required>
			  <textarea name="mensagem" placeholder="Deixe uma mensagem:" required></textarea>
			  <div class="submit-button"><input type="submit" value="ENVIAR"></div>
			</form>
		  </div>
		</section>

        <footer> 
            <h7 class="h7"> Copyright © 2024 LogiSprint. Todos os direitos reservados. </h7>
        </footer>
	  </main>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

footer{
  background-color: #0eceae;
  height: 1cm;
}

.h7{
  margin-left: 520px;
}


* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

html, body {
font-family: 'Poppins', sans-serif;
scroll-behavior: smooth;
}

header {
background-color: #ffff;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
position: fixed;
width: 100%;
z-index: 1000;
}

.container {
max-width: 1200px;
margin: 0 auto;
padding: 0 20px;
}

.desktop-menu ul {
display: flex;
list-style: none;
}

.desktop-menu ul li a {
text-decoration: none;
color: #333;
padding: 15px 20px;
display: block;
}

.desktop-menu ul li a:hover {
background-color: #f5f5f5;
}

section {
padding: 60px 0;
}

.section-title {
text-align: center;
font-size: 36px;
margin-bottom: 40px;
}

.flex-container {
display: flex;
justify-content: space-around;
align-items: center;
}

.about-text h2 span {
color: #0eceae;
}

.contact-section form {
display: flex;
flex-direction: column;
}

.contact-form {
  background-color: #0eceae;
  margin-left: 600px;
  
}

.contact-section input,
.contact-section textarea {
margin-bottom: 15px;
padding: 10px;
border: 1px solid #ccc;
border-radius: 5px;
}

.submit-button input {
background-color: #0eceae;
color: #fff;
border: none;
padding: 10px;
cursor: pointer;
border-radius: 5px;
}

.submit-button input:hover {
background-color: #0eceae;
}

#scroll-to-top {
display: none;
position: fixed;
bottom: 20px;
right: 20px;
background-color: #0eceae;
color: #fff;
border: none;
padding: 10px;
border-radius: 50%;
cursor: pointer;
}

#scroll-to-top:hover {
background-color: #0eceae;
}

.logo {
width: 350px;
height: auto;
margin-left: 16cm;
margin-bottom: 0cm;
margin-top: 0cm;

}
</style>
