let userInput= document.getElementById("date");
userInput.max= new Date().toISOString().split("T")[0];
let result = document.getElementById("result");
function calculateAge(){
    let birthDate = new Date(userInput.value);
    let d1= birthDate.getDate();
    let m1= birthDate.getMonth()+1;
    let y1= birthDate.getFullYear();
    let today = new Date();
    console.log(today);
    let d2= today.getDate();
    let m2=today.getMonth()+1;
    let y2=today.getFullYear();
    let d3,m3,y3;
    y3=y2-y1;
    if(m2>=m1)
    {
        m3=m2-m1;
    }
    else{
        y3--;
        m3=12+m2-m1;
    }
    if(d2>=d1){
        d3=d2-d1;
    }
    else{
        m3--;
        d3=getDayninMonth(y3,m3)+d2-d1;
    }
    if(m3<0){
        m3=11;
        y3--;
    }
    let m4=(y3*12)+m3;
    let d4= (noofdays(y1,y2,m2,m1,d1,d2));
    let w1=parseInt(d4/7);
    let d5= d4%7;
    result.innerHTML = `You are <span>${y3}</span> years,<span>${m3}</span> months and <span>${d3}</span> days old <br>or- <span>${m4}</span> months and <span>${d3}</span> days old<br>or- <span>${d4}</span> days old<br>or- <span>${w1}weeks</span> and <span>${d5}</span> days old`
    
}
function getDayninMonth(y,m){
    return new Date(y,m,0).getDate();
}
function noofdays(y,y1,m,m1,d1,d2){
    let i,j,d=0;    
    for(i=y+1;i<y1;i++)
    {
        if(i%4==0)
            d+=366;
        else
            d+=365;
    }
    console.log(d);    
    for(i=1;i<m;i++)
        d+= getDayninMonth(y1,i); 
    console.log(d);
    d+= d2;  
    console.log(d);    
    for(i=m1+1;i<=12;i++)
        d+= getDayninMonth(y,i);
    console.log(d);
    d+= (getDayninMonth(y,m1)-d1);
    console.log(d);
    return d;
}