
import * as khaModule from 'kha';

declare namespace _List {

export class ListIterator {

	constructor(head:any);
	head:ListNode;
	hasNext():boolean;
	next():T;


}

}

export default _List.ListIterator;