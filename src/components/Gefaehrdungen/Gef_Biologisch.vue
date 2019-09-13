<template>
    <b-form>
        <label>Mit folgenden biologischen Gefährdungen ist diese Tätigkeit verbunden:</label>
            <b-form-select :options="biologischeStoffe" v-model="gewGefaehrdung" text-field="title" value-field="query">
                <template v-slot:first>
                    <option :value="null" :disabled="!keine">Keine</option>
                </template>
            </b-form-select>
        </b-form>
</template>

<script>
    import {mapMutations, mapGetters} from "vuex";

    export default {
        name: "Gef_Biologisch",
        data() {
            return {
                gefaehrdungen: [],
                gewGefaehrdung: null
            }
        },
        props: ["keine"],
        computed: {
            ...mapGetters(["biologischeStoffe"]),
            buttonDisabled() {
                if (this.keine) {
                    return false;
                } else {
                    if (this.gewGefaehrdung) {
                        return false
                    }
                }

                return true;
            }
        },
        methods: {
            ...mapMutations(["setLoading"])
        }
    }
</script>

<style scoped>

</style>