import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { StudentEditComponent } from '../student-edit/student-edit.component';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students: Array<any> = [];
  bsModalRef: BsModalRef;
  constructor(
    private listService: ListService,
    private modalService: BsModalService
  ) { }
  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.listService.getStudents().subscribe((resp: any) => {
      this.students = resp.data;
    })
  }
  addStudent() {
    const initialState = {
      title: 'Add Student'
    };
    this.bsModalRef = this.modalService.show(StudentEditComponent, { initialState, class: 'add-student modal-lg' });
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.event.subscribe(resp => {
      console.log('Child component\'s event was triggered', resp);
      this.students.push(resp.data)
      console.log(this.students)
    });
  }
}