<template>
    <div>
        <div class="text-center w-100 mb-3" v-if="loading">
            <b-spinner variant="dark"></b-spinner>
        </div>
        <div v-else>
            <b-card-group deck>
                <h3>{{ergebnisse.items_total}} Ergebnisse</h3>
                <b-row>
                    <b-col :key="ergebnis['@id']" v-for="ergebnis in ergebnisse.items">
                        <Ergebnis :ergebnis="ergebnis"></Ergebnis>
                    </b-col>
                </b-row>

            </b-card-group>
            <b-button-group class="w-100" v-if="ergebnisse.batching">
                <b-button @click="changeSite(ergebnisse.batching.prev)" v-if="ergebnisse.batching.prev">Vorherige
                    Seite
                </b-button>
                <b-button @click="changeSite(ergebnisse.batching.next)" v-if="ergebnisse.batching.next">Nächste Seite
                </b-button>
            </b-button-group>
        </div>
    </div>
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
        methods: {
            changeSite(url) {
                this.loading = true;
                axios.get(url, {
                    headers: {
                        Accept: "application/json"
                    }
                }).then(res => {
                    this.ergebnisse = res.data;
                    this.loading = false;
                });
            }
        },
        mounted() {
            const baseURL = "https://praevention-bgetem.bg-kooperation.de/hand-und-hautschutz/produkte/schutzhandschuhe/@search";
            axios.get(baseURL, {
                headers: {
                    Accept: "application/json"
                },
                params: JSON.parse(this.$route.params.query)
            }).then(res => {
                this.ergebnisse = res.data;
                this.loading = false;
            })
        }
    }
</script>

<style scoped>

</style>