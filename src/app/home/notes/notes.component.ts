import { Component, OnInit } from "@angular/core";
import { NoterService } from "../../noter.service";
import { Note } from "../../noter.service";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"]
})
export class NotesComponent implements OnInit {
  notesArray: any;

  constructor(private noter: NoterService) {}

  deleteNote(note) {
    this.notesArray = this.notesArray.filter(e => e != note);
  }

  isIterable(obj) {
    // checks for null and undefined
    if (obj == null) {
      return false;
    }
    return typeof obj[Symbol.iterator] === "function";
  }

  ngOnInit(): void {
    this.notesArray = [];

    this.noter.getNotes()
    .subscribe(notes => this.notesArray = notes);

    // this.noter.getNotes().subscribe(res => {
    //   // for (let [k, v] of MyObject) {
    //   // console.log(`Here is key ${k} and here is value ${v}`);

    //   // for (let note,  i = 0; i < 6; i++) {
    //   //   note = res[i];
    //   //   console.log(note);
    //   //   this.notesArray.push(
    //   //     new Note(note._id, note.title, note.subtitle, note.content)
    //   //   );
    //   // }

    //   for (const note of res) {
    //     this.notesArray.push(
    //       new Note(note._id, note.title, note.subtitle, note.content)
    //     );
    //   }
    // });
  }
}
