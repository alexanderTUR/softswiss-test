import { HeroBlock } from '../../components/HeroBlock/HeroBlock';
import { OffersBlock } from '../../components/OffersBlock/OffersBlock';
import { ContentBlock } from '../../components/ContentBlock/ContentBlock';
import { TextExpander } from '../../components/TextExpander/TextExpander';
import { TextExpanderCss } from '../../components/TextExpanderCss/TextExpanderCss';

export const Homepage = () => {
  return (
    <>
      <HeroBlock />
      <OffersBlock />
      <ContentBlock heading='Embark on a space journey (with useState)'>
        <TextExpander collapsedNumWords={40}>
          Traveling into space is one of the most exciting and unforgettable adventures that can
          change your life forever. And if you have ever dreamed of exploring stars, planets and
          galaxies, then our company is ready to help you realize this dream. We offer a unique
          experience that will allow you to go on a space journey and see all the secrets of the
          universe. We guarantee that every moment in space will be filled with incredible
          impressions, excitement and new discoveries. Our team of professionals takes care of your
          safety and comfort so that you can fully enjoy your adventure in space. We offer various
          options for space excursions. Traveling into space is one of the most exciting and
          unforgettable adventures that can change your life forever. And if you have ever dreamed
          of exploring stars, planets and galaxies, then our company is ready to help you realize
          this dream. We offer a unique experience that will allow you to go on a space journey and
          see all the secrets of the universe. We guarantee that every moment in space will be
          filled with incredible impressions, excitement and new discoveries. Our team of
          professionals takes care of your safety and comfort so that you can fully enjoy your
          adventure in space. We offer various options for space excursions.
        </TextExpander>
      </ContentBlock>
      <ContentBlock heading='Embark on a space journey (with CSS)'>
        <TextExpanderCss>
          Traveling into space is one of the most exciting and unforgettable adventures that can
          change your life forever. And if you have ever dreamed of exploring stars, planets and
          galaxies, then our company is ready to help you realize this dream. We offer a unique
          experience that will allow you to go on a space journey and see all the secrets of the
          universe. We guarantee that every moment in space will be filled with incredible
          impressions, excitement and new discoveries. Our team of professionals takes care of your
          safety and comfort so that you can fully enjoy your adventure in space. We offer various
          options for space excursions. Traveling into space is one of the most exciting and
          unforgettable adventures that can change your life forever. And if you have ever dreamed
          of exploring stars, planets and galaxies, then our company is ready to help you realize
          this dream. We offer a unique experience that will allow you to go on a space journey and
          see all the secrets of the universe. We guarantee that every moment in space will be
          filled with incredible impressions, excitement and new discoveries. Our team of
          professionals takes care of your safety and comfort so that you can fully enjoy your
          adventure in space. We offer various options for space excursions.
        </TextExpanderCss>
      </ContentBlock>
    </>
  );
};
