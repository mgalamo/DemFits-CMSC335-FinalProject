console.log("✅ getinspirations.js loaded");

const UNSPLASH_KEY = "KnkuOoCqyrWv9fMuUzumyeKQLq1uWkP3gj-8UdJPWlc";

// TOPS
window.loadTops = async function () {
  const placeholder = document.getElementById("placeholder");
  const grid = document.getElementById("topsGrid");

  placeholder.style.display = "none";
  grid.innerHTML = "";

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=fashion blouse men and women&per_page=10&client_id=${UNSPLASH_KEY}`
    );

    const data = await response.json();

    data.results.forEach(photo => {
      const img = document.createElement("img");
      img.src = photo.urls.small;
      img.alt = photo.alt_description || "Fashion top inspiration";
      grid.appendChild(img);
    });
  } catch (err) {
    console.error("Unsplash error:", err);
  }
};

// BOTTOMS
window.loadBottoms = async function () {
  const placeholder = document.getElementById("placeholder");
  const grid = document.getElementById("topsGrid");

  placeholder.style.display = "none";
  grid.innerHTML = "";

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=trousers&per_page=10&client_id=${UNSPLASH_KEY}`
    );

    const data = await response.json();

    data.results.forEach(photo => {
      const img = document.createElement("img");
      img.src = photo.urls.small;
      img.alt = photo.alt_description || "Fashion bottoms inspiration";
      grid.appendChild(img);
    });
  } catch (err) {
    console.error("Unsplash bottoms error:", err);
  }
};

// DRESSES
window.loadDresses = async function () {
  const placeholder = document.getElementById("placeholder");
  const grid = document.getElementById("topsGrid");

  placeholder.style.display = "none";
  grid.innerHTML = "";

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=evening dress&per_page=10&client_id=${UNSPLASH_KEY}`
    );

    const data = await response.json();

    data.results.forEach(photo => {
      const img = document.createElement("img");
      img.src = photo.urls.small;
      img.alt = photo.alt_description || "Dress fashion inspiration";
      grid.appendChild(img);
    });
  } catch (err) {
    console.error("Unsplash dresses error:", err);
  }
};

// SHOES

window.loadShoes = async function () {
  const placeholder = document.getElementById("placeholder");
  const grid = document.getElementById("topsGrid");

  placeholder.style.display = "none";
  grid.innerHTML = "";

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=fancy shoes&per_page=10&client_id=${UNSPLASH_KEY}`
    );

    const data = await response.json();

    data.results.forEach(photo => {
      const img = document.createElement("img");
      img.src = photo.urls.small;
      img.alt = photo.alt_description || "Fashion shoes inspiration";
      grid.appendChild(img);
    });
  } catch (err) {
    console.error("Unsplash shoes error:", err);
  }
};

//ACCESSORIES

window.loadAccessories = async function () {
  const placeholder = document.getElementById("placeholder");
  const grid = document.getElementById("topsGrid");

  placeholder.style.display = "none";
  grid.innerHTML = "";

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=accessories fashion&per_page=10&client_id=${UNSPLASH_KEY}`
    );

    const data = await response.json();

    data.results.forEach(photo => {
      const img = document.createElement("img");
      img.src = photo.urls.small;
      img.alt = photo.alt_description || "Fashion accessories inspiration";
      grid.appendChild(img);
    });
  } catch (err) {
    console.error("Unsplash accessories error:", err);
  }
};

//OUTFITS
window.loadOutfits = async function () {
  const placeholder = document.getElementById("placeholder");
  const grid = document.getElementById("topsGrid");

  placeholder.style.display = "none";
  grid.innerHTML = "";

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=fashion outfit&per_page=10&client_id=${UNSPLASH_KEY}`
    );

    const data = await response.json();

    data.results.forEach(photo => {
      const img = document.createElement("img");
      img.src = photo.urls.small;
      img.alt = photo.alt_description || "Fashion outfit inspiration";
      grid.appendChild(img);
    });
  } catch (err) {
    console.error("Unsplash outfits error:", err);
  }
};




