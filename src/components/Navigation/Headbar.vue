<template>
    <b-navbar id="bar" toggleable="lg">
        <b-navbar-brand href="#">
            <img id="logo" src="../../assets/bg-etem.svg">
        </b-navbar-brand>

        <b-navbar-toggle target="collapse"></b-navbar-toggle>

        <b-collapse class="ml-n3 mr-n3" id="collapse" is-nav style="background: white; text-align: center">
            <b-navbar-nav class="ml-auto border-bottom border-dark">
                <b-nav-item to="/" exact-active-class="active">Home</b-nav-item>
                <b-nav-item to="/suche" active-class="active">Suchen</b-nav-item>
                <b-nav-item  to="/katalog" active-class="active">Katalog</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>

    export default {
        name: "Headbar",
    }
</script>

<style scoped>
    #logo {
        height: 40px;
    }

    #bar {
        position: fixed;
        /* fixing the position takes it out of html flow - knows
                          nothing about where to locate itself except by browser
                          coordinates */
        left: 0; /* top left corner should start at leftmost spot */
        top: 0; /* top left corner should start at topmost spot */
        width: 100vw; /* take up the full browser width */
        z-index: 200; /* high z index so other content scrolls underneath */
        background: white;
        height: 60px;
    }

    .active {
        color: lightblue;
    }
</style>