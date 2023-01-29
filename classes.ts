class Ball {
    // Properties
    /*
        dist = 
        vel = 
        xpos
        ypos
        dir = use an enumerable type to this
    */

    static INITIAL_X = 0;
    static INITIAL_Y = 0;
    static INITIAL_VEL = 0;
    static INITIAL_DIR = 0;
    static INITIAL_DIST = 0;

    private dist : number;
    private vel: number;
    private xpos: number;
    private ypos : number;
    private dir: number; 

    constructor(){
        this.dist = Ball.INITIAL_DIST;
        this.vel  = Ball.INITIAL_VEL;
        this.xpos = Ball.INITIAL_X;
        this.ypos = Ball.INITIAL_Y;
        this.dir  = Ball.INITIAL_DIR;
    }
    get distance() : number{
        return this.dist;
    }
    get velocity() : number{
        return this.vel;
    }
    get xPosition() : number{
        return this.xpos;
    }
    get yPosition() : number{
        return this.ypos;
    }
    get direction() : number{
        return this.dir;
    }
}

// class Paddle{
//     constructor(){

//     }
// }
