import React, { useEffect, useMemo } from "react";
import {
  GetContactUsSubServiceByContractIdQueryVariables,
  useGetContactUsSubServiceByContractIdLazyQuery,
} from "../../../graphql/codegen/generated-types";
import CommonMeta from "../../../components/Common/CommonMeta/CommonMeta";
import CommonBreadcrumb from "../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import CommonLoader from "../../../components/Common/CommonLoader/CommonLoader";
import EditoDynamicBlock from "../../../components/Edito/EditoDynamicBlock";
import EditoHeading from "../../../components/Edito/EditoHeading/EditoHeading";
import { isEditoBlock } from "../../../lib/edito-content";
import "./contact.scss";

export default function ContactUsPage() {
  /* Static Data */
  const pageTitle = "Contactez nous";

  /* External Data */
  const contractId = process.env.NEXT_PUBLIC_CONTRACT_ID?.toString();
  const defaultQueryVariables =
    useMemo<GetContactUsSubServiceByContractIdQueryVariables>(
      () => ({
        contractId: `${contractId}`,
      }),
      [contractId],
    );
  const [
    getContactUsSubServiceByContractId,
    { data: ContactUsesData, loading, error },
  ] = useGetContactUsSubServiceByContractIdLazyQuery({
    variables: defaultQueryVariables,
  });

  useEffect(() => {
    getContactUsSubServiceByContractId({
      variables: {
        ...defaultQueryVariables,
      },
    });
  }, [getContactUsSubServiceByContractId, defaultQueryVariables]);

  const breadcrumbPages = [
    {
      label: "Accueil",
      slug: "/",
    },
  ];

  const contactUs = ContactUsesData?.contactUses?.data[0];
  if (contactUs?.attributes?.title) {
    breadcrumbPages.push({ label: contactUs.attributes.title, slug: "" });
  }
  return (
    <>
      <CommonMeta title={pageTitle} />
      <CommonBreadcrumb pages={breadcrumbPages} />
      <CommonLoader isLoading={loading} errors={[error]}>
        <section className="c-ContactPage">
          {contactUs?.attributes?.title && (
            <EditoHeading
              title={contactUs.attributes.title}
              tags={contactUs?.attributes?.tags?.data}
            />
          )}
          {contactUs?.attributes?.blocks &&
            contactUs?.attributes.blocks.length > 0 && (
              <div className="c-FreeContentPage__Blocks">
                {contactUs.attributes.blocks.map((block, index) => {
                  if (block && isEditoBlock(block)) {
                    return (
                      <EditoDynamicBlock
                        key={index}
                        type={block.__typename}
                        data={block}
                      />
                    );
                  }
                })}
              </div>
            )}
        </section>
      </CommonLoader>
    </>
  );
}
