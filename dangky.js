function resetForm() {
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('password').value = ''
    document.getElementById('confirm').value = ''
    document.getElementById('birthday').value = ''
}


function createNewUser() {
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var confirm = document.getElementById('confirm').value
    var birthday = document.getElementById('birthday').value


    if (password != confirm) {
        alert("Mat khau khong trung khop")
    }


    var user = {
        name: name,
        email: email,
        password: password,
        confirm: confirm,
        birthday: birthday,
    }


    window.open('dangnhap.html', '_self')


    var json = JSON.stringify(user)  // Chuyển đối tượng sang dạng Json String, Convert a JavaScript object into a string with JSON.stringify(). https://www.w3schools.com/js/js_json_stringify.asp
    localStorage.setItem('user', json) // The Storage object of the Web Storage API provides access to the session storage or local storage for a particular domain. This allows you to read, add, modify, and delete stored data items.


}

$(document).ready(function () {
    $("#dangky").on("click", function () {
     
        createNewUser();
    });
 });


