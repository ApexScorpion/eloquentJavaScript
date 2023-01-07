const circle1 = {
    radius:1,
    location:{
        x:1,
        y:1
    },
    draw: function(){
        console.log("draw")
    }
};
//not ideal with behavior

//factory function
function createCircle(radius){
    return {
        radius: radius,//or radius,
        location:{
            x:1,
            y:1
        },
        draw: function(){
            console.log("draw")
        }
    };
}
const circle2 = createCircle(1);

//constructor function
function Circle(radius){
    console.log("this" , this);
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
}
const circle = new Circle(1);//new creates the object with the properties
circle.location = {x:1,y:1} 
circle.wes = {b:2,c:3}
console.log(circle);
delete circle.wes;



let x = {value:10};
let y = x; 

x.value = 20
y.value;



for (let key in circle){
    console.log(key), circle[key];
}
