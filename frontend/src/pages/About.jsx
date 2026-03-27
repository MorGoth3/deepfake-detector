import React, { useState } from "react";
import "../styles/about.css";
import InfoModal from "../components/InfoModal";

import img1 from "../assets/img_home.png";
import img2 from "../assets/img_gans.png";

const About = () => {
  const [modal, setModal] = useState(null);

  const openModal = (title, content) => {
    setModal({ title, content });
  };

  return (
    <div className="page-wrapper">
      <div className="page-container">
        {/* SECCIÓN 1 */}
        <div className="about-section">
          <div className="about-text">
            <h2 className="about-title">¿Qué son los deepfakes?</h2>
            <p>
              Los deepfakes son contenidos audiovisuales sintéticos generados
              mediante{" "}
              <span
                className="highlight-word"
                onClick={() =>
                  openModal("Modelos de aprendizaje profundo", "###")
                }
              >
                modelos de aprendizaje profundo
              </span>{" "}
              que permiten replicar o sustituir características humanas como el
              rostro, la voz o los gestos con un alto grado de realismo. A
              diferencia de las técnicas tradicionales de edición digital, los
              deepfakes no se limitan a modificar contenido existente, sino que
              aprenden patrones estadísticos complejos para generar nuevas
              representaciones realistas.
            </p>

            <p>
              Desde la computación, los deepfakes se entienden como{" "}
              <span
                className="highlight-word"
                onClick={() => openModal("Modelos generativos", "###")}
              >
                modelos generativos
              </span>{" "}
              que aproximan distribuciones de datos. En el ámbito de la ciencia
              de datos, implican el uso de grandes volúmenes de información para
              entrenar modelos capaces de generalizar patrones. Desde la
              comunicación científica, representan una transformación en la
              manera en que se interpreta la evidencia audiovisual.
            </p>
          </div>

          <img src={img1} alt="deepfake" className="about-image" />
        </div>
        {/* SECCIÓN 2 */}
        <div className="about-section">
          <div className="about-text">
            <h2 className="about-title">Fundamentos técnicos</h2>
            <p>La generación de deepfakes se sustenta principalmente en:</p>
            <h3 className="about-subtitle">Redes neuronales profundas</h3>
            <p>
              El aprendizaje profundo (deep learning) es una subárea del
              aprendizaje automático basada en redes neuronales artificiales con
              múltiples capas ocultas, diseñadas para modelar relaciones no
              lineales complejas entre datos de entrada y salida.
            </p>
            <h3 className="about-subtitle">Modelos generativos</h3>
            <p>
              Los modelos generativos son algoritmos diseñados para aprender la
              distribución de los datos y generar nuevas muestras a partir de
              ella. Entre los más relevantes para deepfakes se encuentran:
            </p>
            <div className="tech-grid">
              <div
                className="tech-card"
                style={{ backgroundImage: `url(${img2})` }}
                onClick={() =>
                  openModal(
                    "Redes Generativas Antagónicas (GANs)",
                    "Son sistemas de inteligencia artificial formados por dos redes que compiten entre sí: una crea contenido falso y la otra intenta detectarlo...",
                  )
                }
              >
                <div className="tech-overlay">GANs</div>
              </div>

              <div
                className="tech-card"
                style={{ backgroundImage: `url(${img1})` }}
                onClick={() =>
                  openModal(
                    "Autoencoders",
                    "Son modelos que aprenden a comprimir y reconstruir información...",
                  )
                }
              >
                <div className="tech-overlay">Autoencoders</div>
              </div>

              <div
                className="tech-card"
                style={{ backgroundImage: `url(${img2})` }}
                onClick={() =>
                  openModal(
                    "Modelos de difusión",
                    "Generan imágenes a partir de ruido, refinándolas progresivamente...",
                  )
                }
              >
                <div className="tech-overlay">Difusión</div>
              </div>
            </div>
            <h3 className="about-subtitle">Procesamiento de datos</h3>
            <p>
              Los deepfakes se crean utilizando grandes cantidades de datos para
              enseñar a la inteligencia artificial cómo se ve y se comporta una
              persona. Para lograrlo, los modelos aprenden patrones importantes
              y los organizan de forma simplificada, lo que les permite generar
              imágenes o videos nuevos. Para saber qué tan realista es el
              resultado, se utilizan algunas medidas, por ejemplo: FID: indica
              qué tan parecidas son las imágenes generadas a las reales. PSNR:
              mide la calidad de la imagen generada. Gracias a estas
              herramientas, es posible mejorar los modelos y hacer que los
              deepfakes sean cada vez más realistas.
            </p>
          </div>
        </div>

        {/* SECCIÓN 3 */}
        <div className="about-section">
          <div className="about-text">
            <h2 className="about-title">¿Cómo se generan?</h2>
            <p>
              El proceso sigue estos pasos
              <h3 className="about-subtitle">1. Recolección de datos:</h3>
              <p>Se obtienen imágenes o videos de una persona.</p>
              <h3 className="about-subtitle">2. Entrenamiento del modelo:</h3>
              <p>
                Una red neuronal aprende patrones como rasgos faciales o
                expresiones.
              </p>
              <h3 className="about-subtitle">3. Generación:</h3>
              <p>
                El sistema produce nuevas imágenes o videos basados en lo
                aprendido.
              </p>
              <h3 className="about-subtitle">4. Postprocesamiento:</h3>
              <p>Se ajusta el resultado para hacerlo más realista.</p>
            </p>
          </div>

          <img src={img2} alt="gans" className="about-image" />
        </div>

        {/* SECCIÓN 4 */}
        <div className="about-section">
          <div className="about-text">
            <h2 className="about-title">Detección de deepfakes</h2>
            <p>
              Detectar deepfakes es un desafío en constante evolución. Los
              sistemas actuales utilizan inteligencia artificial para
              identificar señales que indican que un contenido ha sido
              manipulado.
            </p>
            <p>Algunos enfoques principales incluyen:</p>
            <h3 className="about-subtitle">Análisis visual</h3>
            <p>
              Se centra en detectar artefactos generados durante la síntesis,
              tales como inconsistencias en iluminación, texturas o bordes
              faciales. Estos métodos explotan imperfecciones introducidas por
              los modelos generativos
            </p>

            <h3 className="about-subtitle">Análisis biométrico</h3>
            <p>
              Se basa en características fisiológicas difíciles de replicar con
              precisión, como la frecuencia de parpadeo, microexpresiones
              faciales o movimientos oculares, que suelen presentar anomalías en
              contenido sintético.
            </p>

            <h3 className="about-subtitle">Análisis audiovisual</h3>
            <p>
              Evalúa la coherencia entre audio y video, identificando
              desincronizaciones o discrepancias entre voz y movimiento labial,
              lo cual es común en deepfakes mal generados.
            </p>
          </div>

          <img src={img1} alt="deteccion" className="about-image" />
        </div>

        {/* SECCIÓN 5 */}
        <div className="about-section">
          <div className="about-text">
            <h2 className="about-title">Impacto</h2>
            <p>Tienen implicaciones importantes en distintos ámbitos como:</p>
            <div className="impact-grid">
              <div
                className="impact-card"
                style={{ backgroundImage: `url(${img1})` }}
                onClick={() =>
                  openModal(
                    "Impacto social",
                    "Al facilitar la creación de contenido engañoso que puede influir en la percepción pública. Su uso se ha asociado con la desinformación, la suplantación de identidad y la violación de la privacidad, afectando la confianza en los medios digitales.",
                  )
                }
              >
                <div className="impact-overlay">Social</div>
              </div>

              <div
                className="impact-card"
                style={{ backgroundImage: `url(${img2})` }}
                onClick={() =>
                  openModal(
                    "Impacto económico",
                    "En el ámbito económico, los deepfakes representan un riesgo creciente en términos de fraude y seguridad financiera. Se han documentado casos de ingeniería social donde se utilizan voces sintéticas para autorizar transacciones o engañar a empleados de empresas.Estos ataques generan pérdidas económicas significativas y obligan a las organizaciones a invertir en sistemas de seguridad más sofisticados",
                  )
                }
              >
                <div className="impact-overlay">Económico</div>
              </div>

              <div
                className="impact-card"
                style={{ backgroundImage: `url(${img1})` }}
                onClick={() =>
                  openModal(
                    "Impacto político",
                    "Pueden ser utilizados como herramientas de manipulación política, particularmente en contextos electorales. \n\nLa difusión de contenido falso que simula declaraciones o acciones de figuras públicas puede influir en la opinión pública y desestabilizar procesos democráticos.",
                  )
                }
              >
                <div className="impact-overlay">Político</div>
              </div>

              <div
                className="impact-card"
                style={{ backgroundImage: `url(${img2})` }}
                onClick={() =>
                  openModal(
                    "Impacto epistemológico",
                    "Generan una crisis en la noción de evidencia. Tradicionalmente, el contenido audiovisual ha sido considerado una prueba confiable; sin embargo, la capacidad de generar falsificaciones realistas cuestiona esta premisa.",
                  )
                }
              >
                <div className="impact-overlay">Epistemológico</div>
              </div>
            </div>
            <p>
              En conjunto, estos impactos muestran que los deepfakes no son solo
              una innovación tecnológica, sino un reto para la sociedad en su
              conjunto.
            </p>
          </div>
        </div>

        {/* MODAL */}
        {modal && (
          <InfoModal
            title={modal.title}
            content={modal.content}
            onClose={() => setModal(null)}
          />
        )}
      </div>
    </div>
  );
};

export default About;
