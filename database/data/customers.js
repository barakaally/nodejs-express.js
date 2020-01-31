
const customers = [
    {
        id: 1,
        firstname: "baraka",
        lastname: "ally",
        phone: 255739420002,
        email: "baraka.ally.co.tz@gmail.com",
        password: "passwordtest",
        products: [
            {
                id: 1,
                name: "smart watch",
                description: "product description goes here",
                location: "dar es salaam",
                isDelivable: true,
                avalablePieces: 200,
                remainPieces: 20
            },
            {
                id: 2,
                name: "cake",
                description: "product description goes here",
                location: "dar es salaam",
                isDelivable: true,
                avalablePieces: 200,
                remainPieces: 20
            },
            {
                id: 3,
                name: "Lenovo PC",
                description: "product description goes here",
                location: "dar es salaam",
                isDelivable: true,
                avalablePieces: 200,
                remainPieces: 20
            },
            {
                id: 4,
                name: "smart watch",
                description: "product description goes here",
                location: "dar es salaam",
                isDelivable: true,
                avalablePieces: 200,
                remainPieces: 20
            },
            {
                id: 5,
                name: "Biliani",
                description: "product description goes here",
                location: "Morogoro",
                isDelivable: true,
                avalablePieces: 200,
                remainPieces: 20
            }
        ],
        orders: [
            {
                id: 1,
                customerId: 1,
                product: {

                    id: 1,
                    name: "smart watch",
                    description: "product description goes here",
                    location: "dar es salaam"
                },
                orderDate: "2020 - 02 - 02"
            },
            {
                id: 1,
                customerId: 1,
                product: {

                    id: 1,
                    name: "smart watch",
                    description: "product description goes here",
                    location: "dar es salaam"

                },
                orderDate: "2020 - 02 - 02"
            },
            {
                id: 1,
                customerId: 1,
                product: {

                    id: 1,
                    name: "smart watch",
                    description: "product description goes here",
                    location: "dar es salaam",
                    isDelivable: true,
                    avalablePieces: 200,
                    remainPieces: 20

                },
                orderDate: "2020 - 02 - 02"
            },
            {
                id: 1,
                customerId: 1,
                product: {

                    id: 1,
                    name: "smart watch",
                    description: "product description goes here",
                    location: "dar es salaam",
                    isDelivable: true,
                    avalablePieces: 200,
                    remainPieces: 20

                },
                orderDate: "2020 - 02 - 02"
            },
            {
                id: 1,
                customerId: 1,
                product: {

                    id: 1,
                    name: "smart watch",
                    description: "product description goes here",
                    location: "dar es salaam",

                },
                orderDate: "2020 - 02 - 02"
            }
        ],
        sales: [
            {
                id: 1,
                buyer: {
                    id: 2,
                    name: "juma mkude",
                    email: "juma@gmail.com"

                },
                product: {
                    id: 1,
                    name: "smart watch",
                    description: "product description goes here",
                    location: "dar es salaam",
                },
                soldDate: "2020-03-02"
            }
        ],
        purchases: [
            {
                id: 1,
                product: {
                    id: 1,
                    name: "smart watch",
                    description: "product description goes here",
                    location: "dar es salaam",
                },
                purchaseDate: "2020-03-02"
            }
        ]
    },
    {
        id: 2,
        firstname: " baraka",
        lastname: " ally",
        phone: 255739420003,
        email: "baraka.ally.co.tz1@gmail.com",
        password: "passwordtest1",
        products: [],
        orders: [],
        sales: [],
        purchases: []

    },
    {
        id: 3,
        firstname: " baraka",
        lastname: " ally",
        phone: 255739420005,
        email: "baraka.ally.co.tz2@gmail.com",
        password: "passwordtest2",
        products: [],
        orders: [],
        sales: [],
        purchases: []

    },
    {
        id: 4,
        firstname: " baraka",
        lastname: " ally",
        phone: 255739420006,
        email: "baraka.ally.co.tz3@gmail.com",
        password: "passwordtest3",
        products: [],
        orders: [],
        sales: [],
        purchases: []

    },
    {
        id: 5,
        firstname: " baraka",
        lastname: " ally",
        phone: 255739420007,
        email: "baraka.ally.co.tz3@gmail.com",
        password: "passwordtest3",
        products: [],
        orders: [],
        sales: [],
        purchases: []

    },
    {
        id: 7,
        firstname: " baraka",
        lastname: " ally",
        phone: 255739420009,
        email: "baraka.ally.co.tz4@gmail.com",
        password: "passwordtest4",
        products: [],
        orders: [],
        sales: [],
        purchases: []

    }
]

module.exports = customers;