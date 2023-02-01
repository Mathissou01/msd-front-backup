import CommonBreadcrumb from "../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import EditoHeadingBlock from "../../components/Blocks/EditoHeadingBlock/EditoHeadingBlock";

export default function EditoPage() {
  //TODO temporary data
  const tempArticle = {
    title: "Semaine initiatives vertes",
    tags: ["Actualité", "Réparation"],
    image: {
      url: "/images/images-temp/temp_image.jpg",
      alternativeText: "",
      hash: "",
      mime: "",
      name: "",
      provider: "",
      size: 0,
    },
  };
  const pagesUrl = [
    {
      label: "Accueil",
      slug: "/",
    },
    {
      label: "Actualités",
      slug: "actualites",
    },
    {
      label: "Semaine initiatives vertes",
    },
  ];

  return (
    <>
      <CommonBreadcrumb pages={pagesUrl} />
      <section>
        <EditoHeadingBlock
          title={tempArticle.title}
          tags={tempArticle.tags}
          image={tempArticle.image}
        />
      </section>
    </>
  );
}
