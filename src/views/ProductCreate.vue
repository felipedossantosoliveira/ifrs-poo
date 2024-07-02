<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router'
import SelectPersonModal from "./Partial/SelectPersonModal.vue";

const router = useRouter()

const form = ref({
	description: "",
	price: 0,
	customer_id: null
})

function backToList(){
	router.push({ name: 'product' })
}

function submit(){
	console.log(form.value)
	axios({
		method: 'post',
		url: import.meta.env.VITE_BACKEND_URL + '/products/create',
		headers: {
			'Authorization': 'Bearer ' + localStorage.getItem('token')
		},
		data: form.value
	}).then(response => {
		router.push({ name: 'products' })
	}).catch(error => {
		console.log(error)
	})
}

const showCustomerModal = ref(false)
 
function openCustomerModal(){
	showCustomerModal.value = true
}

const customer = ref(null)

function selectCustomer(data){
	form.value.customer_id = data.id
	customer.value = data.name
	showCustomerModal.value = false
}

</script>
<template>

<div class="bg-white p-4 rounded shadow">
	<form>
		<div class="mb-4">
			<label for="description" class="block text-sm font-medium text-slate-700">Descrição</label>
			<input type="text" name="description" id="description" v-model="form.description" class="px-3 py-1 rounded border bg-slate-100 w-full">
		</div>
		<div class="mb-4">
			<label for="value" class="block text-sm font-medium text-slate-700">Valor</label>
			<input type="text" name="value" id="value" v-model="form.price" class="px-3 py-1 rounded border bg-slate-100 w-full">
		</div>
		<button  class="px-3 py-1 rounded border bg-slate-100 w-full mb-4 " @click.prevent.stop="openCustomerModal">{{ customer ? customer : 'Selecionar cliente' }}</button>
	</form>

	<div class="flex w-full justify-end space-x-2">
		<button @click="backToList" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Cancelar</button>
		<button @click="submit" class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Salvar</button>
	</div>

</div>

<SelectPersonModal :show="showCustomerModal" @submit="selectCustomer"/>

</template>
<style scoped>

</style>