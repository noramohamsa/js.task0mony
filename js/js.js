
function conv(){
    let input=document.getElementById("num").value;
    let massage=document.getElementById("output");
    let result = input*3.75;

    if(input === ""){
        massage.innerHTML= "please enter a number ";
    }else if (isNaN(input)){
        massage.innerHTML= "That's not a number ";
    }
    else if (input === "0"){
        massage.innerHTML= "please don't enter Zero ";
    }
    else if (input < 0){
        massage.innerHTML= "please enter a number > 0";
    }
    else{
        massage.innerHTML= input+ " " + "Dollar is worth" + " " + result + " " + "Riyal" ;
    }
}