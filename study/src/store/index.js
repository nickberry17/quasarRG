// make the object reactive
import { reactive } from 'vue'

const state = reactive({
    customer: {
        name: '',
        orderId: '',
        company: '',
    },
    counter: 0,
    frequency: '',
    distance: '',
    fresnelZoneRadius: 0
})

const classes = [
    class Customer {
        constructor(id, name, orderId, company) {
            this.id = state.customers[id]++,
            this.name = name,
            this.orderId = orderId,
            this.company = company
        }
    }
]

const methods = {
    createCustomer() {
        state.customers.push(
            new Customer(id, name, orderId, company)
        )
    },
    calculateFresnelZone() {
        let res = 8.656 * Math.sqrt(state.distance / state.frequency)
        state.fresnelZoneRadius = res.toFixed(2)
    },
    increaseCounter() {
        state.counter++
    },
    decreaseCounter() {
        state.counter--
    }
}

export default {
    state,
    methods,
    classes
}