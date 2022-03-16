/* 实现多个参数，多个物体运动互不影响
 * 大致参数如下：startMove(obj,json,fnEnd)
 *         obj：运动物体
 *         json：运动属性和运动目标值的json集合，{'width':200,'height':200}
 *         fnEnd：运动结束后的回调函数 
 */

  
//获取非行间样式
function getStyle(obj, name){
    if (obj.currentStyle){
        return obj.currentStyle[name];
    }else{
        return getComputedStyle(obj, false)[name];
    }
}
//封装的className方法
function getByClass(oParent, sClass){
    var aResult = [];
    var aEle = oParent.getElementsByTagName('*');
    for (var i = 0; i < aEle.length; i++){
        if (aEle[i].className == sClass){
            aResult.push(aEle[i]);
        }
    }
    return aResult;
}
//运动函数
//startMove(oDiv, {width: 400, height: 400})
function startMove(obj, json, fnEnd){
    clearInterval(obj.timer);
    obj.timer = setInterval(function (){
        // 设置一个锁，每次定时器执行时定义一个变量stop = true 可以停止，假设全部运动完成,结束
        var bStop = true;   
        // 循环遍历传进来的属性json，传进来的并不是一个，是很多个 
        for (var attr in json){
            var cur = 0;
            if(attr == 'opacity'){
                cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            }else{
                cur = parseInt(getStyle(obj, attr));
            }
            var speed = (json[attr] - cur) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if(cur != json[attr]){
                // 循环时，判断如果有一个当前值不等于目标值的时候，就让stop = false。不可以停止也就是继续运动，继续提取属性值
                bStop = false;
            }
            if(attr == 'opacity'){
                obj.style.opacity = (cur + speed) / 1000;
            }else{
                obj.style[attr] = cur + speed + 'px';
            }
        }
        //当循环结束时，也就是stop == true的时候就代表所有的值都到达目标值，此时就可以清空定时器，以上运动过程结束
        if(bStop){
            clearInterval(obj.timer);
            // 判断是否有回调函数，如果有，则直接调用回调函数
            if(fnEnd){
                fnEnd();
            }
        }
    }, 30);
}




//无缝
 function move (obj,speed) {
  //obj.innerHTML+=obj.innerHTML;
 	clearInterval(timer);
 timer=setInterval(function () {
 		
				if(-obj.offsetLeft>obj.offsetwidth / 2) {

					obj.style.left = 0 + "px";
				}
			
				
				if(obj.offsetLeft > 0) {
					obj.style.left = -obj.offsetWidth / 2 + "px"
				}
				obj.style.left = obj.offsetLeft + speed + "px";
 	},30);
	}		
  function tuozhuai () {
  	
  
			logc.onmousedown=function (ev) {
				var oEvent=ev||event;
				 disx=oEvent.clientX-logc.offsetLeft;
				 disy=oEvent.clientY-logc.offsetTop;
			document.onmousemove=function (ev) {
				var oEvent=ev||event;
				
				var t=oEvent.clientY-disy;
				var l=oEvent.clientX-disx;
				if(l<0){
				l=0;
					
				}
				if(l>document.documentElement.clientWidth-logc.offsetWidth){
						l=document.documentElement.clientWidth-logc.offsetWidth;
						
						
					}
					if(t<=0){
					t=0;
					
				}
					if(t>document.documentElement.clientHeight-logc.offsetHeight){
						t=document.documentElement.clientHeight-logc.offsetHeight;
						
						
					}
//										if(t>800-oBox.offsetHeight){
//						t=800-oBox.offsetHeight;
//						
//						
//					}
				logc.style.left=l+"px";
				logc.style.top=t+"px";
				
			}
			document.onmouseup=function () {
				document.onmousemove=null;
				logc.onmouseup=null;
			}
			
			
			
			}
		}






