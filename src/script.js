// variable intialization
var submit=document.getElementById("submit");
var d=document.getElementById("display");

// logic!!
function myFunction(n,a,w)
{
  if(a>=5 && a<=7)
  {
    if (w>=15 && w<=20)
    {
      dataarray(n,"",a,true," ")
    }
    else
    {
      if(w<15)
      {
        dataarray(n,"15",a,false,"less")
      }
      else{
        dataarray(n,"20",a,false,"more")
      }
    }
  }
  else if(a>=8 && a<=10)
  {
    if (w>=21 && w<=25)
    {
      dataarray(n,"",a,true," ")
    }
    else
    {
      if(w<21)
      {
        dataarray(n,"21",a,false,"less")
      }
      else{
        dataarray(n,"25",a,false,"more")
      }
    }
  }
  else if(a>=11 && a<=15)
  {
    if (w>=26 && w<=30)
    {
      dataarray(n,"",a,true," ")
    }
    else
    {
      if(w<26)
      {
        dataarray(n,"26",a,false,"less")
      }
      else{
        dataarray(n,"30",a,false,"more")
      }
    }
  }
  else if(a>=16 && a<=20)
  {
    if (w>=31 && w<=40)
    {
      dataarray(n,"",a,true," ")
    }
    else
    {
      if(w<16)
      {
        dataarray(n,"31",a,false,"less")
      }
      else{
        dataarray(n,"40",a,false,"more")
      }
    }
  }
  else{

    display("cann't display proper data")
  }
}

// display
function display(value)
{

    let hdisplay = document.createElement("h");
    let br = document.createElement("br");
    hdisplay.innerHTML = value;
    d.appendChild(hdisplay);
    d.appendChild(br);
}

function dataarray(n,Wrecommend,age,recommend,moreorless)
{
    if(recommend)
    {
      display("Hello "+n+" !! your weight is perfect")
      console.log("Hello "+n+" !! your weight is perfect")
      

    }
    else
    {
      display("Hello "+n+" your is "+moreorless+" than recommended value of "+Wrecommend+ " at an age of " + age);
      console.log("Hello "+n+" your is "+moreorless+" than recommended value of "+Wrecommend+ " at an age of " + age)
      

    }


}


 // onclick event

 submit.addEventListener("click",function myFunc(){
   
  // value extraction 
  var nameS=document.getElementById("Name").value;

  var age=document.getElementById("Age").value;

  var weight=document.getElementById("Weight").value;

  // value to send for process
  console.log("values to be sended for processing");
  console.log(nameS,age,weight);
  myFunction(nameS,age,weight);
 });

