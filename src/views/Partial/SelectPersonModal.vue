<script setup>
import Modal from "@/components/Modal.vue";
import { ref, onMounted, defineEmits } from "vue";
import Input from "@/components/form/Input.vue";
import Button from "@/components/form/Button.vue";

const props = defineProps({
	show: {
		type: [Boolean, null],
		default: false,
	}
})

function getItems(){
	axios({
		method: 'get',
		url: import.meta.env.VITE_BACKEND_URL + '/customers',
		headers: {
			'Authorization': 'Bearer ' + localStorage.getItem('token')
		},
		params: params.value
	}).then(response => {
		items.value = response.data.data.data
	}).catch(error => {
		console.log(error)
	})
}

const params = ref({
	search: {
		name: ''
	} 
})

const items = ref([]);

onMounted(() => {
	getItems()
})

const emit = defineEmits(['submit']);

function submit(id){
	emit('submit', id)
}

</script>
<template>
	<Modal @close="" :show="show">
		<div class="p-4">
			<h1 class="font-semibold text-lg mb-2">Selecione um cliente</h1>
			<div class="flex">
				<Input class="w-full" type="text" v-model="params.search.name" placeholder="Pesquisar cliente" />
				<Button class="bg-green-600 ml-2" @click="getItems()">Buscar</Button>
			</div>
			<div class="mt-2 border rounded-lg shadow bg-slate-100/50">
				<table class="w-full">
					<thead>
						<tr class="*:px-4 *:py-2 border-b">
							<th class="text-left">ID</th>
							<th class="text-left">Nome</th>
							<th class="text-right">CPF</th>
						</tr>
					</thead>
					<tbody>
						<tr @click="submit(item)" v-for="(item, index) in items" :key="index" :class="[index % 2 === 0 ? 'bg-slate-100' : 'bg-slate-200/70','cursor-pointer *:py-2 *:px-4 *:hover:bg-green-500/10']">
							<td>{{ item?.id }}</td>
							<td>{{ item?.name }}</td>
							<td class="text-right">{{item?.cpf}}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</Modal>
</template>