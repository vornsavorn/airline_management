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
    getAirport(): Airport | undefined {
        return this.airport;
    }
    setAirport(airport: Airport): void {
        this.airport = airport;
    }
    
}


