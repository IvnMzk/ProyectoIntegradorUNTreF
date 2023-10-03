fetch("../productos.json")
    .then((response) => response.json())
    .then((data) =>localStorage.setItem("productos", JSON.stringify(data)));

document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById("cardContainer");
    const datosProductos = JSON.parse(localStorage.getItem("productos"));

    if (datosProductos) {
        datosProductos.productos.forEach(producto => {
            const card = document.createElement("div");
            card.className = "card text-center";
            card.innerHTML = `
                <div class="card-body row align-items-center">
                    <div class="col-3"><h5 class="cardTitle">${producto.nombre}</h5></div>
                    <div class="col-7" id="descripcionCorta"><p class="cardText">${producto.descripcionCorta}</p></div>
                    <div class="col-2">
                        <button class="btn btn-primary" id="goTo">Ir al producto</button>
                    </div>
                </div>
            `;

            const cardButton = card.querySelector('#goTo');
            cardButton.addEventListener('click', () => {
                mostrarDetallesProducto(producto);
            });

            cardContainer.appendChild(card);
        });
    };
});

function mostrarDetallesProducto(producto) {
    //Redireccionar a otra página para mostrar los detalles
    window.location.href = `detalleProducto.html?id=${producto.id}`;
}

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
    const inputValue = searchInput.value;
    alert(inputValue);
});
