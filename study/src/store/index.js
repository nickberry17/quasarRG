// make the object reactive
import { reactive } from 'vue'
import { v4 as uuidv4 } from 'uuid';

// pdf library
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

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

const docDefinition = {
    content: [
        // if you don't need styles, you can use a simple string to define a paragraph
        `Basic Site survey prepared for: ${state.customers[0].name} \n Order ID: ${state.customers[0].orderId}\n Company Name: ${state.customers[0].company}`,
        /* 
                // using a { text: '...' } object lets you set styling properties
                { text: 'This paragraph will have a bigger font', fontSize: 15 },
        
                // if you set the value of text to an array instead of a string, you'll be able
                // to style any part individually
                {
                    text: [
                        'This paragraph is defined as an array of elements to make it possible to ',
                        { text: 'restyle part of it and make it bigger ', fontSize: 15 },
                        'than the rest.'
                    ]
                } */
    ]
};

const methods = {
    createCustomer(name, orderId, company) {
        state.customers.push(
            new Customer(name, orderId, company)
        )
        console.log("Customers: " + state.customers[0])
    },
    removeCustomer(customerId) {
        let i = state.customers.map(customer => customer.id).indexOf(customerId)
        console.log("Deleting from customers[] where id is: " + state.customers[i].id)
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
    },
    createPDF() {
        console.log("Creating PDF")
        pdfMake.createPdf(docDefinition).download();
    }
}

class Customer {
    constructor(name, orderId, company) {
        this.id = uuidv4(),
            this.name = name,
            this.orderId = orderId,
            this.company = company
        console.log(this)
    }
}

export default {
    state,
    methods,
    docDefinition,
    // objects
    Customer
}
