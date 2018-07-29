
import * as khaModule from 'kha';

declare namespace kha {

export class WindowedModeOptions {

	constructor(minimizable?:any, maximizable?:any, resizable?:any);
	minimizable:boolean;
	maximizable:boolean;
	resizable:boolean;


}

}

export default kha.WindowedModeOptions;