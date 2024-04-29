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

    addSeat(seat: Seat) {
        this.seats.push(seat);
    }
    getSeats(){
        return this.seats;
    }
    getPlaneName(){
        return this.planeName;
    }
    getPlaneNumber(){
        return this.planeNumber;
    }

    
}