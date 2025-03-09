import { Content, RootLayout, Sidebar } from './components'

function App(): JSX.Element {
  return (
    <RootLayout>
      <Sidebar className="bg-gray-800"></Sidebar>
      <Content className="bg-black"></Content>
    </RootLayout>
  )
}

export default App
