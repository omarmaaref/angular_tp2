// export interface Cv {
//     firstName: string, 
//     name: string, 
//     age: number, 
//     cin: string, 
//     job: string,
//     path: string
// }
import * as uuid from 'uuid'

export class Cv {
    constructor(  
        public firstName= "Dali", 
        public name = "Sahnoun", 
        public age= 21,
        public cin ="13141345431",
        public job = "Student",
        public path ="dali.png" ,
        public id = uuid.v4()
    ){}
}