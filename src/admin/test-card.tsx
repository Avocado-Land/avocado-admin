import React from 'react'
import {Card, CardContent} from '@mui/material'
import { Title } from 'react-admin'

const TestCard = () => {
  return (
    <Card>
      <Title title="test title" />
      <CardContent>
        card content string
      </CardContent>
    </Card>
  )
}

export default TestCard