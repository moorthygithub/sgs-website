import PageMeta from "../../components/common/PageMeta";
import MemberForm from "../../components/MemberSection/MemberForm";

const Member = () => {
  return (
    <>
      <PageMeta title="Member | Samyutk Gujarati Samaj" />
      {/* <HeroSub
        title="Member"
        description="Meet the proud members of Samyutk Gujarati Samaj, who form the heart of our community. Each member contributes their time, talent, and passion to build lasting connections and create meaningful impact together."
        breadcrumbLinks={breadcrumbLinks}
      /> */}
      <MemberForm />
    </>
  );
};

export default Member;
