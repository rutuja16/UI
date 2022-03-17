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
    
    console.log(tasklist) 

    
}




function addtaskscreen(){
        document.getElementById('hide').style.display='none';

        const element=document.createElement("div")
        element.setAttribute('class','child','\n')

        element.innerHTML+=`<div class='head'>`+ tasklist[tasklist.length-1].TaskName +`</div>`
        element.classList.add(tasklist[tasklist.length-1].TaskName);
        console.log(element.classList)

        // var head= tasklist[tasklist.length-1].TaskName
        // alert(head)
        element.innerHTML+="<hr>";
        let place=`<div class="place"><button class="material-icons remove-item"  >delete</button><button class="material-icons add-item" onclick="modalItem()" >add_circle</button>\n</div>`;

        element.innerHTML+=place

        const existelement=document.getElementById('parent')
        existelement.appendChild(element);
        document.querySelector('.model').style.display="none";

        //----------------------------------------------------------
        var j=document.querySelector(".head").innerHTML;
        //subitems(j)

        const popupItem = document.querySelector(".item-popup");
        const addsubitem =popupItem.querySelector(".addSubItem");
        // const additem =document.getElementsByName("add-item");
        // console.log(additem)

        
        // addsubitem.addEventListener('click',()=>{
        //     subitems(j);
        // })

        
        

}


function rmcard(){
    
}

function  modalItem(){

    
    // const openItemBox = document.querySelector(".add-item");
    const itemModal = document.querySelector(".model-item");
    const popupItem = document.querySelector(".item-popup");

    itemModal.style.display='block';

    const close=popupItem.querySelector(".close-button");
    close.addEventListener('click',()=>{
        itemModal.style.display='none';
    })

    const addsubitem =popupItem.querySelector(".addSubItem");
    addsubitem.addEventListener('click',()=>{
        addItem('asfds');
        //subitems(tn)
        
    })

    const rmItem =popupItem.querySelector(".remove-item");
    // rmItem.addEventListener('click',()=>{
    //     rmSubItem();
    //     alert(remove)
    // })
}

function addItem(firstobj){

    
    let child=document.querySelector(".child");
    const i_name=document.getElementById('item_name').value;

    const itemobj={
        itemsName:i_name
    }
    taskItem.push(itemobj);
    console.log('taskiten=',taskItem)
    for(var i=0;i<tasklist.length;i++){
        if(tasklist[i].TaskName==firstobj)
        {
            tasklist.push(itemobj);
            console.log('new task list :',tasklist)
        }
    }
            


    
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
