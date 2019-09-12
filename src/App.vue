<template>
    <div id="app">
        <Headbar/>
        <div class="container-fluid root">
            <b-card no-body v-if="!loading">
                <b-card-header>
                    <h5 class="m-0">{{$route.name}}</h5>
                </b-card-header>
                <b-card-body>
                    <router-view/>
                </b-card-body>
            </b-card>


            <div class="text-center mt-5" v-else>
                <b-spinner variant="white"/>
            </div>
        </div>
    </div>
</template>

<style>

    .root {
        padding-top: 70px;
        padding-bottom: 10px;
    }

</style>
<script>
    import Headbar from "@/components/Navigation/Headbar";
    import {mapGetters} from "vuex";

    export default {
        components: {Headbar},
        computed: {
            ...mapGetters(["loading"])
        },
    }
</script>