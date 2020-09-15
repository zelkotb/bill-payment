import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from 'src/app/model/Field.model';

@Component({
  selector: 'dynamic-form-reel',
  templateUrl: './dynamic-form-reel.component.html',
  styleUrls: ['./dynamic-form-reel.component.css']
})
export class DynamicFormReelComponent implements OnInit {

  @Input() field: Field;
  hide = true;
  constructor() { }

  ngOnInit(): void {

  }

}
