const input = document.querySelector("#in1");
const btn = document.querySelector("#btn");
const box = document.querySelector("#box");
let arr = [];
input.addEventListener("input", (e) => {
  let x = e.target.value;
  arr[0]= x;
});

btn.addEventListener("click", (e) => {
  arr.forEach((ele) => {
    let p = document.createElement("li");
    p.innerHTML = `<li>${ele}</li>`;
    box.appendChild(p)
    document.body.append(box);
  });
});
const but=document.createElement('button')
but.innerHTML='<p>nice button</p>'
document.body.append(but)
but.addEventListener('click',(e)=>{
    if(box.length>0){}
    else{
        console.log('nice one')
    }
})