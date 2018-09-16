
import * as khaModule from 'kha';

declare namespace kha.graphics1 {

export class Graphics {

	
	begin():void;
	end():void;
	setPixel(x:number, y:number, color:khaModule.Color):void;


}

}

export default kha.graphics1.Graphics;