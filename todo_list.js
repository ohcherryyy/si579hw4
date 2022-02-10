addTask('Buy milk',1639944400000)
addTask('Get 579 assignment done')

function addTask(description,dueTime){
    const listitem=document.querySelector('ul#task_list')
    let li=document.createElement('li')
    li.innerHTML=description
    if(dueTime){
        let actdate=new Date(dueTime);
        let duespan=document.createElement('span')
        duespan.setAttribute('class','due')
        duespan.innerHTML=' due '+actdate.toLocaleString('en-US')
        li.appendChild(duespan)
    }
    let btn=document.createElement('button')
    btn.setAttribute('class','btn btn-sm btn-outline-danger done')
    btn.setAttribute('type','button')
    btn.addEventListener('click',function(e){
        let el=e.target.parentElement
        el.remove()
    })
    btn.innerHTML='Done'
    li.appendChild(btn)
    listitem.appendChild(li)
}

const input_des=document.querySelector('input#task_description_input')
const input_duedate=document.querySelector('input#duedate_input')
const input_duetime=document.querySelector('input#duetime_input')
const btn_add=document.querySelector('button#add_task')
// const btn_done=document.querySelectorAll('li button')

function dateAndTimeToTimestamp(dateInputElement, timeInputElement) {
    const dueDate = dateInputElement.valueAsNumber; // Returns the timestamp at midnight for the given date
    const dueTime = timeInputElement.valueAsNumber; // Returns the number of milliseconds from midnight to the time

    if(dueDate && dueTime) { // The user specified both a due date & due time
        //Add the timezone offset to account for the fact that timestamps are specified by UTC
        const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
        return dueDate + dueTime + timezoneOffset;
    } else {
        // if the user did not specify both a due date and due time, return false
        return false;
    }
}

btn_add.addEventListener('click',function(){
    let date=dateAndTimeToTimestamp(input_duedate,input_duetime)
    addTask(input_des.value,date)
    input_des.value=''
})

input_des.addEventListener('keydown',function(e){
    if(e.code==='Enter'){
        let date=dateAndTimeToTimestamp(input_duedate,input_duetime)
        addTask(input_des.value,date)
        input_des.value=''
    }
})

// btn_done.forEach(ele=>{
//     ele.addEventListener('click',(e)=>{
//         let el=e.target.parentElement
//         el.remove()
//     })
// })
