import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      backdropDismiss: false,
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlertButtons() {
    const alert = await this.alertController.create({
      header: 'Alert',
      backdropDismiss: false,
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Click on OK');
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'red-destructive',
          handler: () => {
            console.log('Click on Cancel');
          },
        },
      ],
    });

    await alert.present();

  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Please enter your info',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: ( data: any ) => {
            console.log(data);
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'red-destructive',
          handler: () => {
            console.log('Click on Cancel');
          },
        },
      ],
      backdropDismiss: false,
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
        },
        {
          name: 'nickname',
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          name: 'age',
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          name: 'description',
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();
  }

}
