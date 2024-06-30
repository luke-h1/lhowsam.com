import Page from '@frontend/components/Page';
import talkService from '@frontend/services/talkService';

const TalksPage = async () => {
  const talks = await talkService.getTalks();

  return <Page>talks</Page>;
};
export default TalksPage;
