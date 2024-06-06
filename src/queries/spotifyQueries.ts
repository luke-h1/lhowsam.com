import spotifyService from '@frontend/services/spotifyService';
import { createQueryKeys } from '@lukemorales/query-key-factory';

const spotifyQueries = createQueryKeys('spotifyService', {
  nowPlaying() {
    return {
      queryFn: () => spotifyService.lambdaNowPlaying(),
      queryKey: ['nowPlaying'],
    };
  },
});
export default spotifyQueries;
