import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private primerngConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primerngConfig.ripple = true;
  }
}
