"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Album_id, _Album_title, _Album_picture;
Object.defineProperty(exports, "__esModule", { value: true });
var photoOrientation;
(function (photoOrientation) {
    photoOrientation[photoOrientation["Landscape"] = 0] = "Landscape";
    photoOrientation[photoOrientation["Protrai"] = 1] = "Protrai";
    photoOrientation[photoOrientation["Square"] = 2] = "Square";
    photoOrientation[photoOrientation["Panorama"] = 3] = "Panorama";
})(photoOrientation || (photoOrientation = {}));
// Get y Set
class Picture {
    constructor(id, title, orientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(o) {
        this._orientation = o;
    }
    // Comportamiento
    toString() {
        return `[id: ${this._id},
                 title: ${this._orientation},
                 orientation: ${this._orientation}
        ]`;
    }
}
class Album {
    constructor(id, title) {
        _Album_id.set(this, void 0);
        _Album_title.set(this, void 0);
        _Album_picture.set(this, void 0);
        __classPrivateFieldSet(this, _Album_id, id, "f");
        __classPrivateFieldSet(this, _Album_title, title, "f");
        __classPrivateFieldSet(this, _Album_picture, [], "f");
    }
    addPicture(picture) {
        __classPrivateFieldGet(this, _Album_picture, "f").push(picture);
    }
    get id() {
        return __classPrivateFieldGet(this, _Album_id, "f");
    }
    set id(id) {
        __classPrivateFieldSet(this, _Album_id, id, "f");
    }
    get title() {
        return __classPrivateFieldGet(this, _Album_title, "f");
    }
    set title(title) {
        __classPrivateFieldSet(this, _Album_title, title, "f");
    }
}
_Album_id = new WeakMap(), _Album_title = new WeakMap(), _Album_picture = new WeakMap();
const album = new Album(1, 'Personal Pictures');
const picture = new Picture(1, 'Selfies', photoOrientation.Square);
console.log('picture', picture); //get    
picture.id = 100; //set
picture.title = 'Another title';
album.title = 'Personal Activities';
console.log('album', album);
