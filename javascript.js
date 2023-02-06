window.onscroll = function(){
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container')
        .classList.add('show');
    }else{
        document.querySelector('.go-top-container')
        .classList.remove('show');
    }
}

document.querySelector('.go-top-container')
.addEventListener('click', () =>{
    window.scrollTo({
        top: 0
    });
});
function evento() {
    let timerInterval
    Swal.fire({
        title: 'Gracias por visitar mi perfil!',
        
        timer: 4000,
        timerProgressBar: true,
       
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('Cerrado')
        }
    })
}

