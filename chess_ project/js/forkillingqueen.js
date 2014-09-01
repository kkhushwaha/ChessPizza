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
{
var imgd=thediv.childNodes[1].id;
	alert(imgd);
 var replacingEntity=imgd.charAt(0);
	
 alert("color of entity"+replacingEntity);
 
 
 	if(replacingEntity!=colorOfEntity)
    thediv.style.backgroundColor='red';
break;
}
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
			 {
			 var imgd=thediv.childNodes[1].id;
	alert(imgd);
 var replacingEntity=imgd.charAt(0);
	
 alert("color of entity"+replacingEntity);
 
 
 	if(replacingEntity!=colorOfEntity)
    thediv.style.backgroundColor='red';
break;
        
}
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
			 {
			 var imgd=thediv.childNodes[1].id;
	alert(imgd);
 var replacingEntity=imgd.charAt(0);
	
 alert("color of entity"+replacingEntity);
 
 
 	if(replacingEntity!=colorOfEntity)
    thediv.style.backgroundColor='red';
break;
	   }
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
			 {
			 var imgd=thediv.childNodes[1].id;
	alert(imgd);
 var replacingEntity=imgd.charAt(0);
	
 alert("color of entity"+replacingEntity);
 
 
 	if(replacingEntity!=colorOfEntity)
    thediv.style.backgroundColor='red';
break;
    }
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
			 {
			 var imgd=thediv.childNodes[1].id;
	alert(imgd);
 var replacingEntity=imgd.charAt(0);
	
 alert("color of entity"+replacingEntity);
 
 
 	if(replacingEntity!=colorOfEntity)
    thediv.style.backgroundColor='red';
break;
    }
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
			 {
			 var imgd=thediv.childNodes[1].id;
	alert(imgd);
 var replacingEntity=imgd.charAt(0);
	
 alert("color of entity"+replacingEntity);
 
 
 	if(replacingEntity!=colorOfEntity)
    thediv.style.backgroundColor='red';
break;
}
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
			 {
			 var imgd=thediv.childNodes[1].id;
	alert(imgd);
 var replacingEntity=imgd.charAt(0);
	
 alert("color of entity"+replacingEntity);
 
 
 	if(replacingEntity!=colorOfEntity)
    thediv.style.backgroundColor='red';
break;
    }
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
			 {
			 var imgd=thediv.childNodes[1].id;
	alert(imgd);
 var replacingEntity=imgd.charAt(0);
	
 alert("color of entity"+replacingEntity);
 
 
 	if(replacingEntity!=colorOfEntity)
    thediv.style.backgroundColor='red';
break;
    }
	}
}



