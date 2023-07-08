import * as S from "./elements";
import Typography from "@mui/material/Typography";
import { INftCollection } from "@/types";

interface MyCollectionsCardProps {
  collection: INftCollection;
}

export const MyCollectionsCard: React.FC<MyCollectionsCardProps> = ({
  collection,
}) => {
  const { imageUrl, name } = collection;
  return (
    <S.Container>
      <S.Card>
        <S.CardActionArea>
          <S.CardMedia
            component="img"
            height="140"
            image={imageUrl}
            alt={name}
          />
          <S.CardContent>
            <S.CardHeader>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
            </S.CardHeader>
          </S.CardContent>
        </S.CardActionArea>
      </S.Card>
    </S.Container>
  );
};
