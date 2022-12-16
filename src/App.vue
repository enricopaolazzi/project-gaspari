<template>	

	<div class="container mx-auto py-5">
		<custom-button 
			v-if="isLoggedIn"
			label="Logout"
		/>

		<custom-button 
			v-else
			label="Login"
			@onClick="redirect"
		/>
	</div>

	<layout-base 
		v-if="isLoggedIn"
		:menuStructure="menuStructureMenu"
	>  
		<template v-slot:layout-content>
			<scroll-to-top />
			<router-view/>
		</template>
	</layout-base>

	<div v-else class="container mx-auto py-5">
		Non loggato
		<router-view/>
	</div>
</template>

<script lang="ts">
import 'gaspari-ui/dist/style.css';
import 'gaspari-ui/dist/output.css';
import menuStructure from './menuStructure';
import qs from "qs";

import { computed, defineComponent, ref } from "vue";
import { LayoutBase, ScrollToTop, CustomButton } from "gaspari-ui";

export default defineComponent({
	name: 'App',
	components: {
		LayoutBase,
		ScrollToTop,
		CustomButton
	},
	setup() {
		const menuStructureMenu = menuStructure;

		const isLoggedIn = computed(() => {
			return false;
		})

		const user = ref(null);

		const redirect = () => {
			const queryString = {
				client_id: process.env.VUE_APP_OAUTH_CLIENT_ID,
				redirect_url: process.env.VUE_APP_OAUTH_CLIENT_REDIRECT,
				response_type: 'code',
				scope: ''
			};
			
			window.location.href = `${process.env.VUE_APP_OAUTH_AUTH_SERVER}/oauth/authorize?${qs.stringify(queryString)}`;
		}

		const logout = () => {
			console.log('logout')
		}

		return {
			menuStructureMenu,
			isLoggedIn,
			user,
			redirect
		}
	}
})
</script>
