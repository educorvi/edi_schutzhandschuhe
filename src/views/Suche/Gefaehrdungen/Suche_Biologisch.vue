<template>
    <div>
        <Gef_Biologisch ref="bio"></Gef_Biologisch>
        <b-card class="mt-3" no-body bg-variant="light">
            <b-card-header v-b-toggle="'weitereGef'">Weitere Gefährdungen auswählen (optional)</b-card-header>
            <b-collapse id="weitereGef">
                <b-card-body>
                    <Gef_Chemisch keine="true"/>
                </b-card-body>
            </b-collapse>
        </b-card>

        <weitere-anforderungen/>

<!--        <md-steppers md-vertical>-->
<!--            <md-step md-label="Primäre Gefährdung">-->
<!--                <Gef_Biologisch ref="bio"></Gef_Biologisch>-->
<!--            </md-step>-->
<!--            <md-step md-label="Weitere Gefährdung" md-description="Optional">-->
<!--                <Gef_Chemisch keine="true"/>-->
<!--            </md-step>-->
<!--            <md-step md-label="Weitere Anforderungen" md-description="Optional">-->
<!--                <weitere-anforderungen></weitere-anforderungen>-->
<!--            </md-step>-->
<!--        </md-steppers>-->
        <b-button @click="suche"  class="float-right mt-2">Weiter</b-button>
    </div>
</template>

<script>
    import Gef_Biologisch from "@/components/Gefaehrdungen/Gef_Biologisch";
    import WeitereAnforderungen from "@/components/Gefaehrdungen/weitereAnforderungen";
    import Gef_Chemisch from "@/components/Gefaehrdungen/Gef_Chemisch";

    export default {
        name: "Suche_Biologisch",
        components: {Gef_Chemisch, WeitereAnforderungen, Gef_Biologisch},
        data() {
            return {
            }
        },
        methods: {
            suche() {
                this.$router.push("/suche/ergebnisse/"+JSON.stringify(this.getQuery({bio: this.$refs.bio.gewGefaehrdung})));
            },
            getQuery(params) {

                return {
                    // fullobjects: 1,
                    Biogefahr: params.bio,
                    portal_type: "Schutzhandschuh"
                };
            }
        },
    }
</script>

<style scoped>

</style>