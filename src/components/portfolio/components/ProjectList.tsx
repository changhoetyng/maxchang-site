import { useState } from "react";
import Desktop from "./os/Desktop";
import Icon from "./os/Selectable/Icon";
import FOLDER_ICON from "public/icons/folder.png";
import TEXT_EDIT_ICON from "public/icons/TextEdit.png";
import WindowComponent from "./os/WindowComponent";
import Row from "./os/Selectable/Row";

export default function ProjectList() {
  const [key, setKey] = useState(0);
  function onClickDesktop() {
    setSelectedFolder(selectedFolder.map((_) => false));
  }
  function onSelectFolder(idx: number) {
    setSelectedFolder(selectedFolder.map((_, index) => index === idx));
    setKey((prev) => prev + 1);
  }

  const [selectedFolder, setSelectedFolder] = useState([false, false]);

  function onSelectFolderSchoolProjects(idx: number) {
    console.log("School Link");
  }

  const iconInPersonalProjects = [
    <Row
      name={"TuneShift"}
      iconSelections={TEXT_EDIT_ICON.src}
      onClick={() => {
        onSelectFolderSchoolProjects(0);
      }}
      index={0}
      key={"personal-icon-1"}
    />,
    <Row
      name={"Infix Prefix Postfix Converter"}
      iconSelections={TEXT_EDIT_ICON.src}
      onClick={() => {
        onSelectFolderSchoolProjects(0);
      }}
      index={1}
      key={"personal-icon-2"}
    />,
    <Row
      name={"TollCalc"}
      iconSelections={TEXT_EDIT_ICON.src}
      onClick={() => {
        onSelectFolderSchoolProjects(0);
      }}
      index={2}
      key={"personal-icon-3"}
    />,
  ];

  const iconInSchoolProjects = [
    <Row
      name={"Face Recognition Using Transfer Learning"}
      iconSelections={TEXT_EDIT_ICON.src}
      onClick={() => {
        onSelectFolderSchoolProjects(0);
      }}
      index={0}
      key={"school-icon-1"}
    />,
    <Row
      name={"University Utilities Booking Mobile App"}
      iconSelections={TEXT_EDIT_ICON.src}
      onClick={() => {
        onSelectFolderSchoolProjects(1);
      }}
      index={1}
      key={"school-icon-2"}
    />,
    <Row
      name={
        "A Study in Reinforcement Learning with Deep Q-Network and Double Deep Q-Network on Low-Dimensional State Space"
      }
      iconSelections={TEXT_EDIT_ICON.src}
      onClick={() => {
        onSelectFolderSchoolProjects(2);
      }}
      index={2}
      key={"school-icon-3"}
    />,
  ];

  const iconElement = [
    <Icon
      name={"Academic Projects"}
      iconSelections={FOLDER_ICON.src}
      onClick={() => onSelectFolder(0)}
      onDoubleClick={() => {
        setSelectedWindow(PROJECTS_SELECTION[0]);
      }}
      selected={selectedFolder[0]}
      key={"icon-1"}
      position={{ x: 0, y: 0 }}
    />,
    <Icon
      name={"Personal Projects"}
      iconSelections={FOLDER_ICON.src}
      onClick={() => onSelectFolder(1)}
      onDoubleClick={() => {
        setSelectedWindow(PROJECTS_SELECTION[1]);
      }}
      selected={selectedFolder[1]}
      key={"icon-2"}
      position={{ x: 0, y: 0 }}
    />,
  ];
  const personalProjects = (
    <WindowComponent
      folder={iconInPersonalProjects}
      onClickClose={() => setSelectedWindow(PROJECTS_SELECTION[2])}
      key={"personal" + key}
    />
  );
  const schoolProjects = (
    <WindowComponent
      folder={iconInSchoolProjects}
      onClickClose={() => setSelectedWindow(PROJECTS_SELECTION[2])}
      key={"school" + key}
    />
  );

  const PROJECTS_SELECTION = [
    { name: "Academic Projects", folder: schoolProjects },
    { name: "Personal Projects", folder: personalProjects },
    { name: "None", folder: <></> },
  ];
  const [selectedWindow, setSelectedWindow] = useState(PROJECTS_SELECTION[2]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="text-white mb-5">
        <h1 className="text-2xl">Projects</h1>
      </div>
      <Desktop
        width={"80%"}
        element={iconElement}
        onClick={onClickDesktop}
        window={selectedWindow.folder}
      />
    </div>
  );
}
