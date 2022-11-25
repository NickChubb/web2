import Head from 'next/head'
import styled from 'styled-components'
import BioSection from '../src/components/body/bio/BioContent'
import BodySection from '../src/components/body'
import AboutContent from '../src/components/body/personal/PersonalContent'
import CoursesContent from '../src/components/body/courses/CoursesContent'
import ExperienceContent from '../src/components/body/experience/ExperienceContent'
import ProjectsSection from '../src/components/body/projects/ProjectsContent'
import FooterSection from '../src/components/footer'
import HeaderSection from '../src/components/header'
import Nav from '../src/components/nav/NavBar'
import React, { createContext, Dispatch, SetStateAction, useState } from 'react'
import Section from '../src/components/shared/Section'
import { sections } from '../src/components/body/sections'

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
  const [visible, setVisible] = useState('bio')

  const renderSections = () => {
    return sections.map((section, key) => (
      <Section key={key} Component={section.Component} title={section.title} setVisible={setVisible} />
    ))
  }


  return (
    <Container>
      <Head>
        <title>Nick Chubb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppWrapper>
        <Nav visible={visible} />
        <MainWrapper id="main">
          {/* <ProjectsSection setVisible={setVisible} /> */}
          {renderSections()}
          <FooterSection />
        </MainWrapper>
      </AppWrapper>
    </Container>
  )
}

export default Home
