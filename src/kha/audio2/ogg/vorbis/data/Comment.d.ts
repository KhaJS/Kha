import {default as Std} from "./../../../../../Std";
import {default as StringMap} from "./../../../../../haxe/ds/StringMap";
import * as khaModule from 'kha';

declare namespace kha.audio2.ogg.vorbis.data {

export class Comment {

	constructor();
	data:Map;
	title:string;
	get_title():any;
	
	get_loopStart():any;
	
	get_loopLength():any;
	version:string;
	get_version():any;
	album:string;
	get_album():any;
	organization:string;
	get_organization():any;
	tracknumber:string;
	get_tracknumber():any;
	performer:string;
	get_performer():any;
	copyright:string;
	get_copyright():any;
	license:string;
	get_license():any;
	artist:string;
	get_artist():any;
	description:string;
	get_description():any;
	genre:string;
	get_genre():any;
	date:string;
	get_date():any;
	location:string;
	get_location():any;
	contact:string;
	get_contact():any;
	isrc:string;
	get_isrc():any;
	artists:Array<any>;
	get_artists():any;
	add(key:string, value:string):void;
	getString(key:string):any;
	getArray(key:string):any;


}

}

export default kha.audio2.ogg.vorbis.data.Comment;