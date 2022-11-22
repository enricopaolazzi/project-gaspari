<template>
    Edit
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
	name: 'AgentEdit',	
    props: {
        id: {
            type: [String, Number] as PropType<string | number>
        }
    }
})
</script>