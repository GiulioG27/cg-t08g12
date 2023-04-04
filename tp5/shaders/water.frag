#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;

void main() {
	
    vec4 color1 = texture2D(uSampler, vTextureCoord);
    vec4 color2 = texture2D(uSampler2, vTextureCoord);
    
    float darkness = (color2.r + color2.g + color2.b) / 8.0;
    color1.rgb = color1.rgb*(1.0 - darkness);
    gl_FragColor = mix(color2, color1,color2.a);
	
	
}