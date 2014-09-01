/*globall function which get's called everytime irrespective of the tag u r clicking on*/


/*
function globall(obj)
{
     alert("hello");
     
	  this.divid=obj.id;
	  alert(divid);
	  //var jing=new globall();
	  //jing=obj.id;
	  //alert(jing);
	 
	 
	  var imgname=obj.childNodes[0].getElementsByTagName;
	 // document.write(imgname);
 
       var imgid=obj.childNodes[1].id;
	 alert(imgid);
	  
	var colorOfEntity=imgid.charAt(0);
	
	var entity=imgid.substring(1);
	alert("entity"+entity);
	
	  if(colorOfEntity=='W' && entity=='ROOK')
	  moveBROOK();
	  
	   if(colorOfEntity=='W' && entity=='KNIGHT')
	  moveWKNIGHT();
	  
	  if(colorOfEntity=='W' && entity=='QUEEN')
	  moveWQUEEN();
	  
	  if(colorOfEntity=='W' && entity=='KING')
	  moveWKING();
	
	   // if(colorOfEntity=='W' && entity=='BISHOP')
	 // moveWBISHOP();
	
	  
	  
	  
	  
//	  alert("hello");
	  
	  
	 } 
	  
	  
/*
function PawnMove(colorType,startPosition);
function RookMove(colorType,startPosition);

function KnightMove(colorType,startPosition);
function BishopMove(colorType,startPosition);

function Move(colorType,startPosition);
function rookMove(colorType,startPosition);
*/

/*

function moveBROOK()
{
alert(" in moveWQUEEN"+divid);

findex1=parseInt(divid.charAt(0)); //4

findex2=parseInt(divid.charAt(0)); //4
sindex1=parseInt(divid.charAt(1))  //2
 sindex2=parseInt(divid.charAt(1))  //2

 var splitid=""+findex1+sindex2;
//alert("tempid"+splitid);
	
	
 for(l=findex1,m=sindex1+1; m<=7;m++)
    {
        nextdivid =""+l+m;
//alert("in 5th for loop");
        thediv=document.getElementById(nextdivid);

                if(thediv.innerHTML == ' ')
             {
                 thediv.style.backgroundColor='red';

             }
			 else
			 break;
			 
    }






for(l=findex1,m=sindex1-1; m>=0;m--)
    {
        nextdivid =""+l+m;
//alert("in 6th for loop");
        thediv=document.getElementById(nextdivid);

                if(thediv.innerHTML == ' ')
             {
                 thediv.style.backgroundColor='red';

             }
			 else
			 break;
			 
    }





for(l=findex1+1,m=sindex1; l<=7;l++)
    {
        nextdivid =""+l+m;
//alert("in 7th for loop");
        thediv=document.getElementById(nextdivid);

                if(thediv.innerHTML == ' ')
             {
                 thediv.style.backgroundColor='red';

             }
			 
			 else
			 break;
    }




for(l=findex1-1,m=sindex1; l>=0;l--)
    {
        nextdivid =""+l+m;
//alert("in 8th for loop");
        thediv=document.getElementById(nextdivid);

                if(thediv.innerHTML == ' ')
             {
                 thediv.style.backgroundColor='red';

             }
			 else
			 break;
    }
	
	}

	
	
	*/
	
	
	//now below for knight move
	
	
	
	
	function moveWKNIGHT()
{
alert(" in moveWQUEEN"+divid);

findex1=parseInt(divid.charAt(0)); //5

findex2=parseInt(divid.charAt(0)); //5
sindex1=parseInt(divid.charAt(1))  //3
 sindex2=parseInt(divid.charAt(1))  //3

 var splitid=""+findex1+sindex2;
//alert("tempid"+splitid);



count=0;

alert("in all for loops");

for(l=findex1+2,m=sindex1+1;m<=7;m++)
    {
	alert("in first for loop");
	
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
alert("value of count in first loop"+count);
}
else
{
var imgd=thediv.childNodes[1].id;
	alert(imgd);
 var replacingEntity=imgd.charAt(0);
	
 alert("color of entity"+replacingEntity);
 
 
 	if(replacingEntity!=colorOfEntity)
    thediv.style.backgroundColor='red';

count=count+1;


}
}
else
{
break;
}

	 }
	 
else
{
break;
}

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
alert("value of count in second loop"+count);

}
else
{
var imgd=thediv.childNodes[1].id;
	alert(imgd);
 var replacingEntity=imgd.charAt(0);
	
 alert("color of entity"+replacingEntity);
 
 
 	if(replacingEntity!=colorOfEntity)
    thediv.style.backgroundColor='red';
count=count+1;

}
}
	 }
