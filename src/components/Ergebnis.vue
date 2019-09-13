<template>
    <b-card @click="showHandschuh" class="text-center mt-2" no-body style="width: fit-content; height: fit-content">
        <div v-if="!loading">
            <b-card-header>
            <p class="mb-n2" style="color: #014B94">
                <b>{{ergebnis.title}}</b>
                <br>({{ergebnis_long.hersteller.title}})
            </p>
        </b-card-header>

        <b-card-body>
            <b-row align-v="center">
                <b-col>
                    <div class="ergebnis_card">
                        <b-img-lazy v-if="ergebnis_long.bild" alt="Handschuh" :src="ergebnis_long.bild.scales.thumb.download"></b-img-lazy>
                    </div>
                </b-col>
                <b-col>
                    <p>Zusätzliche Daten können hier angezeigt werden</p>
                </b-col>
            </b-row>
        </b-card-body>
        </div>

        <div class="w-100 mt-2 text-center" v-else>
            <b-spinner variant="dark"></b-spinner>
        </div>


    </b-card>
</template>

<script>
    import axios from "axios"

    export default {
        name: "Ergebnis",
        props: ["ergebnis"],
        data() {
            return {
                loading: true,
                ergebnis_long: {}
            }
        },
        methods: {
            showHandschuh() {
                this.$router.push("/handschuh/" + this.ergebnis["@id"].replace(/\//g, "§"));
            }
        },
        mounted() {
            axios.get(this.ergebnis["@id"], {
                headers: {
                    Accept: "application/json"
                }
            }).then(res => {
                this.ergebnis_long = res.data;
                this.loading = false;
            })
        }
    }
</script>

<style scoped>
    .ergebnis_card {
        width: 128px;
        height: 128px;
    }

    .card {
        cursor: pointer;
        transition: background-color .3s cubic-bezier(.4, 0, .2, 1), box-shadow .4s cubic-bezier(.25, .8, .25, 1);
        will-change: background-color, box-shadow
    }

    .card:hover {
        z-index: 2;
        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12)
    }
</style>