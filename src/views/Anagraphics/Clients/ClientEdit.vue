<template>
	<div>Singolo Client {{ id }}: ok!</div>

    <form-container
        :path_breadcrumbs="[
            {
                label: 'Home',
                path: '/'
            },
            {
                label: 'Form',							
            }
        ]"					
    >		
        <template v-slot:form-buttons-top>
            <div class="flex mb-10 mt-6">
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
        <template v-slot:form-content>
            
            <h1>{{ name }}</h1>

            <generic-input
                type="text"
                placeholder="Aggiungi un placeholder"
                label="Lorem ipsum"	
                v-model="name"	
            ></generic-input>	

            <form-separator />

            <generic-input
                type="number"
                placeholder="Aggiungi prezzo"
                label="Prezzo"	
                max="100"	
            >
                <template v-slot:prepend>
                    <div class="slot-price">€</div>
                </template>
            </generic-input>

            <generic-input
                type="date"
                placeholder="Aggiungi un placeholder"
                label="Lorem ipsum"	
                v-model="name"	
            ></generic-input>	

            <custom-text-area
                label="ratataaa"
                placeholder="Aldo un placeholdert"
                disabled			
            />

            <div style="padding: 8px">			
                <custom-checkbox
                    label="select"
                    v-model:checked="selected"	
                    :disabled="true"
                />				
            </div>	

            <div>{{selected}}</div>				


            <div style="padding: 8px">			
                <custom-multi-checkbox
                    :options="options"
                    v-model:value="heroes"				
                />
            </div>	

            <div style="padding: 8px">			
                <custom-radio-group
                    :options="[
                        {
                            id: 'input_444',
                            label: 'Radio 1',
                            value: 'radio_1',
                            name: 'radio_group',						
                            disabled: true
                        },
                        {
                            id: 'input_445',
                            label: 'Radio 2',
                            value: 'radio_2',
                            name: 'radio_group',
                        }
                    ]"
                    v-model:value="selectedRadioValue"
                />

                <div>SelectedRadio: {{ selectedRadioValue }}</div>
            </div>	

            <div style="padding: 8px">			
                <custom-select
                    name="custom_select"
                    label="Seleziona"
                    :options="[
                        {
                            value: 1,
                            label: 'Giovanni'
                        },
                        {
                            value: 2,
                            label: 'Mario'
                        },
                        {
                            value: 3,
                            label: 'Andrea'
                        },
                    ]"
                    v-model:value="selectedOption"
                />									
            </div>	

            <div style="padding: 8px">			
                <custom-multi-select
                    label="Seleziona"
                    placeholder="Seleziona opzione"
                    :options="[
                        {
                            label: 'Opzione 1',
                            value: 1
                        },
                        {
                            label: 'Opzione 2',
                            value: 2
                        },
                        {
                            label: 'Opzione 3',
                            value: 3
                        },
                    ]"
                    v-model:selectedOptions="selectedMultiSelectOptions"
                />			

                <div>{{ selectedMultiSelectOptions }}</div>									
            </div>

            <div style="padding: 8px">
                <custom-multi-select-async
                    label="Seleziona"
                    placeholder="Seleziona opzione"
                    v-model:selectedOptions="selectedMultiSelectAsyncOptions"
                    optionsSearchRoute="http://localhost:8000/data"
                />			

                <div>{{ selectedMultiSelectAsyncOptions }}</div>
            </div>

            <div style="padding: 8px;">
                <custom-file-upload
                    label="File upload"
                    v-model:file="selectedFile"
                />		

                <div v-if="selectedFile">
                    {{ selectedFile.name }}
                </div>
            </div>

            <div style="padding: 8px;">
                <custom-multiple-file-upload
                    label="Multiple File upload"
                    routeGetFiles="blabla"
                    routePostFiles="blabla"
                    routeDeleteFile="blabla"
                />

                <div v-for="(file, index) in selectedFiles" :key="index">
                    {{ file[1].name }}
                </div>
            </div>

            <custom-modal
                :isOpen="isModalOpen"
                modalTitle="Inserisci nuovo"
                @closeModal="openCloseModal"
            >
                <template v-slot:modal-body>
                    Lorem ipsuctetur adipisicing elit. Quia excepturi voluptatum corrupti libero officia sed a officiis, accusamus ullam sunt magnam recusandae, repudiandae reprehenderit accusantium, autem eum sint unde quasi?
                </template>

                <template v-slot:modal-footer>
                    <div style="margin-right: 15px;">
                        <custom-button
                            label="Chiudi"
                            styleType="secondary-outline"
                            @onClick="openCloseModal"
                        />
                    </div>
                    <custom-button
                        label="Inserisci"
                        styleType="primary"
                        @onClick="test"
                    />
                </template>
            </custom-modal>

            <div style="padding: 8px;">
                <custom-button
                    label="Apri modale"
                    @onClick="openCloseModal"
                />
            </div>

        </template>		
        <template v-slot:form-buttons-bottom>
            <div class="flex my-10">
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
    </form-container>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { 
    GenericInput,
    CustomTextArea,
    CustomCheckbox,
    CustomMultiCheckbox,
    CustomRadioGroup,
    CustomSelect,
    CustomMultiSelect,
    CustomMultiSelectAsync,
    CustomFileUpload,
    CustomMultipleFileUpload,
    CustomModal,
    CustomButton,
    FormContainer,
    FormSeparator
} from "gaspari-ui";
import MultiCheckboxOptions from "gaspari-ui/dist/types/types/MultiCheckboxOptions";
import SelectOptions from "gaspari-ui/dist/types/types/SelectOptions";


