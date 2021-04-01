<template>
    <v-container v-if="parkingFee">
        <div v-if="feeDetails" style="background: #f5f5f5">
            <p v-if="feeDetails">Package Name : {{ feeDetails.packageName }}</p>
            <p>{{ text }}</p>
        </div>
    </v-container>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'FeeDisplay',

        computed: {
            ...mapGetters([
                'parkingFee',
                'feeDetails'
            ]),

            text () {
                return `Parking fee : ${ this.parkingFee }`
            }
        }
    }
</script>