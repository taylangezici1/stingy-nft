import React from "react";
import * as S from "./elements";
import { MyCollectionsCard } from "@/collections/Cards";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { INftCollection } from "@/types";
import { Card } from "@/components";

export const DashboardPage: React.FC = () => {
  const { data, isLoading, isError } = useQuery(["collections"], async () => {
    const { data } = await axios.get<{ collections: INftCollection[] }>(
      "http://localhost:3000/api/collections"
    );
    return data.collections;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <S.Container>
      <S.MyCollectionsContainer>
        <S.MyCollectionsHeader>
          <S.MyCollectionsTitle>My Collections</S.MyCollectionsTitle>
        </S.MyCollectionsHeader>
        <S.MyCollectionsBody>
          {data.map((collection) => (
            <MyCollectionsCard key={collection.slug} collection={collection} />
          ))}
        </S.MyCollectionsBody>
      </S.MyCollectionsContainer>
    </S.Container>
  );
};
