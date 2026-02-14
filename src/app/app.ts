import { Component } from '@angular/core';
import { CvBuilderComponent } from './cv-builder/cv-builder.component';

@Component({
  selector: 'app-root',
  imports: [CvBuilderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'cv-builder';
}
