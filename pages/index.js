import { theme } from '../styles/Theme';
import Intro from '../components/Intro/Intro';

export default function Home() {
  return (
    <>
      <Intro theme={theme} />
    </>
  );
}
