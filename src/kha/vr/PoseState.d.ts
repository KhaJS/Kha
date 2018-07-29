
import * as khaModule from 'kha';

declare namespace kha.vr {

export class PoseState {

	constructor();
	Pose:khaModule.vr.Pose;
	AngularVelocity:khaModule.math.Vector3;
	LinearVelocity:khaModule.math.Vector3;
	AngularAcceleration:khaModule.math.Vector3;
	LinearAcceleration:khaModule.math.Vector3;
	TimeInSeconds:number;


}

}

export default kha.vr.PoseState;