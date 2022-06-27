const clients = [
    {name: 'Lucas Martins', city: 'Esteio'},
    {name: 'Laura Castro', city: 'Canoas'},
    {name: 'Jose Dias', city: 'Erechim'},
    {name: 'Julia Castro', city: 'Porto Alegre'},
]

function getClientsByCity(city) {
    return clients.filter(client => {
        return client.city == city
    })
}
export default getClientsByCity

