window.addEventListener('load', ()=>{
    //SHow message, if user clicked on login button.
    let form = document.querySelector('#form')
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        swal.fire({
            toast: true,
            text: "Bro, Are you stupid? 🤣",
            timerProgressBar: true,
            timer: 2000,
            showConfirmButton: false,
        })
    })
})