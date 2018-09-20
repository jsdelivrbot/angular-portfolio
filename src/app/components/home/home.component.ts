import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  imageUrl: string;
  images: string[];
  usedImages: string[];
  usedImagesCount = 0;

  constructor() { 
    this.imageUrl = '../.././assets/';
    this.images = ['404.gif', 
                    'agg.jpg', 
                    'junji.jpg', 
                    'alpha.jpg', 
                    'eva.jpg',
                    'mash.gif',
                    'sakura.gif'];
  }

  ngOnInit() {
  }

  generateRandomImg(){
    // for (let i = 0; i < this.images.length; i++){
    //   let randomNum = Math.floor(Math.random() * this.images.length);
    //   console.log(randomNum);
    //   return randomNum;
    // }

    let randomNum = Math.floor(Math.random() * this.images.length);
    // console.log(`random num`, randomNum);

    // if (!this.usedImages[randomNum]){

    // }
    return this.images[randomNum];
  }

}
