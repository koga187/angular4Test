import {Spacecraft, Containership} from './base-ships'
import {Milleniumfalcon} from './startfighters'

import * as _ from 'lodash'

console.log(_.pad("TYPESCRIPT EXAMPLES", 40, '='))

let ship = new Spacecraft('hyperdrive')
ship.jumpIntotheHyperspace()

let falcon = new Milleniumfalcon()
falcon.jumpIntotheHyperspace()

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2
console.log(`Is Good for the job ${goodForTheJob(falcon)}`)
