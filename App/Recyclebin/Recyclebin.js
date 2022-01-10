/**
 * FreeWebKanban © 2022 Anderson Bucchianico. All rights reserved.
*/

import AVElement from '/modules/AVElement.js'
export default class Recyclebin extends AVElement {

    currentOnDragStickyNote;

    renderedCallback() {
        let recyclebin = this.body.querySelector('#recyclebin-container');
        recyclebin.addEventListener('drop', event => {this.recyclebinDrop(event)});
        recyclebin.addEventListener('dragover', event => {event.preventDefault()});
        recyclebin.addEventListener('dragenter', event => {this.recyclebinDragEnter(event)});
        recyclebin.addEventListener('dragleave', event => {this.recyclebinDragLeave(event)});
    }

    recyclebinDrop(event) {
        this.currentOnDragStickyNote = this.getParentComponents()[0].getChildrenComponents()[0].currentOnDragStickyNote
        if (this.currentOnDragStickyNote) {
            this.currentOnDragStickyNote.parentElement.parentElement.removeChild(this.currentOnDragStickyNote.parentElement);
            this.getParentComponents()[0].getChildrenComponents()[0].currentOnDragStickyNote = null;
            this.currentOnDragStickyNote = null;
        }
        event.target.style['animation-name'] = null;
    }

    recyclebinDragEnter(event) {
        event.target.style['animation-name'] = "sparkling";
    }

    recyclebinDragLeave(event) {
        console.log("recyclebinDragLeave", event);
        event.target.style['animation-name'] = null;
    }

    activateRecycleBin() {
        this.body.firstChild.style['display'] = 'flex';
    }

    deactivateRecycleBin() {
        this.body.firstChild.style['display'] = null;
    }
}