import { Component } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  componentes: Componente[] = [
    {
      icon: 'cube-sharp',
      name: 'Action Sheet',
      redirectTo: '/action-sheet',
    },
    {
      icon: 'disc-sharp',
      name: 'Alert',
      redirectTo: '/alert',
    },
    {
      icon: 'person-circle-sharp',
      name: 'Avatar',
      redirectTo: '/avatar',
    },
    {
      icon: 'ellipsis-horizontal-circle-sharp',
      name: 'Button',
      redirectTo: '/button',
    },
    {
      icon: 'id-card-sharp',
      name: 'Card',
      redirectTo: '/card',
    },
    {
      icon: 'checkmark-done-circle-sharp',
      name: 'Check',
      redirectTo: '/check',
    }
  ];

  constructor() {}

}
