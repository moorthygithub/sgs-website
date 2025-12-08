import PageMeta from "../../components/common/PageMeta";
import HeroSub from "../../components/HeroSub";
import TeamSection from "../../components/TeamSection/TeamSection";

const Team = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/team", text: "Team" },
  ];
  return (
    <>
      <PageMeta title="Team | Samyutk Gujarati Samaj" />
      <HeroSub
        title="Team"
        description="Meet the proud Team of Samyutk Gujarati Samaj, who form the heart of our community. Each member contributes their time, talent, and passion to build lasting connections and create meaningful impact together."
        breadcrumbLinks={breadcrumbLinks}
      />
      <TeamSection />
    </>
  );
};

export default Team;
