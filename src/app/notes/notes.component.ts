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
  changeTitleErr = false;
  isUpdate = false;
  tempNoteIndex = null;
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
  ifSameTitle() {
    let temp;
    for (let i = 0; i < this.notes.length; i++ ){
      if ( (this.notes[i].title === this.notesForm.value.title) && i !==  this.tempNoteIndex ) {
        temp = true;
        break;
      } else {
        temp = false;
      }
    }
    return temp;
  }
  onSubmit() {
    if (this.notesForm.value.title === '' || this.ifSameTitle()) {
      this.changeTitleErr = true;
    } else {
      const temp = {
        title: this.notesForm.value.title,
        des: this.notesForm.value.des
      };
      this.notes.push(temp);
      this.changeTitleErr = false;
      this.notesForm.reset();
    }
  }
  addNote() {
    this.notesForm.reset();
    this.isUpdate = false;
    this.tempNoteIndex = null;
  }
  editNote(ind) {
    this.notesForm.setValue(this.notes[ind]);
    this.isUpdate = true;
    this.tempNoteIndex = ind;
  }
  onUpdate() {
    if (this.notesForm.value.title === '' || this.ifSameTitle()) {
      this.changeTitleErr = true;
    } else {
      const temp = {
        title: this.notesForm.value.title,
        des: this.notesForm.value.des
      };
      this.notes[this.tempNoteIndex] = temp;
      this.changeTitleErr = false;
      this.notesForm.reset();
      this.isUpdate = false;
    }
  }

}
