import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  phoneNo = "+91 93444 42400";
  clinicName = "MGM Dental Care";
  location = "https://maps.app.goo.gl/7ZXcKZa9KMA3PMWU9";
  address = "Uzhavar Sandhai Veedhi, Anna Nagar, Madurai, Tamil Nadu 625020, India."
  copyRightText = "© 2024 Copyright:";
  clinicLink = "MGMDentalClinic";
}
