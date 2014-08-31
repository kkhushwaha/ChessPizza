function moveRook(clicked_id)
{
var divId=clicked_id.id;


alert(divId);
for(i=divId;i>=(divId-divId%8);i--)
{ 

 alert(i);
 alert(i%8);
nextdivid =i;
if(nextdivid.innerHTML =='');
{

document.getElementById(nextdivid).style.backgroundColor='blue';
}

}


for(j=divId;j<=63;j++)
{ 
 //alert("in if");
 if(j%8!=0)
 {
 alert(j);
 alert(j%8);
nextdivid =j;
if(nextdivid.innerHTML =='');
{
//alert("no image in div"); 
document.getElementById(nextdivid).style.backgroundColor='blue';
}
}
else
{
        break;
}
}


for(k=divId+8;k<=63;k=k+8)
{
alert("in k loop");
alert(k);
   nextdivid =k;
if(nextdivid.innerHTML =='');
{
document.getElementById(nextdivid).style.backgroundColor='blue';
} 
}
}