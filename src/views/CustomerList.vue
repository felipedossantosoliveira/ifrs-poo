<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router'

const router = useRouter()

const items = ref([]);

function create(){
	router.push({ name: 'customer-create' })
}

function refresh(){
	getItems()
}

onMounted(() => {
	getItems()
})

function getItems(){
	axios({
		method: 'get',
		url: import.meta.env.VITE_BACKEND_URL + '/customers',
		headers: {
			'Authorization': 'Bearer ' + localStorage.getItem('token')
		}
	}).then(response => {
		console.log(response.data)
		items.value = response.data.data.data
	}).catch(error => {
		console.log(error)
	})
}

</script>
<template>

<div class="w-full my-10 flex justify-between items-end">
	<h1 class="text-2xl font-bold text-slate-700">Clientes</h1>
	<div class="flex space-x-2">
		<button @click="refresh" class="bg-slate-300/50 shadow hover:bg-slate-300 text-slate-700 px-4 py-2 rounded">Recarregar</button>
		<button @click="create" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Criar</button>
	</div>
</div>

<div class="bg-white p-4 rounded shadow">
	<table class="w-full border border-slate-400 text-slate-700">
		<tr class="*:border-slate-400 *:border *:text-left *:px-4">
			<th>Nome</th>
			<th>CPF</th>
			<th>Sexo</th>
		</tr>
		<tr class="*:border-slate-400 *:border *:text-left *:px-4" v-for="item in items" :key="item.id">
			<td>{{ item.name }}</td>
			<td>{{ item.cpf }}</td>
			<td>{{ item.sex.description }}</td>
	
		</tr>
	</table>
</div>


</template>
<style scoped>

</style>