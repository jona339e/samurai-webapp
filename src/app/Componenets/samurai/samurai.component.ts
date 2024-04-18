import { ApiService } from '../../Services/api.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Samurai, SamuraiApiModel, KrigerApiModel } from '../../Models/SamuraiModel';



@Component({
  selector: 'app-samurai',
  standalone: true,
  imports: [
    CommonModule,
    // BrowserModule,
    FormsModule,
  ],
  templateUrl: './samurai.component.html',
  styleUrl: './samurai.component.css'
})
export class SamuraiComponent{

  constructor(private apiService: ApiService){}

  samurais: Samurai[] = []

  selectedSamurai: any = null;

  samuraisFromApi: any[] = []
  
  ngOnInit(){
    this.apiService.getSamurais().subscribe({
      next: (data: any[]) => {
        data.forEach((samurai: any) => {
          this.samuraisFromApi.push(samurai)
        })
      },
      error: (error) => {
        console.log(error)
      }
    });

    

    this.samurais = this.apiService.GetSamuraisStatic();

    console.log(this.samuraisFromApi)
    // console.log(this.samurais)
  }
  

}



