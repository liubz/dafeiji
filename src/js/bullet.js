


//子弹Bullet
class Bullet{
		 constructor(){
			//属性ele
		this.ele = document.createElement("div");
		this.id = parseInt(Math.random()*100000000);
			 this.init = function(){
				
				 //添加
				 gameEngine.allBullet[this.id] = this;
				 //console.log( gameEngine.allBullet );
				
				 gameEngine.ele.appendChild(this.ele);
				 this.ele.className = "bullet";
				 this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth/2 - 	this.ele.offsetWidth/2 + "px";
				 this.ele.style.top = myPlane.ele.offsetTop - this.ele.offsetHeight + "px";
				 return this;
			 }
			 this.move = ()=>{
				 let that = this;
				 this.timer = setInterval(function(){
					 let y = that.ele.offsetTop - 10;
					 if (y < -18) {
						 clearInterval(that.timer); //停止移动
						 gameEngine.ele.removeChild(that.ele); //移除子弹
						
						 //删除
						 delete gameEngine.allBullet[that.id];
					 }
					 else {
						 that.ele.style.top = y + "px"; //移动
					 }
				 }, 50);
			 }
			 //爆炸
			 this.boom = ()=>{
				 clearInterval(this.timer); //停止移动
				
				 this.ele.className = "bullet-die";
				 let [that,i]=[this,0]
				 //		let that = this;
				 let dieImgs = ["images2/die1.png", "images2/die2.png"];
				 //		let i = 0;
				 const dieTimer = setInterval(function(){
					 if (i >= 1){
						 clearInterval(dieTimer); //停止爆炸
						 gameEngine.ele.removeChild(that.ele); //移除子弹
					 }else {
						 that.ele.style.background = "url("+ dieImgs[++i] +") no-repeat";
					 }
				 }, 100);
			 }
		 }
	//属性ele
	//方法init
}
/*function Bullet(){
	//属性ele
	this.ele = document.createElement("div");
	this.id = parseInt(Math.random()*100000000);
	
	//方法init
	this.init = function(){
		
		//添加
		gameEngine.allBullet[this.id] = this;
		//console.log( gameEngine.allBullet );
		
		gameEngine.ele.appendChild(this.ele);
		this.ele.className = "bullet";
		this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth/2 - 	this.ele.offsetWidth/2 + "px";
		this.ele.style.top = myPlane.ele.offsetTop - this.ele.offsetHeight + "px";
		return this;
	}
	
	//方法move
	this.move = ()=>{
		let that = this;
		this.timer = setInterval(function(){
			let y = that.ele.offsetTop - 10;
			if (y < -18) {
				clearInterval(that.timer); //停止移动
				gameEngine.ele.removeChild(that.ele); //移除子弹
				
				//删除
				delete gameEngine.allBullet[that.id];
			}
			else {
				that.ele.style.top = y + "px"; //移动
			}
		}, 50);
	}
/!*	function(){
		let that = this;
		this.timer = setInterval(function(){
			let y = that.ele.offsetTop - 10;
			if (y < -18) {
				clearInterval(that.timer); //停止移动
				gameEngine.ele.removeChild(that.ele); //移除子弹
				
				//删除
				delete gameEngine.allBullet[that.id];
			}
			else {
				that.ele.style.top = y + "px"; //移动
			}
		}, 50);
	}*!/
	
	//爆炸
	this.boom = ()=>{
		clearInterval(this.timer); //停止移动
		
		this.ele.className = "bullet-die";
		let [that,i]=[this,0]
//		let that = this;
		let dieImgs = ["images2/die1.png", "images2/die2.png"]; 
//		let i = 0;
		const dieTimer = setInterval(function(){
			if (i >= 1){
				clearInterval(dieTimer); //停止爆炸
				gameEngine.ele.removeChild(that.ele); //移除子弹
			}else {
				that.ele.style.background = "url("+ dieImgs[++i] +") no-repeat";
			}
		}, 100);
	}
/!*	function(){
		clearInterval(this.timer); //停止移动
		
		this.ele.className = "bullet-die";
		let [that,i]=[this,0]
//		let that = this;
		let dieImgs = ["images2/die1.png", "images2/die2.png"]; 
//		let i = 0;
		const dieTimer = setInterval(function(){
			if (i >= 1){
				clearInterval(dieTimer); //停止爆炸
				gameEngine.ele.removeChild(that.ele); //移除子弹
			}else {
				that.ele.style.background = "url("+ dieImgs[++i] +") no-repeat";
			}
		}, 100);
	}*!/
	
}*/

