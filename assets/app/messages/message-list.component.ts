import { Component } from "@angular/core";
import { Message } from "./message.model";
// import { MessageComponent } from "./message.component";
@Component({
    selector: 'app-message-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-message 
                [inputMessage]="message" 
                (editClicked)="message.content = $event" 
                *ngFor="let message of messages">
                </app-message>
        </div>
    `
})

export class MessageListComponent {
    messages: Message[] = [
        new Message('I love you.', 'Jovi'),
        new Message('I wont\'t forget you.', 'Jobi'),
        new Message('Uh-ha!', 'JobiJobi')
    ];
}