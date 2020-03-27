import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-game-controll',
	templateUrl: './game-controll.component.html',
	styleUrls: ['./game-controll.component.css']
})
export class GameControllComponent implements OnInit {
	eventNumber: number = 0;
	intervalRef: any;
	@Output() gameStarted = new EventEmitter<Number>();

	constructor() { }

	ngOnInit() {
	}

	onGameStart() {
		
		this.intervalRef = setInterval(() => {
			this.eventNumber++;
			this.emitEvent(this.eventNumber);
		}, 1000);
		
		return this.intervalRef

	}
	
	onGameStop() {
		clearInterval(this.intervalRef);
		this.eventNumber = 0;
	}
	
	emitEvent(eventNumber: number) {
		this.gameStarted.emit(eventNumber);
	}


}