import {CGFobject} from '../lib/CGF.js';
/**
 * MyQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyPrism extends CGFobject {
	constructor(scene, slices,stacks) {
		super(scene);

        this.slices=slices; //what's the type of slices? do we have types in java
        this.stacks=stacks;

		this.initBuffers();
	}
	
	initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

		var ang=0;
        var alphaAng=(2*Math.PI)/this.slices;
        var floorHeight=1/this.stacks;

        for(var i=0; i<this.slices;i++){
            var floor=0;
            var floorCount=0;
            var sa=Math.sin(ang);
            var saa=Math.sin(ang+alphaAng);
            var ca=Math.cos(ang);
            var caa=Math.cos(ang+alphaAng);

            for(floor; floor<1; floor=floor+floorHeight,floorCount++){
                
                var roof=floor+floorHeight;
                this.vertices.push(ca,sa,floor);
                this.vertices.push(ca,sa,roof);
                this.vertices.push(caa,saa,floor);
                this.vertices.push(caa,saa,roof);

                var angNorm=ang+alphaAng/2;
                var normal=[Math.cos(angNorm),Math.sin(angNorm),0];

                // normalization
                var nsize=Math.sqrt(
                normal[0]*normal[0]+
                normal[1]*normal[1]+
                normal[2]*normal[2]
                );
                normal[0]/=nsize;
                normal[1]/=nsize;
                normal[2]/=nsize;

                for(var j=0;j<4;j++)
                    this.normals.push(...normal);
                
                var ind=4*i*this.stacks+4*floorCount;
                this.indices.push(ind,(ind+3),(ind+1));
                this.indices.push(ind,(ind+2),(ind+3));
            }
            ang+=alphaAng;
        }
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers(); //passes information to WebGL
	}
}