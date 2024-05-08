document.getElementById('execute-button').addEventListener('click', function() {
    var htmlCode = document.getElementById('html-editor').value;
    var cssCode = document.getElementById('css-editor').value;
    var jsCode = document.getElementById('js-editor').value;

    // Creamos un contenedor temporal para el HTML
    var tempContainer = document.createElement('div');
    tempContainer.innerHTML = htmlCode;

    // Buscamos todas las imágenes en el HTML y reemplazamos las rutas
    var images = tempContainer.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        var src = images[i].getAttribute('src');
        if (src && src.includes('images/')) {
            var imageName = src.substring(src.lastIndexOf('images/') + 7);
            images[i].setAttribute('src', baseUrl + imageName);
        }
    }

    // Concatenamos el HTML, CSS y JavaScript
    var finalHtml = '<html><head><style>' + cssCode + '</style></head><body>' +
        tempContainer.innerHTML + '<script>' + jsCode + '</script></body></html>';

    // Establecemos el contenido HTML en el iframe
    var outputFrame = document.getElementById('output-frame');
    outputFrame.srcdoc = finalHtml;
});

// URL base del repositorio
var baseUrl = "https://raw.githubusercontent.com/gleimbek/images/main/";
