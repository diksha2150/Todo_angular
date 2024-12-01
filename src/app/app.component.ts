import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodisComponent } from "./MyComponents/todis/todis.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodisComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cwh-todo-list';
  constructor() {
    // setTimeout(() => {
    //   this.title = 'love you prashnat';
    // }, 2000);
  }
}
