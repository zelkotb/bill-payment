import { Optional } from '@angular/core';

export class RequestVariable {
    id: number;
    name: string;
    variableValue: string;

    constructor(name?: string, variableValue?: string) {
        this.name = name;
        this.variableValue = variableValue;
    }
}