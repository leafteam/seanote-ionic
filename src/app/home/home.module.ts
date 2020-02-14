import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ActionsComponent } from "./actions/actions.component";
import { NotesComponent } from "./notes/notes.component";
import { NotePreviewComponent } from "./notes/note-preview/note-preview.component";

import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";

import { HttpClientModule } from "@angular/common/http";
import { NoterService } from "../noter.service";

import { HomePage } from "./home.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    ActionsComponent,
    NotesComponent,
    NotePreviewComponent
  ],
  providers: [NoterService]
})
export class HomePageModule {}
