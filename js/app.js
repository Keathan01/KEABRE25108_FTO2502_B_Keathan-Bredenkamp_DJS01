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
