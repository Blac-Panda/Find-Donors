const requests = [
    {
        id: 1,
        bloodType: "B+",
        name: "Precious Omonzejele",
        age: 25,
        gender: "Male",
        distance: 28,
        duration: 12,
        status: "URGENT",
    },
    {
        id: 2,
        bloodType: "A+",
        name: "Fuad Ajiboye",
        age: 23,
        gender: "Male",
        distance: 20,
        duration: 16,
        status: "URGENT",
    },
    {
        id: 3,
        bloodType: "O+",
        name: "Azuka Odiah",
        age: 12,
        gender: "Male",
        distance: 18,
        duration: 22,
        status: "URGENT",
    },
    {
        id: 4,
        bloodType: "O-",
        name: "David Trove",
        age: 19,
        gender: "Male",
        distance: 13.2,
        duration: 12,
        status: "URGENT",
    },
];

const chart = [];

const user = {
    avatar: require('./aasets/avatar.png'),
};

export {requests, chart, user}