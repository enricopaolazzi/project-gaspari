<template>
	<div>Singolo Client {{ id }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
    name: 'ClientView',
    props: {
        id: {
            type: [String, Number] as PropType<string | number>,
            required: true
        }
    },
    setup(props) {
        let ok = 'ok';

        return {
            ok
        }
    }
})
</script>