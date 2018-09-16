
import * as khaModule from 'kha';

declare namespace kha.math {

export class Matrix3 {

	constructor(_00:number, _10:number, _20:number, _01:number, _11:number, _21:number, _02:number, _12:number, _22:number);
	_00:number;
	_10:number;
	_20:number;
	_01:number;
	_11:number;
	_21:number;
	_02:number;
	_12:number;
	_22:number;
	static width:number;
	static height:number;


}

}

export default kha.math.Matrix3;