export default defineComponent({
    name: 'ClientEdit',
    components: {
        GenericInput,
        CustomTextArea,
        CustomCheckbox,
        CustomMultiCheckbox,
        CustomRadioGroup,
        CustomSelect,
        CustomMultiSelect,
        CustomMultiSelectAsync,
        CustomFileUpload,
        CustomMultipleFileUpload,
        CustomModal,
        CustomButton,
        FormContainer,
        FormSeparator
    },
    props: {
        id: {
            type: [String, Number] as PropType<string | number>,
            required: true
        }
    },
    setup() {
        const name = ref<string>('Gianni');		
		let selectedValues = ref<string[]>(['Angular']);
		const selected = ref<boolean>(true);
		const heroes = ref<string[]>(['Luther','Ben', 'Vanya']);
		const options = ref<MultiCheckboxOptions[]>([
			{ label: "Luther", id: 'Luther' },
			{ label: "Diego", id: 2 },
			{ label: "Allison", id: 3 },
			{ label: "Klaus", id: 4 },
			{ label: "Five", id: 5 },
			{ label: "Ben", id: 'Ben' },
			{ label: "Vanya", id: 'Vanya' },
		]);
		const selectedRadioValue = ref<number | string>('radio_1');
		const selectedOption = ref<number | string>(1);
		const selectedMultiSelectOptions = ref<Array<string> | Array<number>>([1, 2]);
		const selectedMultiSelectAsyncOptions = ref<Array<SelectOptions>>([
			{
				label: 'Opzione 1',
				value: 1
			},
			{
				label: 'Opzione 2',
				value: 2
			},
			{
				label: 'Opzione 3',
				value: 3
			},
		]);
		const test = (e : any) => {
			console.log('eeeee', e)
		}
		const selectedFile = ref<File | null>(null);
		const selectedFiles = ref<FormData | []>([]);
		const isModalOpen = ref<boolean>(false);
		const openCloseModal = () => {
			isModalOpen.value = !isModalOpen.value;
		}
		
		return { 
			name, 
			selectedValues, 
			selected, 
			test, 
			heroes,
			options, 
			selectedRadioValue, 
			selectedOption, 
			selectedMultiSelectOptions,
			selectedMultiSelectAsyncOptions,
			selectedFile,
			selectedFiles,
			isModalOpen,
			openCloseModal,
		}
    }
})
</script>