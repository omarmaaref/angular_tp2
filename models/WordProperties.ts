import Police from "./Police";

export default class WordProperties{
    constructor(
        public police: Police= new Police(),
        public color: string = "black",
        public fontSize: number= 20
    ){}
}