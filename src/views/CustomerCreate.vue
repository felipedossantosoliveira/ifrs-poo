<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
	name: "",
	cpf: "",
	sex_enum: 1
})

function backToList(){
	router.push({ name: 'customers' })
}

function submit(){
console.log(form.value.name)

	axios({
		method: 'post',
		url: import.meta.env.VITE_BACKEND_URL + '/customers/create',
		headers: {
			'Authorization': 'Bearer ' + localStorage.getItem('token')
		},
		data: {
			name: form.value.name,
			cpf: form.value.cpf,
			cep: "95330000",
			sex_enum: form.value.sex_enum,
			city_id: 4322806,
			address:"Rua",
			number: "702",
			complement:"Ap 402",
		}
	}).then(response => {
		router.push({ name: 'customers' })
	}).catch(error => {
		console.log(error)
	})
}

</script>
<template>

<div class="bg-white p-4 rounded shadow">
	<form>
		<div class="mb-4">
			<label for="name" class="block text-sm font-medium text-slate-700">Nome</label>
			<input type="text" name="name" id="name" v-model="form.name" class="px-3 py-1 rounded border bg-slate-100 w-full">
		</div>
		<div class="mb-4">
			<label for="cpf" class="block text-sm font-medium text-slate-700">CPF</label>
			<input type="text" name="cpf" id="cpf" v-model="form.cpf" class="px-3 py-1 rounded border bg-slate-100 w-full">
		</div>
		<div class="mb-4">
			<label for="sex" class="block text-sm font-medium text-slate-700">Sexo</label>
			<div class="flex space-x-2 *:flex *:space-x-1 text-slate-700">
				<span>
					<input type="radio" id="one" value="1" v-model="form.sex_enum" />
					<label for="one">Male</label>
				</span>
				<span>
					<input type="radio" id="two" value="2" v-model="form.sex_enum" />
					<label for="two">Female</label>
				</span>
			</div>
		</div>
	</form>

	<div class="flex w-full justify-end space-x-2">
		<button @click="backToList" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Cancelar</button>
		<button @click="submit" class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Salvar</button>
	</div>

</div>


</template>
<style scoped>

</style>