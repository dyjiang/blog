### js复制



```javascript
 $('.list').on('click', '.share', function () {
            var id = $(this).parent().parent().attr('data-id');
            var url =location.href+ '/rewardTools/rewardDetail?template_id=' + id;
            console.log('分享。。', url);
            if (url) {
                _this.alert('复制成功');
            }
            var aux = document.createElement("input");
            aux.setAttribute("value", url);
            document.body.appendChild(aux);
            aux.select();
            document.execCommand("Copy"); //原生copy方法执行浏览器复制命令
            document.body.removeChild(aux); //清除input
   });
```

