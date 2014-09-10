function globall(obj)
{
    // alert("hello");
     
	  this.divid=obj.id;
	  //alert(divid);
	  
	  
	  divx=parseInt(divid.charAt(0));
//alert("divx="+divx);
	 
	 divy=parseInt(divid.charAt(1));
//	 alert("divy="+divy);
	 
	  var imgname=obj.childNodes[0].getElementsByTagName;
	 // document.write(imgname);
 
       var imgid=obj.childNodes[1].id;
	 
	  
	var colorOfEntity=imgid.charAt(0);
//	alert("color of entity="+colorOfEntity);
	
	
	var entity=imgid.substring(1);
	//alert("entity"+entity);
	
	
	  if(colorOfEntity=='W' && entity=='KING')
	  moveWKING();
	
	  
	  
	 } 

	 
	 
	function moveWKING()
	{
//	alert("in move king");
	
	
	
	
//alert(" in moveWKING"+divid);

findex1=parseInt(divid.charAt(0)); //4

findex2=parseInt(divid.charAt(0)); //4
sindex1=parseInt(divid.charAt(1))  //2
 sindex2=parseInt(divid.charAt(1))  //2
//alert("before split");
 var splitid=""+findex1+sindex2;
//alert("tempid"+splitid);

count=0;
// alert("before loop");
// alert("for 41");
   for(i=findex1+1,l=sindex1;i<=7;i++)
   {
   
   if(count!=1)
   {
  // alert("after loop");
   nextdivid =""+i+l;
   thediv=document.getElementById(nextdivid);
            if(thediv.innerHTML == ' ')
			{
//alert("in if");
				thediv.style.backgroundColor='red';
				count=count+1;
			}
			else
			count=count+1;
   }
   
   else
   {
   break;
   }
   
   }
   
 // alert("for 21");
   for(j=findex1-1,k=sindex2;j>=0;j--)
   {
         if(count!=2)
   {
   
   
        nextdivid=""+j+l;
		thediv=document.getElementById(nextdivid);
		if(thediv.innerHTML== ' ')
		{
				thediv.style.backgroundColor='red';
				count=count+1;
		}
		else
		{
		count=count+1;
		
		}
		}
	else
	{
	break;
   }
   
   }
   
  // alert("for 30");
   
   
    for(l=findex1,m=sindex2-1;m>=0 ;m--)
   {
         if(count!=3)
   {
   
   
        nextdivid=""+l+m;
		thediv=document.getElementById(nextdivid);
		if(thediv.innerHTML== ' ')
		{
				thediv.style.backgroundColor='red';
				count=count+1;
		}
		
		else
		{
		count=count+1;
		
		}
		}
	else
	{
	break;
   }
		
   }
   
   
   //alert("for 32");
    for(o=findex1,p=sindex2+1;p<=7;p++)
   {
   
         if(count!=4)
   {
   
        nextdivid=""+o+p;
		thediv=document.getElementById(nextdivid);
		if(thediv.innerHTML== ' ')
		{
				thediv.style.backgroundColor='red';
				count=count+1;
		}
		
		
		else
		{
		count=count+1;
		
		}
		}
	else
	{
	break;
   }
			
		
   }
   
   
   
   for(v=findex1+1,h=sindex1-1;v<=7 && h>=0;v++,h--)
   { //alert("in 5 for");          
             if(count!=5)
   {
   //alert("count =4");
				nextdivid=""+v+h;
		thediv=document.getElementById(nextdivid);
		if(thediv.innerHTML== ' ')
		{
				thediv.style.backgroundColor='red';
				count=count+1;
		}
		
		
		else
		{
		count=count+1;
		
		}
		}
	else
	{
	break;
   }
		
		}
   
   
      for(i=findex1-1,j=sindex1+1;i>=0 && j<=7;i--,j++)
   {   
   if(count!=6)
   {
   
   
				nextdivid=""+i+j;
		thediv=document.getElementById(nextdivid);
		if(thediv.innerHTML== ' ')
		{
				thediv.style.backgroundColor='red';
				count=count+1;
		}
		
		
		
		else
		{
		count=count+1;
		
		}
		}
	else
	{
	break;
   }
		
		
		
   }
   
   
   
   
   //alert("horizontal forward");
   
        for(i=findex1-1,j=sindex1-1;i>=0&&j>=0;i++,j++)
		{
		if(count!=7)
   {
   
		
					nextdivid=""+i+j;
		thediv=document.getElementById(nextdivid);
		
		if(thediv.innerHTML== ' ')
		{
				thediv.style.backgroundColor='red';
				count=count+1;

		}
		else
		{
		count=count+1;
		
		}
		}
	else
	{
	break;
   }
		
		
		}
		
		
		
		for(i=findex1+1,j=sindex1+1;i<=7,j<=7;i++,j++)
		{
		
		if(count!=8)
   {
   
					nextdivid=""+i+j;
		thediv=document.getElementById(nextdivid);
		if(thediv.innerHTML== ' ')
		{
				thediv.style.backgroundColor='red';
				count=count+1;
		}
		else
		{
		count=count+1;
		
		}
		}
	else
	{
	break;
   }
	
		}
   
   
}

	
	
	
	
	
	
	
