import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController  } from 'ionic-angular';

/**
 * Generated class for the ChronometerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chronometer',
  templateUrl: 'chronometer.html',
})
export class ChronometerPage {
  public namePage: String;
  public typeCook: String;
  private timerId;
  private millis;
  private media;
  private millisReset;
  public timeDisplay = '00:00:00';
  public buttonName = 'Start';

  public buttonColor = 'secondary';

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController,
  private alertCtrl: AlertController) {
    let data = navParams.get('data');
    this.namePage = data.label;
    this.typeCook = data.desc;




    this.millis = navParams.get('time');
    this.millis = Number(this.millis) * 60 * 1000;
    this.millisReset = this.millis;

    this.timeDisplay = this.millisToMinutesAndSeconds(this.millis);

  }

  timerFunction() {
    this.timeDisplay = this.millisToMinutesAndSeconds(this.millis);
    this.millis -= 1000;
    if (this.millis < 0) {
      clearInterval(this.timerId);
      this.playSound();
      // this.showAndCloseToast();  
      this.showAndCloseAlert();    
    }
  }

  millisToMinutesAndSeconds(millis) {
    let hours = Math.floor(millis / 3600000);
    let minutes = Math.floor(millis / 60000);
    let seconds: any = ((millis % 60000) / 1000).toFixed(0);

    return (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  startOrStopTimer(valueButton) {
    if (valueButton == 'Stop') {
      this.buttonName = 'Start';
      this.buttonColor = 'secondary';
      clearInterval(this.timerId);
    } else {
      this.buttonName = 'Stop';
      this.buttonColor = 'danger';
      this.timerId = setInterval(this.timerFunction.bind(this), 100);
    }
  }

  resetTimer() {
    this.startOrStopTimer('Stop');
    this.timeDisplay = this.millisToMinutesAndSeconds(this.millisReset);
    this.millis = this.millisReset;
  }

  playSound() {
    this.media = new Audio();
    this.media.src = "assets" + '/sounds/Mp3-alarm-clock.mp3';
    this.media.load();
    this.media.play();
  }



  showAndCloseToast() {
    let toast = this.toastCtrl.create({
      message: "Temps de cuisson écoulé",
      position: 'middle',
      showCloseButton: true,
      closeButtonText: "Stop",
      cssClass: "yourCssClassName"
    });

    toast.onDidDismiss(() => {
      this.media.pause();
    });

    toast.present();
  }

  showAndCloseAlert() {
    let alert = this.alertCtrl.create({
      title: 'Timer Cuisson',
      subTitle: 'Temps de cuisson écoulé',
      buttons: ['OK']
    });
    alert.onDidDismiss(()=>{
      this.media.pause();
    });
    alert.present();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ChronometerPage');
  }

}
