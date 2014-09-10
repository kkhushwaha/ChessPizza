function globall(obj)
{
  //   alert("hello");
     
	  this.divid=obj.id;
	  alert(divid);
	  //var jing=new globall();
	  //jing=obj.id;
	  //alert(jing);
	 
	 
	 // var imgname=obj.childNodes[0].getElementsByTagName;
	// document.write(imgname);
 
       var imgid=obj.childNodes[1].id;
//	 alert(imgid);
	  
	var colorOfEntity=imgid.charAt(0);
	
	var entity=imgid.substring(1);
//	alert("entity"+entity);
	
	  if(colorOfEntity=='W' && entity=='KNIGHT')
	  moveWKNIGHT();
	  
	  
	  }
//	  alert("hello");
	  
	  
	
	  
	  
/*
function PawnMove(colorType,startPosition);
function RookMove(colorType,startPosition);

function KnightMove(colorType,startPosition);
function BishopMove(colorType,startPosition);

function Move(colorType,startPosition);
function rookMove(colorType,startPosition);
*/

function moveWKNIGHT()
{
//alert(" in moveWQUEEN"+divid);

findex1=parseInt(divid.charAt(0)); //5

findex2=parseInt(divid.charAt(0)); //5
sindex1=parseInt(divid.charAt(1))  //3
 sindex2=parseInt(divid.charAt(1))  //3

 var splitid=""+findex1+sindex2;
//alert("tempid"+splitid);



count=0;

//alert("in all for loops");

for(l=findex1+2,m=sindex1+1;m<=7;m++)
    {
//	alert("in first for loop");
	
	if(count!=1)
	{
	if((l<=7)&&(m<=7))
	{
	nextdivid =""+l+m;
//alert("in first for loop");
thediv=document.getElementById(nextdivid);

if(thediv.innerHTML == ' ')
{
thediv.style.backgroundColor='red';
count=count+1;
//alert("value of count in first loop"+count);
}
else
count=count+1;

}
else
break;

	 }
else
break;
	 }
	 
    

	 for(l=findex1+2,m=sindex1-1 ; m>=0 ;m--)
    {
	if(count!=2)
	{
	if((l<=7)&&(m>=0))
	{
	nextdivid =""+l+m;
//alert("in first for loop");
thediv=document.getElementById(nextdivid);

if(thediv.innerHTML == ' ')
{
thediv.style.backgroundColor='red';
count=count+1;
//alert("value of count in second loop"+count);

}
else
count=count+1;

}
	 }
else
break;
	 }
	 
	 
	 
	 
	 // for 61 below
	 
	 
	  for(l=findex1+1,m=sindex1-2; m>=0 ;m--)
    {
	if(count!=3)
	{
	if((l<=7)&&(m>=0))
	{
	nextdivid =""+l+m;
//alert("in first for loop");
thediv=document.getElementById(nextdivid);

if(thediv.innerHTML == ' ')
{
thediv.style.backgroundColor='red';
count=count+1;
//alert("value of count in third loop"+count);

}
else
count=count+1;
}
	 }
else
break;
	 }

	 
	 
	 
	 //for 65 below
	 
 for(l=findex1+1,m=sindex1+2; m<=7 ;m++)
    {
	if(count!=4)
	{
	if((l<=7)&&(m<=7))
	{
	nextdivid =""+l+m;
//alert("in first for loop");
thediv=document.getElementById(nextdivid);

if(thediv.innerHTML == ' ')
{
thediv.style.backgroundColor='red';
count=count+1;
//alert("value of count in fourth loop"+count);

}
else
count=count+1;

}
	 }
else
break;
	 }

	 
	 
	 	 //for 41 below
	 
 for(l=findex1-1,m=sindex1-2; m>=0 ;m--)
    {
	if(count!=5)
	{
	if((l>=0)&&(m>=0))
	{
	nextdivid =""+l+m;
//alert("in first for loop");
thediv=document.getElementById(nextdivid);

if(thediv.innerHTML == ' ')
{
thediv.style.backgroundColor='red';
count=count+1;
//alert(count);
//alert("value of count in fifth loop"+count);

}
else
count=count+1;
}
	 }
else
break;
	 }

	 
	// for 45 below
	
	

	
 for(l=findex1-1,m=sindex1+2; m<=7 ;m++)
    {
	if(count!=6)
	{
	if((l>=0)&&(m<=7))
	{
	nextdivid =""+l+m;
//alert("in first for loop");
thediv=document.getElementById(nextdivid);

if(thediv.innerHTML == ' ')
{
thediv.style.backgroundColor='red';
count=count+1;
//alert("value of count in sixth loop"+count);

}
else
count=count+1;
}
	 }
else
break;
	 }
	 
	 
	 // for 32
 for(l=findex1-2,m=sindex1-1; m>=0 ;m--)
    {
	if(count!=7)
	{
	if((l>=0)&&(m>=0))
	{
	nextdivid =""+l+m;
//alert("in first for loop");
thediv=document.getElementById(nextdivid);

if(thediv.innerHTML == ' ')
{
thediv.style.backgroundColor='red';
count=count+1;
//alert("value of count in seventh loop"+count);

}
else
count=count+1;
}
	 }
else
break;
	 }
	 
	 	 
	 
	 
	 // for 34
	 for(l=findex1-2,m=sindex1+1; m<=7 ;m++)
    {
	if(count!=8)
	{
	if((l>=0)&&(m<=7))
	{
	nextdivid =""+l+m;
//alert("in first for loop");
thediv=document.getElementById(nextdivid);

if(thediv.innerHTML == ' ')
{
thediv.style.backgroundColor='red';
count=count+1;
//alert("value of count in eigth loop"+count);

}
else
count=count+1;
}
	 }
else
break;
	 }
	
	 
	 }
	 
	 
	 








