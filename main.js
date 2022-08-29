document.getElementById("login").addEventListener("click", () => {
    var input = document.getElementById("inputUser");
    localStorage.setItem('user', input.value);
    document.getElementById("identify").innerHTML = localStorage.getItem('user');

})