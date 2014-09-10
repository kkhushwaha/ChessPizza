function moveBPWN()
{
alert("in move PAWN");
	
alert(" in moveWKING"+divid);

findex1=parseInt(divid.charAt(0)); //4

findex2=parseInt(divid.charAt(0)); //4
sindex1=parseInt(divid.charAt(1)) ; //2
 sindex2=parseInt(divid.charAt(1)); //2
 
 alert("findex1==="+findex1);
 alert("findex2==="+sindex1);
alert("before split");


count=0;

 
 if(findex1 == 6)
{
alert("in if");
  for(l=findex1-1,m=sindex1;l>=4;l--)
  {
   nextdivid =""+l+m;
  
   thediv=document.getElementById(nextdivid);
         if(l==3)
         {
               break;
         }
          else
         {
               if(thediv.innerHTML == ' ')
             {
                 thediv.style.backgroundColor='red';

             }
			 else
			 {
			 break;
			 }			 
			 
         }
   }
}
else
{

alert("hi");
     for(l=findex1-1,m=sindex1;l>=1;)
    {
        nextdivid =""+l+m;
		 thediv=document.getElementById(nextdivid);
      if(count != 1)
    { 

             if(thediv.innerHTML == ' ')
             {
                 thediv.style.backgroundColor='red';
				 count=count+1;
                   break;
             }
			 else
			 {
			 count=count+1;
			 break;
}
}
else
{
break;
}


}
}

/* for killing from black pawn*/


count1=0;
for(l=findex1-1,m=sindex1+1;l>=1&&m<=7;)
{
if(count1!=1)
{
 nextdivid =""+l+m;
 thediv1=document.getElementById(nextdivid);
  
 if(m<=7)
 {
  if(thediv1.innerHTML == ' ')
             {
			 break;
			 
			 }
			 
			 else
			 {
			  imgd=thediv1.childNodes[1].id;
	        alert(imgd);
              replacingEntity=imgd.charAt(0);
	
            alert("color of entity"+replacingEntity);
 
 
            if(replacingEntity!=colorOfEntity)
			{
            thediv1.style.backgroundColor='red';
            }
			 
                 //thediv1.style.backgroundColor='red';
				 count1=count1+1;
                   break;
             }
			 }
}


else
{

break;
}


}









































count2=0;
for(l=findex1-1,m=sindex1-1;l>=1&&m>=1;)
{
if(count2!=1)
{
 nextdivid =""+l+m;
 thediv1=document.getElementById(nextdivid);
  
 if(m>=1)
 {
  if(thediv1.innerHTML == ' ')
             {
			 break;
			 
			 }
			 
			 else
			 {
			  imgd=thediv1.childNodes[1].id;
	        alert(imgd);
              replacingEntity=imgd.charAt(0);
	
            alert("color of entity"+replacingEntity);
 
 
            if(replacingEntity!=colorOfEntity)
			{
            thediv1.style.backgroundColor='red';
            }
			 
                 //thediv1.style.backgroundColor='red';
				 count1=count1+1;
                   break;
             }
			 }
}


else
{

break;
}
}

}





















/*

for(l=findex1-1,m=sindex1;l>=1;)
{
if(count1!=2)
{
 nextdivid =""+l+(m-1);
 thediv1=document.getElementById(nextdivid);
 
 
 
 if((m-1)>=0)
 {
  if(thediv1.innerHTML != ' ')
             {
                 thediv1.style.backgroundColor='red';
				 count1=count1+1;
                   break;
             }
}

}
else
{

break;
}


}






}

*/