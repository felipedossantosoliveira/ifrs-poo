<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
	<header>
		<div class="container">
			<nav class="desktop-menu">
				<ul>
					<li><RouterLink to="/">Menu</RouterLink></li>
					<li><RouterLink to="/produtos">Produtos</RouterLink></li>
					<li><RouterLink to="/clientes">Clientes</RouterLink></li>
					<li><a href="#contact-form" class="contact-form">Entre em Contato</a></li>
				</ul>
			</nav>
			<div class="overlay" id="overlay-menu"></div>
		</div>
	</header>
	<div style="padding-top: 100px; padding-left: 200px; padding-right: 200px;">
		<slot/>
    </div>
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

main {
  padding-top: 100px;
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