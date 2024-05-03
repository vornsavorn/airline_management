import { Flight } from "../Flight/Flight";
import { CrewMember } from "../Person/CrewMember";
import { Seat } from "./Seat";



export class Plane {
    private seats: Seat[] = [];
    private flights : Flight [] = [];
    private plane : CrewMember[];
    constructor(
        private planeName: string, 
        private planeNumber: string
    ){
        this.planeName = planeName;
        this.planeNumber = planeNumber;
    }
    getPlaneNumber(){
        return this.planeNumber;
    }

    
}