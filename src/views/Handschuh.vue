<template>
    <div class="text-center w-100" v-if="loading">
        <b-spinner variant="dark"></b-spinner>
    </div>
    <div v-else>
        <div class="w-100 text-center">
            <h4>{{handschuh.title}}</h4>
        </div>
       <b-row>
           <b-col>
                <b-img class="w-100 embed-responsive-16by9" :src="handschuh.bild.download"></b-img>
           </b-col>
           <b-col>
                <div class="rounded-top border border-dark pl-1 pt-1" style="border-color: black; background-color: #e2e2e2">
                    <p class="mb-1"><b>Hersteller:</b><br>{{handschuh.hersteller.title}}</p>
                </div>
               <div class="border border-top-0 border-dark pl-1 pt-1" style="border-color: black; background-color: #e2e2e2">
                    <p class="mb-1"><b>Außenmaterial:</b><br>{{handschuh.hersteller.title}}</p>
                </div>
           </b-col>
       </b-row>
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
            // axios.get(this.id, {
            //     withCredentials: true,
            //     headers: {
            //         Accept: "application/json"
            //     },
            //     auth: {
            //         username: 'bgetem',
            //         password: 'rhein'
            //     }
            // }).then(res => {
            //     this.handschuh = res.data;
            //     this.loading = false;
            // })

            axios.get("/test/handschuh.json").then(res => {
                this.handschuh = res.data;
                this.loading = false;
            })
        }
    }
</script>

<style scoped>

</style>