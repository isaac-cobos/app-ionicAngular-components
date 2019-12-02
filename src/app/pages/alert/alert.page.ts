import { Component, OnInit, Output } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss']
})
export class AlertPage implements OnInit {
  constructor(public alertController: AlertController) {}
  nuevoNombre: String;

  ngOnInit() {}
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          handler: blah => {
            console.log('Cancel');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('ok');
          }
        }
      ]
    });

    await alert.present();
  }
  async changeNameHeader() {
    const input = await this.alertController.create({
      header: 'Input',
      subHeader: 'Ingresa tu nombre',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            console.log('Confirm Ok', data);
            let value = data;
            this.nuevoNombre = value.txtNombre;
          }
        }
      ]
    });

    await input.present();
  }
}
