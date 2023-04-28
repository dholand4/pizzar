import styled from "styled-components/native";
import theme from "../../global/styles/theme";

interface ContainerProps {
  color?: string;
}

interface ButtonTextProps {
  colorText?: string;
}

export const Container = styled.View`
  width: 90%;
  height: 50px;
  margin-top: 25px;
`;

export const Button = styled.TouchableOpacity<ContainerProps>`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: ${({ theme, color }) => color || theme.colors.primary};
  border-radius: 25px;
  border: 2px;
  border-color: ${theme.colors.primary};
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme, colorText }) => colorText || theme.colors.background};
`;