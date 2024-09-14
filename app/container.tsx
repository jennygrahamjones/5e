"use client";

import { useState } from "react";

type ContainerItem = { name: string; summary?: string; ddbLink?: string };

const Item = ({ name, summary, ddbLink }: ContainerItem) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="container-item"
        style={{ cursor: "pointer" }}
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
          className="fixed inset-0 flex flex-col items-center bg-gray-900 bg-opacity-70 z-50 modal"
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
  ddbLink?: string;
  contents?: ContainerItem[];
};

export const Container = ({
  title,
  description,
  contents,
  ddbLink,
}: ContainerProps) => {
  return (
    <>
      <div className="container">
        <h1>
          <a href={ddbLink} target="blank">
            {title}
          </a>
        </h1>
        <div className="container-body">
          <p className="description">{description}</p>
          {contents
            ?.sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((item) => {
              return <Item key={contents.indexOf(item)} {...item} />;
            })}
        </div>
      </div>
    </>
  );
};
