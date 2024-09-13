import { Container, ContainerProps } from "./container";
import { action, bonusAction, reaction, conditions } from "./data";

export default function Home() {
  const sections: ContainerProps[] = [
    action,
    bonusAction,
    reaction,
    conditions,
  ];

  return (
    <div>
      {sections.map((section) => {
        return (
          <Container
            key={sections.indexOf(section)}
            title={section.title}
            description={section.description}
            contents={section.contents}
          />
        );
      })}
    </div>
  );
}
