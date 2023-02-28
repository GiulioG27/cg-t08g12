import {CGFobject} from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
import { MyTriangleBig } from "./MyTriangleBig.js";
/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);

        this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.triangleSmall = new MyTriangleSmall(this.scene);
        this.triangleBig = new MyTriangleBig(this.scene);
		
	}

    display() {
    this.scene.pushMatrix();
    var matrixDiamondTranslate=[ 
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        1, 0, 0, 1
    ]

    this.scene.multMatrix(matrixDiamondTranslate); 
    this.diamond.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

    this.scene.translate(0,-1,0);
    this.triangleSmall.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

    this.scene.rotate(Math.PI,0,0,1);
    this.scene.translate(-0.5,1,0);
    this.triangleSmall.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

    this.scene.scale(1,-1,1);
    this.scene.translate(-2.5,1,0);
    this.parallelogram.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

    this.scene.translate(-1,1,0);
    this.scene.rotate(Math.PI*1.5,0,0,1);
    this.triangleBig.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

    this.scene.scale(1,1.5,1);
    this.scene.rotate(Math.PI*.5,0,0,1);
    this.scene.translate(.5,2,0);
    this.triangle.display();

    this.scene.popMatrix();
    this.scene.scale(1.5,1.5,1);
    this.scene.rotate(Math.PI*.5,0,0,1);
    this.scene.translate(2,-0.33,0);
    this.triangleSmall.display();
    }
}
