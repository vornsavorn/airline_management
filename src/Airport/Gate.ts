import { Airport } from "./Airport";

export class Gate {
    private airport: Airport | undefined;
    constructor (
        private gateCode: string,
        private getNumber: number,
        private terminal: string,
        private status: string
    ) {
        this.gateCode = gateCode;
        this.getNumber = getNumber;
        this.terminal = terminal;
        this.status = status;
    }

    getGateCode(): string {
        return this.gateCode;
    }
    getGetNumber(): number {
        return this.getNumber;
    }

    getTerminal(): string {
        return this.terminal;
    }

    getStatus(): string {
        return this.status;
    }
    setStatus(status: string): void {
        this.status = status;
    }
<<<<<<< HEAD
    getAirport(): Airport | undefined {
=======
    getAirport(): Airport | undefined{
>>>>>>> fcd9a7b5f227069137f0d79089d17d93661324f9
        return this.airport;
    }
    setAirport(airport: Airport): void {
        this.airport = airport;
    }
    
}


