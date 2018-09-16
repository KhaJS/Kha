import {default as Sound} from "./../../kha/Sound";
import {default as HxOverrides} from "./../../HxOverrides";
import {default as Browser} from "./../../js/Browser";
import {default as StringTools} from "./../../StringTools";
import * as khaModule from 'kha';

declare namespace kha.js {

export class Sound extends kha_Sound {

	constructor(filenames:Array<any>, done:any, failed:any);
	filenames:Array<any>;
	done(a1:Sound):void;
	failed(a1:khaModule.AssetError):void;
	element:any;
	errorListener(eventInfo:any):void;
	canPlayThroughListener(eventInfo:any):void;
	finishAsset():void;
	uncompress(done:any):void;
	static loading:Array<any>;


}

}

export default kha.js.Sound;