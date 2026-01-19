import { HomeProps } from "@/app/utils/home.types";
import styles from "./styles.module.scss";
import Image from "next/image";

export function Services({ object }: HomeProps) {
  const rawService = object.metadata.services[0] || {};

  const normalizedServices = [
    { image: rawService.image, description: rawService.description },
    { image: rawService.image1, description: rawService.description1 },
    { image: rawService.image2, description: rawService.description2 },
    { image: rawService.image3, description: rawService.description3 },
  ].filter((item) => item.image && item.description);

  return (
    <>
      <section className={styles.containerAbout}>
         {/* ... (código da seção sobre mantido igual) ... */}
         <article className={styles.innerAbout}>
          <h1 className={styles.title}>Sobre</h1>
          <p>{object.metadata.about.description}</p>
        </article>

        <div className={styles.bannerAbout}>
          <Image
            className={styles.imageAbout}
            alt="Imagem ilustrativa sobre a empresa"
            fill={true}
            src={object.metadata.about.banner.url}
          />
        </div>
      </section>

      <h2 id="servicos" className={styles.servicesTitle}>Conheça nossos serviços</h2>

      <section className={styles.services}>
        {normalizedServices.map((service, index) => (
          <article key={index} className={styles.service}>
            <div className={styles.innerService}>
              {service.image?.url && (
                <Image
                  className={styles.imageService}
                  alt={`Imagem do serviço ${service.description}`}
                  fill={true}
                  src={service.image.url}
                />
              )}
            </div>
            <p>{service.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}