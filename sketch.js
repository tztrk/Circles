
let ponti=[];

function setup() {
  createCanvas(800, 600);
  for(let i=0; i<200; i++){
  ponti[i] = new pont(-20,-20)
  }
}


function draw() {
 strokeWeight(0.2);

  for(let i=0; i<100; i++){
  ponti[i].fall(); 
  ponti[i].display();}

}



function pont(x,y){
  this.x=x+random(20,800);//xekseni yayılım
  this.y=y+random(20,40);//yekseni yayılım
  this.ang=0;
  this.rnd=random(10,100);//sin değeri katsayı
  this.rnd2=random(1,10);//cos değeri katsayı
  this.rnd3=random(8,50);//çap
  this.rnd6=random(0,255);//renk
  this.rnd4=random(50,100);//büyük sin
  this.rnd5=random(20,40);//büyük cos
  this.angrnd=0.5;
  this.rnd7=random(150,200);//küçük sin
  this.rnd8=random(50,60);//küçük cos
  
  
  this.fall=function(){
    //küçük yarıçaplılar daha yavaş insin
    if(this.rnd3<20){
     this.sina=sin(frameCount/this.rnd7)*this.rnd
     this.cosa=this.ang+cos(frameCount/this.rnd8)*this.rnd2
     this.ang+=(this.rnd3/this.angrnd)/80}
    
    
    //büyük yarıçaplılar daha hızlı insin
    else{
     this.sina=sin(frameCount/this.rnd4)*this.rnd
     this.cosa=this.ang+cos(frameCount/this.rnd5)*this.rnd2
     this.ang+=(this.rnd3/this.angrnd)/200
        }
  }
    
  
  this.display=function(){
     this.colr1=map(this.sina*25,0,800,0,255)//sağdan sola renk değişimi
     this.colr2=map(this.cosa,600,0,0,255)//yukardan aşağıya renk değişimi
     this.c=color(this.colr1,this.colr2,this.rnd6)//daire renk
     this.s=color(this.colr2,this.rnd6,this.colr1)//stroke renk
    fill(this.c);
    stroke(0)
    circle(this.x+this.sina, this.y+this.cosa,this.rnd3)//çizdir
   
  }

}

  
 





