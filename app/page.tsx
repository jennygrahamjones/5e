import { Container, ContainerProps } from "./container";
import {
  action,
  bonusAction,
  reaction,
  conditions,
  movement,
  weaponMastery,
  hazards,
  areaOfEffect,
  cover,
  visionAndLight,
} from "./data";

export default function Home() {
  const sections: ContainerProps[] = [
    action,
    bonusAction,
    movement,
    reaction,
    weaponMastery,
    conditions,
    visionAndLight,
    cover,
    areaOfEffect,
    hazards,
  ];

  return (
    <div>
      {sections.map((section) => {
        return <Container key={sections.indexOf(section)} {...section} />;
      })}
    </div>
  );
}
