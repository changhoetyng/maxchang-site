import { useState } from "react";
import Desktop from "./os/Desktop";
import Icon from "./os/Icons/Icon";
import { FOLDER_ICON } from "./os/Icons/IconOptions";

export default function ProjectList() {
  function onClickDesktop() {
    setSelectedFolder(selectedFolder.map((_) => false));
  }
  function onSelectFolder(idx: number) {
    setSelectedFolder(selectedFolder.map((_, index) => index === idx));
  }

  const [selectedFolder, setSelectedFolder] = useState([false, false]);

  const iconElement = [
    <Icon
      name={"Academic Projects"}
      iconSelections={FOLDER_ICON}
      onClick={() => onSelectFolder(0)}
      onDoubleClick={() => console.log("Double Clicked")}
      selected={selectedFolder[0]}
      key={"icon-1"}
      position={{ x: 0, y: 0 }}
    />,
    <Icon
      name={"Personal Projects"}
      iconSelections={FOLDER_ICON}
      onClick={() => onSelectFolder(1)}
      onDoubleClick={() => console.log("Double Clicked")}
      selected={selectedFolder[1]}
      key={"icon-2"}
      position={{ x: 0, y: 0 }}
    />,
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="text-white mb-5">
        <h1 className="text-2xl">Projects</h1>
      </div>
      <Desktop width={"70%"} element={iconElement} onClick={onClickDesktop} />
    </div>
  );
}
