
import * as khaModule from 'kha';

declare namespace kha.vr {

export class TimeWarpImage {

	constructor();
	Image:khaModule.Image;
	TexCoordsFromTanAngles:khaModule.math.Matrix4;
	Pose:khaModule.vr.PoseState;


}

}

export default kha.vr.TimeWarpImage;