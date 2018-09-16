import {default as Type} from "./../Type";
import {default as TargetRectangle} from "./../kha/TargetRectangle";
import {default as Std} from "./../Std";
import {default as FastMatrix3} from "./../kha/math/FastMatrix3";
import * as khaModule from 'kha';

declare namespace kha {

export class Scaler {

	static targetRect(width:number, height:number, destinationWidth:number, destinationHeight:number, rotation:khaModule.ScreenRotation):TargetRectangle;
	static transformXDirectly(x:number, y:number, sourceWidth:number, sourceHeight:number, destinationWidth:number, destinationHeight:number, rotation:khaModule.ScreenRotation):number;
	static transformX(x:number, y:number, source:khaModule.Image, destination:khaModule.Canvas, rotation:khaModule.ScreenRotation):number;
	static transformYDirectly(x:number, y:number, sourceWidth:number, sourceHeight:number, destinationWidth:number, destinationHeight:number, rotation:khaModule.ScreenRotation):number;
	static transformY(x:number, y:number, source:khaModule.Image, destination:khaModule.Canvas, rotation:khaModule.ScreenRotation):number;
	static scale(source:khaModule.Image, destination:khaModule.Canvas, rotation:khaModule.ScreenRotation):void;
	static getScaledTransformation(width:number, height:number, destinationWidth:number, destinationHeight:number, rotation:khaModule.ScreenRotation):FastMatrix3;


}

}

export default kha.Scaler;