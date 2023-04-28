import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  width: 90%;
  height: 50px;
  align-items: center;
  margin-bottom: 20px;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
  margin-right: 5px;
`;

export const ButtonTitle = styled.TouchableOpacity`
  margin-left: 5px;
`;

export const Line = styled.View`
  width: 100%;
  align-items: center;
  border: 2px;
  border-bottom-color: ${theme.colors.text};
  border-color: ${theme.colors.background};
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonUp = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  background-color: ${theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const ButtonDown = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  background-color: ${theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const Score = styled.TextInput`
  font-size: 25px;
  color: ${theme.colors.text};
  margin-left: 10px;
  margin-right: 5px;
`;

export const Eater = styled.TextInput`
  font-size: 20px;
  color: ${theme.colors.text};
`;

export const TextInputScore = styled.TextInput`
  font-size: 30px;
  color: ${theme.colors.text};
`;

export const ButtonAddName = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  background-color: ${theme.colors.primary};
  align-items: center;
  justify-content: center;
`;
