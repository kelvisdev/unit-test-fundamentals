import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unit-tests-fundamentals';

  soma(valor1: number, valor2: number): number {
    return valor1 + valor2;
  }
}
