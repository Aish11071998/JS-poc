let b=document.getElementById('cu-action');
let nm=document.getElementById('name');
let em=document.getElementById('email');
let tt=document.getElementById('t');
let curval=null;
/*let ebut=document.getElementById('eb');
ebut.addEventListener('click',b1func);
let dbut=document.getElementById('db');
dbut.addEventListener('click',b2func);
*/
i=1;
b.addEventListener('click',addrows);
let arr=[];

function addrows()
{
    
    if(curval)
    {
        arr.map(ob=>{
            if(ob.id===curval)
            {
                ob.n = document.getElementById('name').value;
                ob.m = document.getElementById('email').value;
            }
            
            return ob;
        })
        update(null,'add');
    }
    else
    {                                        //add
         obj={};                           
    obj.id=i++;
    obj.n=nm.value;
    obj.e=em.value;
    arr.push(obj);
    }
    
    func1();
    
   
}
function func1()
{
    let rows='';
    arr.forEach(obj=>
    {
        const tr=`<tr>
        <td>${obj.id}</td>
        <td>${obj.n}</td>
        <td>${obj.e}</td>
        <td><button onclick="editfunc(${obj.id})" id="editid" class="btn btn-primary btn-md px-4">edit</button>
        <button onclick="delfunc(${obj.id})" id="delid" class="btn btn-primary btn-md px-4">delete</button>
        </tr>`
        rows+=tr;
    });
    t.innerHTML=rows;
    reset();
}
 function update(id,text)
 {
    curval=id;
    b.value=text;
 }
 
 function editfunc(objs)
 {
     arr.forEach(element=>
    {
         if(element.id===objs)
         {
             nm.value=element.n;
             em.value=element.e;
         }
    });
     
  update(objs,'update');
 }

function delfunc(ids)
{
   arr=arr.filter((arr=>arr.id!=ids))
   func1();
}
function reset()
{
    nm.value='';
    em.value='';
}