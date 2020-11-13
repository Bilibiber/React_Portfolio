import React from 'react'
import NIndex from '../jumbotron/Netflix-jumbotron'
import NInfo from '../preloadedData/Jumbo.json'

export default function JumbotronContainer() {
  return (
    <NIndex.Container>
      {NInfo.map((item) => (
        <NIndex key={item.id} direction={item.direction}>
          <NIndex.Pane>
            <NIndex.Title>{item.title}</NIndex.Title>
            <NIndex.SubTitle>{item.subTitle}</NIndex.SubTitle>
          </NIndex.Pane>
          <NIndex.Pane>
            <NIndex.Images src={item.image} alt={item.alt} />
          </NIndex.Pane>
        </NIndex>
      ))}
    </NIndex.Container>
  )
}
