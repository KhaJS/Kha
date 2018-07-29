
import * as khaModule from 'kha';

declare namespace kha.vr {

export class SensorState {

	constructor();
	Predicted:khaModule.vr.PoseState;
	Recorded:khaModule.vr.PoseState;
	Temperature:number;
	Status:number;


}

}

export default kha.vr.SensorState;