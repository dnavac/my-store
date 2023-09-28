import { Component, OnInit,Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit,OnChanges, AfterViewInit,OnDestroy {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<String>();
  imageDefault='./assets/images/books.jpg';
  counter=0;
  counterFn: number | undefined;

  constructor() {
    //before render
    //No async-- once time
    console.log('constructor', 'imgValue=>',this.img);

  }
  ngOnChanges(): void {
    //Before render
    // change inputs-- times
    console.log('ngOnChanges', 'imgValue=>',this.img);
  }

  ngOnInit(): void {
    //Before render
    // async -fetch --once time
    console.log('ngOnInit', 'imgValue=>',this.img);
    this.counterFn = window.setInterval(() => {
      this.counter +=1;
      console.log('run counter');
    },10000);
  }

  ngAfterViewInit(): void {
    //after render
    //handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    //delete
    console.log('ngOnDestroy');
    window.clearInterval(this.counterFn);

  }

  imgError(){
    this.img= this.imageDefault;

  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
