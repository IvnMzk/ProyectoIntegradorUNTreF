document.addEventListener("DOMContentLoaded", () => {
    const nombreProducto = document.getElementById("nombreProducto");
    const detalleProducto = document.getElementById("detalleProducto");
    const fotoProducto = document.getElementById("carouselWithControls");
    const title = document.getElementById("title");


    // Obtener ID del producto
    const urlParams = new URLSearchParams(window.location.search);
    const idProducto = urlParams.get("id");

    const datosProductos = JSON.parse(localStorage.getItem("productos"));

    const productoSeleccionado = datosProductos.productos.find(
        (producto) => producto.id === idProducto
        );
    if (productoSeleccionado){
        console.log(productoSeleccionado);
        nombreProducto.innerHTML=`<h2>${productoSeleccionado.nombre}</h2>`
        title.innerHTML=`${productoSeleccionado.nombre}`

        const contenedorDetallesProducto = document.createElement("div");
        contenedorDetallesProducto.classList.add("detallesProducto")
        contenedorDetallesProducto.innerHTML=`
            <h4><b>Descripción</b></h4>
            <p>${productoSeleccionado.descripcionLarga}</p>
            <p><b>Precio:</b> ${productoSeleccionado.precio}</p>
            <p><b>Valoración:</b> ${productoSeleccionado.valoracion}/5</p>
        `;
        detalleProducto.appendChild(contenedorDetallesProducto);

        const contenedorFotosProducto = document.createElement("div");
        contenedorFotosProducto.className ="carousel-inner d-flex"

        for (var i = 0; i < productoSeleccionado.src.length; i++) {
            // index
            console.log(productoSeleccionado.src[i]); // value
            const slide = document.createElement("div");
            slide.className = "carousel-item" + (i === 0 ? " active" : "");

            const img = document.createElement("img");
            img.classList.add("imagenProducto");
            img.src = productoSeleccionado.src[i];
            slide.appendChild(img);
            contenedorFotosProducto.appendChild(slide);
            fotoProducto.appendChild(contenedorFotosProducto);
        }

    }
});

