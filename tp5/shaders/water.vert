attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform float timeFactor;
uniform sampler2D uSampler2;

varying vec2 vTextureCoord;

void main() {
    vec2 texCoord=vec2((aTextureCoord.x+timeFactor/50.0),(aTextureCoord.y+timeFactor/50.0));
    vec4 map=texture2D(uSampler2,texCoord);
    vec3 vertPos=aVertexPosition;
    vertPos.z=(1.0-map.r) * 0.05;
    gl_Position = uPMatrix * uMVMatrix * vec4(vertPos, 1.0);
	
	vTextureCoord = texCoord;
}


