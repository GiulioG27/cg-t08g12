import {CGFobject} from '../lib/CGF.js';
/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
            //vertices on top
			-0.5,0.5, 0.5,	//0
			0.5, 0.5, 0.5,	//1
			0.5,0.5, -0.5,	//2
			-0.5,0.5, -0.5,	//3
            //vertices on bottom
            -0.5,-0.5, 0.5,	//4
			0.5, -0.5, 0.5,	//5
			0.5, -0.5, -0.5,//6
			-0.5, -0.5, -0.5//7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			//top
            0, 1, 2,
            0, 2, 3,
            //bottom
            4, 6, 5,
            4, 7, 6,
            //front
            0, 4, 5,
            1, 0, 5,
            //back
            2, 6, 7,
            3, 2, 7,
            //right side
            1, 5, 6,
            2, 1, 6,
            //left side
            0, 3, 7,
            0, 7, 4
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers(); //passes information to WebGL
	}
}