import parse from "html-react-parser";

type ItemModalProps = {
  name: string;
  summary?: string;
  ddbLink?: string;
  setShowModal: (arg: boolean) => void;
};

export const ItemModal = ({
  setShowModal,
  name,
  summary,
  ddbLink,
}: ItemModalProps) => {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center bg-gray-900 bg-opacity-70 z-50 modal"
      onClick={() => setShowModal(false)}
    >
      <div className="modal-content">
        <h1>{name}</h1>
        {summary && <p>{parse(summary)}</p>}
        {ddbLink && (
          <p>
            <strong>
              <a href={ddbLink} target="blank">
                View on D&D Beyond{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
                  <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
                </svg>
              </a>
            </strong>
          </p>
        )}
      </div>
    </div>
  );
};
