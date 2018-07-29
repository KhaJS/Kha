
import * as khaModule from 'kha';

declare namespace kha.audio1 {

export class AudioChannel {

	
	play():void;
	pause():void;
	stop():void;
	length:number;
	get_length():number;
	position:number;
	get_position():number;
	volume:number;
	get_volume():number;
	set_volume(value:any):number;
	finished:boolean;
	get_finished():boolean;


}

}

export default kha.audio1.AudioChannel;