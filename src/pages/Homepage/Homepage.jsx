import { HeroBlock } from '../../components/HeroBlock/HeroBlock';
import { Offers } from '../../components/Offers/Offers';
import { ContentBlock } from '../../components/ContentBlock/ContentBlock';

export const Homepage = () => {
  return (
    <>
      <HeroBlock />
      <Offers />
      <ContentBlock />
    </>
  );
};
