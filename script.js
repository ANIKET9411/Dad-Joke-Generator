let jokes=document.querySelector(".jokes");
let btn=document.querySelector("button");
let limit=1;
let api_Key='9Va3EL/VbH4MyGzFyXndaw==08Nybr7MfHBPcZ2y';
function check()
{
    jokes.innerText="Processing...";
    setTimeout(() => {
        textjoke();
    },3000);
}
async function textjoke(){
    let response=await fetch(`https://api.api-ninjas.com/v1/dadjokes?limit=${limit}`,{
    headers:{
        'X-Api-Key':api_Key}
});
    let data=await response.json();
    console.log(data);
    let joking=data[0].joke;
    console.log(joking);
    jokes.innerText=`${joking}`;
}
btn.addEventListener('click',check);
