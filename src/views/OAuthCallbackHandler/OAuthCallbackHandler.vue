<template>
    <div>
        redirect page
    </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from "vue";
import axios from "axios";
import {useRoute} from 'vue-router'

export default defineComponent({
    name: 'OAuthCallbackHandler',
    setup(props, context) {

        onMounted(async () => {
            try {
                const response = await axios.post(`${process.env.VUE_APP_OAUTH_AUTH_SERVER}/oauth/token`, {
                    grant_type: 'authorization_code',
                    client_id: process.env.VUE_APP_OAUTH_CLIENT_ID,
                    client_secret: process.env.VUE_APP_OAUTH_CLIENT_SECRET,                    
                    code: useRoute().query.code
                });

                console.log(response.data);
            } catch(e) {
                console.log('catch')
                console.log(e);
            }
        })

        const ciao = 'ciao';
        console.log(ciao);

        return {
            ciao
        }
    }
})
</script>

<style>

</style>