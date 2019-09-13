<template>
    <div class="text-center w-100" v-if="loading">
        <b-spinner variant="dark"></b-spinner>
    </div>
    <b-card-group deck v-else>
        <b-row>
            <b-col v-for="ergebnis in ergebnisse" :key="ergebnis['@id']">
                <Ergebnis  :ergebnis="ergebnis" ></Ergebnis>
            </b-col>
        </b-row>

    </b-card-group>
</template>

<script>
    import Ergebnis from "@/components/Ergebnis";
    import axios from "axios"

    export default {
        name: "Ergebnisse",
        components: {Ergebnis},
        data() {
            return {
                loading: true,
                ergebnisse: []
            }
        },
        mounted() {
            axios.get(this.$route.params.query.replace(/§/g, "/"), {
                headers: {
                    Accept: "application/json"
                }
            }).then(res => {
                this.ergebnisse = res.data.items;
                this.loading = false;
            })
        }
    }
</script>

<style scoped>

</style>