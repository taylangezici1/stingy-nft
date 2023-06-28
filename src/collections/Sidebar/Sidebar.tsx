import { Image } from "@/components/Image";
import * as S from "./elements";

const Sidebar: React.FC = ({ ...props }) => {
  return (
    <S.SidebarContainer>
      <S.SidebarHeader>
        <Image src="/logo.png" height={45} width={45} objectFit="contain" />
        <S.SidebarHeaderTitle>STINGY</S.SidebarHeaderTitle>
      </S.SidebarHeader>
      <S.SidebarBody>
        <S.SidebarList>
          <S.SidebarListItem>
            <S.SidebarButton variant="text" color="primary">
              <S.SidebarIcon />
              <S.MenuText>Dashboard</S.MenuText>
            </S.SidebarButton>
          </S.SidebarListItem>
        </S.SidebarList>
      </S.SidebarBody>
    </S.SidebarContainer>
  );
};

export default Sidebar;
