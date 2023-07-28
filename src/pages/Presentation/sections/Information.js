/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import Repair from "assets/images/repair.jpg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={5} sx={{ mx: "auto" }}>
            <RotatingCardFront image={Repair} icon="touch_app" title={<>Services</>} />
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="smartphone"
                  title="Réparation de téléphones mobiles"
                  description="Réparation d'écrans fissurés, remplacement de batteries défectueuses, réparation de boutons défectueux, résolution de problèmes de charge, réparation de caméras, réparation de haut-parleurs, réparation de connecteurs de charge, réparation de cartes mères et micro-soudure de composants délicats."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="laptop"
                  title="Réparation d'ordinateurs"
                  description="Réparation de composants matériels tels que les disques durs, les cartes mères, les processeurs, les cartes graphiques, les claviers, les écrans, les ventilateurs, les ports USB, les prises audio, les problèmes de surchauffe, ainsi que la micro-soudure de composants électroniques sur les cartes mères."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="topic"
                  title=" Récupération de données"
                  description=" Récupération de données perdues à partir de disques durs, de cartes mémoire, de clés USB, de SSD et autres supports de stockage, y compris la récupération de données sur des composants endommagés ou corrompus, la récupération après une suppression accidentelle, une formatage ou une défaillance logique.
                  "
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="games"
                  title=" Réparation de consoles de jeux"
                  description=" Réparation de consoles de jeux telles que PlayStation, Xbox et Nintendo, y compris la résolution de problèmes d'alimentation, de disque dur, d'affichage, de connectivité, de lecteurs de disque défectueux, ainsi que la micro-soudure de composants spécifiques."
                />
              </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="lock"
                  title=" Déverrouillage et désimlockage"
                  description=" Déverrouillage et désimlockage de téléphones mobiles pour permettre leur utilisation avec différents opérateurs, offrant une plus grande flexibilité aux utilisateurs.

                  "
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="hardware"
                  title=" Micro-soudure "
                  description=" Services spécialisés de micro-soudure pour réparer des composants électroniques délicats tels que les connecteurs de charge, les boutons, les puces de mémoire, les circuits intégrés et autres éléments nécessitant une expertise en soudure de précision.
                  "
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 }, justifyContent: "center" }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="featured_video"
                  title=" Conseils et diagnostics"
                  description="Fourniture de conseils d'experts et de diagnostics approfondis pour aider les clients à comprendre les problèmes de leurs appareils, leur fournir des recommandations appropriées et des solutions adaptées à leurs besoins.

                  "
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
