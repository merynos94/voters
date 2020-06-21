export const CAST_VOTE_URI = 'http://localhost:3000/votes';
export const OPEN_VOTE_URI = (id) => `http://localhost:3060/votes/${id}/open`;
export const CANDIDATES_URI = 'http://localhost:3060/candidates';
export const RESULTS_URI = 'http://localhost:3060/results';
export const VOTES_URI = 'http://localhost:3060/votes';
export const VOTERS_URI = 'http://localhost:3030/voters';

export default {
  castVoteUri: CAST_VOTE_URI,
  votesUri: VOTES_URI,
  votersUri: VOTERS_URI,
  openVoteUri: OPEN_VOTE_URI,
  candidatesUri: CANDIDATES_URI,
  resultsUri: RESULTS_URI,
}
