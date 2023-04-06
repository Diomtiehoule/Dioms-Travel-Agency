const submitButton = document.querySelectorAll('.btn')

submitButton.Oneclick = ()=>{
    const User = document.getElementsByClassName('.Username').value;
    const mail = document.getElementsByClassName('.email').value;
    const keyWord = document.getElementsByClassName('.password').value;

    localStorage.setItem('User', Username);
    localStorage.setItem('mail', email);  localStorage.setItem('keyWord', password);

    if(User == "" && mail =="" && keyWord ==""){
        alert('veuilllez renseigner')
    }else {
        if(keyWord != password ) {
            alert('mot de passe incorrect');
        }else {
            alert('enregidtrement effectué !');
        }
    }
}