else
{
break;
}
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
alert("value of count in third loop"+count);

}
else
{
var imgd=thediv.childNodes[1].id;
	alert(imgd);
 var replacingEntity=imgd.charAt(0);
	
 alert("color of entity"+replacingEntity);
 
 
 	if(replacingEntity!=colorOfEntity)
    thediv.style.backgroundColor='red';
count=count+1;
}
}
	 }
else
{
break;
}
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
alert("value of count in fourth loop"+count);

}
else
{
var imgd=thediv.childNodes[1].id;
	alert(imgd);
 var replacingEntity=imgd.charAt(0);
	
 alert("color of entity"+replacingEntity);
 
 
 	if(replacingEntity!=colorOfEntity)
    thediv.style.backgroundColor='red';
count=count+1;
}
}
	 }
else
{
break;
}
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
alert(count);
alert("value of count in fifth loop"+count);

}
else
{
var imgd=thediv.childNodes[1].id;
	alert(imgd);
 var replacingEntity=imgd.charAt(0);
	
 alert("color of entity"+replacingEntity);
 
 
 	if(replacingEntity!=colorOfEntity)
    thediv.style.backgroundColor='red';
count=count+1;
}
}
	 }
else
{
break;
}
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
alert("value of count in sixth loop"+count);

}
else
{
var imgd=thediv.childNodes[1].id;
	alert(imgd);
 var replacingEntity=imgd.charAt(0);
	
 alert("color of entity"+replacingEntity);
 
 
 	if(replacingEntity!=colorOfEntity)
    thediv.style.backgroundColor='red';
count=count+1;
}
}
	 }
else
{
break;
}
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
alert("value of count in seventh loop"+count);

}
else
{
var imgd=thediv.childNodes[1].id;
	alert(imgd);
 var replacingEntity=imgd.charAt(0);
	
 alert("color of entity"+replacingEntity);
 
 
 	if(replacingEntity!=colorOfEntity)
    thediv.style.backgroundColor='red';
count=count+1;
}
}
	 }
else
{
break;
}
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
alert("value of count in eigth loop"+count);

}
else
{
var imgd=thediv.childNodes[1].id;
	alert(imgd);
 var replacingEntity=imgd.charAt(0);
	
 alert("color of entity"+replacingEntity);
 
 
 	if(replacingEntity!=colorOfEntity)
    thediv.style.backgroundColor='red';
count=count+1;
}
}
	 }
