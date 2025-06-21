import { podcasts, genres, seasons } from "./data.js";
import { renderPodcastList, renderModalContent } from "./ui.js";
import { getGenresByIds, formatDate, getSeasonsByPodcastId } from "./utils.js";

// Prepare podcast data with genre titles and formatted date
const enhancedPodcasts = podcasts.map((podcast) => ({
  ...podcast,
  genreTitles: getGenresByIds(podcast.genres, genres),
  formattedDate: formatDate(podcast.updated),
  seasonDetails: getSeasonsByPodcastId(podcast.id, seasons),
}));


function init() {
  const listContainer = document.getElementById("podcast-list");

  renderPodcastList(enhancedPodcasts, listContainer);

  listContainer.addEventListener("click", (e) => {
    const card = e.target.closest(".podcast-card");
    if (!card) return;

    const podcastId = card.dataset.id;
    const podcast = enhancedPodcasts.find((p) => p.id === podcastId);

    if (podcast) {
      renderModalContent(podcast);
    }
  });

  // Allow keyboard access to podcast cards
  listContainer.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest(".podcast-card");
      if (!card) return;

      const podcastId = card.dataset.id;
      const podcast = enhancedPodcasts.find((p) => p.id === podcastId);

      if (podcast) {
        renderModalContent(podcast);
      }
    }
  });

  // Close modal on button click
  document.getElementById("close-modal").addEventListener("click", () => {
    closeModal();
  });

  // Optional: Close modal on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

init();
