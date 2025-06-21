// js/utils.js

/**
 * Maps an array of genre IDs to their corresponding genre titles.
 * @param {number[]} ids - Array of genre IDs.
 * @param {Object[]} genresList - Array of genre objects with { id, title }.
 * @returns {string[]} Array of genre titles.
 */
export function getGenresByIds(ids, genresList) {
  return ids
    .map((id) => genresList.find((genre) => genre.id === id)?.title)
    .filter(Boolean); // remove undefined values if any
}

/**
 * Formats a date string into a human-readable format.
 * @param {string} dateString - A date in ISO format (e.g. "2024-12-01").
 * @returns {string} Formatted date (e.g. "Dec 1, 2024").
 */
export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/**
 * Gets season details (title + episodes) for a given podcast ID.
 /**
 * Gets season details (title + episodes) for a given podcast ID.
 * @param {string} podcastId - The ID of the podcast.
 * @param {Object[]} seasonsArray - Array of season objects with { id, seasonDetails }.
 * @returns {Object[]} Array of season detail objects (e.g. [{ title, episodes }]).
 */
export function getSeasonsByPodcastId(podcastId, seasonsArray) {
  const match = seasonsArray.find((seasonGroup) => seasonGroup.id === podcastId);
  return match ? match.seasonDetails : [];
}

