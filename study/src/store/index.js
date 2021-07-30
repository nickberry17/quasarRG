// make the object reactive
import { reactive } from 'vue'
import { v4 as uuidv4 } from 'uuid'

// pdf library
import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
pdfMake.vfs = pdfFonts.pdfMake.vfs

let state = reactive({
    survey: {
        type: 'Basic',
        orderId: ''
    },
    customers: [
        {
            id: uuidv4(),
            name: '',
            orderId: '',
            company: '',
        }
    ],
    frequency: '',
    distance: '',
    fresnelZoneRadius: 0
})

function makeHeader(state) {
    return {
        text: `${state.survey.orderId.toString()}`,
        style: 'header'
    }
}

function makeInfo(state) {
    return {
        title: `${state.survey.type.toString()} Site Assessment ${state.survey.orderId.toString()}`,
        author: 'Telco Antennas Pty Ltd',
        subject: 'Signal coverage',
        keywords: 'site survey signal coverage survey telco antennas'
    }
}

function makeTitlePage(state) {
    return {
        stack: [
            `${state.survey.type.toString()} Site Assessment`,
            {
                text: `Prepared for ${state.customers.map(function (customer) {
                    return `${customer.name} `
                }).join('')}`, style: 'subheading'
            }
        ],
        style: 'heading'
    }
}

function makeDocDefinition(state) {
    return {
        info: makeInfo(state),
        watermark: {
            text: "Telco Antennas Pty Ltd",
            color: 'blue',
            opacity: 0.015,
        },
        header: makeHeader(state),
        content: [
            makeTitlePage(state)
        ],
        styles: {
            header: {
                bold: true,
                alignment: "left",
                margin: [20, 10, 40, 10],
            },
            heading: {
                fontSize: 18,
                bold: true,
                alignment: 'center',
                margin: [0, 190, 0, 80]
            },
            subheading: {
                fontSize: 14
            },
            superMargin: {
                margin: [20, 0, 40, 0],
                fontSize: 15
            }
        }
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
        pdfMake.createPdf(makeDocDefinition(state)).download()
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
    // objects
    Customer
}
