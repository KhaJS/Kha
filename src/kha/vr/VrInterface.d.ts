
import * as khaModule from 'kha';

declare namespace kha.vr {

export class VrInterface {

	constructor();
	GetSensorState():khaModule.vr.SensorState;
	GetPredictedSensorState(time:any):khaModule.vr.SensorState;
	WarpSwapBlack():void;
	WarpSwapLoadingIcon():void;
	WarpSwap(parms:any):void;
	IsPresenting():boolean;
	IsVrEnabled():boolean;
	GetTimeInSeconds():number;
	GetProjectionMatrix(eye:any):khaModule.math.FastMatrix4;
	GetViewMatrix(eye:any):khaModule.math.FastMatrix4;
	onVRRequestPresent():void;
	onVRExitPresent():void;
	onResetPose():void;
	static instance:khaModule.vr.VrInterface;


}

}

export default kha.vr.VrInterface;