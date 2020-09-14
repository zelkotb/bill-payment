import { Component, OnInit } from '@angular/core';
import { Field } from 'src/app/model/Field.model';
import { FormGroup } from '@angular/forms';
import { FieldControlService } from '../../services/field-control.service';
import { FormService } from '../../services/form.service';
import { ReelService } from '../../services/reel.service';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';
import { Constant } from 'src/app/constant';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  fields: Field[] = [];
  form: FormGroup = new FormGroup({});
  form2: FormGroup = new FormGroup({});
  checkboxValues: string[];
  isCheckboxValid: boolean[] = [];
  code: string;
  codeCreance: string;
  private sub: any;
  private sub2: any;
  private subForm: any;
  private subForm2: any;
  loading = false;
  error;
  error1;
  reelFields: Field[] = [];
  fieldContext = UtilService.getObjectFromLocalStorage(Constant.fieldStorage);

  constructor(private fieldcontrolService: FieldControlService,
    private formService: FormService, private reelService: ReelService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getForm();
    this.getReelForm()
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.subForm?.unsubscribe();
    this.sub2?.unsubscribe();
    this.subForm2?.unsubscribe();
  }

  getForm() {
    this.loading = true;
    this.sub = this.route.params.subscribe(params => {
      this.code = params['code'];
      this.codeCreance = params['codeCreance'];
    });
    this.subForm = this.formService.getForm(this.code, this.codeCreance).subscribe(
      data => {
        this.fields = data
        this.form = this.fieldcontrolService.toFormGroup(this.fields);
        this.form2 = this.fieldcontrolService.toFormGroup(this.fields);
        this.loading = false;
      },
      error => {
        this.error = error;
        this.loading = false;
      }
    )
  }

  getReelForm() {
    this.loading = true;
    this.sub2 = this.route.params.subscribe(params => {
      this.code = params['code'];
      this.codeCreance = params['codeCreance'];
    });
    this.subForm2 = this.reelService.getForm(this.code, this.codeCreance).subscribe(
      data => {
        this.reelFields = data
        this.loading = false;
      },
      error => {
        this.error1 = error;
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
          return false
        }
      }
    }
    return true;
  }

}
