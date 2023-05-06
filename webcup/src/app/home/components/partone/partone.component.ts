import { Component, OnInit } from '@angular/core';
declare var VANTA: any;

@Component({
  selector: 'app-partone',
  templateUrl: './partone.component.html',
  styleUrls: ['./partone.component.scss']
})
export class PartoneComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    VANTA.CLOUDS({
      el: "#partone",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      skyColor: 0xb2a37,
      cloudColor: 0x7c91b1,
      cloudShadowColor: 0x13161,
      sunColor: 0x7a746c,
      sunGlareColor: 0xc2178,
      sunlightColor: 0xa7e8e,
      speed: 1.30
    })
  }
}
