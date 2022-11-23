import Head from 'next/head'
import styled from 'styled-components'
import BioSection from '../src/components/body/bio'
import BodySection from '../src/components/body'
import AboutSection from '../src/components/body/personal/personal'
import CoursesSection from '../src/components/body/courses/courses'
import ExperienceSection from '../src/components/body/experience/experience'
import ProjectsSection from '../src/components/body/projects/projects'
import FooterSection from '../src/components/footer'
import HeaderSection from '../src/components/header'
import Nav from '../src/components/nav/nav'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

const AppWrapper = styled.div`
  min-height: 100%;
  max-width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 1360px) {
    max-width: 100%;
  } 
`

const MainWrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppWrapper>
        <Nav />
        <MainWrapper>
          {/* <HeaderSection /> */}
          <BioSection />
          <ProjectsSection />
          <ExperienceSection />
          <CoursesSection />
          <AboutSection />
          <FooterSection />
        </MainWrapper>
      </AppWrapper>

    </Container>
  )
}

export default Home