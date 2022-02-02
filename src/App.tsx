import Counter from 'components/Counter';
import { Issue } from 'components/Issue';
import Layout from 'components/Layout';
import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from 'styles/globalStyles';

const App: FC = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Layout> Home Page </Layout>} />
      <Route path="/counter" element={<Counter />} />
      <Route
        path="/issue"
        element={
          <Layout>
            <Issue />
          </Layout>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
