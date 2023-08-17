import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Pedro Zeferino!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Pedro Zeferino sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou Desenvolvedor Junior de Front-end na Alura e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou no Instituto Federal do Estado de São Paulo (IFSP), quando fiz o ensino médio integrado ao curso de Informática. Eu aprendi lógica de programação e o básico da linguagens Java em 2015, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalhar com isso hoje.
            </p>
            <p className={styles.paragrafo}>
                No ensino Técnico, escolhi cursar Mecânica (ETEC-SP) uma formação que contribuiu muito na carreira profissional de técnico Mecânico de Caminhões e Onibus por mais de 30 anos.
            </p>
            <p className={styles.paragrafo}>
                Agora, tenho uma nova experiência de dev mais próxima da realidade, com prazos de implementação para o entrega de desafios como site, e aprendendo muito enquanto codifico.
            </p>
            <p className={styles.paragrafo}>
                Desde então, tem sido aprendizados atrás de aprendizados. A Alura + Oracle são minhas escolas de programação. Estou muito feliz de ter a oportunidade de trazer esses conteúdos ricos e encantadores para você. Espero que aprenda bastante!
            </p>
        </PostModelo>
    )
}