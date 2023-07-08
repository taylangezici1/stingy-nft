import * as S from "./elements";
import { INftCollection } from "@/types";

interface MyCollectionsCardProps {
  collection: INftCollection;
}

export const MyCollectionsCard: React.FC<MyCollectionsCardProps> = ({
  collection,
}) => {
  const { imageUrl, name, floorPrice } = collection;
  return (
    <S.CollectionCard>
      <S.CollectionImageWrapper>
        <S.CollectionImage
          src={imageUrl}
          height={75}
          width={75}
        ></S.CollectionImage>
      </S.CollectionImageWrapper>
      <S.CollectionCardBody>
        <S.CollectionCardTitle>{name}</S.CollectionCardTitle>
      </S.CollectionCardBody>
      <S.CollectionCardFooter>
        <S.CollectionCardStatKey>Floor Price</S.CollectionCardStatKey>
        <S.CollectionCardStatValue>{floorPrice} ETH</S.CollectionCardStatValue>
      </S.CollectionCardFooter>
    </S.CollectionCard>
  );
};
