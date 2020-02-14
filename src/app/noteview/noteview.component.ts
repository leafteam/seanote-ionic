import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Note } from "../noter.service";
import { NoterService } from "../noter.service";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-noteview",
  templateUrl: "./noteview.component.html",
  styleUrls: ["./noteview.component.scss"]
})
export class NoteviewComponent implements OnInit {
  id: string;
  noter: NoterService;
  note: Note;
  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    noter: NoterService
  ) {
    this.noter = noter;
    this.router = router;
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  saveNote() {
    this.note.title = this.editForm.value.title;
    this.note.subtitle = this.editForm.value.subtitle;
    this.note.content = this.editForm.value.content;

    this.noter.saveNote(this.note).subscribe(data => console.log(data));
    this.router.navigate(["/main"]);
  }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      title: new FormControl(),
      subtitle: new FormControl(),
      content: new FormControl()
    });
    if (this.id != "-1") {
      this.noter.getNote(this.id).subscribe(data => {
        console.log(data);
        const foundNote = Array.from(Object.keys(data), k => data[k])[0];
        this.note = new Note(
          foundNote._id,
          foundNote.title,
          foundNote.subtitle,
          foundNote.content
        );
        this.editForm.controls.title.setValue(this.note.title);
        this.editForm.controls.subtitle.setValue(this.note.subtitle);
        this.editForm.controls.content.setValue(this.note.content);
      });
    } else {
      this.note = new Note("", "", "", "");
    }
  }
}
