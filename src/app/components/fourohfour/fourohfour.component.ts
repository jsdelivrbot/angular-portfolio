import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourohfour',
  templateUrl: './fourohfour.component.html',
  styleUrls: ['./fourohfour.component.scss']
})
export class FourohfourComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.fourOhFour();
  }


  // fourOhFour(){
  //   let fonts = [
  //     "Helvetica",
  //     "Impact",
  //     "Times New Roman",
  //     "Arial",
  //     "Apple Chancery",
  //     "Courier New",
  //     "Verdana",
  //     "Palatino",
  //     "Garamond",
  //     "Bookman"
  //   ];

  //   let messages = [
  //     "404"
  //   ];

  //   const getRandomColor = () => {
  //     let letters = "0123456789ABCDEF";
  //     let color = "#";
  //     for (let i = 0; i < 6; i++) {
  //       color += letters[Math.floor(Math.random() * 16)];
  //       // console.log(color);
  //     }
  //     return color;

  //   }

  //   // function to generate the random message and add it to the div
  //   const callIt = () => {
  //     let randM = Math.floor(Math.random() * messages.length);            // Random Message
  //     let randF = Math.floor(Math.random() * fonts.length);               // Random Font
  //     let randT = Math.floor(Math.random() * (window.innerHeight - 100)); // Random Top
  //     let randL = Math.floor(Math.random() * (window.innerWidth - 100));  // Random Left

  //     console.log(randF);
  //     //   document.getElementById("theDiv").innerHTML += '<span style="font-family: ' + fonts[randF] + "; color:" + getRandomColor() + "; top:" + randT + "px; left:" + randL + 'px">' + messages[randM] + "</span>";

  //     document.getElementById('theDiv').innerHTML += `
  //                           <span 
  //                               style="
  //                                   font-family:${fonts[randF]}; 
  //                                   color:${getRandomColor()}; 
  //                                   top:${randT}px; 
  //                                   left:${randL}px">
  //                               ${messages[randM]}
  //                           </span>`;
  //   }

  //   window.setInterval(callIt, 10);
  // }
}
