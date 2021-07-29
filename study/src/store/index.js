// make the object reactive
import { reactive } from 'vue'
import { v4 as uuidv4 } from 'uuid';

const state = reactive({
    customers: [
        {
            id: uuidv4(),
            name: '',
            orderId: '',
            company: '',
        }
    ],
    counter: 0,
    frequency: '',
    distance: '',
    fresnelZoneRadius: 0
})

class Customer {
    constructor(name, orderId, company) {
        this.id = uuidv4(),
            this.name = name,
            this.orderId = orderId,
            this.company = company
        console.log(this)
    }
}

const methods = {
    createCustomer(name, orderId, company) {
        state.customers.push(
            new Customer(name, orderId, company)
        )
        console.log("Customers: " + state.customers[0])
    },
    removeCustomer(customerId) {
        let i = state.customers.map(customer => customer.id).indexOf(customerId)
        console.log("Deleting: " + i.toString())
        state.customers.splice(i, 1)
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
    Customer
}
