<template>
    <div>
        <p>Mit folgenden chemischen Gefahrstoffen ist diese Tätigkeit verbunden:</p>
        <chemischer-stoff-line :gefahrstoffe="chemischeStoffe"
                               :index="index"
                               :key="index"
                               :keine="keine"
                               :selected="selected[index]"
                               @remove="remove"
                               @selected="selectedChanged"
                               v-for="(sel, index) in selected">
        </chemischer-stoff-line>
        <b-button @click="add" class="w-100 mt-2">Hinzufügen</b-button>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import ChemischerStoffLine from "@/components/Gefaehrdungen/chemischerStoffLine";

    export default {
        name: "Gef_Chemisch",
        components: {ChemischerStoffLine},
        data() {
            return {
                selected: [null]
            }
        },
        computed: {
            ...mapGetters(["chemischeStoffe"])
        },
        methods: {
            add() {
                this.selected.push(null);
            },
            remove(i) {
                console.log("remove from " + i);
                console.log(this.selected.splice(i, 1))
            },
            selectedChanged(o) {
                this.selected[o.i] = o.id;
            }
        },
        props: ["keine"],
        mounted(){
            if (this.keine) {
                this.selected = []
            }
        }
    }
</script>

<style scoped>

</style>