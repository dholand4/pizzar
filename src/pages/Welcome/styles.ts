import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background};
`;

export const Image = styled.Image`
  width: 325px;
  height: 325px;
  top: -30px;
  margin-bottom: 25px;
`;

export const Title = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
  color: ${theme.colors.text};
`;
export const Text = styled.Text`
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
  text-align: justify;
  color: ${theme.colors.text};
  margin-bottom: 60px;
`; 