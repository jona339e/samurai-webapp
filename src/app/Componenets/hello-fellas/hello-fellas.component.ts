import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello-fellas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello-fellas.component.html',
  styleUrl: './hello-fellas.component.css'
})
export class HelloFellasComponent {

  title: string = "Hello Fellas!"
  isTrue: boolean = 1 < 2;
  list: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  ngOnInit() {
    this.create()
  }

  create() {
    console.log("Hello Fellas!")
  }



}


