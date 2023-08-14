// step-1: add click event 
document.getElementById('btn-submit').addEventListener('click',function(){
    // console.log('submit button click')
    // step-2: get email address
    const emailField =document.getElementById('input-email');
    const email = emailField.value ;
     // console.log(email)
    // step -3 get password
    // step-3.a  set id on the html
    // step -3.b get the element
    // step -3.b get the value from the element
    // step -3.b get the element
    const passwordField =document.getElementById('input-password');
    const password = passwordField.value ;
    // console.log(password)
    // #remember----DO NOT VERIFY email password on the client side
    // step-4:verify email and password
    if(email === 'sushil500530@gmail.com' && password === 'su500530ap'){
        window.location.href = 'bank.html'
    }
    else{
       alert(' tui password vule gechos!! toke ami tejjo sontan ghosona korlam!')
    }
})