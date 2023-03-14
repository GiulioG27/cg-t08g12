import {CGFobject} from '../lib/CGF.js';
/**
 * MyQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyCylinder extends CGFobject {
	constructor(scene, slices,stacks) {
		super(scene);

        this.slices=slices;
        this.stacks=stacks;

		this.initBuffers();
	}
	
	initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

		
        var alphaAng=(2*Math.PI)/this.slices;
        var floorHeight=1/this.stacks;
        var floorCount=0;
        for(var floor=0; floor<=1; floor=floor+floorHeight,floorCount++){
            var ang=0;
            var i=0;
            for(i; i<this.slices;i++){ //each vertex and normal have to be defined only once
                var sa=Math.sin(ang);
                var ca=Math.cos(ang);
                this.vertices.push(ca,sa,floor);
                var normal=[Math.cos(ang),Math.sin(ang),0];
                // normalization
                var nsize=Math.sqrt(
                    normal[0]*normal[0]+
                    normal[1]*normal[1]+
                    normal[2]*normal[2]
                );
                normal[0]/=nsize;
                normal[1]/=nsize;
                normal[2]/=nsize;
                this.normals.push(...normal);
                
                ang+=alphaAng;
            }
                  

        } 
        floorCount=0;
        for(var floor=0; floor<1-floorHeight; floor=floor+floorHeight,floorCount++){
            for(i=0; i<this.slices;i++){ //remember the module function
                this.indices.push(i%this.slices+this.slices*floorCount,(i+1)%this.slices+this.slices*floorCount,i+this.slices*(1+floorCount));
                this.indices.push(i+this.slices*(1+floorCount),(i+1)%this.slices+this.slices*floorCount,(i+1)%this.slices+this.slices*(1+floorCount));
            }
        }   
        
    
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers(); //passes information to WebGL
    }
}



