function radi() {
    var index;
    var Zbir = 0;
    var prazno = false;
    var nedovoljan = false;
    //selectujemo sva input polja
    var  inputs = document.getElementsByTagName('input');
    // petlja koja prolazi kroz sva input polja
    for (index = 0; index < inputs.length; ++index) {
        //pitamo da li je u input uneta ocena, ako da sledi sledeci kod, ako ne alert('niste uneli...')
        if(parseInt(inputs[index].value)){
            // proveravamo da li je vrednost veca od 5, ako da, dodajemo 5
            if(parseInt(inputs[index].value) > 5){
                Zbir+=5;
            }// proveravamo da li je vrednost manja od 1, ako da, nedovoljan postaje true
            else if(parseInt(inputs[index].value) <= 1){
                Zbir+=1;
                nedovoljan = true;
            }
            //ako gore dva uslova nisu tacna dodajemo unetu ocenu na zbir
            else {
                Zbir = Zbir + parseInt(inputs[index].value);
            }
        }
        //ako ocena nije uneta alertujemo u koje polje nije uneta
        else{
            alert('Niste uneli ocenu u broj:' + index);
            prazno=true;
        }

    }
    //ako ima praznih polja, nece prikazati vise alertova
    if(prazno){

    }
    //ako ima ocena 1
    else if(nedovoljan) {
        Zbir=1;
        alert(Zbir);
        alert('Nedovoljan/a si! ')
    }
    //ako nije nedovoljan i nema praznih polja
    else{
        alert(Zbir/inputs.length)
    }
};

