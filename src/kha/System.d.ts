import {default as WindowMode} from "./../kha/WindowMode";
import {default as SystemImpl} from "./../kha/SystemImpl";
import {default as HxOverrides} from "./../HxOverrides";
import * as khaModule from 'kha';

declare namespace kha {

export class System_Impl_ {

	static renderListeners:Array<any>;
	static foregroundListeners:Array<any>;
	static resumeListeners:Array<any>;
	static pauseListeners:Array<any>;
	static backgroundListeners:Array<any>;
	static shutdownListeners:Array<any>;
	static dropFilesListeners:Array<any>;
	static cutListener():string;
	static copyListener():string;
	static pasteListener(a1:any):void;
	static theTitle:string;
	static init(options:any, callback:any):void;
	static initEx(title:any, options:any, windowCallback:any, callback:any):void;
	static title:string;
	static get_title():string;
	static notifyOnRender(listener:any, id?:any):void;
	static removeRenderListener(listener:any, id?:any):void;
	static notifyOnApplicationState(foregroundListener:any, resumeListener:any, pauseListener:any, backgroundListener:any, shutdownListener:any):void;
	static notifyOnDropFiles(dropFilesListener:any):void;
	static notifyOnCutCopyPaste(cutListener:any, copyListener:any, pasteListener:any):void;
	static render(id:any, framebuffer:any):void;
	static foreground():void;
	static resume():void;
	static pause():void;
	static background():void;
	static shutdown():void;
	static dropFiles(filePath:any):void;
	static time:number;
	static get_time():number;
	static windowWidth(windowId?:any):number;
	static windowHeight(windowId?:any):number;
	static screenDpi():number;
	
	static get_screenRotation():khaModule.ScreenRotation;
	static vsync:boolean;
	static get_vsync():boolean;
	static refreshRate:number;
	static get_refreshRate():number;
	static systemId:string;
	static get_systemId():string;
	static requestShutdown():void;
	static changeResolution(width:any, height:any):void;
	static loadUrl(url:any):void;
	static canSwitchFullscreen():boolean;
	static isFullscreen():boolean;
	static requestFullscreen():void;
	static exitFullscreen():void;
	static notifyOnFullscreenChange(func:any, error:any):void;
	static removeFullscreenListener(func:any, error:any):void;


}

}

export default kha.System;