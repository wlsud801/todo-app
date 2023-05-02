import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Router from './shared/Router';

const queryclient = new QueryClient();

function App() {
  // QueryClientProvider로 감싸면 감싼 내부에 있는 모든 곳에서 그 쿼리를 사용할 수 있음.
  return (
    <QueryClientProvider client={queryclient}>
      <Router />
    </QueryClientProvider>
  );
};

export default App;
