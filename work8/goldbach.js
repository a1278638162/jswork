function goldbach(func){
    
    let odd = parseInt(document.getElementById('odd').value)
    result.value = func(odd)
}

var y=odd,a=2,x=2;//x+(y-a) 第二步把可以加的都列出来 然后验证两个数字是否为质数
 for(a,x;a<=y&&x<=y;a++,x++){
        var i=y-a;  
        if(i>1){
           if(x+i==y){//   1+9  2+8 3+7 4+6 5+5 6+4 3+7 8+2 9+1
           if(a<=y/2)
            if(x%2!=0&&i%2!=0){//筛选质数
            console.log(y + "可以拆分为两个质数" + x + "与" + i)
       }
        }
    }
}