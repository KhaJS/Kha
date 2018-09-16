import {default as Graphics2} from "./../../../kha/graphics4/Graphics2";
import {default as Boot} from "./../../../js/Boot";
import {default as Video} from "./../../../kha/js/Video";
import {default as SystemImpl} from "./../../../kha/SystemImpl";
import * as khaModule from 'kha';

declare namespace kha.js.graphics4 {

export class Graphics2 extends kha_graphics4_Graphics2 {

	constructor(canvas:khaModule.Canvas);
	drawVideoInternal(video:Video, x:number, y:number, width:number, height:number):void;
	begin(clear?:boolean, clearColor?:any):void;


}

}

export default kha.js.graphics4.Graphics2;