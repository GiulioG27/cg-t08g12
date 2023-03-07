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
		this.vertices = [ //need to look for patterns
			//modified code compared to tp2
            //vertices on top
			-0.5,0.5, 0.5,	//0
			0.5, 0.5, 0.5,	//1
			0.5,0.5, -0.5,	//2
			-0.5,0.5, -0.5,	//3
            //vertices on bottom
            -0.5,-0.5, 0.5,	//4
			-0.5, -0.5, -0.5,//5
			0.5, -0.5, -0.5,//6
			0.5, -0.5, 0.5,	//7
		
			//vertices face
			-0.5,0.5, 0.5,	//8
			-0.5,-0.5, 0.5,	//9
			0.5, -0.5, 0.5,	//10
			0.5, 0.5, 0.5,	//11
			//vertices back
			0.5,0.5, -0.5,	//12
			0.5, -0.5, -0.5,//13
			-0.5, -0.5, -0.5,//14
			-0.5,0.5, -0.5,	//15
			//left face
			-0.5,0.5, -0.5,	//16
			-0.5, -0.5, -0.5,//17
			-0.5,-0.5, 0.5,	//18
			-0.5,0.5, 0.5,	//19
			//right face
			0.5, 0.5, 0.5,	//20
			0.5, -0.5, 0.5,	//21
			0.5, -0.5, -0.5,//22
			0.5,0.5, -0.5	//23
		];

		//Counter-clockwise reference of vertices
		this.indices = [ // 
			//top
            0, 1, 2,
            0, 2, 3,
            //bottom
            4, 5, 6,
            4, 6, 7,
            //front
            8, 9, 10,
            8, 10, 11,
			//back
            12, 13, 14,
            12, 14, 15,
			//left side
            16, 17, 18,
            16, 18, 19,
			//right side
            20, 21, 22,
            20, 22, 23
		];

		this.normals = [];
		//top
        for (var i = 0; i <4; i++) {
            this.normals.push(0, 1, 0);
        }
		//bottom
		for (var i = 0; i <4; i++) {
            this.normals.push(0, -1, 0);
        }
		//front
		for (var i = 0; i <4; i++) {
            this.normals.push(0, 0, 1);
        }
		//back
		for (var i = 0; i <4; i++) {
            this.normals.push(0, 0, -1);
        }
		//left side
		for (var i = 0; i <4; i++) {
            this.normals.push(-1, 0, 0);
        }
		//right side
		for (var i = 0; i <4; i++) {
            this.normals.push(1, 0, 0);
        }
		
		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers(); //passes information to WebGL
	}
	
}