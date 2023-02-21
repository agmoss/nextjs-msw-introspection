import { Layout, Page, Text } from '@vercel/examples-ui'
import { Rockets } from '../rockets'

export default function Index() {

  return (
    <Page>
      <Text variant="h1" className="mb-6">
        msw-introspection
      </Text>
      <Rockets/>
    </Page>
  )
}

Index.Layout = Layout