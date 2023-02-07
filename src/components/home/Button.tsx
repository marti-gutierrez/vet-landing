import { useStore } from "@nanostores/react";
//import { ImWhatsapp } from "@react-icons/all-files/im/ImWhatsapp";
import { isModalOpen } from "src/utils/stateNano";

type Props = {
  text: string;
};

export function Button({ text }: Props) {
  const $isModalOpen = useStore(isModalOpen);
  const onModal = () => isModalOpen.set(!$isModalOpen);
  return (
    <button
      type="button"
      className="flex justify-center w-max gap-2 py-2 px-4 mx-auto text-white text-lg capitalize bg-info rounded-xl hover:bg-primary-700 hover:font-bold"
      onClick={onModal}
    >
      {text}
      <i className="w-6 h-6 bg-iconWhatsapp" />
    </button>
  );
}
