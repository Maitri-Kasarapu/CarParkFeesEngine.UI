<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <v-row justify="center">
                <h2>Parking fee calculator</h2>
            </v-row>
        </v-app-bar>

        <v-main>
            <div style="max-width: 500px; margin: 0 auto;">
                <Form />
                <FeeDisplay />
            </div>
        </v-main>
    </v-app>
</template>

<script>
    import Form from './components/Form';
    import FeeDisplay from './components/FeeDisplay'

    export default {
        name: 'App',

        components: {
            Form,
            FeeDisplay
        }
    };
</script>