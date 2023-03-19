import {CGFobject} from '../lib/CGF.js';
/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			2, 0, 0,	//1
			3, 1, 0,	//2
            1, 1, 0,    //3
			0, 0, 0,	//4
			2, 0, 0,	//5
			3, 1, 0,	//6
            1, 1, 0     //7
		];
		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 3, //front
            1, 2, 3,
            7, 5, 4, //back
            7, 6, 5
		];
		this.normals=[];
		var n=-1
		for (var i = 0; i <8; i++) {
			if(i==4)n=1;
            this.normals.push(0, 0, n);
        }
		this.texCoords=[
			.25,0.75,
			0.75,0.75,
			1,1,
			0.5,1,
			.25,0.75,
			0.75,0.75,
			1,1,
			0.5,1
		]


		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers(); //passes information to WebGL
	}
}