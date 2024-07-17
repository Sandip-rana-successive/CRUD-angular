import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentTable } from "./student-list/student-list.component";
import { StudentForm } from './student-dialog/student-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentTable, StudentForm],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud';
}
