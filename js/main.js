
var inputName=document.getElementById("inputtext")
var inputurl=document.getElementById("inputUrl")

// var urllist=[]
if(localStorage.getItem("urlcontainer")){
    urllist=JSON.parse(localStorage.getItem("urlcontainer"))
    displayData()

}else{
    var urllist=[]
}


function addUrl(){
    if( validName()&&validurl()){
        var newurl={
            name:inputName.value.trim(),
            adress:inputurl.value.trim(),
        }
        urllist.push(newurl)
        displayData()
        clearform()
            console.log(urllist)

    }else{
        document.innerHTML=window.alert("enter siteName & url")
    }

}


function clearform(){
   inputName.value=""
   inputurl.value=""
}
 function seturlcol(i){
    return  `  <div class="row  border-b bg-white text-center">
                        <div class="col-3"><p>${i}</p></div>
                        <div class="col-3">  <p>${urllist[i].name}</p></div>
                        <div class="col-3"> <button type="button" class="btn btn-success"><a href="${urllist[i].adress}" target="_blank"><i class="fa-regular fa-eye pe-2"></i>Visit</a></button></div>
                        <div class="col-3"> <button type="button" class="btn btn-danger" onclick="deletUrl(${i})" ><i class="fa-solid fa-trash pe-2"></i>Delete</button></div>
                    </div>   `

}

function displayData(){
    var cartona=``
    for (let i = 0; i < urllist.length; i++) {
       cartona+=seturlcol(i)   
    }
    document.getElementById("urlData").innerHTML=cartona
}

function deletUrl(index){
    urllist.splice(index,1)
    localStorage.setItem("urlcontainer",JSON.stringify(urllist))
    displayData()

}

// function validName(){
//     var name=inputName.value
//     var regex=/^[A-Z][a-zA-Z]{5,50}$/ig
//     if(regex.test(name)){
//         inputName.classList.add("is-valid")
//         inputName.classList.remove("is-invalid")
//         document.getElementById("msg").classList.add("d-none")
//         return true
//     }else{
//         inputName.classList.add("is-invalid")
//         inputName.classList.remove("is-valid")
//         document.getElementById("msg").classList.remove("d-none")
//         return false
//     }

// }
function validName() {
    var name = inputName.value.trim();
    var regex = /^[a-zA-Z]{5,50}$/i;
    var isUnique = !urllist.some(url => url.name.toLowerCase() === name.toLowerCase());  

    if (regex.test(name) && isUnique) {
        inputName.classList.add("is-valid");
        inputName.classList.remove("is-invalid");
        document.getElementById("msg").classList.add("d-none");
        return true;
    } else {
        inputName.classList.add("is-invalid");
        inputName.classList.remove("is-valid");
        document.getElementById("msg").classList.remove("d-none");

        if (!isUnique) {
            document.getElementById("msg").innerText = "Name already exists. Please use a unique name.";
        } else {
            document.getElementById("msg").classList.remove("d-none")
        }

        return false;
    }
}


function validurl(){
    var data=inputurl.value
    var regex=/^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$/
    if(regex.test(data)){
        inputurl.classList.add("is-valid")
        inputurl.classList.remove("is-invalid")
        document.getElementById("urlmsg").classList.add("d-none")
        return true
    }else{
        inputurl.classList.add("is-invalid")
        inputurl.classList.remove("is-valid")
        document.getElementById("urlmsg").classList.remove("d-none")
        return false
    }

}