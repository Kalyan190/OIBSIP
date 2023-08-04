let type = document.querySelector(".previous");
let result = document.querySelector(".current");
let equation = "";

const keys = document.querySelectorAll(".list1");

let buttons = Array.from(keys);

buttons.map((key) => {
    key.addEventListener("click", (e) => {
        let text = e.target.innerText;
        switch(text) {
            case "←":
                type.innerText = type.innerText.slice(0, -1);
                equation = equation.slice(0, -1);
                break;
            
            case "C":
                type.innerText = "";
                result.innerText = "";
                equation = "";
                type.classList.add("hide");
                result.classList.add("hide");
                break;
            case "*":
                type.innerText += "*";
                equation += "*";
                break;
            case "÷":
                type.innerText += "÷";
                equation += "/";
                break;
            case "=":
                result.classList.remove("hide");
                try{
                    console.log(equation);
                    result.innerText = eval(equation);
                }
                catch(err){
                    result.innerText = "invalid";

                }
                break;

            default:
                type.innerText += text;
                equation += text;


        }
    })
})