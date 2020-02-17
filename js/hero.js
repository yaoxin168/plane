function createHero(w,h,canvas,imageURL,completeCallback){
    var context = canvas.getContext('2d');
    var timer;

    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;

    var x = canvasWidth /2 - w/2;
    var y = canvasHeight - h - 20;

    var hero = new Hero(x,y,w,h,imageURL,completeCallback);

    document.onkeydown = function(event){
        var event = event||window.event;
        switch(event.keyCode){
            case 37:{hero.left = true;break;}
            case 38:{hero.up = true;break;}
            case 39:{hero.right = true;break;}
            case 40:{hero.down = true;break;}
            case 32:{hero.fight = true;break;}
            case 81:{hero.speed = true;break;}
        }
    }

    document.onkeyup = function(event){
        var event = event||window.event;
        switch(event.keyCode){
            case 37:{hero.left = false;break;}
            case 38:{hero.up = false;break;}
            case 39:{hero.right = false;break;}
            case 40:{hero.down = false;break;}
            case 32:{hero.fight = false;break;}
            case 81:{hero.speed = false; myspeed = 4;break;}
        }
    }

    var myspeed = 4;
    var flag = 0;

    timer = setInterval(function(){
        if (hero.left == true){
            hero.x -= myspeed;
        }
        if (hero.up == true){
            hero.y -= myspeed;
        }
        if (hero.right == true){
            hero.x += myspeed;
        }
        if (hero.down == true){
            hero.y += myspeed;
        }
        if (hero.fight == true){
            hero.x += getRandForNum(-50,50);
        }
        if(hero.speed == true){
            myspeed = 20;
           
        }
    },10)

    return hero;
}

function Hero(x,y,w,h,imageURL,completeCallback){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.image = new Image();

    this.image.onload = function(){
        if(completeCallback){
            completeCallback(this);
        }
    }

    this.image.src = imageURL;

   
}

Hero.prototype.draw = function(canvas){
    var context = canvas.getContext('2d');
  
    var x = this.x;
    var y = this.y;
   
    var w = this.w;
    var h = this.h;
    context.drawImage(this.image,x,y,w,h);
  
}

Hero.prototype.isOutOffScreen = function(canvas){
    if (this.y > canvas.height || this.y < 0 || this.x < 0 || this.x > canvas.width){
        return true;
    }
    else{
        return false;
    }

}




/////
function getRandForNum(min,max){
    return Math.round(Math.random() * (max - min) + min);
}