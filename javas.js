function checkInput(){
    let inputs = document.querySelectorAll(".ele");

   ;
    inputs.forEach(function(input){

        input.classList.remove("error")

        if (input.value.trim() == ""){
            input.classList.remove("input")
            input.classList.remove("normal-input")
            input.classList.add("error");
            return
        }
        
        



    })
}



let inputs = document.querySelectorAll(".ele");

inputs.forEach( input => {
    input.addEventListener("focus", function (){ 
        input.classList.add("active-input");
    });

    input.addEventListener("blur", function (){ 
        input.classList.remove("active-input");
        input.classList.add("normal-input")
    });
});


