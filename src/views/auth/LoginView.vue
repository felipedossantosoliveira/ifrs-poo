<script setup>
import { ref } from 'vue'
import Input from '@/components/form/Input.vue'
import Button from '@/components/form/Button.vue'
import { useRouter } from 'vue-router'

const form = ref({
	email: '',
	password: ''
})

const router = useRouter();

const login = () => {
	axios.post(import.meta.env.VITE_BACKEND_URL + '/auth/login', form.value)
		.then(response => {
			console.log(response.data)
			localStorage.setItem('token', response.data.token)
			localStorage.setItem('username', response.data.user.name)
			localStorage.setItem('email', response.data.user.email)
			console.log(localStorage.getItem('token'))
			router.push({ name: 'home' })
		})
		.catch(error => {
			console.log(error)
		})
}
</script>
<template>
	<form @submit.prevent="login" class="flex flex-col space-y-4">
		<Input type="text" v-model="form.email" placeholder="Email" />
		<Input type="password" v-model="form.password" placeholder="Password" />
		<Button type="submit" class="bg-green-500 hover:bg-green-600 text-white">Login</Button>
	</form>
</template>