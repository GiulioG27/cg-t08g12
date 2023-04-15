import {CGFobject} from '../lib/CGF.js';
/**
 * MySphere
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MySphere extends CGFobject {
	constructor(scene, slices,stacks) {
		super(scene);

        this.slices=slices; 
        this.stacks=stacks*2;

        this.minS = 0;
		this.maxS = 1;
		this.minT = 0;
		this.maxT = 1;
		this.q = (this.maxS - this.minS) / this.slices;
		this.w = (this.maxT - this.minT) / this.stacks;
		this.initBuffers();
	}
	
	initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords=[];

		var ang=0;
        var alphaAng=(2*Math.PI)/this.slices;
        
        var betaAng=(Math.PI)/this.stacks;
        var floorCount=0;
        var heightAng=-Math.PI/2;

        do{
            
            var floor=Math.sin(heightAng);
            var ang=0;
            var height=Math.sin(heightAng);
            var i=0;
            for(i; i<=this.slices;i++){ //each vertex and normal have to be defined only once
                var sa=-Math.cos(heightAng)*Math.sin(ang);
                var ca=Math.cos(heightAng)*Math.cos(ang);
                this.vertices.push(ca,height,sa);
                var normal=[ca,height,sa];
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

                this.texCoords.push(this.minS + i * this.q,1-(this.minT + floorCount * this.w));
                
                ang+=alphaAng;
            }    
            heightAng+=betaAng;
            floorCount++;
        } while(floor!=1);

        for(floorCount=0; floorCount<this.stacks;floorCount++){
            for(i=0; i<this.slices;i++){ //remember the module function
                this.indices.push(i%(this.slices+1)+(this.slices+1)*floorCount,(i+1)%(this.slices+1)+(this.slices+1)*floorCount,i+(this.slices+1)*(1+floorCount));
                this.indices.push(i+(this.slices+1)*(1+floorCount),(i+1)%(this.slices+1)+(this.slices+1)*floorCount,(i+1)%(this.slices+1)+(this.slices+1)*(1+floorCount));
            }
        }
        this.primitiveType=this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}