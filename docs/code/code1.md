### 如何给lottie 动态增加数据（更换图片，更改文字）



> 关键: 设计师那边要给要操作的地方 ，增加id ;
>
> 通过id,去操作要加数据的地方；







```javascript
//如果是动态图片，那么 设计师给的josn 生成的 svg, 格式必须是 ：
<g><image></image></g>,
    
//如果是文字，那么设计师要给的 json 生成的 svg,  格式必须
<g><text><tspan></tspan></text></g>
    
```



------









> 截图

![](/code/pic1.png)





```javascript
    _this.lottieFunc(boat, 'boat');
 
 
 
 lottieFunc: function(animationData, id){
        var _this = this;
        var params = {
            container: document.getElementById(id),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData
        };
        var anim;
   
        anim = lottie.loadAnimation(params);
        anim.addEventListener('DOMLoaded', () => {  
 
            const txt_1 = document.getElementById("txt_1");
            txt_1.querySelector("tspan").innerHTML = "拾亿";
 
            const txt_2= document.getElementById("txt_2");
            txt_2.querySelector("tspan").innerHTML = "距离100米";
      
            const txt_3 = document.getElementById("txt_3");
            txt_3.querySelector("tspan").innerHTML = "阿道夫";
 
            const txt_4= document.getElementById("txt_4");
            txt_4.querySelector("tspan").innerHTML = "距离98米";
 
            const txt_5 = document.getElementById("txt_5");
            txt_5.querySelector("tspan").innerHTML = "大师傅";
 
            const txt_6= document.getElementById("txt_6");
            txt_6.querySelector("tspan").innerHTML = "距离10米";
            
 
            $('#img_1').find('image').attr('href','/images/avatar.jpg');
            $('#h_2').find('image').attr('href','/images/logo.jpg');
            $('#h_3').find('image').attr('href','/images/content.png');
          });
```

