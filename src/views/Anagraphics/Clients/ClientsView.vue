<template>
	<div>Multi Client</div>
    <router-link 
        :to="{
            name: 'anagraphics.clients.details', 
            params: {
                id: '3'
            }
        }"
    >
       <custom-button styleType="secondary-outline" label="Vai al cliente" />
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {CustomButton} from "gaspari-ui"

export default defineComponent({
    name: 'ClientsView',
    components: {
        CustomButton
    },
    props: {},
    setup(props) {
        let ok = 'ok';

        return {
            ok
        }
    }
})
</script>