class Spacecraft {

    constructor (public propulsor: string) {}

    jumpIntotheHyperspace() {
        console.log(`Entering in the hyperspace ${this.propulsor}`)
    }
}


interface Containership {
    cargoContainers: number
}

export{Spacecraft, Containership}
