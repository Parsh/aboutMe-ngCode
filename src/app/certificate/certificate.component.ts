import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'me-certificate',
  templateUrl: './certificate.component.html',
  styles: []
})
export class CertificateComponent  {

  private certificateName:string;
  private baseString = "../../assets/img/certificates/"
  private certificateSrc : string;

  constructor(private activatedRoute : ActivatedRoute) {
      this.certificateName = activatedRoute.snapshot.params['name'];
      this.certificateSrc = this.baseString + this.certificateName +".jpg";
  }

}
