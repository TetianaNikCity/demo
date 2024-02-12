import React, { useRef, useState } from "react";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { Label, PlayerInfoWrapper } from "./PlayerInfo.styled";

const PlayerInfo: React.FC = () => {
  const textInfo = {
    secretPlayer: "Secret player",
    edit: "Edit",
    save: "Save",
  };
  const [enteredPlayerName, setEnteresdPlayerName] = useState<string>(
    textInfo.secretPlayer
  );
  const [editPlayerName, setEditPlayerName] = useState(true);
  const playerName = useRef<HTMLInputElement>(null);
  let btnTitle = editPlayerName ? textInfo.edit : textInfo.save;
  const handleClick = () => {
    setEditPlayerName((prevEdit) => !prevEdit);

    !editPlayerName &&
      setEnteresdPlayerName(
        playerName.current?.value
          ? playerName.current?.value
          : textInfo.secretPlayer
      );
  };
  return (
    <PlayerInfoWrapper id="player-info">
      {editPlayerName ? (
        <Label>{enteredPlayerName}</Label>
      ) : (
        <Input inputRef={playerName} defaultValue={enteredPlayerName} />
      )}
      <Button onClick={handleClick} title={btnTitle} />
    </PlayerInfoWrapper>
  );
};

export default PlayerInfo;
