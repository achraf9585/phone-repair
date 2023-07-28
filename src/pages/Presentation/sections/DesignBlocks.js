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
import MKTypography from "components/MKTypography";

function DesignBlocks() {
  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={9}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKTypography variant="h2" fontWeight="bold">
            Save Itech{" "}
          </MKTypography>
          <MKTypography variant="body1" color="text">
            Bonjour et bienvenue sur notre page Facebook ! Nous sommes une équipe passionnée de
            réparation technologique, dédiée à vous offrir un service exceptionnel pour vos
            téléphones, ordinateurs et consoles de jeux. Nous comprenons à quel point vos appareils
            sont importants dans votre vie quotidienne, c&apos;est pourquoi nous mettons tout en
            œuvre pour fournir des réparations rapides, fiables et durables. Que ce soit pour
            réparer un écran cassé, récupérer des données perdues ou résoudre des problèmes
            matériels, notre équipe d&apos;experts est là pour vous aider. Notre priorité absolue
            est de vous offrir une expérience client de premier ordre. Nous croyons en la proximité
            et en la transparence, et nous travaillons dur pour établir une relation de confiance
            avec notre communauté. Nous prenons le temps de vous écouter, de comprendre vos
            préoccupations et de vous fournir des solutions adaptées à vos besoins spécifiques. Sur
            cette page, vous trouverez des conseils utiles, des astuces technologiques et des mises
            à jour sur les dernières tendances dans le monde de la réparation technologique. Nous
            sommes également là pour répondre à toutes vos questions et vous fournir des
            recommandations pour optimiser les performances de vos appareils. Rejoignez notre
            communauté en aimant et en suivant notre page Facebook. Restez à jour avec nos dernières
            offres spéciales, nos événements locaux et nos promotions exclusives. Nous sommes
            impatients de vous servir et de vous aider à retrouver un fonctionnement optimal pour
            vos appareils préférés. Merci de nous faire confiance pour vos besoins en réparation
            technologique. Ensemble, nous pouvons surmonter les obstacles technologiques et vous
            permettre de rester connecté à ce qui compte le plus pour vous.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default DesignBlocks;
