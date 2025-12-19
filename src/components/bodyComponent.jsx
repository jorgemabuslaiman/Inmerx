import React from 'react'
import { HeaderComponent } from './headerComponent'
import { HeroComponent } from './heroComponent'
import { SectionComponent } from './sectionComponent'

export const BodyComponent = () => {
  return (
    <>
      <HeaderComponent/>
      <HeroComponent/>
      <SectionComponent/>
    </>
  )
}
