import { Component, OnInit } from "@angular/core";

@Component({
    selector:"test-comp",
    template:`<p>{{myMessage}}</p>`,
    styles:[``]
})
export class TestComponent implements OnInit{
    myMessage = "This is a new component";   
    ngOnInit() { 
        this.myMessage= "New message 1";
    }
    constructor(){
        this.myMessage= "New message";
    }
}
