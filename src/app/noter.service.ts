import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of } from "rxjs";

import { catchError, map, tap } from 'rxjs/operators';

export class Note {
  public _id: string;
  public title: string;
  public subtitle: string;
  public content: string;

  constructor(id: string, title: string, subtitle: string, content: string) {
    this._id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.content = content;
  }
}

@Injectable({
  providedIn: "root"
})
export class NoterService {
  notesArray: Note[];
  serverIp: string;
  httpOptions;
  constructor(private http: HttpClient) {
    this.serverIp = "http://192.168.5.107:8072";
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://192.168.5.107:8072"
      })
    };
  }

	 private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getNotes() {
    return this.http
      .get<Note[]>(`${this.serverIp}/notes`, this.httpOptions)
      .pipe(
        tap(_ => console.log("fetched heroes")),
        catchError(this.handleError<Note[]>("getHeroes", []))
      );
  }

  saveNote(note: Note) {
    // const res = this.getNote(note._id);
    // if (res.res) {
    //   const oldnote = res.data;
    //   oldnote.title = note.title;
    //   oldnote.subtitle = note.subtitle;
    //   oldnote.content = note.content;
    // }

    console.log("saving ------------");
    // console.log(note);
    // return this.http
    //   .post<any>(`${this.serverIp}/savenote`, note);

    /** POST: add a new hero to the database */
    return this.http.post<Note>(
      `${this.serverIp}/savenote`,
      note,
      this.httpOptions
    );
  }

  getNote(id: string): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.serverIp}/note/${id}`);
  }

  deleteNote(note: Note) {
    return this.http.delete(
      `${this.serverIp}/deletenote/${note._id}`,
      this.httpOptions
    );
  }
}
