"use client";

import { useState } from "react";

type ContainerItem = { name: string; summary?: string };

const Item = ({ name, summary }: ContainerItem) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="container-item"
        onClick={() => {
          // todo: display a modal containing the item's full details with reference to the PHB
          if (summary) {
            setShowModal(true);
          }
        }}
      >
        {name}
      </div>
      {showModal && (
        <div
          className="fixed inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-50 z-50"
          onClick={() => setShowModal(false)}
        >
          <div className="modal-content">
            <h1>{name}</h1>
            <p>{summary}</p>
          </div>
        </div>
      )}
    </>
  );
};

type ContainerProps = {
  title: string;
  description?: string;
  contents?: ContainerItem[];
};

export const Container = ({ title, description, contents }: ContainerProps) => {
  return (
    <>
      <div className="container">
        <h1>{title}</h1>
        <p className="description">{description}</p>
        {contents?.map((item) => {
          return <Item key={contents.indexOf(item)} {...item} />;
        })}
      </div>
    </>
  );
};
