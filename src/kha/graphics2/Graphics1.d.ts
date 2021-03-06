import {default as Graphics} from "./../../kha/graphics1/Graphics";
import {default as Image} from "./../../kha/Image";
import {default as TextureFormat} from "./../../kha/graphics4/TextureFormat";
import {default as Usage} from "./../../kha/graphics4/Usage";
import {default as Color_Impl_} from "./../../kha/_Color/Color_Impl_";
import * as khaModule from 'kha';

declare namespace kha.graphics2 {

export class Graphics1 {

	constructor(canvas:khaModule.Canvas);
	canvas:khaModule.Canvas;
	texture:Image;
	pixels:any;
	begin():void;
	end():void;
	setPixel(x:number, y:number, color:Color_Impl_):void;


}

}

export default kha.graphics2.Graphics1;