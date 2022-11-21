<template>
	<form-container			
		title="Nuovo cliente"
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
			{
				label: 'Nuovo cliente',							
			}
		]"
	>
		<template v-slot:form-buttons-top>
			<div class="flex my-6 ml-1">
				<custom-button
					label="Salva"
					styleType="primary-outline"
					size="default"
				/>

				<div class="ml-5">
					<custom-button
						label="Chiudi"
						styleType="primary-outline"
						size="default"
					/>
				</div>
			</div>						
		</template>	

		<!-- Frm Content -->
		<template v-slot:form-content>
			<div class="grid grid-cols-12 gap-6">
				<div class="col-span-6">
					<generic-input
						type="text"
						placeholder="Inserisci codice cliente"
						label="Codice Cliente"	
						v-model="formData.customer_code"
					/>
				</div>
				<div class="col-span-6">
					<generic-input
						type="text"
						placeholder="Inserisci codice fatturazione cliente"
						label="Codice fatturazione cliente"	
						id="invoice_code"
						v-model="formData.invoice_code"
					/>
				</div>	

				<div class="col-span-12">
					<custom-text-area
						label="Descrizione"
						placeholder="Inserisci una descrizione"
						v-model="formData.description"
					/>
				</div>			

				<div class="col-span-12 flex">
					<div>
						<custom-checkbox
							label="Cliente attivo"
							v-model:checked="formData.is_active"	
						/>
					</div>
				</div>	
			</div>
		</template>
	</form-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
	FormContainer,
	CustomTextArea,
	GenericInput,
	CustomButton,
	CustomCheckbox
} from "gaspari-ui";

export default defineComponent({
    name:"ClientCreate",
	components: {
		FormContainer,
		GenericInput,
		CustomButton,
		CustomTextArea,
		CustomCheckbox
	},
    setup() {
		const formData = ref({
			customer_code: '',
			invoice_code: '',
			description: '',
			iva_regime_enum: '',
			invoice_type_enum: '',
			mastercount_id: null,
			paymenttype_id: null,
			costumertype_id: null,
			iva_code_id: null,
			is_active: true			
		});

        return {
			formData
		}
    }
})
</script>

<style>

</style>