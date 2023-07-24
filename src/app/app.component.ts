import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-forms-angular';
  contentName = '';
  contentLastName = '';
  contentCity = '';
  contentCountry = '';
  contentEmail = '';
  contentDNI = '';

  name = '';
  lastName = '';
  city = '';
  country = '';
  email = '';
  DNI = '';

  // submit(){
  //   this.name = this.contentName;
  //   this.lastName = this.contentLastName;
  //   this.city = this.contentCity;
  //   this.country = this.contentCountry;
  //   this.email = this.contentEmail;
  //   this.DNI = this.contentDNI;
  // }

  clear() {
    this.contentName = '';
    this.contentLastName = '';
    this.contentCity = '';
    this.contentCountry = '';
    this.contentEmail = '';
    this.contentDNI = '';
  }
}
