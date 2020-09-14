import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Field } from '../../model/Field.model';
import { FormGroup } from '@angular/forms';
import { Constant } from 'src/app/constant';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() field: Field;
  @Input() form: FormGroup;
  @Input() isCheckboxvalid: boolean = true;
  @Output() checkboxEvent = new EventEmitter<string[]>();
  fieldContext: Field = UtilService.getObjectFromLocalStorage(Constant.fieldStorage);
  hide = true;
  checkboxValues: string[] = [];
  constructor() { }

  ngOnInit(): void {

  }

  addToList(value) {
    this.checkboxValues.includes(value) ? this.checkboxValues.splice(this.checkboxValues.indexOf(value), 1) : this.checkboxValues.push(value);
    this.checkboxEvent.emit(this.checkboxValues)
  }

}
