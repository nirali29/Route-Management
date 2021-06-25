export interface MyRoute {
    routeId: string,
    routeName: string,
    direction: string,
    status: string,
    type: string,
    stops?: Stop[]
}

export interface Stop {
    stopId: string,
    stopName: string,
    latitude: number,
    longitude: number
}