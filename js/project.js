// Image Gallery
function showProjectImages(projectName) {
  const gallery = document.getElementById("image-gallery");
  const galleryTitle = document.getElementById("gallery-title");
  const galleryImages = document.getElementById("gallery-images");

  // Project images
  const projectImages = {
    mmd: {
      title: "MMD - Computer Showcase",
      images: [
        "assets/images/mmd/mmd-1.jpg",
        "assets/images/mmd/mmd-2.jpg",
        "assets/images/mmd/mmd-3.jpg",
      ],
    },
    inkfinder: {
      title: "InkFinder - Tattoo Service",
      images: [
        "assets/images/inkfinder/inkfinder-1.jpg",
        "assets/images/inkfinder/inkfinder-2.jpg",
        "assets/images/inkfinder/inkfinder-3.jpg",
      ],
    },
    "ai-uprising": {
      title: "AI-Uprising",
      images: [
        "assets/images/ai-uprising/ai-uprising-1.jpg",
        "assets/images/ai-uprising/ai-uprising-2.jpg",
        "assets/images/ai-uprising/ai-uprising-3.jpg",
      ],
    },
    mewe: {
      title: "Me&We - Restaurant Site",
      images: [
        "assets/images/mewe/mewe-1.jpg",
        "assets/images/mewe/mewe-2.jpg",
        "assets/images/mewe/mewe-3.jpg",
      ],
    },
  };

  const project = projectImages[projectName];
  if (project) {
    galleryTitle.textContent = project.title;

    galleryImages.innerHTML = "";

    project.images.forEach(function (imageSrc) {
      const img = document.createElement("img");
      img.src = imageSrc;
      img.alt = project.title;
      img.className = "gallery-image";
      galleryImages.appendChild(img);
    });

    gallery.style.display = "flex";
  }
}

function closeGallery() {
  const gallery = document.getElementById("image-gallery");
  gallery.style.display = "none";
}
