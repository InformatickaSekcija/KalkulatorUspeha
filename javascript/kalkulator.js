function radi() {
    var index;
    var Zbir = 0;
    var prazno = false;
    var nedovoljan = false;
    var nedovoljnanIz ='Nedovoljan si iz: ';
    //selektujemo sva input polja
    var  inputs = document.getElementsByTagName('input');
    //selektijemo sve nazive predmeta
    var nazivi = document.getElementsByClassName('left naziv');
    // petlja koja prolazi kroz sva input polja
    for (index = 0; index < inputs.length; ++index) {
        //pitamo da li je u input uneta ocena, ako da sledi sledeci kod, ako ne alert('niste uneli...')
        if(parseInt(inputs[index].value)){
            // proveravamo da li je vrednost veca od 5, ako da, dodajemo 5
            if(parseInt(inputs[index].value) > 5){
                inputs[index].value = 5;
                Zbir+=5;
            }// proveravamo da li je vrednost manja od 1, ako da, nedovoljan postaje true
            else if(parseInt(inputs[index].value) <= 1){
                inputs[index].value = 1;
                Zbir+=1;
                nedovoljan = true;
                //pravimo string sa nedovoljnim predmetima
                nedovoljnanIz+=nazivi[index].innerHTML + ',';
            }
            //ako gore dva uslova nisu tacna dodajemo unetu ocenu na zbir
            else {
                Zbir = Zbir + parseInt(inputs[index].value);
            }
        }
        //ako ocena nije uneta alertujemo u koje polje nije uneta - naziv premeta
        else{
            alert('Niste uneli ocenu za predmet:' + nazivi[index].innerHTML );
            prazno=true;
        }

    }
    //ako ima praznih polja, nece prikazati vise alertova
    if(prazno){

    }
    //ako ima ocena 1
    else if(nedovoljan) {
        var string = '';
        Zbir=1;
        alert(Zbir);

        alert(nedovoljnanIz.substring(0, nedovoljnanIz.length -1))
    }
    //ako nije nedovoljan i nema praznih polja
    else{
        alert(Zbir/inputs.length)
    }
};

