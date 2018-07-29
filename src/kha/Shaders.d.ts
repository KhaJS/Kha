import {default as Reflect} from "./../Reflect";
import {default as Unserializer} from "./../haxe/Unserializer";
import {default as BytesBlob} from "./../kha/internal/BytesBlob";
import {default as FragmentShader} from "./../kha/graphics4/FragmentShader";
import {default as VertexShader} from "./../kha/graphics4/VertexShader";
import * as khaModule from 'kha';

declare namespace kha {

export class Shaders {

	static painter_colored_fragData0:string;
	static painter_colored_fragData1:string;
	static painter_colored_fragData2:string;
	static painter_colored_frag:FragmentShader;
	static painter_colored_vertData0:string;
	static painter_colored_vertData1:string;
	static painter_colored_vertData2:string;
	static painter_colored_vert:VertexShader;
	static painter_image_fragData0:string;
	static painter_image_fragData1:string;
	static painter_image_fragData2:string;
	static painter_image_frag:FragmentShader;
	static painter_image_vertData0:string;
	static painter_image_vertData1:string;
	static painter_image_vertData2:string;
	static painter_image_vert:VertexShader;
	static painter_text_fragData0:string;
	static painter_text_fragData1:string;
	static painter_text_fragData2:string;
	static painter_text_frag:FragmentShader;
	static painter_text_vertData0:string;
	static painter_text_vertData1:string;
	static painter_text_vertData2:string;
	static painter_text_vert:VertexShader;
	static painter_video_fragData0:string;
	static painter_video_fragData1:string;
	static painter_video_fragData2:string;
	static painter_video_frag:FragmentShader;
	static painter_video_vertData0:string;
	static painter_video_vertData1:string;
	static painter_video_vertData2:string;
	static painter_video_vert:VertexShader;
	static init():void;


}

}

export default kha.Shaders;