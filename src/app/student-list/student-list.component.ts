import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from "@angular/material/button";
import { StudentService } from '../student.service';

export interface StudentData {
  id: string;
  name: string;
  email: string;
  city: string;
}

@Component({
  selector: 'table-basic-example',
  styleUrl: './student-list.component.css',
  templateUrl: './student-list.component.html',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
})
export class StudentTable implements OnInit {

  constructor(private studentService: StudentService) {
  }

  displayedColumns: string[] = ['name', 'email', 'city', 'id'];
  dataSource: StudentData[] = [{ id: '', name: '', email: '', city: '' }];

  ngOnInit(): void {
    this.studentService.fetchData().subscribe((response) => {
      console.log("🚀 ~ StudentTable ~ this.studentService.fetchData ~ response:", response)
      this.dataSource = response;
    })
  }
}
