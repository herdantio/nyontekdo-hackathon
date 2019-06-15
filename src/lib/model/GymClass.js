class GymClass {

    constructor(name, date, timeStart, timeEnd, capacity, students = []) {
        this.name = name
        this.date = date
        this.timeStart= timeStart
        this.timeEnd = timeEnd
        this.capacity = capacity
        this.students = students
    }

    buildGymClass(){
        return{
            ...this
        }
    }
}

export default GymClass
