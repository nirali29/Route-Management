import { MyRoute } from 'src/app/interfaces/route.interface';

export var ROUTES: MyRoute[] = [
    { routeId: '1', routeName: 'Route1', direction: 'Up', status: 'Active', type: 'AC', stops:[
        { stopId: '101', stopName: 'Jaipur', latitude: 26.9124, longitude: 75.7873 },
        { stopId: '104', stopName: 'Udaipur', latitude: 24.5854, longitude: 73.7125 },
        { stopId: '105', stopName: 'Chennai', latitude: 13.0827, longitude: 80.2707 }
    ] },
    { routeId: '2', routeName: 'Route2', direction: 'Up', status: 'Active', type: 'AC', stops:[
        { stopId: '102', stopName: 'Mumbai', latitude: 19.0760, longitude: 72.8777 },
        { stopId: '103', stopName: 'Sikkim', latitude: 27.5330, longitude: 88.5122 },
        { stopId: '104', stopName: 'Udaipur', latitude: 24.5854, longitude: 73.7125 },
        { stopId: '106', stopName: 'Bangalore', latitude: 12.9716, longitude: 77.5946 }
    ]  },
    { routeId: '3', routeName: 'Route3', direction: 'Up', status: 'Active', type: 'AC', stops:[
        { stopId: '101', stopName: 'Jaipur', latitude: 26.9124, longitude: 75.7873 },
        { stopId: '102', stopName: 'Mumbai', latitude: 19.0760, longitude: 72.8777 },
        { stopId: '103', stopName: 'Sikkim', latitude: 27.5330, longitude: 88.5122 },
        { stopId: '104', stopName: 'Udaipur', latitude: 24.5854, longitude: 73.7125 },
        { stopId: '105', stopName: 'Chennai', latitude: 13.0827, longitude: 80.2707 }
    ]  },
    { routeId: '4', routeName: 'Route4', direction: 'Up', status: 'Active', type: 'AC', stops:[
        { stopId: '106', stopName: 'Bangalore', latitude: 12.9716, longitude: 77.5946 },
        { stopId: '101', stopName: 'Jaipur', latitude: 26.9124, longitude: 75.7873 }
    ]  },
    { routeId: '5', routeName: 'Route5', direction: 'Up', status: 'Active', type: 'AC', stops:[
        { stopId: '101', stopName: 'Jaipur', latitude: 26.9124, longitude: 75.7873 },
        { stopId: '102', stopName: 'Mumbai', latitude: 19.0760, longitude: 72.8777 }
    ]  },
    { routeId: '6', routeName: 'Route6', direction: 'Up', status: 'Active', type: 'AC', stops:[
        {stopId: "105", stopName: "Chennai", latitude: 13.0827, longitude: 80.2707},
        {stopId: "106", stopName: "Bangalore", latitude: 12.9716, longitude: 77.5946},
        {stopId: "104", stopName: "Udaipur", latitude: 24.5854, longitude: 73.7125}
    ]  },
        { routeId: '7', routeName: 'Route7', direction: 'Up', status: 'Active', type: 'AC', stops:[
        {stopId: "103", stopName: "Sikkim", latitude: 27.533, longitude: 88.5122},
        {stopId: "104", stopName: "Udaipur", latitude: 24.5854, longitude: 73.7125},
        {stopId: "105", stopName: "Chennai", latitude: 13.0827, longitude: 80.2707}
    ]  },
    { routeId: '8', routeName: 'Route7', direction: 'Up', status: 'Active', type: 'AC', stops:[
        {stopId: "105", stopName: "Chennai", latitude: 13.0827, longitude: 80.2707},
        {stopId: "102", stopName: "Mumbai", latitude: 19.076, longitude: 72.8777}
    ]  },
    { routeId: '9', routeName: 'Route8', direction: 'Up', status: 'Active', type: 'AC', stops:[
        {stopId: "106", stopName: "Bangalore", latitude: 12.9716, longitude: 77.5946},
        {stopId: "101", stopName: "Jaipur", latitude: 26.9124, longitude: 75.7873}
    ]  },
    { routeId: '10', routeName: 'Route9', direction: 'Up', status: 'Active', type: 'AC', stops:[
        {stopId: "103", stopName: "Sikkim", latitude: 27.533, longitude: 88.5122},
        {stopId: "102", stopName: "Mumbai", latitude: 19.076, longitude: 72.8777},
        {stopId: "105", stopName: "Chennai", latitude: 13.0827, longitude: 80.2707},
        {stopId: "101", stopName: "Jaipur", latitude: 26.9124, longitude: 75.7873},
        {stopId: "106", stopName: "Bangalore", latitude: 12.9716, longitude: 77.5946}
    ]  }
  ];