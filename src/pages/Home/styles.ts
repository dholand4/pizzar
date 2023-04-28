import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
  padding: 20px;
  align-items: center;
`;

export const editStatusBar = styled.View`
  background-color: ${theme.colors.primary};
  width: 120%;
  height: 7%;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  width: 110%;
  flex: 1;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonAdd = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  border-radius: 100px;
  background-color: ${theme.colors.primary};
  position: absolute;
  bottom: 15px;
  right: 30px;
  align-items: center;
  justify-content: center;
`;

export const ButtonClear = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  border-radius: 100px;
  background-color: ${theme.colors.primary};
  position: absolute;
  bottom: 15px;
  left: 30px;
  align-items: center;
  justify-content: center;
`;
