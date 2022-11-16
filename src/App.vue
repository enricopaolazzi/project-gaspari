<template>
	<layout-base 
		:menuStructure="menuStructureMenu"
	>  
		<template v-slot:content>
			<router-view/>
		</template>
	</layout-base>
</template>

<script lang="ts">
import 'gaspari-ui/dist/style.css';
import 'gaspari-ui/dist/output.css';
import menuStructure from './menuStructure';

import { defineComponent } from "vue";
import { LayoutBase } from "gaspari-ui";

export default defineComponent({
	name: 'App',
	components: {
		LayoutBase
	},
	setup() {
		const menuStructureMenu = menuStructure;

		return {
			menuStructureMenu
		}
	}
})
</script>
