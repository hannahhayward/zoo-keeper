import { Giraffe } from "./models/Giraffe.js"
import { Hippo } from './models/Hippo.js'
import { Lion } from './models/Lion.js'
import { Penguin } from './models/Penguin.js'
import { Zebra } from './models/Zebra.js'
import {Yorkie} from './models/Yorkie.js'
import {Tiger} from './models/Tiger.js'

let gloria = new Hippo('Gloria', '30', 'light gray', 'x-large', true)

let melman = new Giraffe('Melman', 400, 35, 28, true)

let marty = new Zebra('Marty', 8, 'medium', 'male', true)

let alex = new Lion('Alex the Lion', 26, 'large', 'burnt orange', 'male', true)

let peng = new Penguin('Private', 4, 'male', 'small', true)

let bear = new Yorkie('Bear','small','white and gray',false)

let tony = new Tiger ('Tony', 'large', true, false)