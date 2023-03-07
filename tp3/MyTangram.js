import {CGFobject,CGFappearance} from '../lib/CGF.js';
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

        this.initMaterials();
        this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.triangleSmall = new MyTriangleSmall(this.scene);
        this.triangleBig = new MyTriangleBig(this.scene);
		
	}
    initMaterials() {
        
        // Orange Specular
        this.orange = new CGFappearance(this.scene);
        this.orange.setAmbient(1, 0.6, 0.2, 1.0);
        this.orange.setDiffuse(1, 0.6, 0.2, 1.0);
        this.orange.setSpecular(1, 0.6, 0.2, 1.0);
        this.orange.setShininess(10.0);

        //Yellow Specular
        this.yellow = new CGFappearance(this.scene);
        this.yellow.setAmbient(1, 1, 0, 1.0);
        this.yellow.setDiffuse(1, 1, 0, 1.0);
        this.yellow.setSpecular(1, 1, 0, 1.0);
        this.yellow.setShininess(10.0);

        //Pink Specular
        this.pink = new CGFappearance(this.scene);
        this.pink.setAmbient(1, 0.6, 0.9, 1.0);
        this.pink.setDiffuse(1, 0.6, 0.9, 1.0);
        this.pink.setSpecular(1, 0.6, 0.9, 1.0);
        this.pink.setShininess(10.0);

        //Red Specular
        this.red = new CGFappearance(this.scene);
        this.red.setAmbient(1, 0, 0, 1.0);
        this.red.setDiffuse(1, 0, 0, 1.0);
        this.red.setSpecular(1, 0, 0, 1.0);
        this.red.setShininess(10.0);

        //Violet Specular
        this.violet = new CGFappearance(this.scene);
        this.violet.setAmbient(.6, 0, 0.8, 1.0);
        this.violet.setDiffuse(0.6, 0, 0.8, 1.0);
        this.violet.setSpecular(0.6, 0, 0.8, 1.0);
        this.violet.setShininess(10.0);

        //Green Specular
        this.green = new CGFappearance(this.scene);
        this.green.setAmbient(0.5, 1, 0, 1.0);
        this.green.setDiffuse(0.5, 1, 0, 1.0);
        this.green.setSpecular(0.5, 1, 0, 1.0);
        this.green.setShininess(10.0);

        //Light Blue Specular
        this.lightblue = new CGFappearance(this.scene);
        this.lightblue.setAmbient(0.3, 0.6, 1, 1.0);
        this.lightblue.setDiffuse(0.3, 0.6, 1, 1.0);
        this.lightblue.setSpecular(0.3, 0.6, 1, 1.0);
        this.lightblue.setShininess(10.0);

    }

    display() {
    //the material shown is the one applied that's why the materials
    //defined in MyScene do not affect the objects that are contained in My Tangram.
    //For each object the last material applied is the one called right before it's display
    this.scene.pushMatrix();
    var matrixDiamondTranslate=[ 
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        1, 0, 0, 1
    ]

    this.scene.multMatrix(matrixDiamondTranslate); 
    this.scene.materials[3].apply();
    this.diamond.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

    this.scene.translate(0,-1,0);
    this.red.apply();
    this.triangleSmall.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

    this.scene.rotate(Math.PI,0,0,1);
    this.scene.translate(-0.5,1,0);
    this.violet.apply();
    this.triangleSmall.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

    this.scene.scale(1,-1,1);
    this.scene.translate(-2.5,1,0);
    this.yellow.apply();
    this.parallelogram.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

    this.scene.translate(-1,1,0);
    this.scene.rotate(Math.PI*1.5,0,0,1);
    this.orange.apply();
    this.triangleBig.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

    this.scene.scale(1,1.5,1);
    this.scene.rotate(Math.PI*.5,0,0,1);
    this.scene.translate(.5,2,0);
    this.lightblue.apply();
    this.triangle.display();

    this.scene.popMatrix();
    this.scene.scale(1.5,1.5,1);
    this.scene.rotate(Math.PI*.5,0,0,1);
    this.scene.translate(2,-0.33,0);
    this.pink.apply();
    this.triangleSmall.display();
    }

    enableNormalViz(){
        this.diamond.enableNormalViz();
        this.triangleSmall.enableNormalViz();
        this.triangleSmall.enableNormalViz();
        this.parallelogram.enableNormalViz();
        this.triangleBig.enableNormalViz();
        this.triangle.enableNormalViz();
        this.triangleSmall.enableNormalViz();
    }
    disableNormalViz(){
        this.diamond.disableNormalViz();
        this.triangleSmall.disableNormalViz();
        this.triangleSmall.disableNormalViz();
        this.parallelogram.disableNormalViz();
        this.triangleBig.disableNormalViz();
        this.triangle.disableNormalViz();
        this.triangleSmall.disableNormalViz();
    }
    updateBuffers(){};
}
