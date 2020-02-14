import { Input, Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Note, NoterService } from "../../../noter.service";

@Component({
  selector: "app-note-preview",
  templateUrl: "./note-preview.component.html",
  styleUrls: ["./note-preview.component.scss"]
})
export class NotePreviewComponent implements OnInit {
  @Input("note") note: Note;
  @Output() noteDeleted = new EventEmitter<Note>();

  constructor(private noter: NoterService) {}

  deleteNote() {
    this.noter.deleteNote(this.note).subscribe(res => {
      console.log(res);
		console.log('emmmitting delte');
      this.noteDeleted.emit(this.note);
    });
  }

  ngOnInit(): void {}
}
