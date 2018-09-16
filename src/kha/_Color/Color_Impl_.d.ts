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
	
	static fromValue(value:number):khaModule.Color;
	static fromBytes(r:number, g:number, b:number, a?:number):khaModule.Color;
	static fromFloats(r:khaModule.FastFloat, g:khaModule.FastFloat, b:khaModule.FastFloat, a?:khaModule.FastFloat):khaModule.Color;
	static fromString(value:string):khaModule.Color;
	static Rb:number;
	static Gb:number;
	static Bb:number;
	static Ab:number;
	
	
	
	
	static _new(value:number):khaModule.Color;
	static value:number;
	static get_value(this:number):number;
	static set_value(this:number, value:number):number;
	static get_Rb(this:number):number;
	static get_Gb(this:number):number;
	static get_Bb(this:number):number;
	static get_Ab(this:number):number;
	static set_Rb(this:number, i:number):number;
	static set_Gb(this:number, i:number):number;
	static set_Bb(this:number, i:number):number;
	static set_Ab(this:number, i:number):number;
	static get_R(this:number):khaModule.FastFloat;
	static get_G(this:number):khaModule.FastFloat;
	static get_B(this:number):khaModule.FastFloat;
	static get_A(this:number):khaModule.FastFloat;
	static set_R(this:number, f:khaModule.FastFloat):khaModule.FastFloat;
	static set_G(this:number, f:khaModule.FastFloat):khaModule.FastFloat;
	static set_B(this:number, f:khaModule.FastFloat):khaModule.FastFloat;
	static set_A(this:number, f:khaModule.FastFloat):khaModule.FastFloat;


}

}

export default kha._Color.Color_Impl_;