import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import * as S from "./styles";
import ButtonCount from "../../components/ButtonCount";
import { StatusBar } from "expo-status-bar";
import theme from "../../global/styles/theme";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Home() {
  const navigation = useNavigation();
  const [players, setPlayers] = useState([]);

  const handleAddPlayer = () => {
    const newPlayer = { id: Date.now(), text: "" };
    setPlayers([...players, newPlayer]);
  };

  const handleClearPlayers = () => {
    setPlayers([]);
    AsyncStorage.removeItem("@players");
  };

  const handleUpdatePlayers = async (updatedPlayers) => {
    setPlayers(updatedPlayers);
    await AsyncStorage.setItem("@players", JSON.stringify(updatedPlayers));
  };

  const loadPlayers = async () => {
    const savedPlayers = await AsyncStorage.getItem("@players");
    if (savedPlayers !== null) {
      setPlayers(JSON.parse(savedPlayers));
    }
  };

  React.useEffect(() => {
    loadPlayers();
  }, []);

  React.useEffect(() => {
    handleUpdatePlayers(players);
  }, [players]);

  return (
    <S.Container>
      <StatusBar backgroundColor={theme.colors.primary} style="dark" />
      <S.editStatusBar></S.editStatusBar>
      <S.Content>
        {players.map((player, index) => (
          <ButtonCount
            key={index}
            text={player.text}
            onTextChange={(newText) => {
              const newPlayers = [...players];
              newPlayers[index] = { ...player, text: newText };
              handleUpdatePlayers(newPlayers);
            }}
            onDelete={() => {
              const newPlayers = [...players];
              newPlayers.splice(index, 1);
              handleUpdatePlayers(newPlayers);
            }}
          />
        ))}
        <S.ButtonAdd onPress={handleAddPlayer}>
          <Feather name="plus" color={theme.colors.background} size={40} />
        </S.ButtonAdd>
        <S.ButtonClear onPress={handleClearPlayers}>
          <Feather name="trash-2" color={theme.colors.background} size={40} />
        </S.ButtonClear>
      </S.Content>
    </S.Container>
  );
}
