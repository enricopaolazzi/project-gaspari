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
		<filterable-modal
			:isOpen="isOpenModalFilter"
			@closeModal="openCloseModalFilter"
			@filter="handleUpdatePaginationWithFilter"
			:filterables="filterables"
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
					<div class="mr-5">
						<custom-search-input 
							@onSearch="handleUpdatePaginationWithSearch"
						/>
					</div>

					<div @click="openCloseModalFilter" class="flex items-center cursor-pointer">
						<div class="mr-2 bg-textGrey h-9 w-9 rounded-full flex items-center justify-center hover:bg-customBlack transition">							
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" class="w-5 h-5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
							</svg>

						</div>
						<div class="font-medium text-customBlack">
							Filtra
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
					name="geographical_division"
				>
					Divisione Geografica
				</th>				
				<th name="country_name">
					Nazione
				</th>	
				<th class="max-w-xs">Province</th>							
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
					<td class="max-w-xs">						
						{{ getProvinces(item.properties.provinces.data) }}
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
    FilterableModal, 
	CustomSearchInput,
	usePagination,
	useSidebar
} from "gaspari-ui";

export default defineComponent({
    name: 'RegionIndex',
    components: {
		Breadcrumbs,
		CustomTable,
		CustomSidebar,
		FilterableModal,
		CustomSearchInput
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
			filterables,
			loadingPagination,
			setFilterParams,
			setPaginationOrder,
			setPaginationOrderClasses,
			setSearchQuery,
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

		const handleUpdatePaginationWithFilter = (search : any) => {
			setFilterParams(search);
			handleUpdatePagination({
				perPage: perPage.value,
				currentPage: currentPage.value
			})
		}

		const handleUpdatePaginationWithSearch = (searchQuery : string) => {
			setSearchQuery(searchQuery);
			handleUpdatePagination({
				perPage: perPage.value,
				currentPage: currentPage.value
			})
		}

		const isOpenModalFilter = ref<boolean>(false);
		const openCloseModalFilter = () => {
			isOpenModalFilter.value = !isOpenModalFilter.value;
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

		const getProvinces = (provinces : Array<{
			id: number,
			name: string
		}>) => {
			let stringProvinces = '';
			provinces.forEach((province, index) => {
				stringProvinces += province.name.trim();

				if(index < provinces.length - 1) {
					stringProvinces += ', ';
				}
			});

			return stringProvinces;
		}
						
		return {	
			baseDomain,

			// From usePagination
			results,
			currentPage,
			perPage,
			total,
			from,
			filterables,
			loadingPagination,
			setPaginationOrderClasses,
            
			// Internals for pagination
			handleUpdatePagination,
			handleUpdatePaginationWithOrder,
			handleUpdatePaginationWithFilter,
			handleUpdatePaginationWithSearch,

			// For opening modal search
			isOpenModalFilter,			
			openCloseModalFilter,		

			// From useSidebar			
			closeSidebar,
			activeRecordIndex,
			isOpenSidebar,
			isLoadingSidebar,
			sidebarData,
			
			// Internals for sidebar
			handleOpenDetails,	
			
			getProvinces
		}
	}
})
</script>