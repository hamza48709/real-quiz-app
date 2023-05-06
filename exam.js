let examquestions=[
    {
        q1:"html stands for",
        o1:"hyper text markup langauge",
        o2:"hyper tme markup langauge",
        o3:"hyper quit",
        answer:"o1"
    },
    {
        q1:"css stands for",
        o1:"hyper text markup langauge",
        o2:"hyper tme markup langauge",
        o3:"cascading style sheet",
        answer:"o3"
    },
    {
        q1:"js stands for",
        o1:"javascript",
        o2:"hyper tme markup langauge",
        o3:"hyper quit",
        answer:"o1"
    }
]
let q=document.querySelector(".question");
let op1=document.querySelector(".o1");
let op2=document.querySelector(".o2");
let op3=document.querySelector(".o3");
let submit=document.querySelector(".Submit");
let optionwhichisselected=document.querySelectorAll(".option");
let totalquestioncount=0;
let score=0;
let scorecontainer=document.querySelector(".scorecontainer");
let scoreis=document.querySelector(".score");
let questionois=0;



function showquiz(){
    let tq=examquestions[totalquestioncount];
    q.innerHTML=tq.q1;
    op1.innerHTML=tq.o1;
    op2.innerHTML=tq.o2;
    op3.innerHTML=tq.o3;
   

    

}
showquiz();
function option(){
let selectedoptionreturn;
optionwhichisselected.forEach((elements)=>{
    if(elements.checked){
        selectedoptionreturn=elements;
    }

})
return selectedoptionreturn;
}

function showresult(){
    if(totalquestioncount<examquestions.length){
        showquiz();
    }
    else{
        scorecontainer.style.display="block";
        scoreis.innerHTML="Result is showing soon";

        setTimeout(()=>{
            
        scoreis.innerHTML=""+score+" out of "+examquestions.length;
        },3000);
        

    }
}




submit.addEventListener("click",()=>{
    let result=option();
    console.log(result.id);
    if(result.id==examquestions[totalquestioncount].answer){
        score++;
    }
    totalquestioncount++;
    showresult();
  
})

let settime
function totaltimeforquestion(){
     settime=setInterval(()=>{
        totalquestioncount++;
        
        stopquiz();
        
        
    },20000)
}
function stopquiz(){
    if(totalquestioncount === examquestions.length){
        clearInterval(settime);
        showresult();
        console.log("exam end")

    }
    else{
        showquiz();
    }
}
totaltimeforquestion();


