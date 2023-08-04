const input_box = document.getElementById("input-box");
const task_box = document.getElementById("list-container");//create task name
const task_box_create = document.querySelector("#task-list");//create hole task box
const input_title = document.getElementById("input-title"); //create input task title

let TitleCount = 0;
let titles = [];
let tasks = 0; //if required

function add_title(){
    let title_id = add_row();

    let title_box = document.createElement("div");
    title_box.classList.add("title-list");
    titles[title_id] = input_title.value;
    title_box.innerHTML = `<h2>${input_title.value}</h2><span class="clear">X</span>`;

    let details = document.createElement("div");
    details.classList.add("task_cont");

    let to_do_list = document.createElement("ul");
    to_do_list.id = `input_box - ${title_id}`;

    let curr_row = document.getElementById(`row - ${title_id}`);
    curr_row.appendChild(title_box);
    curr_row.appendChild(details);
    details.appendChild(to_do_list);


}


function add_row(){
    TitleCount += 1; //modified
     const row = document.createElement("div");
     row.classList.add("row-list");
     row.id =`row - ${TitleCount}`;

     task_box_create.appendChild(row);
     return TitleCount;
}

function AddTask(){
    console.log(input_title.value);
   let index;
   if(input_title.value != ""){
    index = ifExists(input_title.value)
     if( index != 0){
        console.log("index exist at ", index);
     }
     else{
        add_title();
        index = TitleCount;
     }
   }
   if(index != null){
    let todobox = document.getElementById(`input_box - ${index}`); //modified
    let li = document.createElement("li");
        li.innerHTML = `<p>${input_box.value}</p>`;
        // task_box.appendChild(li);
        // task_box.style.overflow = scroll;

        let edit = document.createElement('span');
        edit.classList.add('edit');
        edit.classList.add('off');
        edit.innerHTML = `<img src="edit.png" alt="edit">`;
        li.appendChild(edit);



        let span = document.createElement("span");
        span.classList.add("delete");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        if(input_box.value !== ''){
            todobox.appendChild(li);
        }
   }

    input_box.value = "";
}


let date1 = document.getElementById("set1");
let date2 = document.getElementById("set2");
let date3 = document.getElementById("set3");


const d = new Date();
date1.innerHTML =  "Date: "+ d.getDate();
date2.innerHTML = ": "+ ( d.getMonth() + 1);
date3.innerHTML = ": "+d.getFullYear() +"";


function updateTime() {
    var now = new Date();
    
    // Get the current time components
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    // Format the time components to have leading zeros if necessary
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    
    // Update the time display in your HTML element
    var timeElement = document.getElementById('set4');
    timeElement.textContent = "Time:" + hours + ':' + minutes + ':' + seconds;
  }
  
  // Call updateTime immediately to set the original time
  updateTime();
  
  // Update the time every second (1000 milliseconds)
  setInterval(updateTime, 1000);


task_box_create.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checker");
    }
    else if(e.target.tagName === "SPAN"){
        if(e.target.classList.contains("delete")){
            e.target.parentElement.remove();
        }
        else if(e.target.classList.contains("clear")){
            e.target.parentElement.parentElement.remove();
        }

    }else if(e.target.tagName === "IMG"){
        if(e.target.parentElement.classList.contains("off")){
            console.log("catching off");
            const li_text = e.target.parentElement.previousSibling.textContent.trim();
            input_box.value = li_text;
            e.target.parentElement.classList.remove("off");
            e.target.parentElement.classList.add("on");
        }
        else if(e.target.parentElement.classList.contains("on")){
            console.log("catching on", input_box.value);
            
            e.target.parentElement.previousSibling.innerHTML = input_box.value;
            e.target.parentElement.classList.remove("on");
            e.target.parentElement.classList.add("off");
            input_box.value = '';
        }
        

    }
},false); 



function ifExists(val){
    for(let i=1; i<=TitleCount; i++){
        console.log(i);
        if((titles[i]) ==val ){
            return i;
        }
    }
    return 0;
}

// task_box_create.addEventListener('click', (e)=>{
 
//      if(e.target.tagName === "SPAN"){
       
//         if (e.target.classList.value === 'edit'){
//             let li = e.target.parentElement.parentElement;
//             let inp = e.target.parentElement.previousElementSibling;
            
//             if(inp.hasAttribute("input_box")){
//                 inp.removeAttribute("input_box");
            
//                 inp.focus();
//                 if(li.classList.contains("checked")){

//                     li.classList.remove("checked");
//                     //keeping count
                  
//                 }
    
//                 e.target.style.background = "url(editAct.png)";
//                 e.target.style.backgroundSize = "cover";
    
//             }else{
//                 inp.setAttribute("input_box", true);
    
//                 e.target.style.background = "url(edit.png)";
//                 e.target.style.backgroundSize = "cover";
    
                
        
//                 console.log(inp.value);
//                 inp.setAttribute("value", inp.value);
//             }
//         }
//     }
    
    

// });

