import {Spacecraft, Containership} from './base-ships'

class Milleniumfalcon extends Spacecraft implements Containership{

    cargoContainers: number

    constructor() {
        super('hyperdrive')
        this.cargoContainers = 1
    }

    jumpIntotheHyperspace() {
        if(Math.random() >= 0.5) {
            super.jumpIntotheHyperspace()
        } else {
            console.log('Failed to jump into de hyperspace')
        }
    }
}

export{Milleniumfalcon}
