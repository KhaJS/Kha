import {default as Browser} from "./../js/Browser";
import {default as Log} from "./../haxe/Log";
import {default as ScreenRotation} from "./../kha/ScreenRotation";
import {default as Boot} from "./../js/Boot";
import {default as Keyboard} from "./../kha/input/Keyboard";
import {default as MouseImpl} from "./../kha/input/MouseImpl";
import {default as Surface} from "./../kha/input/Surface";
import {default as Gamepad} from "./../kha/input/Gamepad";
import {default as GamepadStates} from "./../kha/GamepadStates";
import {default as System} from "./../kha/System";
import {default as CanvasImage} from "./../kha/CanvasImage";
import {default as Scheduler} from "./../kha/Scheduler";
import {default as CompilerDefines} from "./../kha/CompilerDefines";
import {default as Shaders} from "./../kha/Shaders";
import {default as Graphics} from "./../kha/js/graphics4/Graphics";
import {default as Framebuffer} from "./../kha/Framebuffer";
import {default as Graphics1} from "./../kha/graphics2/Graphics1";
import {default as Graphics2} from "./../kha/js/graphics4/Graphics2";
import {default as CanvasGraphics} from "./../kha/js/CanvasGraphics";
import {default as Audio} from "./../kha/audio2/Audio";
import {default as Audio1} from "./../kha/audio2/Audio1";
import {default as MobileWebAudio} from "./../kha/js/MobileWebAudio";
import {default as AudioElementAudio} from "./../kha/js/AudioElementAudio";
import {default as VrInterface} from "./../kha/vr/VrInterface";
import {default as VrInterface} from "./../kha/js/vr/VrInterface";
import {default as Std} from "./../Std";
import * as khaModule from 'kha';

declare namespace kha {

export class SystemImpl {

	
	static gl2:boolean;
	
	
	
	
	
	static _hasWebAudio:boolean;
	static khanvas:;
	
	static mobile:boolean;
	static ios:boolean;
	static mobileAudioPlaying:boolean;
	static chrome:boolean;
	static firefox:boolean;
	static ie:boolean;
	static insideInputEvent:boolean;
	static errorHandler(message:any, source:any, lineno:any, colno:any, error:any):boolean;
	static init(options:any, callback:any):void;
	static initEx(title:any, options:any, windowCallback:any, callback:any):void;
	static isMobile():boolean;
	static isIOS():boolean;
	static isChrome():boolean;
	static isFirefox():boolean;
	static isIE():boolean;
	static windowWidth(windowId?:any):number;
	static windowHeight(windowId?:any):number;
	static screenDpi():number;
	static setCanvas(canvas:any):void;
	static getScreenRotation():ScreenRotation;
	static getTime():number;
	static getVsync():boolean;
	static getRefreshRate():number;
	static getSystemId():string;
	static requestShutdown():void;
	static maxGamepads:number;
	static frame:Framebuffer;
	static pressedKeys:Array<any>;
	static leftMouseCtrlDown:boolean;
	static keyboard:Keyboard;
	static mouse:Mouse;
	static surface:Surface;
	static gamepads:Array<any>;
	static gamepadStates:Array<any>;
	static minimumScroll:number;
	static mouseX:number;
	static mouseY:number;
	static touchX:number;
	static touchY:number;
	static lastFirstTouchX:number;
	static lastFirstTouchY:number;
	static init2(backbufferFormat?:any):void;
	static getMouse(num:any):Mouse;
	static getKeyboard(num:any):Keyboard;
	static checkGamepad(pad:any):void;
	static loadFinished():void;
	static lockMouse():void;
	static unlockMouse():void;
	static canLockMouse():boolean;
	static isMouseLocked():boolean;
	static notifyOfMouseLockChange(func:any, error:any):void;
	static removeFromMouseLockChange(func:any, error:any):void;
	static unload(_:any):void;
	static setMouseXY(event:any):void;
	static iosSoundEnabled:boolean;
	static unlockiOSSound():void;
	static soundEnabled:boolean;
	static unlockSound():void;
	static mouseLeave():void;
	static mouseWheel(event:any):boolean;
	static mouseDown(event:any):void;
	static mouseLeftUp(event:any):void;
	static mouseMiddleUp(event:any):void;
	static mouseRightUp(event:any):void;
	static documentMouseMove(event:any):void;
	static mouseMove(event:any):void;
	static setTouchXY(touch:any):void;
	static iosTouchs:Array<any>;
	static touchDown(event:any):void;
	static touchUp(event:any):void;
	static touchMove(event:any):void;
	static touchCancel(event:any):void;
	static onBlur():void;
	static onFocus():void;
	static keycodeToChar(key:any, keycode:any, shift:any):string;
	static keyDown(event:any):void;
	static keyUp(event:any):void;
	static keyPress(event:any):void;
	static canSwitchFullscreen():boolean;
	static isFullscreen():boolean;
	static requestFullscreen():void;
	static exitFullscreen():void;
	static notifyOfFullscreenChange(func:any, error:any):void;
	static removeFromFullscreenChange(func:any, error:any):void;
	static changeResolution(width:any, height:any):void;
	static setKeepScreenOn(on:any):void;
	static loadUrl(url:any):void;
	static getGamepadId(index:any):string;
	static getGamepads():Array<any>;
	static getPen(num:any):khaModule.input.Pen;


}

}

export default kha.SystemImpl;