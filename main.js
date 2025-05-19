
async function loadData() {
  const storeRes = await fetch('_data/store/store.json');
  const releasesRes = await fetch('_data/releases/releases.json');
  const storeItems = await storeRes.json();
  const releases = await releasesRes.json();

  const storeContainer = document.getElementById('store-items');
  storeItems.forEach(item => {
    storeContainer.innerHTML += `
      <div class="border p-4">
        <img src="${item.image}" alt="${item.title}" class="mb-2">
        <h3 class="font-semibold">${item.title}</h3>
        <p>${item.price}</p>
      </div>
    `;
  });

  const releasesContainer = document.getElementById('releases-list');
  releases.forEach(release => {
    releasesContainer.innerHTML += `
      <div class="border p-4">
        <img src="${release.cover}" alt="${release.title}" class="mb-2">
        <h3 class="font-semibold">${release.title}</h3>
        <p>by ${release.artist}</p>
        <a href="${release.link}" target="_blank" class="text-blue-600 underline">Listen</a>
      </div>
    `;
  });
}

loadData();
