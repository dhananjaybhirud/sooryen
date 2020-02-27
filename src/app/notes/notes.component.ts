import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notesForm: FormGroup;
  notes = [
    {
      title: 'note 1',
      des: 'Description'
    }
  ];
  changeTitle = false;

  constructor(private formBuilder: FormBuilder) {
    this.createNoteForm();
  }

  ngOnInit() {
  }

  createNoteForm() {
    this.notesForm = this.formBuilder.group({
      title: [''],
      des: ['']
    });
  }

  deleteNote(ind) {
    this.notes.splice(ind, 1);
  }
  onSubmit() {
    console.log('Your form data : ', this.notesForm.value );
    if (this.notesForm.value.title === '') {
      this.changeTitle = true;
    } else {
      const temp = {
        title: this.notesForm.value.title,
        des: this.notesForm.value.des
      };
      this.notes.push(temp);
      this.changeTitle = false;
      this.notesForm.reset();
    }
  }

}
