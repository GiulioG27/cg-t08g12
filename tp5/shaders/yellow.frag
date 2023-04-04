#ifdef GL_ES
precision highp float;
#endif

varying vec4 vertposition;


void main() {
    if(vertposition.y>0.5){
        gl_FragColor=vec4(1,1,0,1);
    }
    else
        gl_FragColor=vec4(0.5,0.48,0.8,1);
}


