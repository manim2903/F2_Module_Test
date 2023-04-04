let idinput=document.getElementById("id")
let nameinput=document.getElementById("name")
let emailinput=document.getElementById("email")
let gpainput=document.getElementById("gpa")
let ageinput=document.getElementById("age")
let degreeinput=document.getElementById("degree")
let studentDetailsList=document.getElementById("studentDetails")

let studentDetails=[];

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    saveData();
})

let saveData= () =>{
    let details={
        sname:nameinput.value,
        email:emailinput.value,
        gpa:gpainput.value,
        age:ageinput.ariaValueMax,
        degree:degreeinput.value
    }
    studentDetails.push(details)
    localStorage.setItem('studentDetails',JSON.stringify(studentDetails));
    console.log(studentDetails);
}

let showStudentDetails= ()=>{
    studentDetailsList.innerHTML="";
    studentDetails.map((detail,idx)=>{
        return ( studentDetailsList.innerHTML += '
        <tbody>
            <tr>
                <td id="sid"> </td>
                <td id="sname">${detail.name}</td>
                <td id="semail">${detail.email}</td>
                <td id="sgpa">${detail.gpa}</td>
                <td id="sage">${detail.age}</td>
                <td id="sdegree">${detail.degree}
                    <i onclick="editDetails(this)" class="bi bi-trash"></i>
                    <i onclick="editDetais(this)" class="bi bi-pencil-square"></i></td>
            </tr>
        </tbody>        ')
    })
}