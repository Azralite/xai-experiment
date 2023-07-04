import XAIQuestionnaire from '@/components/XAIQuestionnaire';
import getRandomizedNewsItems from '@/helper/get-randomized-news-items';
import { SurveyPart } from '@/model/survey-part';
import { XAIFeatureLevel } from '@/model/xai-feature-level';

// Ici on va recupérer les valeurs dans l'URL pour déterminer les props
const Home = ({
  features,
  group,
  part,
}: {
  features: XAIFeatureLevel;
  group: string;
  part: SurveyPart;
}) => {
  // parse group number from group string
  const groupNumber = parseInt(group.split('-')[1]);
  const newsItems = getRandomizedNewsItems(groupNumber, part);
  console.log(newsItems);

  return (
    <XAIQuestionnaire
      newsItems={newsItems} // La liste des news
      xaiFeature={features} // La feature dans laquelle on est
      groupNumber={groupNumber} // Notre groupe
      part={part} // La partie dans laquelle on est
    />
  );
};

export default Home;

export const getStaticPaths = async () => {
  const features = ['basic', 'salient', 'explanations'];
  const groups = [2].map((group) => `group-${group}`);
  const parts = ['qualification', 'main'];

  const paths = features.flatMap((features) => {
    return groups.flatMap((group) => {
      return parts.map((part) => {
        return {
          params: {
            features,
            group,
            part,
          },
        };
      });
    });
  });

  return { paths, fallback: false };
};

export const getStaticProps = async ({
  params,
}: {
  params: {
    features: string;
    group: string;
    part: string;
  };
}) => {
  return {
    props: {
      features: params.features,
      group: params.group,
      part: params.part,
    },
  };
};
