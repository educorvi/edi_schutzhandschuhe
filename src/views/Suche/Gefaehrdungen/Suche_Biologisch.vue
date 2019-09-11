<template>
    <div>
        <Gef_Biologisch ref="bio"></Gef_Biologisch>
        <b-card class="mt-3" no-body bg-variant="light">
            <b-card-header v-b-toggle="'weitereGef'">Weitere Gefährdungen auswählen (optional)</b-card-header>
            <b-collapse id="weitereGef">
                <b-card-body>
                    <Gef_Chemisch keine="true"/>
                    <md-divider class="mt-2 mb-2"/>
                    <b-checkbox v-model="mechanisch">Mechanische Gefährdung (z. B. Arbeit mit spitzen oder scharfkantigen Gegenständen, Stosseinwirkung)</b-checkbox>
                </b-card-body>
            </b-collapse>
        </b-card>

        <weitere-anforderungen/>
        <b-button class="float-right mt-2">Weiter</b-button>
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
                mechanisch: false
            }
        },
    }
</script>

<style scoped>

</style>