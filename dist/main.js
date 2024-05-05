let open = document.querySelector('.hamburger-icon')
let close = document.querySelector('.cross-icon')

let coverPage = document.querySelector('.cover')

open.addEventListener('click',()=>{
    coverPage.classList.add('flex')
    coverPage.classList.remove('hidden')
    console.log("clicked");
})

close.addEventListener('click',()=>{
    coverPage.classList.add('hidden')
    coverPage.classList.remove('flex')
    console.log("unclicked");
})



var myForm = document.getElementById('student-form');

myForm.addEventListener('submit', function () {
    var allInputs = myForm.getElementsByTagName('input');

    for (var i = 0; i < allInputs.length; i++) {
        var input = allInputs[i];

        if (input.name && !input.value) {
            input.name = '';
        }
    }
});