<template>
    <div>
        <b-form>
            <b-form-select :options="auswahl" v-model="primaereGeaehrdung"></b-form-select>
            <b-button @click="submit" class="float-right mt-2">Weiter</b-button>
        </b-form>
    </div>
</template>

<script>
    import {gefaehrdungen} from "@/constants";
    import router from "@/router"

    export default {
        name: "Suche",
        data() {
            return {
                primaereGeaehrdung: 0,
                auswahl: gefaehrdungen
            }
        },
        methods: {
            submit() {
                router.push("/suche/" + this.primaereGeaehrdung);
            }
        },
    }
</script>

<style scoped>

</style>