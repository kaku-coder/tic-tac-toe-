let boxs=document.querySelectorAll(".box")
// let reset =document.querySelector(".button-85")
let newgamebutton=document.querySelector(".newbtn");
let messagecontenorr=document.querySelector(".messagecontenor")
let message=document.querySelector(".message")

let turno= true;//playerx,playero

//here we use in this game 2D array 
    //    now you told what is 2d array make some example

    // let arr2=[["banana","apple","lichi"],["fish","cutplate","pangune"]]
    // this is called array of array and those are called 2d array

const winpatter=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
boxs.forEach((box)=>{
    box.addEventListener("click",function(){
        console.log("box was click");
        if(turno===true){
            box.innerText="o";
            turno=false;

        }else{
            box.innerText="x";
            turno=true;
        }
        box.disabled=true;
        checkwillner();
    })
})

const resetgame =()=>{
    turno=true;
    enabled();
}

const disabled =()=>{
    for (let box of boxs){
        box.disabled=true;
    }
}
const enabled =()=>{
    for (let box of boxs){
        box.disabled=flase;
        box.innerHTML="";
    }
}



const showwinner=(winner)=>{
    message.innerHTML=`congratulation winner is ${winner}`;
    messagecontenorr.classList.remove("hide");
    disabled()
}



const checkwillner=()=>{
    for(let pattern of winpatter){
        console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxs[pattern[0]].innerText,
        //     boxs[pattern[1]].innerText,
        //     boxs[pattern[2]].innerText
        //     ); this is the index of posstion and then we put the poss1val as a index 0 and same as other

            let poss1val=boxs[pattern[0]].innerText;
            let poss2val=boxs[pattern[1]].innerText;
            let poss3val=boxs[pattern[2]].innerText;
        
            if(poss1val != ""  && poss2val != "" && poss3val != ""){
                if(poss1val == poss2val && poss2val == poss3val){
                    console.log("winner",poss1val);
                    showwinner(poss1val);
                }
            }
    }
}


newgamebutton.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);