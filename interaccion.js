const yesBtn = document.querySelector("#yesBtn");

yesBtn.addEventListener("click", function() {
    
    if (window.confirm("Sabía que ibas a decir que siiiii!!!")) {
        if(window.confirm("Desbloquear o Comunicarse con el numero 3103375801"))
        window.location.href = "https://www.youtube.com/watch?v=nB_j4oX7s5U&list=RDnB_j4oX7s5U&index=1"; // Reemplaza con el enlace de YouTube que deseas abrir
    }
});

function showAlert(message) {
    const alertContainer = document.getElementById('my-alert');
    const alertMessage = document.getElementById('alert-message');
    alertMessage.innerText = message;
    alertContainer.classList.remove('alert-hidden');
  }
  
noBtn.addEventListener("mouseover", function() {
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    noBtn.style.setProperty("top", randomY + "%");
    noBtn.style.setProperty("left", randomX + "%");
    noBtn.style.setProperty("transform", `translate(-${randomX}%, -${randomY}%)`);
});

