<template>
    <button v-on:click="submit()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        gRPC request
    </button>
    <div class="text-white">
      <div class="grid grid-cols-2 gap-4">
        <div>{{firstName}}</div>
        <div>{{lastName}}</div>
          <div>{{age}}</div>
      </div>
    </div>

    <button v-on:click="name()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Just playing
    </button>
    <div class="grid grid-cols-2 gap-4 text-white">
        {{tempName}}
    </div>

</template>

<script lang="ts" setup>
import { ref } from "vue";
import { api } from "../lib/api";

const firstName = ref('');
const lastName = ref('');
const age = ref('');
const tempName = ref('');

const submit = async () => {
    try {
        const response = await api.getTest()

        if (response != null) {
            //console.log("AGE " + response.age)
            firstName.value = response.name
            lastName.value = response.lastName
            //age.value = response.age
        }
    } catch (error) {
        console.log('Error while getting the response:', error)
    }
};

const name = async () => {
    try {
        const response = await api.postName("Peter")

        if (response != null) {
            tempName.value = response.name
        }
    } catch (error) {
        console.log('Error while getting the response:', error)
    }
};

</script>

<style scoped>

</style>
