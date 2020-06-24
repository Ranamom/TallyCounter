var cntr = document.getElementById('counter');
var incr = document.getElementById('inc');
var reset = document.getElementById('res');
var decr = document.getElementById('dec');
var value = 0;
incr.addEventListener('click', function(e){
    value +=1;
    cntr.innerHTML=value;
})
decr.addEventListener('click', function(e){
    value -=1;
    cntr.innerHTML=value;
})
reset.addEventListener('click', function(e){
    value =0;
    cntr.innerHTML=value;
})