import { Biller } from "./Biller.model";

export class Company {
    name: string;
    protocol: string;
    ip: string;
    port: string;
    path: string;
    biller: Biller;
}