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

    // Add the art piece and modal to the page
    var gallery = document.getElementById("gallery");
    gallery.insertAdjacentHTML('beforeend', artPieceHtml);
    // gallery.insertAdjacentHTML('afterend', modalHtml);

    // Get the image and modal elements
    var image = document.getElementById(id);

    // Add event listeners to the image and close button
    image.addEventListener("click", function() {
        curModalIdx = parseInt(image.getAttribute("index"));
        document.getElementById("modal").setAttribute("src", fullResSrcs[curModalIdx]);
        document.getElementById("modal").style.display = "block";
    });
}

function addArtVideo(id, collection, url, caption="") {
    var thumbnailSrc = "images/gallery/" + collection + "/" + id + ".mp4";

    // Create the art piece HTML
    var artPieceHtml = '<div class="art-piece">'
    artPieceHtml += '<a href="' + url + '" target="_blank">';
    artPieceHtml += '<video width="100%" playsinline="" autoplay="" loop="" preload="" muted="">';
    artPieceHtml += '<source src="' + thumbnailSrc + '" id="' + id + '" type=video/mp4></video></a>';
    if (caption != "") {
        artPieceHtml += '<p>' + caption + '</p>';
    }
    artPieceHtml += '</div>';

    // Add the art piece and modal to the page
    var gallery = document.getElementById("gallery");
    gallery.insertAdjacentHTML('beforeend', artPieceHtml);
}

function addCollection(collection, ids, caption="", captions=null) {
    if (captions == null) {
        captions = [];
        for (var i in ids) {
            captions.push("");
        }
    }
    let gallery = document.getElementById("gallery");
    gallery.insertAdjacentHTML('beforeend', '<div class="gallery-row">');
    for (var i = 0; i < ids.length; i++) {
        addArtPiece(ids[i], collection, captions[i]);
    }
    if (caption != "") {
        gallery.insertAdjacentHTML('beforeend', "<p>"+caption+"</p>");
    }
    gallery.insertAdjacentHTML('beforeend', "</div>");
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

    let gallery = document.getElementById("gallery");
    addCollection("new-year", ["04", "13", "00"],
        'Magical New Year fireworks + Parthenon + rainforest + Studio Ghibli.');
    
    gallery.insertAdjacentHTML('beforeend', '<div class="gallery-row">');
    addArtVideo("o4", "vids", "https://www.instagram.com/p/CnPWggDOJVM/", "")
    addArtVideo("md", "vids", "https://www.instagram.com/p/CnZ9Fm6OS2J/", "")
    addArtVideo("jojo", "vids", "https://www.instagram.com/p/CnUgwucuHc7/", "")
    gallery.insertAdjacentHTML('beforeend', "</div>");

    addCollection("grilled", ["09", "16", "17"], "",
        ['Grilled violin.',
        'Grilled tennis ball.',
        'Grilled light bulb.']);
    addCollection("spaghetti", ["07", "12", "07a"],
        'Billy Mays, Karl Marx, and Ruth Bader Ginsburg "triumphantly advertising spaghetti".');
    addCollection("corkscrew", ["14", "03", "19"],
        'A giant corkscrew as the villain in a classic hand-drawn Disney animation.');
    addCollection("nyse", ["10", "07", "03"],
        'National Geographic award-winning photos on the trading floor of the NYSE.');

    addCollection("misc", ["0F", "10", "01"], "")
}