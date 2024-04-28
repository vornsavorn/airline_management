import { Flight } from "./Flight";
import { CrewMember  } from "./CrewMember";


export class Plane {
    private flights : Flight;
    private plane : CrewMember[];
    constructor(private planeName: string, private planeNumber: string){
        this.planeName = planeName;
        this.planeNumber = planeNumber;
    }
    getPlaneName(){
        return this.planeName;
    }
    getPlaneNumber(){
        return this.planeNumber;
    }
    
}