<template>
    <div>
        <b-card bg-variant="light" class="mt-3" no-body>
            <b-card-header v-b-toggle="'weitereAnf'">Weitere Anforderungen auswählen (optional)</b-card-header>
            <b-collapse id="weitereAnf">
                <b-card-body>
                    <h6>Schichtstärke des Handschuhs</h6>
                    <p>Je nach Tätigkeit spielt die Schichtstärke des Handschuhs eine Rolle bei der Frage wie feinfühlig
                        gearbeitet werden muss. Bitte wählen Sie hier die gewünschte Schichtstärke des Handschuhs.</p>
                    <b-form-select :options="staerke" v-model="gewStaerke" value-field="constructor.name">
                        <template v-slot:first>
                            <option :value="null">Alle</option>
                        </template>
                    </b-form-select>
                    <md-divider class="mt-2 mb-2"/>
                    <h6>Länge der Stulpe</h6>
                    <p>Wenn bei der von Ihnen beschriebenen Tätigkeit die Länge der Stulpen ein Rolle spielt, können Sie
                        diese hier für Ihre Produktauswahl angeben.</p>
                    <b-form-select :options="laenge" v-model="gewLaenge" value-field="constructor.name">
                        <template v-slot:first>
                            <option :value="null">Alle</option>
                        </template>
                    </b-form-select>
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
</template>

<script>
    import {handschuhlaenge, handschuhstaerke} from "@/constants";

    export default {
        name: "weitereAnforderungen",
        data() {
            return {
                laenge: handschuhlaenge,
                staerke: handschuhstaerke,

                gewStaerke: null,
                gewLaenge: null
            }
        },
    }
</script>

<style scoped>

</style>