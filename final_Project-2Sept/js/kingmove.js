/*globall function which get's called everytime irrespective of the tag u r clicking on*/

function globall(obj)
{
 //    alert("hello");
     
	  this.divid=obj.id;
	//  alert(divid);
	  //var jing=new globall();
	  //jing=obj.id;
	  //alert(jing);
	 
	 
	  var imgname=obj.childNodes[0].getElementsByTagName;
	 // document.write(imgname);
 
       var imgid=obj.childNodes[1].id;
	// alert(imgid);
	  
	var colorOfEntity=imgid.charAt(0);
	
	var entity=imgid.substring(1);
//	alert("entity"+entity);
//	alert(colorOfEntity);
	
	  if(colorOfEntity=='W' && entity=='KING')
	  moveWKING();
	  
	  
	  
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



function moveWKING()
{
//alert(" in moveWKING"+divid);

findex1=parseInt(divid.charAt(0)); //4

findex2=parseInt(divid.charAt(0)); //4
sindex1=parseInt(divid.charAt(1))  //2
 sindex2=parseInt(divid.charAt(1))  //2
//alert("before split");
 var splitid=""+findex1+sindex2;
//alert("tempid"+splitid);
 //alert("before loop");
 //alert("in vertical forward direction");
   for(i=findex1,l=sindex1;i<=(i+1);i++)
   {
   //alert("after loop");
   nextdivid =""+i+l;
   thediv=document.getElementById(nextdivid);
            if(thediv.innerHTML == ' ')
			{
			//alert("in if");
				thediv.style.backgroundColor='red';
			}
   }
   
 // alert("in vertical reverse direction") 
   for(j=findex1,k=sindex2;j>=j-1;j--)
   {
        nextdivid=""+j+l;
		thediv=document.getElementById(nextdivid);
		if(thediv.innerHTML== ' ')
		{
				thediv.style.backgroundColor='red';
		}
   }
   //alert("in diagonal forward direction")
   
   
    for(l=findex1,m=sindex2;l<=l+1 && m<=m+1 ;l++,m++)
   {
        nextdivid=""+l+m;
		thediv=document.getElementById(nextdivid);
		if(thediv.innerHTML== ' ')
		{
				thediv.style.backgroundColor='red';
		}
   }
   
   
   //alert("in daigonal reverse direction")
    for(o=findex1,p=sindex2;o>=j-1 && p>=p-1;j--,p--)
   {
        nextdivid=""+o+p;
		thediv=document.getElementById(nextdivid);
		if(thediv.innerHTML== ' ')
		{
				thediv.style.backgroundColor='red';
		}
   }
   
   
   for(i=findex,j=sindex1;i<=i+1 && j>=j-1;i++,j--)
   {
   
				nextdivid=""+i+j;
		thediv=document.getElementById(nextdivid);
		if(thediv.innerHTML== ' ')
		{
				thediv.style.backgroundColor='red';
		}
   }
   
   
      for(i=findex,j=sindex1;i>=i-1 && j<=j+1;i--,j++)
   {
   
				nextdivid=""+i+j;
		thediv=document.getElementById(nextdivid);
		if(thediv.innerHTML== ' ')
		{
				thediv.style.backgroundColor='red';
		}
   }
   
  // alert("horizontal forward")
   
        for(i=findex1,j=sindex1;j<=j+1;j++)
		{
					nextdivid=""+i+j;
		thediv=document.getElementById(nextdivid);
		if(thediv.innerHTML== ' ')
		{
				thediv.style.backgroundColor='red';
		}
		}
		
		
		for(i=findex1,j=sindex1;j>=j-1;j--)
		{
					nextdivid=""+i+j;
		thediv=document.getElementById(nextdivid);
		if(thediv.innerHTML== ' ')
		{
				thediv.style.backgroundColor='red';
		}
		}
   
   
 //  alert("after loop");
}




function onclick1(elen)
{
//alert("in onclick");
//alert(divid);
var tf=elen.id;
			//alert(pf);
			
			
		var image= document.getElementById(divid).innerHTML;
			 //alert(image);
			// var child = divId.firstChild;
			document.getElementById(divid).innerHTML = "";
			
            document.getElementById(tf).innerHTML = image;
//alert("in onclick1");

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
//alert("in onclick");
//alert(divid);
var pf=ele.id;
			//alert(pf);
			
			
		var image= document.getElementById(divid).innerHTML;
			 //alert(image);
			// var child = divId.firstChild;
			document.getElementById(divid).innerHTML = "";
			
            document.getElementById(pf).innerHTML = image;
//alert("in onclick1");

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


