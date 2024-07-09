import Desktop from "./os/Desktop";
import Icon from "./os/Icons/Icon";
import { FOLDER_ICON } from "./os/Icons/IconOptions";

export default function ProjectList() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="text-white mb-5">
        <h1 className="text-2xl">Projects</h1>
      </div>
      <Desktop width={"70%"}>
        <Icon icon={""} iconSelections={FOLDER_ICON} />
      </Desktop>
    </div>
  );
}
