import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-standalone-form',
  standalone: true,
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class StudentForm {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private studentService: StudentService) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      this.studentService.addData(this.myForm.value).subscribe();
    } else {
      console.log('Form is invalid');
    }
  }
}
