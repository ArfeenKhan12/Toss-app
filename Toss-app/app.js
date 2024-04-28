const para = document.querySelector('#para')

function toss(){
    const logic = Math.ceil(Math.random()*2)
    console.log(logic)
    const head = 1;
    const tails = 2;

    if ( logic == head ){
        para.innerHTML = 'You Won The Toss'
     } else {
         para.innerHTML = 'YOu Loss The Match'
        }
    
   
}