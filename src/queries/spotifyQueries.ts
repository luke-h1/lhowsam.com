import spotifyService from '@frontend/services/spotifyService';
import { createQueryKeys } from '@lukemorales/query-key-factory';

const spotifyQueries = createQueryKeys('spotifyService', {
  nowPlaying: {
    queryFn: () => spotifyService.lambdaNowPlaying(),
    queryKey: ['nowPlaying'],
  },
});
export default spotifyQueries;
