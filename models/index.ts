interface Club {
    id: number,
    name: string,
    activity: string,
    cover: string,
}

interface Game {
    id: number,
    club: number,
    name: string,
    time: Date,
    location: string,
    going: number,
}