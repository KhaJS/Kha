import {default as HaxeError} from "./js/_Boot/HaxeError";
import {default as Lib} from "./js/Lib";
import * as khaModule from 'kha';



export class HxOverrides {

	static strDate(s:any):;
	static cca(s:any, index:any):;
	static substr(s:any, pos:any, len?:any):string;
	static remove(a:any, obj:any):boolean;
	static iter(a:any):;


}

export default HxOverrides;