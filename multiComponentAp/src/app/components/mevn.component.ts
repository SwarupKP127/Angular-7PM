import { Component } from '@angular/core'

@Component({
    selector : "mevn",
    template : '<h1 style="color: green;">{{ sub_three }}</h1>'
})

export class mevnComponent{
    sub_three : string ="MEVN Stack development...!";
};