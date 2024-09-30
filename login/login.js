function logar() {

  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;

  if (email == "admin" && senha == "admin") {
    alert("Logado com sucesso!");
    location.href = "/scr/styles/home.html";
  } else {
    alert('Usuario ou senha incorretos');
  }
}

