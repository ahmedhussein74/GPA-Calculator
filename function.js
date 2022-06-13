let subAdd = document.querySelector("#subAdd")

subAdd.addEventListener("click", function(){
    let subNum = document.querySelector("#subNum").value
    subNum=Number(subNum)
    if(subNum == "" || subNum == 0){
        alert("please enter number of subjects")
        console.log(subNum)
    }
    else if(isNaN(subNum)){
        alert("please enter valid number")
    }
    else{
        let subList = ""
        for(let i=0;i<subNum;i++){
            subList += `<div class="d-flex justify-content-evenly align-items-center my-3 rounded">
                            <input id="sub${i+1}" class="sub my-2" type="text" placeholder="Subject Grade">
                            <input id="hour${i+1}" class="hour my-2" type="text" placeholder="Credit Hours">
                        </div>`
        }
        subList += `<button onclick="cal()" class="btn bg-success text-white p-0">Calculate</button>`
        document.querySelector("#subjects").innerHTML = subList
    }
})

const grades= [ ["A+", 4], ["A",  3.7], ["B+", 3.3],["B", 3], ["C+", 2.7], ["C", 2.4], ["D+", 2.2], ["D",  2], ["F", 0]];

function cal(){
    let subNum = document.querySelector("#subNum").value
    subNum=Number(subNum)
    let totalHours = 0
    let points = 0

    for(let i=0;i<subNum;i++){
        if((document.querySelector(`#sub${i+1}`).value).toUpperCase() == "F")
            continue
        else{
            totalHours += Number(document.querySelector(`#hour${i+1}`).value)
            grades.map( e =>{
                if(e[0]== (document.querySelector(`#sub${i+1}`).value).toUpperCase()){
                    points += e[1] * Number(document.querySelector(`#hour${i+1}`).value)
                }
            })
        }
    }

    let gpa = points / totalHours

    gpa = Math.round(gpa)
    
    document.querySelector("#subjects").innerHTML += 
        `<div class="msg rounded d-flex justify-content-center align-items-center mt-2">Your GPA is : ${gpa}</div>`
}