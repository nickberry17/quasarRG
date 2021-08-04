
// make the object reactive
import { reactive } from 'vue'
import { v4 as uuidv4 } from 'uuid'

// pdf library
import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
pdfMake.vfs = pdfFonts.pdfMake.vfs

const side = 40;

let state = reactive({
    survey: {
        type: 'Basic',
        orderId: '',
        title: 'Telstra Mobile Phone Service at Millbrook Road, Millbrook WA',
        revisionNumber: '1'
    },
    baseStations: [

    ],
    locations: [
        {
            id: uuidv4(),
            name: '',
            gps: '',
            servicePossible: '',
            reliability: ''
        }
    ],
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
        text: '[Header image goes here]',
        style: 'center'
    }
}

function makeInfo(state) {
    return {
        title: `${state.survey.type.toString()} Site Analysis Report ${state.survey.orderId.toString()}`,
        author: 'Telco Antennas Pty Ltd',
        subject: 'Signal coverage',
        keywords: 'site survey signal coverage survey telco antennas'
    }
}

function makeTitlePage(state) {
    return {
        stack: [
            {
                text: `${state.survey.type.toString()} Site Analysis Report`,
                style: 'heading'
            },

            {
                text: state.survey.title,
                style: 'subheading'
            },
            {
                text: `Prepared for ${state.customers.map(function (customer) {
                    return `${customer.name} `
                }).join('')}`, style: 'large'
            },
            {
                text: `Document Reference Number: ${state.survey.orderId.toString()}`,
                style: 'subheading'
            }
        ], style: 'center'
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
            center: {
                alignment: 'center'
            },
            header: {
                bold: true,
                alignment: "center",
                margin: [side, 10, side, 10],
            },
            heading: {
                fontSize: 25,
                bold: true,
                alignment: 'center',
                margin: [side, 90, side, 40] // L, T, R, B
            },
            subheading: {
                fontSize: 17,
                lineHeight: 1.5
            },
            large: {
                fontSize: 15,
                lineHeight: 1.25
            },
            normal: {
                fontSize: 11
            },
            small: {
                fontsize: 10
            },
            footnote: {
                fontsize: 8,
            },

            superMargin: {
                margin: [side, 0, side, 0],
                fontSize: 15
            }
        },
        pageSize: 'A4',
    }
}

const methods = {
    createBaseStation(name) {
        state.baseStations.push(
            new BaseStation(name)
        )
        console.log("BaseStations: " + state.baseStations[0])
    },
    removeBaseStation(baseStationId) {
        let i = state.baseStations.map(baseStation => baseStation.id).indexOf(baseStationId)
        console.log("Deleting from BaseStations[] where id is: " + state.baseStations[i].id)
        state.baseStations.splice(i, 1)
    },
    createLocation(name) {
        state.locations.push(
            new Location(name)
        )
        console.log("Locations: " + state.locations[0])
    },
    removeLocation(locationId) {
        let i = state.locations.map(location => location.id).indexOf(locationId)
        console.log("Deleting from locations[] where id is: " + state.locations[i].id)
        state.locations.splice(i, 1)
    },
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

class BaseStation {
    constructor(name) {
        this.id = uuidv4(),
            this.name = name,
            this.accessTechnologies = [],
            this.serviceTypes = [],
            this.nr5gBands = [
                { band: 'n78', frequency: '3500', present: false },
            ],
            this.umtsBands = [
                { band: 'B1', frequency: '2100', present: false },
                { band: 'B8', frequency: '900', present: false },
                { band: 'B5', frequency: '850', present: false }
            ],
            this.lteBands = [
                { band: 'B1', frequency: '2100', present: false },
                { band: 'B3', frequency: '1800', present: false },
                { band: 'B5', frequency: '850', present: false },
                { band: 'B7', frequency: '2600', present: false },
                { band: 'B8', frequency: '900', present: false },
                { band: 'B28', frequency: '700', present: false },
                { band: 'B40', frequency: '2300', present: false }
            ],
            this.microwaveBands = [
                { band: '915', frequency: '915', present: false },
                { band: '2400', frequency: '2400', present: false },
                { band: '5100', frequency: '5100', present: false },
                { band: '24000', frequency: '24000', present: false },
            ],
            this.operators = [
                { operator: 'Telstra', present: false },
                { operator: 'Optus', present: false },
                { operator: 'Vodafone/TPG Mobile', present: false },
            ]
    }
}

class Location {
    constructor(name) {
        this.id = uuidv4(),
            this.name = name,
            console.log(this)
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
    Customer,
    Location,
    BaseStation,
    headerImg: 'header.png'
}
