<template>
    <div>
        <b-select :options="gefahrstoffe" class="float-left select mt-2" text-field="title" v-model="selected" @input="$emit('selected', {i: index, id: selected})"
                  value-field="@id"/>
        <b-button class="float-right button mt-2" v-if="index !== 0 || keine" variant="danger" @click="$emit('remove', index)">-</b-button>
    </div>
</template>

<script>
    export default {
        name: "chemischerStoffLine",
        data() {
            return {
                selected: null
            }
        },
        props: ["gefahrstoffe", "index", "keine"]
    }
</script>

<style scoped>
    .select {
        width: 85%;
    }

    .button {
        width: 10%;

    }
</style>