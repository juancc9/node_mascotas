
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnSubirFoto");
  const input = document.getElementById("foto");
  const textoPorDefecto = "Subir una foto";

  btn.textContent = textoPorDefecto ;

  btn.addEventListener("click", () => {
    input.click();
  });

  input.addEventListener("change", () => {
    if (input.files.length > 0) {
      btn.textContent = ` ${input.files[0].name}`;
    } else {
      btn.textContent = textoPorDefecto + " Ninguna";
    }
  });
});

const RedirectMain=()=>{
  window.location="main.html"
}