else
{
break;
}
	 }
	
	 
	 }
	
	
	
	
	
	//below for queen
	
	
	/*
function moveWQUEEN()
{
alert(" in moveWQUEEN"+divid);

findex1=parseInt(divid.charAt(0)); //4

findex2=parseInt(divid.charAt(0)); //4
sindex1=parseInt(divid.charAt(1))  //2
 sindex2=parseInt(divid.charAt(1))  //2

 var splitid=""+findex1+sindex2;
//alert("tempid"+splitid);

for(l=findex1-1,m=sindex1+1 ; l>=0 && m<=7 ; l--,m++)
    {
       nextdivid =""+l+m;
//alert("in first for loop");
thediv=document.getElementById(nextdivid);

if(thediv.innerHTML == ' ')
{
thediv.style.backgroundColor='red';

}
else
break;

	  }
    
	
	for(l=findex1-1,m=sindex1-1; l>=0 && m>=0; l--,m--)
    {
        nextdivid =""+l+m;
//alert("in second for loop");
        thediv=document.getElementById(nextdivid);

                if(thediv.innerHTML == ' ')
             {
                 thediv.style.backgroundColor='red';

             }
			 else
break;
        

    }
    for(l=findex1+1,m=sindex1-1; l<=7 && m>=0; l++,m--)
    {
        nextdivid =""+l+m;
     //    alert("in third for loop");
        thediv=document.getElementById(nextdivid);

                if(thediv.innerHTML == ' ')
             {
                 thediv.style.backgroundColor='red';

             }
			 else
break;
	   
    }

    for(l=findex1+1,m=sindex1+1; l<=7 && m<=7; l++,m++)
    {
        nextdivid =""+l+m;
//alert("in 4th for loop");
        thediv=document.getElementById(nextdivid);

                if(thediv.innerHTML == ' ')
             {
                 thediv.style.backgroundColor='red';

             }
			 else
break;
    }


 for(l=findex1,m=sindex1+1; m<=7;m++)
    {
        nextdivid =""+l+m;
//alert("in 5th for loop");
        thediv=document.getElementById(nextdivid);

                if(thediv.innerHTML == ' ')
             {
                 thediv.style.backgroundColor='red';

             }
			 else
break;
    }






for(l=findex1,m=sindex1-1; m>=0;m--)
    {
        nextdivid =""+l+m;
//alert("in 6th for loop");
        thediv=document.getElementById(nextdivid);

                if(thediv.innerHTML == ' ')
             {
                 thediv.style.backgroundColor='red';

             }
			 else
break;
    }





for(l=findex1+1,m=sindex1; l<=7;l++)
    {
        nextdivid =""+l+m;
//alert("in 7th for loop");
        thediv=document.getElementById(nextdivid);

                if(thediv.innerHTML == ' ')
             {
                 thediv.style.backgroundColor='red';

             }
			 else
break;
    }




for(l=findex1-1,m=sindex1; l>=0;l--)
    {
        nextdivid =""+l+m;
//alert("in 8th for loop");
        thediv=document.getElementById(nextdivid);

                if(thediv.innerHTML == ' ')
             {
                 thediv.style.backgroundColor='red';

             }
			 else
break;
    }
}







// for king below








function moveWKING()
	{
	alert("in move king");
	
	
	
	
alert(" in moveWKING"+divid);

findex1=parseInt(divid.charAt(0)); //4

findex2=parseInt(divid.charAt(0)); //4
sindex1=parseInt(divid.charAt(1))  //2
 sindex2=parseInt(divid.charAt(1))  //2
alert("before split");
 var splitid=""+findex1+sindex2;
//alert("tempid"+splitid);

count=0;
 alert("before loop");
 alert("for 41");
   for(i=findex1+1,l=sindex1;i<=7;i++)
   {
   
   if(count!=1)
   {
   alert("after loop");
   nextdivid =""+i+l;
   thediv=document.getElementById(nextdivid);
            if(thediv.innerHTML == ' ')
			{
			alert("in if");
				thediv.style.backgroundColor='red';
				count=count+1;
			}
			else
			count=count+1;
			break;
   }
   
   else
   {
   break;
   }
   
   }
   
  alert("for 21");
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
		break;
		}
		}
	else
	{
	break;
   }
   
   }
   
   alert("for 30");
   
   
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
		break;
		}
		}
	else
	{
	break;
   }
		
   }
   
   
   alert("for 32");
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
		break;
		}
		}
	else
	{
	break;
   }
			
		
   }
   
   
   
   for(v=findex1+1,h=sindex1-1;v<=7 && h>=0;v++,h--)
   { alert("in 5 for");          
             if(count!=5)
   {
   alert("count =4");
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
		break;
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
		break;
		}
		}
	else
	{
	break;
   }
		
		
		
   }
   
   
   
   
   alert("horizontal forward");
   
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
		break;
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
		break;
		}
		}
	else
	{
	break;
   }
	
		}
   
   
}

	
	
	
	
	
	
	
	
	//for bishop below
	


/*

function moveWBISHOP()
{
alert(" in moveWQUEEN"+divid);

findex1=parseInt(divid.charAt(0)); //4

findex2=parseInt(divid.charAt(0)); //4
sindex1=parseInt(divid.charAt(1))  //2
 sindex2=parseInt(divid.charAt(1))  //2

 var splitid=""+findex1+sindex2;
//alert("tempid"+splitid);

for(l=findex1-1,m=sindex1+1 ; l>=0 && m<=7 ; l--,m++)
    {
       nextdivid =""+l+m;
//alert("in first for loop");
thediv=document.getElementById(nextdivid);

if(thediv.innerHTML == ' ')
{
thediv.style.backgroundColor='red';

}
else
break;

	  }
    
	
	for(l=findex1-1,m=sindex1-1; l>=0 && m>=0; l--,m--)
    {
        nextdivid =""+l+m;
//alert("in second for loop");
        thediv=document.getElementById(nextdivid);

                if(thediv.innerHTML == ' ')
             {
                 thediv.style.backgroundColor='red';

             }
			 else
break;
        

    }
    for(l=findex1+1,m=sindex1-1; l<=7 && m>=0; l++,m--)
    {
        nextdivid =""+l+m;
     //    alert("in third for loop");
        thediv=document.getElementById(nextdivid);

                if(thediv.innerHTML == ' ')
             {
                 thediv.style.backgroundColor='red';

             }
			 else
break;
	   
    }

    for(l=findex1+1,m=sindex1+1; l<=7 && m<=7; l++,m++)
    {
        nextdivid =""+l+m;
//alert("in 4th for loop");
        thediv=document.getElementById(nextdivid);

                if(thediv.innerHTML == ' ')
             {
                 thediv.style.backgroundColor='red';

             }
			 else
break;
    }

}
*/










	
	
	