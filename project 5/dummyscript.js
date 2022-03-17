const tasklist=[];
const taskItem=[];

function modal(openModalSelector,modalSelector,popupSelector,closeModel=false)
    {
        const openModalBtn = document.querySelector(openModalSelector);
        const modalElement = document.querySelector(modalSelector);
        const popupElement = document.querySelector(popupSelector);

        openModalBtn.addEventListener('click',()=>{
            modalElement.style.display='block';
        })

        const close=popupElement.querySelector(".close-button");

        close.addEventListener('click',()=>{
            modalElement.style.display='none';
        })
    }


function addtask(){
    const name=document.getElementById('task_name').value;

    const tempobj={
        TaskName:name
    }

    tasklist.push(tempobj);

    addtaskscreen()
    
}

function addtaskscreen(){
        document.getElementById('hide').style.display='none';

        const element=document.createElement("div")
        element.setAttribute('class','child','\n')

        element.innerHTML+=`<div class='head' id='head'>`+tasklist[tasklist.length-1].TaskName+`</div>`



        element.innerHTML+="<hr>";
        let place=`<div class="place"><button class="material-icons remove-item"  >delete</button><button class="material-icons add-item" >add_circle</button>\n</div>`;

        for(var i in tasklist[tasklist.length-1]){
            alert(hi)
            var j=tasklist[tasklist.length-1].TaskName
            if(tasklist[i].TaskName==j){
                console.log('match')
            }
        }
        element.innerHTML+=place

        const existelement=document.getElementById('parent')
        existelement.appendChild(element);
        document.querySelector('.model').style.display="none";

        
        
        modalItem();

        

}


function modalItem(){
    const openItemBox = document.querySelector(".add-item");
    const itemModal = document.querySelector(".model-item");
    const popupItem = document.querySelector(".item-popup");

    openItemBox.addEventListener('click',()=>{
        itemModal.style.display='block';
    })

    const close=popupItem.querySelector(".close-button");

    close.addEventListener('click',()=>{
        itemModal.style.display='none';
    })
    
    const addsubitem =popupItem.querySelector(".addSubItem");
    addsubitem.addEventListener('click',()=>{
        addItem();
    })

    const rmItem =popupItem.querySelector(".remove-item");
    rmItem.addEventListener('click',()=>{
        rmSubItem();
        alert(remove)
    })

}



function addItem(){
    let child=document.querySelector(".child");
    const i_name=document.getElementById('item_name').value;

    const itemobj={
        itemsName:i_name
    }
    taskItem.push(itemobj);

    
    for(var keys in itemobj){
        child.innerHTML+=`<div class="items">`+ itemobj[keys] +`<button class="donebtn">Mark Done</div></div>`;
        done=document.querySelector(".donebtn");
        done.addEventListener('click',()=>{
            document.querySelector(".items").style.display="none"
            child.innerHTML+=`<div class="items">`+itemobj[keys].strike()+`</div>`;
        })
    }

    
    var i_obj =document.getElementsByName("items").values()
    document.querySelector(".model-item").style.display='none';
}

function rmSubItem(){
    taskItem[taskItem.lenght-1].pop();
    console.log(taskItem)
}




