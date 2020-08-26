import { RequestVariable } from "./RequestVariable.model";

export class Debt {
    id: number;
    nomCreance: string;
    codeCreance: string;
    path: string;
    requestVariables: RequestVariable[];
}