var curModalIdx = null;
var fullResSrcs = [];
var counter = 0;


function addArtPiece(id, collection, caption="") {
    var thumbnailSrc = "images/gallery/" + collection + "/" + id + "_thumb.png";
    var fullResSrc = "images/gallery/" + collection + "/" + id + ".png";
    id = collection+id;
    fullResSrcs.push(fullResSrc);

    // Create the art piece HTML
    var artPieceHtml = '<div class="art-piece">';
    artPieceHtml += '<img src="' + thumbnailSrc + '" alt="' + caption + '" id="' + id + '" index=' + counter + '>';
    if (caption != "") {
        artPieceHtml += '<p>' + caption + '</p>';
    }
    artPieceHtml += '</div>';
    counter++;

    // Create the modal HTML
    // var modalHtml = '<div id="modal-' + id + '" class="modal">';
    // // modalHtml += '<span class="close" id="close-' + id + '">&times;</span>';
    // modalHtml += '<img src="' + fullResSrc + '" alt="' + caption + '" class="modal-content">';
    // modalHtml += '</div>';

    // Add the art piece and modal to the page
    var gallery = document.getElementById("gallery");
    gallery.insertAdjacentHTML('beforeend', artPieceHtml);
    // gallery.insertAdjacentHTML('afterend', modalHtml);

    // Get the image and modal elements
    var image = document.getElementById(id);
    // var modal = document.getElementById('modal-' + id);

    // Add event listeners to the image and close button
    image.addEventListener("click", function() {
        curModalIdx = parseInt(image.getAttribute("index"));
        document.getElementById("modal").setAttribute("src", fullResSrcs[curModalIdx]);
        document.getElementById("modal").style.display = "block";
    });
    // document.addEventListener('keydown', function(event) {
    //     switch (event.key) {
    //         case "ArrowLeft":
    //         // Find the previous art piece and open its modal
    //         // Reverse order
    //         var prevModal = activeModal.nextElementSibling;
    //         if (prevModal.matches('img')) {
    //             activeModal.style.display = "none";
    //             // var prevModalId = prevArtPiece.firstElementChild.id;
    //             // var prevModal = document.getElementById(prevModalId);
    //             prevModal.style.display = "block";
    //             activeModal = prevModal;
    //         }
    //         break;
    //         case "ArrowRight":
    //         // Find the next art piece and open its modal
    //         var nextModal = activeModal.previousElementSibling;
    //         if (nextModal.matches('img')) {
    //             activeModal.style.display = "none";
    //             nextModal.style.display = "block";
    //             activeModal = nextModal;
    //         }
    //         break;
    //     }
    // });
}

window.onload = function() {
    document.addEventListener("keydown", function(event) {
        if (curModalIdx != null) {
            switch (event.key) {
            case "ArrowRight":
                if (curModalIdx < fullResSrcs.length - 1) {
                    curModalIdx++;
                } else {
                    curModalIdx = 0;
                };
                document.getElementById("modal").setAttribute("src", fullResSrcs[curModalIdx]);
                break;
            case "ArrowLeft":
                if (curModalIdx > 0) {
                    curModalIdx--;
                } else {
                    curModalIdx = fullResSrcs.length - 1;
                };
                document.getElementById("modal").setAttribute("src", fullResSrcs[curModalIdx]);
                break;
            }
        }
    });
    
    document.addEventListener("click", function(event) {
      if (!event.target.matches('img')) {
        document.getElementById("modal").style.display = "none";
        curModalIdx = null;
        // activeModal.style.display = "none";
        // activeModal = null;
      }
    });

    var gallery = document.getElementById("gallery");
    addArtPiece("04", "new-year")
    addArtPiece("00", "new-year")
    addArtPiece("13", "new-year")
    gallery.insertAdjacentHTML('beforeend', "<p>Magical New Year fireworks + Parthenon + rainforest + Studio Ghibli.</p>");
    gallery.insertAdjacentHTML('beforeend', "<br><br>");
    addArtPiece("14", "corkscrew")
    addArtPiece("03", "corkscrew")
    addArtPiece("19", "corkscrew")
    gallery.insertAdjacentHTML('beforeend', "<p>A giant corkscrew as the villain in a classic hand-drawn animated Disney cartoon.</p>");
    gallery.insertAdjacentHTML('beforeend', "<br><br>");
    addArtPiece("09", "grilled", "Perfectly grilled violin.")
    addArtPiece("16", "grilled", "Perfectly grilled tennis ball.")
    addArtPiece("17", "grilled", "Perfectly grilled light bulb.")
    gallery.insertAdjacentHTML('beforeend', "<br><br>");
    addArtPiece("10", "nyse")
    addArtPiece("07", "nyse")
    addArtPiece("03", "nyse")
    gallery.insertAdjacentHTML('beforeend', "<p>National Geographic award-winning photos on the trading floor of the NYSE.</p>");
    gallery.insertAdjacentHTML('beforeend', "<br><br>");
    addArtPiece("07", "spaghetti")
    addArtPiece("12", "spaghetti")
    addArtPiece("07a", "spaghetti")
    gallery.insertAdjacentHTML('beforeend', '<p>Billy Mays, Karl Marx and Ruth Bader Ginsburg "triumphantly advertising spaghetti".</p>');
    gallery.insertAdjacentHTML('beforeend', "<br><br>");
    addArtPiece("0F", "edited", "A handshake.")
    addArtPiece("96", "edited", "Pencil sharpener ゴゴゴゴ")
    // addArtPiece("96", "edited", "Vive la révolution!")
}