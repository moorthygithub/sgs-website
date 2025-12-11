import PageMeta from "../../components/common/PageMeta";
import GalleryCard from "../../components/GalleryCard";
import HeroSub from "../../components/HeroSub";
import ModernGallery from "../../components/ModernGallery/ModernGallery";

const Gallery = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/gallery", text: "Gallery" },
  ];
  return (
    <>
      <PageMeta title="Gallery | Samyutk Gujarati Samaj" />
      <HeroSub
        title="Gallery"
        description="Explore moments captured from our events, celebrations, and community gatherings. Our gallery showcases the spirit, culture Samyutk Gujarati Samaj."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ModernGallery />
    </>
  );
};

export default Gallery;
