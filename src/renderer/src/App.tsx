import { Content, RootLayout, Sidebar } from './components'

function App(): JSX.Element {
  return (
    <RootLayout>
      <Sidebar className="bg-gray-800">dfd</Sidebar>
      <Content className="bg-black">dfdf</Content>
    </RootLayout>
  )
}

export default App
