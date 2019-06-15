class Gym {

    constructor(name, address, phone, lat, lng, classes = []) {
        this.name = name
        this.address = address
        this.phone = phone
        this.lat = lat
        this.lng = lng
        this.classes = classes
    }

    buildGym(){
        return {
            ...this
        }
    }
}

export default Gym
