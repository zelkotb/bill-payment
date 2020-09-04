import { Component, OnInit } from '@angular/core';
import { Field } from 'src/app/model/Field.model';
import { FormGroup } from '@angular/forms';
import { FieldControlService } from '../../services/field-control.service';
import { FormService } from '../../services/form.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  fields: Field[] = [];
  form: FormGroup = new FormGroup({});
  checkboxValues: string[];
  isCheckboxValid: boolean[] = [];
  code: string;
  codeCreance: string;
  private sub: any;
  loading = false;
  error;
  constructor(private fieldcontrolService: FieldControlService,
    private formService: FormService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getForm();

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getForm() {
    this.loading = true;
    this.sub = this.route.params.subscribe(params => {
      this.code = params['code'];
      this.codeCreance = params['codeCreance'];
    });
    this.formService.getForm(this.code, this.codeCreance).subscribe(
      data => {
        this.fields = data
        this.form = this.fieldcontrolService.toFormGroup(this.fields);
        this.loading = false;
      },
      error => {
        this.error = error;
        this.loading = false;
      }
    )
  }

  controlCheckbox(event: string[], field: Field, index: number) {

    if (field.contrainte === "1") {
      if (event.length != 0) {
        this.isCheckboxValid[index] = true;
      } else {
        this.isCheckboxValid[index] = false;
      }
    }
    this.checkboxValues = event
  }

  isCheckboxListValid() {
    for (let i = 0; i < this.fields.length; i++) {
      if (this.fields[i]?.typeChamp === "checkbox" && this.fields[i]?.contrainte === "1") {
        if (this.isCheckboxValid[i] != true) {
          console.log(false);
          return false
        }
      }
    }
    console.log(true);
    return true;
  }

}
