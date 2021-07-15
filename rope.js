class Rope
{
    constructor(bodyA , pointB)
    {
        var options = {


            bodyA:bodyA,
            pointB:pointB,


            length : 10,
            stiffness:0.04



    



        }

        this.pointB = pointB

        this.rope = Constraint.create(options)

        World.add(world , this.rope)



    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
       
  
        line(pointB.x, pointB.y, pointA.x, pointA.y);
  
       



    }






}