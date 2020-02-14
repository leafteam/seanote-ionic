import { Component, OnInit } from "@angular/core";
import { NoterService } from "../../noter.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-actions",
  templateUrl: "./actions.component.html",
  styleUrls: ["./actions.component.scss"]
})
export class ActionsComponent implements OnInit {
  noter: NoterService;
  router: Router;
  constructor(noter: NoterService, router: Router) {
    this.noter = noter;
    this.router = router;
  }

  ngOnInit(): void {}

  newNote() {
    this.router.navigate(["/editnote/-1"]);
  }
}
