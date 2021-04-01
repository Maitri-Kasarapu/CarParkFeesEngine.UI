<template>
    <v-container>
        <template v-if="!showSecondPage">
            <h2 class="m-0 p-0">Entry time</h2>
            <v-col>
                <v-row class="mt-6">
                    <p>Please enter your parking entry time</p>
                </v-row>
                <v-row>
                    <FieldPicker 
                        v-model="entryDate" 
                        type="date" 
                        label="Select a date" 
                    />
                </v-row>
                <v-row>
                    <FieldPicker 
                        v-model="entryTime" 
                        type="time" 
                        label="Select entry time" 
                    />
                </v-row>
            </v-col>  
        </template>
        <template v-else>
            <h2>Exit time</h2>
            <v-col>
                <v-row class="mt-6">
                    <p>Please enter your parking exit time</p>
                </v-row>
                <v-row>
                    <FieldPicker 
                        v-model="exitDate" 
                        type="date" 
                        label="Select a date" 
                    />
                </v-row>
                <v-row>
                    <FieldPicker 
                        v-model="exitTime" 
                        type="time" 
                        label="Select exit time" 
                    />
                </v-row>    
            </v-col>
        </template>
        
        <v-col>
            <v-row v-if="showSecondPage" justify="space-between" class="mt-6">
                <v-btn @click="showSecondPage = false">Back</v-btn>
                <v-btn :loading="loading" @click="calculateFee">Calculate fee</v-btn>
            </v-row>
            <v-row v-else justify="end" class="mt-6">
                <v-btn @click="showSecondPage = true">Next</v-btn>
            </v-row>
        </v-col>
    </v-container>
</template>

<script>
    import FieldPicker from './FieldPicker'

    export default {
        name: 'Form',

        components: {
            FieldPicker,
        },

        data () {
            return {
                entryDate: '2021-04-11',
                entryTime: '08:00',
                exitDate: '2021-04-11',
                exitTime: '17:30',
                showSecondPage: false,
                loading: false
            }
        },

        methods: {
            async calculateFee () {
                if (this.loading) {
                    return
                }

                this.loading = true
                await this.$store.dispatch('getParkingFee', {
                    entryDate: this.entryDate,
                    entryTime: this.entryTime,
                    exitDate: this.exitDate,
                    exitTime: this.exitTime
                })
                this.loading = false
            }
        }
    }
</script>
