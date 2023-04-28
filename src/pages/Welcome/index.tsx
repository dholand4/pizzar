import React from "react";
import pizza from "../../assets/images/pizza.png";
import * as S from "./styles";
import ButtonGlobal from "../../components/ButtonGlobal";
import theme from "../../global/styles/theme";
import { useNavigation } from "@react-navigation/native";

export function Welcome() {
  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate("Home");
  }

  return (
    <S.Container>
      <S.Image source={pizza}></S.Image>
      <S.Title>O que acontece no rodízio, fica no rodízio...</S.Title>
      <S.Text>
        Quer saber quantos pedaços de pizza você já comeu no rodízio? Deixe a
        contagem com a gente e foque no que realmente importa: aproveitar cada
        mordida deliciosa! 😏
      </S.Text>
      <ButtonGlobal action={handleNavigation} text="Entrar"></ButtonGlobal>
      <ButtonGlobal
        color={theme.colors.background}
        colorText={theme.colors.text}
        text="Compartilhar"
      ></ButtonGlobal>
    </S.Container>
  );
}
