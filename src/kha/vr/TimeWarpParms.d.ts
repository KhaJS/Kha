
import * as khaModule from 'kha';

declare namespace kha.vr {

export class TimeWarpParms {

	constructor();
	LeftImage:khaModule.vr.TimeWarpImage;
	RightImage:khaModule.vr.TimeWarpImage;
	LeftOverlay:khaModule.vr.TimeWarpImage;
	RightOverlay:khaModule.vr.TimeWarpImage;


}

}

export default kha.vr.TimeWarpParms;