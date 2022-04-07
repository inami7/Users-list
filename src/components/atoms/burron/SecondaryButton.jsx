//画面の主要なボタン
import styled from "styled-components";
import { BaseButton } from "./BaseButton";
export const SecondaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

//共通のcssを読み込んでつなげる
const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
