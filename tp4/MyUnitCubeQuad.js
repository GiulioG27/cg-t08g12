import {CGFobject} from '../lib/CGF.js';
import { MyQuad } from './MyQuad.js';
/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {
	constructor(scene,topTex,frontTex,rTex,backTex,lTex,bottomTex) {
		super(scene);
        this.quad = new MyQuad(this.scene);
        this.topTex=topTex;
        this.frontTex=frontTex;
        this.rTex=rTex;
        this.backTex=backTex;
        this.lTex=lTex;
        this.bottomTex=bottomTex;
	}

    display() {

    
    this.scene.pushMatrix();
    this.scene.pushMatrix();

    //front
    this.scene.updateAppliedTexture(this.frontTex);
    this.scene.quadMaterial.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.scene.translate(0,0,0.5);
    this.quad.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

    //back
    this.scene.updateAppliedTexture(this.backTex);
    this.scene.quadMaterial.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.scene.rotate(Math.PI,0,1,0);
    this.scene.translate(0,0,0.5);
    this.quad.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

    //right
    this.scene.updateAppliedTexture(this.rTex);
    this.scene.quadMaterial.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.scene.rotate(Math.PI*0.5,0,1,0);
    this.scene.translate(0,0,0.5);
    this.quad.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

    //left
    this.scene.updateAppliedTexture(this.lTex);
    this.scene.quadMaterial.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.scene.rotate(Math.PI*1.5,0,1,0);
    this.scene.translate(0,0,0.5);
    this.quad.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

    //bottom
    this.scene.updateAppliedTexture(this.bottomTex);
    this.scene.quadMaterial.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.scene.rotate(Math.PI*0.5,1,0,0);
    this.scene.translate(0,0,0.5);
    this.quad.display();

    this.scene.popMatrix();
    //top
    this.scene.updateAppliedTexture(this.topTex);
    this.scene.quadMaterial.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    this.scene.rotate(Math.PI*1.5,1,0,0);
    this.scene.translate(0,0,0.5);
    this.quad.display();

    this.scene.popMatrix();
   
    }
    
}
