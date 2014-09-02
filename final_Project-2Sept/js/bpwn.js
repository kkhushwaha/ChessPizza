function moveBPWN()
{
alert("in move PAWN");
	
alert(" in moveWKING"+divid);

findex1=parseInt(divid.charAt(0)); //4

findex2=parseInt(divid.charAt(0)); //4
sindex1=parseInt(divid.charAt(1))  //2
 sindex2=parseInt(divid.charAt(1))  //2
 
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




}
