async function meme(){
    const api=`https://meme-api.com/gimme/wholesomememes`
    const data=await fetch(api).then(response=>response.json())

   document.querySelector('#t').innerHTML=data.title
   document.getElementById("im").src=data.url
   document.querySelector('#a').innerHTML=data.author



}
document.querySelector('#btn').addEventListener('click',()=>{
    meme()

})