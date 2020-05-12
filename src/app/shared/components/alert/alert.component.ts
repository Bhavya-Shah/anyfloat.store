import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.sass']
})
export class AlertComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  message: any;
  constructor(private alertService: AlertService) { }

  ngOnInit(): void {

    this.subscription = this.alertService.getAlert()
      .subscribe(message => {
        switch (message && message.type) {
          case 'success':
            message.cssClass = 'alert rounded-0 animate__animated animate__fadeInUp animate__fast';
            message.style = '5px solid green'
            break;
          case 'error':
            message.cssClass = 'alert rounded-0 animate__animated animate__fadeInUp animate__fast';
            message.style = '5px solid red'
            break;
            case 'end':
            message.cssClass = 'alert rounded- 0 animate__animated animate__fadeOutUp'
            break;
        }
        this.message = message;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
