/*globall function which get's called everytime irrespective of the tag u r clicking on*/

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



function moveBPawn()
{


alert(" in moveBPawn"+divid);

var pos=parseInt(divid);
count=0;

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



/*
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


