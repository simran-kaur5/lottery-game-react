import { useState } from "react"

export default function Game(){
    let [val,SetValue] = useState(0)
    let [heading, SetHeading] = useState("Lottery")
    let generateVal = ()=>{
        let newVal = Math.floor(Math.random() * 900) + 100;
        SetValue(newVal)
        SumofDig(newVal)
    }

    let SumofDig = (num)=>{
        let sum = 0;

        while(num>0){
            console.log(num)
            sum+=(num%10)

            num = Math.floor(num / 10);
        }
        
        console.log(sum)
        CheckSum(sum)
    }

    let CheckSum = (sum)=>{
        if(sum===15){
            SetHeading("You won the lottery")
        }else{
            SetHeading("You lost")
        }
    }
    return (
        <div>
            <h3>{heading}</h3>
            <p>Ticket value = {val}</p>
            <button onClick={generateVal}>Get new ticket</button>
        </div>
    )
}