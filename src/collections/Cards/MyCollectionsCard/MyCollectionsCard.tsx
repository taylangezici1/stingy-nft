import * as S from "./elements";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { INftCollection } from "@/types";

interface MyCollectionsCardProps {
  collection: INftCollection;
}

export const MyCollectionsCard: React.FC<MyCollectionsCardProps> = ({
  collection,
}) => {
  const { imageUrl, name } = collection;
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="140" image={imageUrl} alt={name} />
        {/* <CardContent> */}
        <S.CardHeader> {name}</S.CardHeader>
        {/* </CardContent> */}
      </CardActionArea>
    </Card>
  );
};
