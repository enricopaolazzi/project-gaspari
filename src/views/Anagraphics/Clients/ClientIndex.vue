<template>
    <div class="ml-1">
        <breadcrumbs 
            :path_breadcrumbs="[
                {
                    label: 'Home',
                    path: {
                        name: 'home'
                    }
                },
                {
                    label: 'Anagrafiche',							
                },
                {
                    label: 'Clienti',	
                    path: {
                        name: 'anagraphics.clients.index'
                    }						
                },
            ]" 
        />
    </div>
	<div>Multi Client</div>
    <router-link 
        :to="{
            name: 'anagraphics.clients.edit', 
            params: {
                id: '3'
            }
        }"
    >
       <custom-button styleType="secondary-outline" label="Vai al cliente" />
    </router-link>

    <router-link :to="{name: 'anagraphics.clients.create'}">
       <custom-button styleType="secondary-outline" label="Crea nuovo cliente" />
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
    CustomButton,
    Breadcrumbs
} from "gaspari-ui"

export default defineComponent({
    name: 'ClientIndex',
    components: {
        CustomButton,
        Breadcrumbs
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