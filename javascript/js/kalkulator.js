$(document).ready(function () {
    var oceneNiz = [];
    var zbirOcene= 0;
    $('#hehe').on('click', function () {
        for(i=0; i<$('.spisakPredmeta li').length; i++){
            if($('.spisakPredmeta').children().eq(i).children('.right').children('input').val()){
                oceneNiz.push($('.spisakPredmeta').children().eq(i).children('.right').children('input').val())
            }
            else{
                alert('popunite polje:' + i)
            }
        };
        for(i=0; i<oceneNiz.length; i++){
            zbirOcene+=parseInt(oceneNiz[i]);
        }
        var srOcena = zbirOcene/oceneNiz.length;
        alert(srOcena);
    })
});