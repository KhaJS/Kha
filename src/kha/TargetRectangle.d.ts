
import * as khaModule from 'kha';

declare namespace kha {

export class TargetRectangle {

	constructor(x:number, y:number, w:number, h:number, s:number, r:khaModule.ScreenRotation);
	x:number;
	y:number;
	width:number;
	height:number;
	scaleFactor:number;
	


}

}

export default kha.TargetRectangle;