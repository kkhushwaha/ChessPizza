/*globall function which get's called everytime irrespective of the tag u r clicking on*/
function globall(obj)
{
    
     alert("hello");
     
	  this.divid=obj.id;
	  alert(divid);
	   document.getElementById(divid).style.backgroundColor== 'green'
	   if(document.getElementById(divid).style.backgroundColor!= 'red')
	 {
	 document.getElementById(divid).style.backgroundColor== 'green'
	 this.jing=divid;
	 alert("hi");
	
	 }
	 
	 if(document.getElementById(divid).style.backgroundColor== 'red')
	 {
	 this.hking=divid;
	 alert("hi");
	 onclick123(hking);
	  
	 }
	 else
	 {

	// document.getElementById(divid).style.backgroundColor='green';
	
	  var imgname=obj.childNodes[0].getElementsByTagName;
	 // document.write(imgname);
 alert(imgname+"imgname");
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
// document.getElementById(divid).style.backgroundColor='#AAA';

	  }
}	  
/*
function PawnMove(colorType,startPosition);
function RookMove(colorType,startPosition);

function KnightMove(colorType,startPosition);
function BishopMove(colorType,startPosition);

function Move(colorType,startPosition);
function rookMove(colorType,startPosition);
*/



function moveBPawn(position)
{

alert("in function moveBPAWN");
alert(position);
alert(typeof(position));
var pos=parseInt(position);
alert(typeof(pos));
count=0;

for(i=8;i<=63;i=i+8)
{
alert("vin");
 if(count<=6)
 {
 alert("in if");
nextdivid =i;
alert("value of next id"+nextdivid);

if(nextdivid.innerHTML ==' ');
{
alert("no image in div"); 

alert("b4 giving red");
document.getElementById(nextdivid).style.color='red';
alert("after giving red");
}
count++;
}
alert("hellodhfhhf");
}
alert("khemu");
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

function moveBishop()
{
alert("hi");
alert(divid);
bsindex1=parseInt(divid.charAt(0));
alert(bsindex1);
bsindex2=parseInt(divid.charAt(1));
alert(bsindex2);
var bisdiv=""+bsindex1+bsindex2; 

alert(bisdiv);

for(k=bsindex1+1,p=bsindex2-1 ; k<=7 && p>=0 ; k++,p--)
    {
       nextdivid =""+k+p;
//alert("in first for loop");
thediv=document.getElementById(nextdivid);

if(thediv.innerHTML == ' ')
{
//thediv.onclick=onclick123(thediv);
thediv.style.backgroundColor='red';
//document.getElementById(thediv).onclick =onclick123(); 



}
//thediv.onclick(onclick123(thediv));
	  }
	  
 for(k=bsindex1+1,p=bsindex2+1; k<=7 && p<=7; k++,p++)
    {
        nextdivid =""+k+p;

        thediv=document.getElementById(nextdivid);

                if(thediv.innerHTML == ' ')
             {  
			// thediv.onclick=onclick123(thediv);
                 thediv.style.backgroundColor='red';
				// document.getElementById(thediv).onclick =onclick123(); 


             }
			 
    }
	

	  
	  
for(k=bsindex1-1,p=bsindex2+1; k>=0 && p<=7; k--,p++)
    {
        nextdivid =""+k+p;
alert("in second for loop");
        thediv=document.getElementById(nextdivid);

                if(thediv.innerHTML == ' ')
             {
		//	 thediv.onclick=onclick123(thediv);
                 thediv.style.backgroundColor='red';
//document.getElementById(thediv).onclick =onclick123(); 
             }
			 
        

    }
}
/*
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
*/
function onclick123(ele)
{
alert("in onclick");
alert(divid);
var pf=ele.id;
			alert(pf);
			
			
		var image= document.getElementById(jing).innerHTML;
			 alert(image);
			// var child = divId.firstChild;
			document.getElementById(jing).innerHTML = "";
			
            document.getElementById(hking).innerHTML = image;
			document.getElementById(hking).style.backgroundColor='green';
			//document.getElementById(jing).style.backgroundColor='#AAA';
alert("in onclick1");

for(i=0;i<=7;i++)
{
alert("hi");
 for(j=0;j<=7;j++)
 {
 bdcgcolor=""+i+j;
 
 alert(bdcgcolor);
ty=parseInt(bdcgcolor);
 alert(ty);
 if( (i+j) % 2 == 0)
 {
    alert("in if");
// if(bdcgcolor == hking)
// {
// document.getElementById(bdcgcolor).style.backgroundColor='green'
// break;
// }


   document.getElementById(bdcgcolor).style.backgroundColor='#555';
 }
 else
 {
 document.getElementById(bdcgcolor).style.backgroundColor='#AAA';
 }
 }

}
}