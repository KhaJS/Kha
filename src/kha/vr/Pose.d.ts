import {default as Quaternion} from "./../../kha/math/Quaternion";
import {default as Vector3} from "./../../kha/math/Vector3";
import * as khaModule from 'kha';

declare namespace kha.vr {

export class Pose {

	constructor();
	Orientation:Quaternion;
	Position:Vector3;


}

}

export default kha.vr.Pose;