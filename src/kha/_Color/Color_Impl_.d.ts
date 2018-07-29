import {default as Std} from "./../../Std";
import {default as StringTools} from "./../../StringTools";
import {default as HxOverrides} from "./../../HxOverrides";
import {default as HaxeError} from "./../../js/_Boot/HaxeError";
import * as khaModule from 'kha';

declare namespace kha._Color {

export class Color_Impl_ {

	static Black:khaModule.Color;
	static White:khaModule.Color;
	static Red:khaModule.Color;
	static Blue:khaModule.Color;
	static Green:khaModule.Color;
	static Magenta:khaModule.Color;
	static Yellow:khaModule.Color;
	static Cyan:khaModule.Color;
	static Purple:khaModule.Color;
	static Pink:khaModule.Color;
	static Orange:khaModule.Color;
	static Transparent:khaModule.Color;
	
	static fromValue(value:any):khaModule.Color;
	static fromBytes(r:any, g:any, b:any, a?:any):khaModule.Color;
	static fromFloats(r:any, g:any, b:any, a?:any):khaModule.Color;
	static fromString(value:any):khaModule.Color;
	static Rb:number;
	static Gb:number;
	static Bb:number;
	static Ab:number;
	
	
	
	
	static _new(value:any):khaModule.Color;
	static value:number;
	static get_value(this:any):number;
	static set_value(this:any, value:any):number;
	static get_Rb(this:any):number;
	static get_Gb(this:any):number;
	static get_Bb(this:any):number;
	static get_Ab(this:any):number;
	static set_Rb(this:any, i:any):number;
	static set_Gb(this:any, i:any):number;
	static set_Bb(this:any, i:any):number;
	static set_Ab(this:any, i:any):number;
	static get_R(this:any):khaModule.FastFloat;
	static get_G(this:any):khaModule.FastFloat;
	static get_B(this:any):khaModule.FastFloat;
	static get_A(this:any):khaModule.FastFloat;
	static set_R(this:any, f:any):khaModule.FastFloat;
	static set_G(this:any, f:any):khaModule.FastFloat;
	static set_B(this:any, f:any):khaModule.FastFloat;
	static set_A(this:any, f:any):khaModule.FastFloat;


}

}

export default kha._Color.Color_Impl_;