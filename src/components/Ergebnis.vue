<template>
    <b-card class="text-center mt-2" no-body style="width: fit-content; height: fit-content">
        <b-card-header>
            <p class="mb-n2" style="color: #014B94">
                <b>{{ergebnis.title}}</b>
                <br>({{ergebnis.hersteller.title}})
            </p>
        </b-card-header>

        <b-card-body>
            <b-row align-v="center">
                <b-col>
                    <div class="ergebnis_card">
                        <b-img-lazy alt="Handschuh" src="https://picsum.photos/90/128"></b-img-lazy>
                    </div>
                </b-col>
                <b-col>
                    <p>Zusätzliche Daten können hier angezeigt werden</p>
                </b-col>
            </b-row>
        </b-card-body>


    </b-card>
</template>

<script>

    export default {
        name: "Ergebnis",
        props: ["ergebnis"],
        data() {
            return {
                loading: true,

            }
        },
        mounted() {
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