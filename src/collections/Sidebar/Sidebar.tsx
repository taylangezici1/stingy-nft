import { Image } from "@/components/Image";
import * as S from "./elements";
import { useRouter } from "next/router";
import { ConnectWalletButton } from "../Buttons";

const Sidebar: React.FC = ({ ...props }) => {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <S.SidebarContainer>
      <S.SidebarHeader>
        <Image src="/logo.png" height={45} width={45} objectFit="contain" />
        <S.SidebarHeaderTitle>STINGY</S.SidebarHeaderTitle>
      </S.SidebarHeader>
      <S.SidebarBody>
        <S.SidebarList>
          <S.SidebarListItem>
            <S.SidebarButton
              variant="text"
              color="primary"
              onClick={() => handleNavigate("dashboard")}
            >
              <S.SidebarIcon />
              <S.MenuText>Dashboard</S.MenuText>
            </S.SidebarButton>
          </S.SidebarListItem>
        </S.SidebarList>
      </S.SidebarBody>
      <ConnectWalletButton />
    </S.SidebarContainer>
  );
};

export default Sidebar;
