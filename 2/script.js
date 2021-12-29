
 class Circle {
    constructor(redius){
       this.radius = redius;
       }
    getArea(){
       return Math.PI*Math.pow(this.radius, 2)
    }
    getPerimeter(){
       return 2*Math.PI*this.radius
    }
 }
 
 
 //ایجادobject
 let circy=new Circle(11)
 let circy1 =new Circle(4.44)

 console.log(circy.getArea());
 console.log(circy1.getPerimeter());