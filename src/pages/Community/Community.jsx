import PageMeta from "../../components/common/PageMeta";
import CommunityForm from "../../components/Community/CommunityForm";
import HeroSub from "../../components/HeroSub";

const Community = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/community", text: "Community" },
  ];
  return (
    <>
      <PageMeta title="Community | Samyutk Gujarati Samaj" />
      <HeroSub
        title="Community"
        description="Discover the vibrant Samyutk Gujarati Samaj community — a family bound by unity, culture, and shared values. Together, we celebrate traditions, foster friendships, and create a supportive space where everyone belongs."
        breadcrumbLinks={breadcrumbLinks}
      />
      <CommunityForm />
    </>
  );
};

export default Community;
