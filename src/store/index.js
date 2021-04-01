import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        fee: null
    },
    

    mutations: {
        setParkingFee (state, feesDTo) {
            state.fee = feesDTo;
        }
    },

    getters: {
        parkingFee (state) {
            return state.fee ? `$${ state.fee.totalPrice.toFixed(2) }` : '' // outputs example "$14.00"
        },
        feeDetails (state) {
            return state.fee;
        }
    },

    actions: {
        getParkingFee (context, { entryDate, entryTime, exitDate, exitTime }) {
             axios
            .get('https://localhost:44316/CarParkFees', {
                params: {
                    EntryTime: `${entryDate} ${entryTime}`,
                    ExitTime: `${exitDate} ${exitTime}`
                }
            })
            .then(res => {
                context.commit('setParkingFee', res.data)
            })
            .catch(err => {
                console.error('Error getting parking fee', err);
            })
        }
    }
})
