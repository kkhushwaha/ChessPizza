/*globall function which get's called everytime irrespective of the tag u r clicking on*/

function globall(obj)
{
     alert("hello");
     
	  this.divid=obj.id;
	  //alert(divid);
	  //var jing=new globall();
	  //jing=obj.id;
	  //alert(jing);
	 document.getElementById(divid).style.backgroundColor='green';
	 
	  var imgname=obj.childNodes[0].getElementsByTagName;
	 // document.write(imgname);
 
       var imgid=obj.childNodes[1].id;
	 alert(imgid);
	  
	var colorOfEntity=imgid.charAt(0);
	
	var entity=imgid.substring(1);
	alert("entity"+entity);
	
	//  if(colorOfEntity=='W' && entity=='QUEEN')
	 // moveWQUEEN();
	  
	  if(colorOfEntity=='W' && entity=='BISHOP')
	  moveBishop();
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
    }
}




function onclick1(elen)
{
alert("in onclick");
alert(divid);
var tf=elen.id;
			//alert(pf);
			
			
		var image= document.getElementById(divid).innerHTML;
			 alert(image);
			// var child = divId.firstChild;
			document.getElementById(divid).innerHTML = "";
			
            document.getElementById(tf).innerHTML = image;
alert("in onclick1");

}



















/*
function moveBPawn()
{


//alert(" in moveBPawn"+divid);

var pos=parseInt(divid);
count=0;

for(i=8+pos;i<=63;i=i+8)
{

 if(count<=6)
 {
 
 //alert("in if");
nextdivid =i;
//alert("value of next id"+nextdivid);
thediv=document.getElementById(nextdivid);
//a=IsEmpty(nextdivid)

if(thediv.innerHTML == ' ')
{


//alert(thediv.innerHTML.value);



//if(a=='true')


//alert("no image in div"); 

thediv.style.backgroundColor='red';

}
count++;
}
//alert("hellodhfhhf");
}
//alert("khemu");
}















/*
for(decre=findex1,incre=findex2;decre>=0||incre<=7;decre--,incre++)

decre+sindex1
           
		  
 */



/*

count=0;

leftlimit=((pos/10)*10)
alert("leflimit"+leftlimit);

for(  )
{
for(i=8+pos;i<=63;i=i+8)
{

 if(count<=6)
 {
 
 alert("in if");
nextdivid =i;
//alert("value of next id"+nextdivid);

//a=IsEmpty(nextdivid)

if(nextdivid.innerHTML =='');
{






//if(a=='true')


alert("no image in div"); 

document.getElementById(nextdivid).style.backgroundColor='red';

}
count++;
}
//alert("hellodhfhhf");
}
//alert("khemu");
}


}
}
function IsEmpty(divid)
{
    //alert("true");
    var ids=document.getElementById(divid);
            var childImage=ids.getElementsByTagName("img")[0];
            if(!childImage)
            {
                //alert("in");
                return true;
            }
            else
            return false;
}
*/
function onclick123(ele)
{
alert("in onclick");
alert(divid);
var pf=ele.id;
			alert(pf);
			
			
		var image= document.getElementById(divid).innerHTML;
			 alert(image);
			// var child = divId.firstChild;
			document.getElementById(divid).innerHTML = "";
			
            document.getElementById(pf).innerHTML = image;
alert("in onclick1");

}

/*
function isEmpty(position)
{
alert("in isempty");
var po=document.getElementById("position");
var t=po.document.getElementsByTagName("img")[0];

if(t)
return true;
else
return false;
}




*/






function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
}


