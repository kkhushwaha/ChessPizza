

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
	  
	  if(colorOfEntity=='W' && entity=='PAWN')
	  movePAWN();
//	  alert("hello");
// document.getElementById(divid).style.backgroundColor='#AAA';

	  }
}	  



function movePAWN()
{
bsindex1=parseInt(divid.charAt(0));
alert(bsindex1);
bsindex2=parseInt(divid.charAt(1));
alert(bsindex2);
k=bsindex1;
l=bsindex2;
     if(colorOfEntity=='B')
	 {
	  //   alert(divid);
	 
	  if( bsindex1 == 6)
	  {
	  nextdivid=""+(k-1)+l;
	  thediv=document.getElementById(nextdivid);
	  if(thediv.innerHTML== ' ')
	  {
	     thediv.style.backgroundColor='red';
	  }
	  
	  nextdiv=""+(k-2)+l;
	    thediv=document.getElementById(nextdivid);
	  if(thediv.innerHTML== ' ')
	  {
	     thediv.style.backgroundColor='red';
	  }
   }
   else
       nextdivid=""+(k-1)+l;
	  thediv=document.getElementById(nextdivid);
	  if(thediv.innerHTML== ' ')
	  {
	     thediv.style.backgroundColor='red';
	  }
	  
	  nextdiv=""+(k-1)+(l-1);
	  thediv=document.getElementById(nextdivid);
	  if(thediv.innerHTML!= ' ')
	  {
	     thediv.style.backgroundColor='green';
	  }
	  
	  nextdivid2=""+(k-1)+(l+1);
	  thediv=document.getElementById(nextdivid);
	  if(thediv.innerHTML!= ' ')
	  {
	     thediv.style.backgroundColor='green';
	  }
	  
  }
  
  
  
   if(colorOfEntity=='w')
	 {
	  //   alert(divid);
	 
	  if( bsindex1 == 1)
	  {
	  nextdivid=""+(k+1)+l;
	  thediv=document.getElementById(nextdivid);
	  if(thediv.innerHTML== ' ')
	  {
	     thediv.style.backgroundColor='red';
	  }
	  
	  nextdiv=""+(k+2)+l;
	    thediv=document.getElementById(nextdivid);
	  if(thediv.innerHTML== ' ')
	  {
	     thediv.style.backgroundColor='red';
	  }
   }
   else
       nextdivid=""+(k+1)+l;
	  thediv=document.getElementById(nextdivid);
	  if(thediv.innerHTML== ' ')
	  {
	     thediv.style.backgroundColor='red';
	  }
	  
	  nextdiv=""+(k+1)+(l-1);
	  thediv=document.getElementById(nextdivid);
	  if(thediv.innerHTML!= ' ')
	  {
	     thediv.style.backgroundColor='green';
	  }
	  
	  nextdivid2=""+(k+1)+(l+1);
	  thediv=document.getElementById(nextdivid);
	  if(thediv.innerHTML!= ' ')
	  {
	     thediv.style.backgroundColor='green';
	  }
	  
  }
}