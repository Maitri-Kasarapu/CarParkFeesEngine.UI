<template>
    <div class="field-picker" @click="onClick">
        <v-text-field 
            v-model="value" 
            :label="label"
        />

        <div class="field-picker__popup" v-if="showPicker">
            <div class="field-picker__popup--close" @click="onClosePicker">
                <h5>Close</h5>
            </div>
            <v-date-picker
                v-if="type === 'date'"
                :value="value"
                @input="onInput"
            />

            <v-time-picker
                v-else
                :value="value"
                @input="onInput"
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FieldPicker',

        props: {
            'type': {
                type: String,
                default: 'date',
                validator: (type) => {
                    const VALID_TYPES = [ 'date', 'time' ]

                    return VALID_TYPES.includes(type)
                }
            },
            'label': {
                type: String,
                default: 'Select'
            },
            'value': {
                type: String
            }
        },

        data () {
            return {
                showPicker: false
            }
        },

        methods: {
            onClick () {
                this.showPicker = true
            },

            onInput (value) {
                this.$emit('input', value)
            },

            onClosePicker () {
                // To run after the "onClick" method
                setTimeout(() => {
                    this.showPicker = false
                }, 0)
            }
        }
    }
</script>

<style scoped>
    .field-picker {
        position: relative;
        width: 100%;
    }

    .field-picker__popup {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1;
    }

    .field-picker__popup--close {
        position: absolute;
        top: 8px;
        right: 12px;
        z-index: 2;
        color: white;
        cursor: pointer;
    }
</style>