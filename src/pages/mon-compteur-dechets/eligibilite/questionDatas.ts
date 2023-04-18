export interface IQuestion {
  title: string;
  text?: string;
  subText?: string;
  imageUrl?: string;
  options: IQuestionOption[];
}

export interface IQuestionOption {
  text: string;
  nextQuestion?: number;
  redirectTo?: string;
  buttonStyle?: "primary" | "primaryContrast" | "secondary" | "tertiary" | null;
}

export const questions: IQuestion[] = [
  {
    title: "Possédez-vous un compte MonServiceDéchets ?",
    options: [
      { text: "Je me connecte", redirectTo: "/login", buttonStyle: "primary" },
      {
        text: "Je n'ai pas de compte",
        nextQuestion: 1,
        buttonStyle: "secondary",
      },
    ],
  },
  {
    title: "Visualisez la production de déchets pour votre foyer",
    text: "Pour commencer, nous avons besoin de vous connaître",
    subText: "Vous êtes ?",
    options: [
      { text: "Un particulier", nextQuestion: 2 },
      { text: "Un professionnel", redirectTo: "/erreur" },
    ],
  },
  {
    title: "Visualisez la production de déchets pour votre foyer",
    text: "Pour commencer, nous avons besoin de vous connaître",
    subText: "Votre type de logement :",
    options: [
      { text: "Une maison", nextQuestion: 3 },
      { text: "Un appartement", redirectTo: "/erreur" },
    ],
  },
  {
    title: "Suivez mois par mois l'évolution de votre production",
    text: "Quelle est votre adresse ?",
    options: [
      { text: "Valider", nextQuestion: 4, buttonStyle: "primary" },
      { text: "Mon adresse n'est pas reconnue", redirectTo: "/erreur" },
    ],
  },
  {
    title: "Choix du parcours",
    options: [
      { text: "Des bacs sont identifiés", nextQuestion: 4 },
      { text: "Aucun bac identifié", redirectTo: "/erreur" },
      {
        text: "Des bacs sont identifiés mais déjà rattachés à un compte MSD",
        redirectTo: "/erreur",
      },
    ],
  },
];
