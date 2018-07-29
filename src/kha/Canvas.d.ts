
import * as khaModule from 'kha';

declare namespace kha {

export class Canvas {

	
	get_g4():khaModule.graphics4.Graphics;
	get_g2():khaModule.graphics2.Graphics;
	get_g1():khaModule.graphics1.Graphics;
	get_height():number;
	get_width():number;
	width:number;
	height:number;
	g1:khaModule.graphics1.Graphics;
	g2:khaModule.graphics2.Graphics;
	g4:khaModule.graphics4.Graphics;


}

}

export default kha.Canvas;