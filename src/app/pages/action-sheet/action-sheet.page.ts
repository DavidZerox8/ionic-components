import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor( private actionSheetCtrl: ActionSheetController ) { }

  ngOnInit() {
  }

  onClick(){
    this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Ejemplo de Action Sheet',
      subHeader: 'Subtítulo',
      cssClass: 'my-custom-class',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash-outline',
          cssClass: 'red-destructive',
          handler: () => {
            console.log('Delete clicked')
          },
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          icon: 'share-social-outline',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'alert-circle-outline',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    actionSheet.present();
  }

}
