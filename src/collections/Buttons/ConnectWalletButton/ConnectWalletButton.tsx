import React from "react";
import * as S from "./elements";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export const ConnectWalletButton = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  return isConnected ? (
    <S.ConnectWalletButton onClick={() => disconnect()}>
      Disconnect Wallet
    </S.ConnectWalletButton>
  ) : (
    <S.ConnectWalletButton onClick={() => connect()}>
      Connect Wallet
    </S.ConnectWalletButton>
  );
};
