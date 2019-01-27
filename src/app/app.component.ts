import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  erkekOgrenciler = [
    {id: 1, adi: 'Ali', not: Math.floor(Math.random() * 10)}, {id: 2, adi: 'Veli', not: Math.floor(Math.random() * 10)},
    {id: 3, adi: 'Ahmet', not: Math.floor(Math.random() * 10)}
  ];

  kizOgrenciler = [
    {id: 1, adi: 'Ayşe', not: Math.floor(Math.random() * 10)}, {id: 2, adi: 'Fatma', not: Math.floor(Math.random() * 10)},
    {id: 3, adi: 'Hatice', not: Math.floor(Math.random() * 10)}];

  getErkekOgrenciler(): void {
    this.erkekOgrenciler = [
      {id: 1, adi: 'Ali', not: Math.floor(Math.random() * 10)}, {id: 2, adi: 'Veli', not: Math.floor(Math.random() * 10)},
      {id: 3, adi: 'Ahmet', not: Math.floor(Math.random() * 10)}, {id: 4, adi: 'mehmet', not: Math.floor(Math.random() * 10)}];
  }

  getKizOgrenciler(): void {
    this.kizOgrenciler = [
      {id: 1, adi: 'Ayşe', not: Math.floor(Math.random() * 10)}, {id: 2, adi: 'Fatma', not: Math.floor(Math.random() * 10)},
      {id: 3, adi: 'Hatice', not: Math.floor(Math.random() * 10)}, {id: 4, adi: 'Kezban', not: Math.floor(Math.random() * 10)}];
  }

  trackByFn(index: number, kisi): number {
    return kisi.id;
  }


}
