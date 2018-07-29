import {default as Std} from "./../../../../../Std";
import {default as StringMap} from "./../../../../../haxe/ds/StringMap";
import * as khaModule from 'kha';

declare namespace kha.audio2.ogg.vorbis.data {

export class Comment {

	constructor();
	data:Map;
	title:string;
	get_title():;
	
	get_loopStart():;
	
	get_loopLength():;
	version:string;
	get_version():;
	album:string;
	get_album():;
	organization:string;
	get_organization():;
	tracknumber:string;
	get_tracknumber():;
	performer:string;
	get_performer():;
	copyright:string;
	get_copyright():;
	license:string;
	get_license():;
	artist:string;
	get_artist():;
	description:string;
	get_description():;
	genre:string;
	get_genre():;
	date:string;
	get_date():;
	location:string;
	get_location():;
	contact:string;
	get_contact():;
	isrc:string;
	get_isrc():;
	artists:Array<any>;
	get_artists():;
	add(key:any, value:any):void;
	getString(key:any):;
	getArray(key:any):;


}

}

export default kha.audio2.ogg.vorbis.data.Comment;