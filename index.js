const input=document.querySelector('#in1')
const btn=document.querySelector('#btn')
const box=document.querySelector('#box')
input.addEventListener('input',(e)=>{
    if(e){
        let p=document.createElement('p')
        p.innerHTML=`<b>${e.target.value}</b>`
        document.body.append(p)
    }
    console.log(e.target.value.toString().split(''))
})
btn.addEventListener('click',()=>{
    console.log('btn clicked')
})
