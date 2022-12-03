import { Component, Inject } from '@angular/core';
import { CompanyAddress } from '../../models/company-address';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent {

  constructor(@Inject("COMPANY_ADDRESS") public model: CompanyAddress){ }
}
