<template>	
	<layout-base 
		:menuStructure="menuStructureMenu"
	>  
		<template v-slot:layout-content>
			<scroll-to-top />
			<router-view/>
		</template>
	</layout-base>
</template>

<script lang="ts">
import 'gaspari-ui/dist/style.css';
import 'gaspari-ui/dist/output.css';
import menuStructure from './menuStructure';

import { defineComponent } from "vue";
import { LayoutBase, ScrollToTop } from "gaspari-ui";

export default defineComponent({
	name: 'App',
	components: {
		LayoutBase,
		ScrollToTop
	},
	setup() {
		const menuStructureMenu = menuStructure;

		return {
			menuStructureMenu
		}
	}
})
</script>
