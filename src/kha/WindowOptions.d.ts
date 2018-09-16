
import * as khaModule from 'kha';

declare namespace kha {

export class WindowOptions {

	constructor(width:number, height:number, mode?:any, title?:any, x?:any, y?:any, targetDisplay?:any, rendererOptions?:any, windowedModeOptions?:any);
	width:number;
	height:number;
	
	title:string;
	
	
	
	rendererOptions:khaModule.RendererOptions;
	windowedModeOptions:khaModule.WindowedModeOptions;


}

}

export default kha.WindowOptions;