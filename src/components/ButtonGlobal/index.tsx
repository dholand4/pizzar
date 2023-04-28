import React, { memo } from "react";

import * as S from "./styles";

interface Props {
  text?: string;
  color?: string;
  colorText?: string;
  action?: () => void;
}

function ButtonGlobal({ action, text, color, colorText }: Props) {
  return (
    <S.Container>
      <S.Button color={color} onPress={action}>
        <S.ButtonText colorText={colorText}>{text}</S.ButtonText>
      </S.Button>
    </S.Container>
  );
}

export default memo(ButtonGlobal);
