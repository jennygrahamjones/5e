import { useState } from "react";
import { ItemModal } from "./ItemModal";

export type ContainerItemProps = {
  name: string;
  summary?: string;
  ddbLink?: string;
};

export const ContainerItem = ({
  name,
  summary,
  ddbLink,
}: ContainerItemProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="container-item"
        {...(summary && { style: { cursor: "pointer" } })}
        onClick={() => {
          if (summary) {
            setShowModal(true);
          }
        }}
      >
        {name}
      </div>
      {showModal && (
        <ItemModal
          name={name}
          summary={summary}
          ddbLink={ddbLink}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};
