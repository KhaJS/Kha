import {default as VrInterface} from "./../../../kha/vr/VrInterface";
import {default as SystemImpl} from "./../../../kha/SystemImpl";
import {default as Std} from "./../../../Std";
import {default as Log} from "./../../../haxe/Log";
import {default as HaxeError} from "./../../../js/_Boot/HaxeError";
import {default as SensorState} from "./../../../kha/vr/SensorState";
import {default as PoseState} from "./../../../kha/vr/PoseState";
import {default as Vector3} from "./../../../kha/math/Vector3";
import {default as Pose} from "./../../../kha/vr/Pose";
import {default as Quaternion} from "./../../../kha/math/Quaternion";
import {default as Scheduler} from "./../../../kha/Scheduler";
import {default as FastMatrix4} from "./../../../kha/math/FastMatrix4";
import * as khaModule from 'kha';

declare namespace kha.js.vr {

export class VrInterface extends kha_vr_VrInterface {

	constructor();
	vrEnabled:boolean;
	
	
	leftProjectionMatrix:FastMatrix4;
	rightProjectionMatrix:FastMatrix4;
	leftViewMatrix:FastMatrix4;
	rightViewMatrix:FastMatrix4;
	width:number;
	height:number;
	vrWidth:number;
	vrHeight:number;
	getVRDisplays():void;
	onVRRequestPresent():void;
	onVRExitPresent():void;
	onResetPose():void;
	onAnimationFrame(timestamp:number):void;
	onResize():void;
	GetSensorState():SensorState;
	GetPredictedSensorState(time:number):SensorState;
	WarpSwapBlack():void;
	WarpSwapLoadingIcon():void;
	WarpSwap(parms:khaModule.vr.TimeWarpParms):void;
	IsPresenting():boolean;
	IsVrEnabled():boolean;
	GetTimeInSeconds():number;
	GetProjectionMatrix(eye:number):FastMatrix4;
	GetViewMatrix(eye:number):FastMatrix4;
	createMatrixFromArray(array:any):FastMatrix4;
	createVectorFromArray(array:any):Vector3;
	createQuaternion(array:any):Quaternion;


}

}

export default kha.js.vr.VrInterface;