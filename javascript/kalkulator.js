function radi() {
    var index;
    var ZbirV = 0;
    var ZbirM = 0;
    var  inputs = document.getElementsByTagName('input');

    for (index = 0; index < inputs.length; ++index) {
        ZbirV=ZbirV+parseInt(inputs[index].value);

    }
    alert(ZbirV);
    alert(ZbirV/inputs.length);
};

