import { Injectable } from '@angular/core';
import { Field } from '../model/Field.model';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Constant } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class FieldControlService {

  constructor() { }

  toFormGroup(fields: Field[]) {
    const group: any = {};
    fields.forEach(field => {
      if (field.typeChamp === "text" || field.typeChamp === "password") {
        group[field.nomChamp] = new FormControl(
          field.value, [field.contrainte === "1" ? Validators.required : Validators.nullValidator,
          Validators.maxLength(field.tailleMax),
          Validators.minLength(field.tailleMin),
          Validators.pattern(this.getPattern(field.formatChamp))]
        )
      } else if (field.typeChamp === "select") {
        group[field.nomChamp] = new FormControl(
          field.value, field.contrainte === "1" ? Validators.required : Validators.nullValidator
        )
      }
    });
    return new FormGroup(group);
  }

  private getPattern(formatChamp): RegExp {
    switch (formatChamp) {
      case "chaine": {
        return Constant.stringRegex;
      }
      case "entier": {
        return Constant.entierNumberRegex;
      }
      case "Reel": {
        return Constant.reelNumberRegex;
      }
      default: {
        return Constant.stringRegex;
      }
    }
  }
}
