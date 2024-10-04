import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Carlos';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    male: 'him',
    female: 'her'
  }

  changePerson(): void {
    this.name = 'Rossel';
    this.gender = 'female';
  }

  // i18n Plural
  public customers: string[] = ['Carlos', 'Rossel', 'Pepe', 'Stephany'];
  public customersMap = {
    '=0': 'have no customers waiting',
    '=1': 'have a customer waiting',
    'other': 'have # customers waiting'
  }

  removeCustomer(): void {
    this.customers.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Carlos',
    age: 25,
    address: 'Mazatlan, Sinaloa'
  }

  // Async Pipe
  public myObservableTimer = interval(1000);
}
