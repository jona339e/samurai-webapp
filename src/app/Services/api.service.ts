import { Injectable } from '@angular/core';
import { Samurai, SamuraiApiModel, KrigerApiModel } from '../Models/SamuraiModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',

})
export class ApiService {

  samurais: Samurai[] = [
    {
      id: 1,
      name: 'Tomoe Gozen',
      age: 23,
      weapon: 'Katana',
      clan: 'Minamoto',
      status: 'Alive',
      image: 'tomoe-gozen.jpg',
      description: 'Tomoe Gozen was a late twelfth-century',
    },
    {
      id: 2,
      name: 'Yukimura Sanada',
      age: 49,
      weapon: 'Yari',
      clan: 'Sanada',
      status: 'Dead',
      image: 'yukimura-sanada.jpg',
      description: 'Yukimura Sanada was a Japanese samurai warrior of the Sengoku period.',
    },
    {
      id: 3,
      name: 'Hattori Hanzo',
      age: 55,
      weapon: 'Ninja-to',
      clan: 'Tokugawa',
      status: 'Dead',
      image: 'hattori-hanzo.jpg',
      description: 'Hattori Hanzo was a famous samurai and ninja of the Sengoku era.',
    },
    {
      id: 4,
      name: 'Ishikawa Goemon',
      age: 37,
      weapon: 'Katana',
      clan: 'None',
      status: 'Dead',
      image: 'ishikawa-goemon.jpg',
      description: 'Ishikawa Goemon was a semi-legendary Japanese outlaw hero who stole gold and valuables to give to the poor.',
    },
    {
      id: 5,
      name: 'Date Masamune',
      age: 70,
      weapon: 'Katana',
      clan: 'Date',
      status: 'Dead',
      image: 'date-masamune.jpg',
      description: 'Date Masamune was a regional ruler of Japan\'s Azuchi-Momoyama period through early Edo period.',
    },
    {
      id: 6,
      name: 'Oda Nobunaga',
      age: 48,
      weapon: 'Katana',
      clan: 'Oda',
      status: 'Dead',
      image: 'oda-nobunaga.jpg',
      description: 'Oda Nobunaga was a powerful daimyo of Japan in the late 16th century who attempted to unify Japan during the late Sengoku period.',
    },
    {
      id: 7,
      name: 'Takeda Shingen',
      age: 53,
      weapon: 'Yari',
      clan: 'Takeda',
      status: 'Dead',
      image: 'takeda-shingen.jpg',
      description: 'Takeda Shingen, of Kai Province, was a pre-eminent daimyo in feudal Japan with exceptional military prestige in the late stage of the Sengoku period.',
    },
    {
      id: 8,
      name: 'Miyamoto Musashi',
      age: 61,
      weapon: 'Katana',
      clan: 'None',
      status: 'Dead',
      image: 'miyamoto-musashi.jpg',
      description: 'Miyamoto Musashi was a Japanese swordsman, philosopher, strategist, writer and ronin.',
    },
    {
      id: 9,
      name: 'Honda Tadakatsu',
      age: 61,
      weapon: 'Yari',
      clan: 'Tokugawa',
      status: 'Dead',
      image: 'honda-tadakatsu.jpg',
      description: 'Honda Tadakatsu was a Japanese general of the late Sengoku through early Edo periods.',
    },
  ];

  url: string = "https://localhost:7072/api/"

  constructor(private http: HttpClient) { }

  getSamurais(): Observable<any[]>{
    console.log(this.url + "samurai")
    var result = this.http.get<any[]>(this.url + 'samurai');
    result.forEach(element => {
      console.log(element)
    });
    return result
  }

  GetSamuraisStatic(): Samurai[]{
    return this.samurais;

  }

}
