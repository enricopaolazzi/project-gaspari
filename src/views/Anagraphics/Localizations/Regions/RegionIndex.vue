<template>
    <div>
		<div class="mb-8">
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
					{
						label: 'Regioni',	
						path: {
							name: 'anagraphics.localizations.regions.index'
						}
					},
				]"
			/>
		</div>

		<custom-sidebar 
			@close-sidebar="closeSidebar" 			
			:isOpen="isOpenSidebar"
			:loading="isLoadingSidebar"
			:title="sidebarData?.properties.name"
		>						
			<template v-slot:sidebar-content>				
				<div v-if="sidebarData !== null">
					<div class="mb-2"><span class="font-semibold">Divisione geografica:</span> {{ sidebarData.properties.geographical_division }}</div>									
					<div class="mb-2"><span class="font-semibold">Nazione:</span> {{ sidebarData.properties.country.name }}</div>									
				</div>
				<div v-else>Si è verificato un problema...</div>
			</template>
		</custom-sidebar>
		<searchable-modal
			:isOpen="isOpenModalSearch"
			@closeModal="openCloseModalSearch"
			@search="handleUpdatePaginationWithSearch"
			:searchables="searchables"
			:baseApiPath="baseDomain"
		/>
		<custom-table
			:total="total"
			:perPage="perPage"
			:currentPage="currentPage"
			:from="from"
			title="Regioni"
			@changed-pagination="handleUpdatePagination"
			:loading="loadingPagination"
		>
			<template v-slot:filters>
				<div class="flex">					
					<div @click="openCloseModalSearch" class="flex items-center cursor-pointer">
						<div class="mr-2 bg-textGrey h-8 w-8 rounded-full flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#FFFFFF" class="w-5 h-5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
							</svg>
						</div>
						<div class="font-medium text-customBlack">
							Cerca
						</div>
					</div>					
				</div>
			</template>
			<template v-slot:t-head>
				<th 
					@click="handleUpdatePaginationWithOrder('name')" 
					class="cursor-pointer ordered"
					:class="setPaginationOrderClasses('name')"
				>
					Nome
				</th>
				<th 
					@click="handleUpdatePaginationWithOrder('geographical_division')" 
					class="cursor-pointer ordered"
					:class="setPaginationOrderClasses('geographical_division')"
				>
					Divisione Geografica
				</th>				
				<th name="country_name">
					Nazione
				</th>								
			</template>
			<template v-slot:t-body>
				<tr v-for="(item, index) in results" :key="index" @click="handleOpenDetails(item.id, index)">
					<td class="relative" :class="{recordActive : index === activeRecordIndex}">
						{{ item.properties.name }}
					</td>
					<td>
						{{ item.properties.geographical_division }}
					</td>
					<td>
						{{ item.properties.country_name }}
					</td>									
				</tr>
			</template>
		</custom-table>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, inject  } from "vue";
import { 
	Breadcrumbs,
    CustomTable, 
    CustomSidebar, 
    SearchableModal, 
	usePagination,
	useSidebar
} from "gaspari-ui";

export default defineComponent({
    name: 'RegionIndex',
    components: {
		Breadcrumbs,
		CustomTable,
		CustomSidebar,
		SearchableModal,
	},
	setup() {
		const baseApiPath = inject('$baseApiPath');
		const baseDomain = inject('$baseDomain');

		// Gestione paginazione tabella
		const { 
			results,
			currentPage,
			perPage,
			total,
			from,
			searchables,
			loadingPagination,
			setSearchParams,
			setPaginationOrder,
			setPaginationOrderClasses,
			updatePagination,
		} = usePagination();

		const handleUpdatePagination = async (e : any) => {
			await updatePagination(baseApiPath + '/regions', e)
		};	

		onMounted(async () => {
			await handleUpdatePagination({
				perPage: 25,
				currentPage: 1
			})
		})
				
		const handleUpdatePaginationWithOrder = (columnName : string) => {
			setPaginationOrder(columnName);
			handleUpdatePagination({
				perPage: perPage.value,
				currentPage: currentPage.value
			})
		}

		const handleUpdatePaginationWithSearch = (search : any) => {
			setSearchParams(search);
			handleUpdatePagination({
				perPage: perPage.value,
				currentPage: currentPage.value
			})
		}

		const isOpenModalSearch = ref<boolean>(false);
		const openCloseModalSearch = () => {
			isOpenModalSearch.value = !isOpenModalSearch.value;
		}

		// Gestione Sidebar
		const {
			openDetails,
			closeSidebar,
			activeRecordIndex,
			isOpenSidebar,
			isLoadingSidebar,
			sidebarData
		} = useSidebar();
		
		const handleOpenDetails = async (id: number, index: number) => {
			await openDetails(baseApiPath + '/regions/' + id, index)
		}
						
		return {	
			baseDomain,

			// From usePagination
			results,
			currentPage,
			perPage,
			total,
			from,
			searchables,
			loadingPagination,
			setPaginationOrderClasses,
            
			// Internals for pagination
			handleUpdatePagination,
			handleUpdatePaginationWithOrder,
			handleUpdatePaginationWithSearch,

			// For opening modal search
			isOpenModalSearch,			
			openCloseModalSearch,		

			// From useSidebar			
			closeSidebar,
			activeRecordIndex,
			isOpenSidebar,
			isLoadingSidebar,
			sidebarData,
			
			// Internals for sidebar
			handleOpenDetails,
		}
	}
})
</script>