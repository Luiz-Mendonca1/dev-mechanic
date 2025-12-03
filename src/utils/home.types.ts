export interface HomeProps {
  object: {
    slug: string;
    title: string;
    metadata: {
      banner: {
        url: string;
      };
      heading: string;
      cta_button: {
        title: string;
        url: string;
      };
      about: {
        description: string;
        banner: {
          url: string;
        };
      };
      services: ServiceRawProps[]; 
      contact: {
        email: string;
        phone: string;
        address: string;
      };
    };
  };
}

interface ServiceRawProps {
  image: { url: string };
  description: string;
  image1?: { url: string };
  description1?: string;
  image2?: { url: string };
  description2?: string;
  image3?: { url: string };
  description3?: string;
}