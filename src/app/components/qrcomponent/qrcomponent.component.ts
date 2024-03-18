import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-qrcomponent',
  templateUrl: './qrcomponent.component.html',
  styleUrls: ['./qrcomponent.component.scss'],
})
export class QrcomponentComponent  implements OnInit {

  constructor(private mCtrl:ModalController) {}
  confirmar(){
    return this.mCtrl.dismiss('mensaje','success');
  }
  ngOnInit() {}

}
