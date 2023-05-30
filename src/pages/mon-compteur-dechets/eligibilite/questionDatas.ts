export interface IQuestion {
  title: string;
  text?: string;
  subText?: string;
  imageUrl?: string;
  options: IQuestionOption[];
}

export interface IQuestionOption {
  text: string;
  idPuce?: string;
  next: string | number;
  buttonStyle?: "primary" | "primaryContrast" | "secondary" | "tertiary" | null;
}

export const questions: IQuestion[] = [
  {
    title: "Possédez-vous un compte MonServiceDéchets ?",
    options: [
      { text: "Je me connecte", next: "/login", buttonStyle: "primary" },
      {
        text: "Je n'ai pas de compte",
        next: 1,
        buttonStyle: "secondary",
      },
    ],
  },
  {
    title: "Visualisez la production de déchets pour votre foyer",
    text: "Pour commencer, nous avons besoin de vous connaître",
    subText: "Vous êtes ?",
    options: [
      { text: "Un particulier", next: 2 },
      { text: "Un professionnel", next: "/non-eligibilite" },
    ],
  },
  {
    title: "Visualisez la production de déchets pour votre foyer",
    text: "Pour commencer, nous avons besoin de vous connaître",
    subText: "Votre type de logement :",
    options: [
      { text: "Une maison", next: 3 },
      { text: "Un appartement", next: "/non-eligibilite" },
    ],
  },
  {
    title: "Suivez mois par mois l'évolution de votre production",
    subText: "Quelle est votre adresse ?",
    options: [
      { text: "Valider", next: 4, buttonStyle: "primary" },
      { text: "Mon adresse n'est pas reconnue", next: "/" },
    ],
  },
  {
    title: "Nous avons identifiés 2 bacs pour votre adresse",
    options: [{ text: "Suivant", next: 5, buttonStyle: "primary" }],
  },
  {
    title: "Vous y êtes presque !",
    text: "Combien de personne composent votre foyer :",
    options: [{ text: "Valider", next: 6, buttonStyle: "primary" }],
  },
];
