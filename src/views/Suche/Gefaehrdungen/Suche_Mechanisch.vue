<template>
    <div>
        <b-form>
            <h6 class="mb-1">Abriebfestigkeit</h6>
            <b-form-select :options="options" v-model="abrieb" value="null"/>

            <h6 class="mt-3 mb-0">Schnittfestigkeit (Coup-Test)</h6>
            <p class="mb-1 text-muted">Arbeiten mit scharfen, aber leichten Gegenständen</p>
            <b-form-select :options="options" v-model="schnittCOUP" value="null"/>

            <h6 class="mt-3">Reißfestigkeit</h6>
            <b-form-select :options="options" v-model="reiss" value="null"/>

            <h6 class="mt-3">Durchstichfestigkeit</h6>
            <b-form-select :options="options" v-model="durchstich" value="null"/>

            <h6 class="mt-3 mb-0">Schnittfestigkeit (ISO-Test)</h6>
            <p class="mb-1 text-muted">Arbeiten mit scharfen Gegenständen unter unterschiedlich großer Krafteinwirkung
                oder stoßartigen
                einmaligen Gefahren.</p>
            <b-form-select :options="options" v-model="schnittISO" value="null"/>

            <b-checkbox class="mt-3" v-model="stoesse"><b>Schutz vor Stößen</b></b-checkbox>
        </b-form>
        <b-button @click="suche" class="float-right mt-2">Weiter</b-button>
    </div>
</template>

<script>
    export default {
        name: "Suche_Mechanisch",
        data() {
            return {
                abrieb: null,
                schnittCOUP: null,
                reiss: null,
                durchstich: null,
                schnittISO: null,
                stoesse: false,


                options: [
                    {
                        value: null,
                        text: "nicht relevant"
                    },
                    {
                        value: 0,
                        text: "gering"
                    },
                    {
                        value: 1,
                        text: "mittel"
                    },
                    {
                        value: 2,
                        text: "hoch"
                    },
                ]
            }
        },
        methods: {
            suche() {
                this.$router.push("/suche/ergebnisse/test§ergebnisse.json")
            }
        },
    }
</script>

<style scoped>
    h6 {
        font-weight: bold;
    }
</style>