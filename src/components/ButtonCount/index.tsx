import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as S from "./styles";
import theme from "../../global/styles/theme";

interface Props {
  text?: string;
  color?: string;
  colorText?: string;
}

interface ScoreProps {
  initialValue: number;
}

function Score({ initialValue }: ScoreProps) {
  const [score, setScore] = useState(initialValue);

  useEffect(() => {
    async function loadScore() {
      const savedScore = await AsyncStorage.getItem(`@score${initialValue}`);
      if (savedScore !== null) {
        setScore(parseInt(savedScore));
      }
    }
    loadScore();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(`@score${initialValue}`, score.toString());
  }, [score]);

  const handleScoreChange = (value: number) => {
    setScore(value);
  };

  return (
    <S.ContainerButton>
      <S.ButtonDown onPress={() => handleScoreChange(score - 1)}>
        <Feather name="minus" color={theme.colors.background} size={30} />
      </S.ButtonDown>
      <S.Score
        keyboardType="numeric"
        value={score.toString()}
        onChangeText={handleScoreChange}
        editable={true}
      />
      <S.ButtonUp onPress={() => handleScoreChange(score + 1)}>
        <Feather name="plus" color={theme.colors.background} size={30} />
      </S.ButtonUp>
    </S.ContainerButton>
  );
}

function ButtonCount({ text = "", color, colorText }: Props) {
  const [eaterText, setEaterText] = useState(text);

  useEffect(() => {
    async function loadText() {
      const savedText = await AsyncStorage.getItem("@text");
      if (savedText !== null) {
        setEaterText(savedText);
      }
    }
    loadText();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("@text", eaterText);
  }, [eaterText]);

  return (
    <S.Container>
      <S.Line>
        <S.ButtonTitle>
          <S.Eater placeholder="Clique P/ Alterar Name">{eaterText}</S.Eater>
        </S.ButtonTitle>
        <Score initialValue={0} />
      </S.Line>
    </S.Container>
  );
}

export default ButtonCount;
