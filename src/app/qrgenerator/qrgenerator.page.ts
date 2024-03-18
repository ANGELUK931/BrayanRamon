import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QrcomponentComponent } from '../components/qrcomponent/qrcomponent.component';

@Component({
  selector: 'app-qrgenerator',
  templateUrl: './qrgenerator.page.html',
  styleUrls: ['./qrgenerator.page.scss'],
})
export class QrgeneratorPage implements OnInit {

  constructor(private mCtrl:ModalController) {}

  ngOnInit() {
  }
  async openModal(){
    const modal = await this.mCtrl.create({
      component:QrcomponentComponent,
    });
    modal.present();
    const {data, role} = await modal.onWillDismiss();'5'
  }
}
