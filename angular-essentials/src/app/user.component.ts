import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './app.user.html',
})
export class UserComponent {
    @Input() name;
    @Output() nameChanged = new EventEmitter<string>();

    onUserInput(event) {
      this.nameChanged.emit(event.target.value);
    }
}
