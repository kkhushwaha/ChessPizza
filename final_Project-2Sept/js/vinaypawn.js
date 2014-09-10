/*
function globall(obj)
{
     alert("hello");
     
	  this.divid=obj.id;
	  //alert(divid);
	  
	  
	  divx=parseInt(divid.charAt(0));
	 alert("divx="+divx);
	 
	 divy=parseInt(divid.charAt(1));
	 alert("divy="+divy);
	 
	  var imgname=obj.childNodes[0].getElementsByTagName;
	 // document.write(imgname);
 
       var imgid=obj.childNodes[1].id;
	 
	  
	var colorOfEntity=imgid.charAt(0);
	alert("color of entity="+colorOfEntity);
	
	
	var entity=imgid.substring(1);
	//alert("entity"+entity);
	
	
	  if(colorOfEntity=='W' && entity=='PAWN')
	  moveWPAWN();
	
} 
*/	 
function moveWPAWN()
{
//alert("in move PAWN");
	
//alert(" in moveWKING"+divid);

findex1=parseInt(divid.charAt(0)); //4

findex2=parseInt(divid.charAt(0)); //4
sindex1=parseInt(divid.charAt(1))  //2
 sindex2=parseInt(divid.charAt(1))  //2
 
 //alert("findex1==="+findex1);
 //alert("findex2==="+sindex1);
//alert("before split");

count=0;

 
 if(findex1 == 1)
{
//alert("in if");
  for(l=findex1+1,m=sindex1;l<=3;l++)
  {
   nextdivid =""+l+m;
   thediv=document.getElementById(nextdivid);
         if(l==4)
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

//alert("hi");
     for(l=findex1+1,m=sindex1;l<=6;)
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
