import PageMeta from "../../components/common/PageMeta";
import ModernGallery from "../../components/ModernGallery/ModernGallery";

const Gallery = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/gallery", text: "Gallery" },
  ];
  return (
    <div className="mt-30">
      <PageMeta title="Gallery | Samyutk Gujarati Samaj" />

      <ModernGallery />
    </div>
  );
};

export default Gallery;
