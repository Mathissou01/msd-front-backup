import React, { useEffect, useState, useMemo } from "react";
import CommonBreadcrumb from "../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import EditoHeading from "../../../components/Edito/EditoHeading/EditoHeading";
import EditoDynamicBlock from "../../../components/Edito/EditoDynamicBlock";
import "./contact.scss";
import {
  GetContactUsSubServiceByContractIdQueryVariables,
  useGetContactUsSubServiceByContractIdLazyQuery,
} from "../../../graphql/codegen/generated-types";
import CommonLoader from "../../../components/Common/CommonLoader/CommonLoader";
import { isEditoBlock } from "../../../lib/edito-content";

export default function ContactUsPage() {
  /* Static Data */
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
  const [contactUsSubServiceName, setContactUsSubServiceName] = useState("");
  useEffect(() => {
    getContactUsSubServiceByContractId({
      variables: {
        ...defaultQueryVariables,
      },
    });
  }, [getContactUsSubServiceByContractId, defaultQueryVariables]);
  useEffect(() => {
    if (
      ContactUsesData?.contactUsSubServices?.data &&
      ContactUsesData.contactUsSubServices.data.length > 0 &&
      ContactUsesData.contactUsSubServices.data[0].attributes?.name
    ) {
      setContactUsSubServiceName(
        ContactUsesData.contactUsSubServices.data[0].attributes.name,
      );
    }
  }, [ContactUsesData]);

  const breadcrumbPages = [
    {
      label: "Accueil",
      slug: "/",
    },
    {
      label: "Service",
      slug: "/",
    },
    {
      label: `${contactUsSubServiceName}`,
      slug: "service/contact",
    },
  ];

  const contactUs = ContactUsesData?.contactUses?.data[0];

  if (contactUs?.attributes?.title) {
    breadcrumbPages.push({ label: contactUs.attributes.title, slug: "" });
  }
  return (
    <>
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
