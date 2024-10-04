import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'carlos paez';
  public nameUpper: string = 'CARLOS PAEZ';
  public fullName: string = 'cArLoS PaEz';

  public customDate: Date = new Date();
}
