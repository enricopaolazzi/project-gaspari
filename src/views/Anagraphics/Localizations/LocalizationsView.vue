<template>
	<div class="mb-2">
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
					label: 'Localizzazioni',	
					path: {
						name: 'anagraphics.localizations'
					}						
				},
			]"
		/>
	</div>

	<div class="mt-8">
		<h1 class="font-semibold text-xl uppercase mb-6">Localizzazioni</h1>

		<div class="grid grid-cols-12 gap-6">
			<router-link :to="{ name: 'anagraphics.localizations.cities.index' }" class="hover:shadow-lg transition col-span-3 bg-white rounded-md shadow px-8 py-16 flex items-center justify-center uppercase font-regular text-xl cursor-pointer">
				<div class="flex flex-col items-center">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-10 h-10">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
					</svg>

					<div class="mt-4">
						Città
					</div>
				</div>
			</router-link>

			<router-link :to="{ name: 'anagraphics.localizations.regions.index' }" class="hover:shadow-lg transition col-span-3 bg-white rounded-md shadow px-8 py-16 flex items-center justify-center uppercase font-regular text-xl cursor-pointer">
				<div class="flex flex-col items-center">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-10 h-10">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
					</svg>

					<div class="mt-4">
						Regioni
					</div>
				</div>
			</router-link>

			<router-link :to="{ name: 'anagraphics.localizations.countries.index' }" class="hover:shadow-lg transition col-span-3 bg-white rounded-md shadow px-8 py-16 flex items-center justify-center uppercase font-regular text-xl cursor-pointer">
				<div class="flex flex-col items-center">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-10 h-10">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
					</svg>

					<div class="mt-4">
						Nazioni
					</div>
				</div>
			</router-link>

			<router-link :to="{ name: 'anagraphics.localizations.provinces.index' }" class="hover:shadow-lg transition col-span-3 bg-white rounded-md shadow px-8 py-16 flex items-center justify-center uppercase font-regular text-xl cursor-pointer">
				<div class="flex flex-col items-center">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-10 h-10">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
					</svg>

					<div class="mt-4">
						Province
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Breadcrumbs } from "gaspari-ui"

export default defineComponent({
	name: 'LocalizationsView',	
	components: {
		Breadcrumbs
	}
})
</script>