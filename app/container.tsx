"use client";

import { ContainerItem, ContainerItemProps } from "./ContainerItem";

export type ContainerProps = {
  title: string;
  description?: string;
  ddbLink?: string;
  contents?: ContainerItemProps[];
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
              return <ContainerItem key={contents.indexOf(item)} {...item} />;
            })}
        </div>
      </div>
    </>
  );
};
