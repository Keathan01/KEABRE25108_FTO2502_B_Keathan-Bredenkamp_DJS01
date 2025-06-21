
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