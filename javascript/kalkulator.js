function radi() {
    var index;
    var Zbir = 0;
    var prazno = false;
    var nedovoljan = false;
    var  inputs = document.getElementsByTagName('input');

    for (index = 0; index < inputs.length; ++index) {
        if(parseInt(inputs[index].value)){
            if(parseInt(inputs[index].value) > 5){
                Zbir+=5;
            }
            else if(parseInt(inputs[index].value) <= 1){
                Zbir+=1;
                nedovoljan = true;
            }
            else {
                Zbir = Zbir + parseInt(inputs[index].value);
            }
        }
        else{
            alert('Niste uneli ocenu u broj:' + index )
        }

    }
    if(prazno){

    }
    else if(nedovoljan) {
        Zbir=1;
        alert(Zbir);
        alert('Nedovoljan/a si! ')
    }
    else{
        alert(Zbir/inputs.length)
    }
};

