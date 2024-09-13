import { Container } from "./container";

export default function Home() {
  const sections = [
    {
      title: "Action",
      description:
        "When you do something other than moving or communicating, you typically take an action.",
      contents: [
        {
          name: "Attack",
          summary: "Attack with a weapon or an Unarmed Strike.",
        },
        {
          name: "Dash",
          summary:
            "For the rest of the turn, give yourself extra movement equal to your Speed.",
        },
        {
          name: "Disengage",
          summary:
            "Your movement doesn’t provoke Opportunity Attack for the rest of the turn.",
        },
        {
          name: "Dodge",
          summary:
            "Until the start of your next turn, attack rolls against you have Disadvantage, and you make Dexterity saving throws with Advantage. You lose this benefit if you have the Incapacitated condition or if your Speed is 0.",
        },
        {
          name: "Help",
          summary:
            "Help another creature’s ability check or attack roll, or administer first aid.",
        },
        { name: "Hide", summary: "Make a Dexterity (Stealth) check." },
        {
          name: "Influence",
          summary:
            "Make a Charisma (Deception, Intimidation, Performance, or Persuasion) or Wisdom (Animal Handling) check to alter a creature’s attitude.",
        },
        {
          name: "Magic",
          summary: "Cast a spell, use a magic item, or use a magical feature.",
        },
        {
          name: "Ready",
          summary:
            "Prepare to take an action in response to a trigger you define.",
        },
        {
          name: "Search",
          summary:
            "Make a Wisdom (Insight, Medicine, Perception, or Survival) check.",
        },
        {
          name: "Study",
          summary:
            "Make an Intelligence (Arcana, History, Investigation, Nature, or Religion) check.",
        },
        { name: "Utilize", summary: "Use a nonmagical object." },
      ],
    },
    {
      title: "Bonus Action",
      description:
        "You can take a Bonus Action only when a special ability, a spell, or another feature of the game states that you can do something as a Bonus Action.",
    },
    {
      title: "Reaction",
      description:
        "A Reaction is an instant response to a trigger of some kind, which can occur on your turn or on someone else’s. ",
    },
    {
      title: "Conditions",
      description:
        "Many effects impose a condition, a temporary state that alters the recipient’s capabilities.",
      contents: [
        { name: "Blinded" },
        { name: "Charmed" },
        { name: "Deafened" },
        { name: "Exhaustion" },
        { name: "Frightened" },
        { name: "Grappled" },
        { name: "Incapacitated" },
        { name: "Invisible" },
        { name: "Paralyzed" },
        { name: "Petrified" },
        { name: "Poisoned" },
        { name: "Prone" },
        { name: "Restrained" },
        { name: "Stunned" },
        { name: "Unconscious" },
      ],
    },
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
