import * as React from 'react'
import Layout from '../../components/layout/layout'
import Seo from '../../components/seo'

const ProjectsPage = () => {
  const projects = [
    {
      title: 'wizzy-wig',
      slug: 'wizzy-wig',
      date: 'March, 2023',
      stack: ['TypeScript', 'React', 'Redux', 'MUI']
    },
    {
      title: 'tonguist',
      slug: 'tonguist',
      date: 'September, 2022',
      stack: ['React', 'Node', 'Express', 'MongoDB', 'MUI']
    },
    {
      title: 'Brain Train',
      slug: 'brain-train',
      date: 'August, 2022',
      stack: ['React', 'Firebase', 'Redux']
    }
  ]

  return (
    <Layout pageTitle="My Projects">
    </Layout>
  )
}

export const Head = () => <Seo title="My Projects" />

export default ProjectsPage