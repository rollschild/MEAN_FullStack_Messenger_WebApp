import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Message } from "./message.model";
@Component({
    /*
    selector: '#something' <div id="something">
    */
    selector: 'app-message',
    templateUrl: './message.component.html',
    // need to hook it up with your app component
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class MessageComponent {
    @Input('inputMessage') message: Message; // assignable from outside
    @Output() editClicked = new EventEmitter<string>(); // EventEmitter is generic
    color = 'red';
    onEdit() {
        // alert('It\'s an alert and it worked!!!');
        this.editClicked.emit('I\'m gonna cum!!!'); // to emit a new event!!!
    }
}