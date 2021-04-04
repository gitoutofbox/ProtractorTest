import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {
  public studentForm: any; 
  public title: string ='';
  public submitted: boolean = false;
  public event: EventEmitter<any> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    public bsModalRef: BsModalRef
  ) {
    this.studentForm = this.fb.group({
      id: [""],
      name: ["",[Validators.required]],
      roll: ["", [Validators.required]],
      bio:[]
    })
   }

  ngOnInit(): void {
  }
  save() {
    this.submitted = true;
    if(this.studentForm.valid) {
      this.event.emit({data: this.studentForm.value});
      this.bsModalRef.hide();
    }
  }
}
