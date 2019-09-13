<template>
    <div class="text-center w-100" v-if="loading">
        <b-spinner variant="dark"></b-spinner>
    </div>
    <div v-else>
        <div class="w-100 text-center">
            <h4 style="color: #014B94">{{handschuh.title}}</h4>
        </div>
       <b-row align-v="center">
           <b-col>
                <b-img class="w-100" :src="handschuh.bild.download"></b-img>
           </b-col>
           <b-col>
                <div class="rounded-top border border-primary pl-1 pt-1" style="background-color: #e2e2e2">
                    <p class="mb-1"><b>Hersteller:</b><br>{{handschuh.hersteller.title}}</p>
                </div>
               <div class="border border-top-0 border-primary pl-1 pt-1" style="background-color: #e2e2e2">
                   <p class="mb-1"><b>Außenmaterial:</b><span v-for="(material, index) in handschuh.material_aussen" :key="'a_'+index"><br>{{material}}</span> </p>
                </div>
              <div class="border border-top-0 border-primary pl-1 pt-1" style="background-color: #e2e2e2">
                   <p class="mb-1"><b>Innenmaterial:</b><span v-for="(material, index)  in handschuh.material_innen" :key="'i_'+index"><br>{{material}}</span> </p>
                </div>
               <div class="border border-top-0 border-primary pl-1 pt-1" style="background-color: #e2e2e2">
                   <p class="mb-1"><b>Profilierung:</b><span v-for="(profil, index)  in handschuh.profilierung" :key="'p_'+index"><br>{{profil}}</span> </p>
                </div>
               <div class="border border-top-0 border-primary pl-1 pt-1" style="background-color: #e2e2e2">
                    <p class="mb-1"><b>Schichtstärke:</b><br>
                        <span v-if="handschuh.schichtstaerke_min">{{handschuh.schichtstaerke_min}}mm</span>
                        <span v-if="handschuh.schichtstaerke_min && handschuh.schichtstaerke_max"> - </span>
                        <span v-if="handschuh.schichtstaerke_max">{{handschuh.schichtstaerke_max}}mm</span>
                    </p>
                </div>
               <div class="rounded-bottom border border-top-0 border-primary pl-1 pt-1" style="background-color: #e2e2e2">
                    <p class="mb-1"><b>Gesamtlänge:</b><br>
                        <span v-if="handschuh.gesamtlange_von">{{handschuh.gesamtlange_von}}mm</span>
                        <span v-if="handschuh.gesamtlange_von && handschuh.gesamtlange_bis"> - </span>
                        <span v-if="handschuh.gesamtlange_bis">{{handschuh.gesamtlange_bis}}mm</span>
                    </p>
                </div>
           </b-col>
       </b-row>
<!--        <b-tabs>-->
<!--            <b-tab title="Gefahrstoffschutz"-->
<!--        </b-tabs>-->
<!--        @TODO-->
        <b-button @click="$router.go(-1)" class="float-left">Zurück</b-button>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Handschuh",
        data() {
            return {
                handschuh: {},
                loading: true
            }
        },
        computed: {
            id() {
                return this.$route.params.id.replace(/§/g, "/");
            }
        },
        mounted() {
            axios.get(this.id, {
                headers: {
                    Accept: "application/json"
                }
            }).then(res => {
                this.handschuh = res.data;
                this.loading = false;
            })

            // axios.get("/test/handschuh.json").then(res => {
            //     this.handschuh = res.data;
            //     this.loading = false;
            // })
        }
    }
</script>

<style scoped>

</style>