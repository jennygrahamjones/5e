"use client";

import { useState } from "react";

type ContainerItem = { name: string; summary?: string; ddbLink?: string };

const Item = ({ name, summary, ddbLink }: ContainerItem) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="container-item"
        onClick={() => {
          if (summary) {
            setShowModal(true);
          }
        }}
      >
        {name}
      </div>
      {showModal && (
        <div
          className="fixed inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-50 z-50 modal"
          onClick={() => setShowModal(false)}
        >
          <div className="modal-content">
            <h1>{name}</h1>
            <p>{summary}</p>
            {ddbLink && (
              <p>
                <a href={ddbLink} target="blank">
                  View on D&D Beyond
                </a>
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export type ContainerProps = {
  title: string;
  description?: string;
  contents?: ContainerItem[];
};

export const Container = ({ title, description, contents }: ContainerProps) => {
  return (
    <>
      <div className="container">
        <h1>{title}</h1>
        <div className="container-body">
          <p className="description">{description}</p>
          {contents?.map((item) => {
            return <Item key={contents.indexOf(item)} {...item} />;
          })}
        </div>
      </div>
    </>
  );
};
