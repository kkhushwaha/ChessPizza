/*globall function which get's called everytime irrespective of the tag u r clicking on*/
function globall(obj)
{
     alert("hello");
      var divid=obj.id;
	  document.write(divid);
	 
	 
	  /*var imgname=obj.childNodes[0].getElementsByTagName;
	  document.write(imgname);*/
 
       var imgid=obj.childNodes[1].id;
	//  document.write(imgid);
	  
	var colorOfEntity=imgid.charAt(0);
	
	var entity=imgid.substring(1);
	alert(entity);
	
	  
	  if(colorOfEntity=='B' && entity=='PAWN')
	  moveBPawn(divid);
	  
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


