<script setup>
import { ref } from 'vue'

const props = defineProps({
  type: String,
  placeholder: String
})

const value = defineModel()

</script>
<template>
  <input class="py-2 px-4 rounded border shadow" :type="props.type" :placeholder="props.placeholder" v-model="value"/>
</template>