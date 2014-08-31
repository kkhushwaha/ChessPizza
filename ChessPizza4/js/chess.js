

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




   
 
/*
function Bishop(ele)
{

var po=ele.id;
document.write(po);
var p=document.getElementById('a1');

if(po)
{
for(int i=po.charAt(0);i>=1;i--)
{ alert(po.charAt(0);
  for(int j=po.charAt(1);i<=po.charAt(0);i++)
  {
 

  
  }
}


}

}
*/