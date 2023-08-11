export interface Tracker {
    id: number;
    type: boolean;
    recipient: string;
    description: string;
    amount: number;
}

export let transactions: Tracker[] = [
    {
        id: 1,
        type: true,
        recipient: "Ariana",
        description: "Bubur Ayam",
        amount: 50000,
    },
    {
        id: 2,
        type: false,
        recipient: "Caca",
        description: "Mie Ayam",
        amount: 25000,
    },
    {
        id: 3,
        type: true,
        recipient: "Adelia",
        description: "Seblak Ceker",
        amount: 35000,
    },
    {
        id: 4,
        type: true,
        recipient: "Reca",
        description: "Rendang",
        amount: 60000,
    },
    {
        id: 5,
        type: false,
        recipient: "Micel",
        description: "Pempek",
        amount: 75000,
    }

]





