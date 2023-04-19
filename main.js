


const vejamaisbtn = document.querySelector(".veja-mais-btn");
const postcontainer1 = document.querySelector(".post-container1");

vejamaisbtn.addEventListener("click", (e) => {
  postcontainer1.classList.toggle("post-container1");
  if (vejamaisbtn.innerText === "Veja Mais") {
    vejamaisbtn.innerText = "Veja Menos";
  } else {
    vejamaisbtn.innerText = "Veja Mais";
  }
});

var enviar = getElementById('enviar')


enviar.addEventListener("click", () => {
  location.reload()
  alert("E-mail enviado com sucesso!")
})

