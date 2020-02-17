function getRandForNum(min,max){
    return Math.round(Math.random() * (max - min) + min);
}

function createEnemy(w,h,imageURL,canvas){
    var enemy = new Enemy(w,h,imageURL,canvas);
    return enemy;
}

function Enemy(w,h,imageURL,canvas){
    var canvasWidth = canvas.width;
   
    var x = getRandForNum(0,canvasWidth - w);
    this.x = x;
    this.y = -40;
    this.w = w;
    this.h = h;

    this.speed = getRandForNum(3,20);//敌机速度随机
  
    this.image = new Image();
    this.image.src = imageURL;
}

Enemy.prototype.draw = function(canvas){
    var context = canvas.getContext('2d');
    context.drawImage(this.image,this.x,this.y,this.w,this.h);
}

Enemy.prototype.move = function(){
   

    if(this.w == 50){
        this.x += getRandForNum(-40,40);
    }
    if(this.h == 200){
        
        this.xy += 50;
    } 
   
    this.y += this.speed;
}
Enemy.prototype.isOutOffScreen = function(canvas){
    if (this.y > canvas.height){
        return true;
    }
    else{
        return false;
    }

}

//碰撞检测
function isEnemyHitHero(obj1,obj2){
    var minX1 = obj1.x;
    var minY1 = obj1.y;
    var maxX1 = obj1.x + obj1.w;
    var maxY1 = obj1.y + obj1.h;

    var minX2 = obj2.x;
    var minY2 = obj2.y;
    var maxX2 = obj2.x + obj2.w;
    var maxY2 = obj2.y + obj2.h;


    var minX = Math.max(minX1,minX2);
    var minY = Math.max(minY1,minY2);
    var maxX = Math.min(maxX1,maxX2);
    var maxY = Math.min(maxY1,maxY2);

    if (minX < maxX && minY < maxY){
        return true;
    }
    else{
        return false;
    }
}