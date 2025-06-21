
export function renderPodcastList(podcasts, container) {
  container.innerHTML = podcasts
    .map(
      (podcast) => `
    <div class="podcast-card" data-id="${podcast.id}" tabindex="0" role="button" aria-label="View details for ${podcast.title}">
      <img src="${podcast.image}" alt="${podcast.title} cover image" />
      <h2>${podcast.title}</h2>
      <p>${podcast.seasons} Seasons</p>
      <p>${podcast.genreTitles.join(", ")}</p>
      <p>${podcast.formattedDate}</p>
    </div>`
    )
    .join("");
}
export function renderModalContent(podcast) {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");

  const seasonList = podcast.seasonDetails && podcast.seasonDetails.length
    ? podcast.seasonDetails
        .map(
          (season) => `<li>${season.title} – ${season.episodes} episodes</li>`
        )
        .join("")   : "<li>No season data available.</li>";

 modalBody.innerHTML = `
  <div class="modal-content">
    <div class="modal-left">
      <img src="${podcast.image}" alt="${podcast.title} cover" />
    </div>
    <div class="modal-right">
      <h2>${podcast.title}</h2>
      <p><span id="des">Description: </span>${podcast.description}</p>
      <p><strong>Genres:</strong> <span id="e">${podcast.genreTitles.join(",")}</span></p>
      <p><strong>Last Updated:</strong> ${podcast.formattedDate}</p>
      <h3>Seasons</h3>
      <ul>${seasonList}</ul>
    </div>
  </div>
`;


  modal.classList.remove("hidden");
}
