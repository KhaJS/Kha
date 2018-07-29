
import * as khaModule from 'kha';

declare namespace kha {

export class RendererOptions {

	constructor(textureFormat?:any, depthStencilFormat?:any, samplesPerPixel?:any);
	
	depthStencilFormat:khaModule.graphics4.DepthStencilFormat;
	samplesPerPixel:number;


}

}

export default kha.RendererOptions;