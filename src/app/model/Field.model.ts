import { RequestVariable } from "./RequestVariable.model";
export class Field {
    libelle: string;
    value = "";
    nomChamp: string;
    typeChamp: string;
    listVals: string[];
    formatChamp: string;
    tailleMin: number;
    tailleMax: number;
    contrainte: string;
    path: string;
    creancierId: string;
    creanceId: string;
    requestVariables: RequestVariable[];
}