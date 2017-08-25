import { HomePage } from './../home/home';
import { ChronometerPage } from './../chronometer/chronometer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TimerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html',
})
export class TimerPage {
  public cookList = [
    {type:'oeuf', name:'coque', label: 'Oeuf à la coque', desc:'Oeuf à la coque', time:3, img: 'img/oeuf-a-la-coque.jpg', iconTimer:'img/sand-clock.jpg'},
    {type:'oeuf', name:'mollet', label: 'Oeuf de mollet', desc:'Oeuf de mollet', time:6, img: 'img/oeuf-mollet-2.jpg', iconTimer:'assets/icon/sand-clock.png'},
    {type:'oeuf', name:'dur', label: 'Oeuf dur', desc:'Oeuf dur', time:10, img: 'img/oeuf-dur.jpg', iconTimer:'img/sand-clock.jpg'},
    
    {type:'pates', name:'longue-aldente', label: 'pâtes longues', desc: 'Al dente', time:3, img: 'img/pates-longues.jpg', iconTimer:'../../assets/img/sand-clock.jpg'},
    {type:'pates', name:'longue-biencuite', label: 'pâtes longues', desc: 'Bien cuite', time:5, img: 'img/pates-longues.jpg', iconTimer:'../../assets/img/sand-clock.jpg'},
    {type:'pates', name:'petite-aldente', label: 'petites pâtes', desc: 'Al dente', time:4, img: 'img/pates-courtes.jpg', iconTimer:'../../assets/img/sand-clock.jpg'},
    {type:'pates', name:'petite-biencuite', label: 'petites pâtes', desc: 'Bien cuite', time:6, img: 'img/pates-courtes.jpg', iconTimer:'../../assets/img/sand-clock.jpg'},
    {type:'pates', name:'pates-sauce', label: 'pâtes à sauce', desc: 'pâtes à sauce', time:8, img: 'img/pates-sauce.jpg', iconTimer:'../../assets/img/sand-clock.jpg'},
    {type:'pates', name:'pates-fraiche-ravioli', label: 'pâtes fraiches ou ravioles fraiches', desc:'pâtes fraiches ou ravioles fraiches',time:1, img: 'img/ravioli.jpg', iconTimer:'../../assets/img/sand-clock.jpg'}
  
  ];
  public filter;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToChonometer(item, chronoTime) {
    // let data = {
    //   label:
    // };
    this.navCtrl.push(ChronometerPage, {data:item, time:chronoTime});
  }

  getFoodList() {
    let food = {
      oeuf: this.cookList.filter((item) => item.type == 'oeuf'),
      pates: this.cookList.filter((item) => item.type == 'pates')
    };

    return food[this.filter];
  }

  goToHome() {
    // this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimerPage');
  }

}
