import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'assignment-four';
	oddList = [];
	evenList = [];

	OnGameStarted(intervalEvent: number) {
		if (intervalEvent % 2 == 0) {
			this.evenList.push(intervalEvent);
		} else {
			this.oddList.push(intervalEvent);
		}
	}

}
