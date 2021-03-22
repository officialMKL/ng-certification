import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-enter-zipcode',
  templateUrl: './enter-zipcode.component.html',
  styleUrls: ['./enter-zipcode.component.css']
})
export class EnterZipcodeComponent implements OnInit {
  @Output()
  addZipcodeChange: EventEmitter<string> = new EventEmitter<string>();

  zipcode: FormControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {}

  addNewLocation(): void {
    this.addZipcodeChange.emit(this.zipcode.value);
  }

}
