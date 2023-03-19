import {CGFobject} from '../lib/CGF.js';
/**
 * MyTriangleBig
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTriangleBig extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			-2, 0, 0,	//0
			 2, 0, 0, 	//1
			 0, 2, 0	//2
		];
		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2
		];
		this.normals=[];
		for (var i = 0; i <3; i++) {
            this.normals.push(0, 0, 1);
        }
		this.texCoords=[
			1,1,
			1,0,
			0.5,0.5
		]

		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers(); //passes information to WebGL
	}
}