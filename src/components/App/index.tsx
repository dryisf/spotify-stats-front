import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Routes, Route } from 'react-router-dom';

import Home from 'components/Home';
import Navbar from 'components/Navbar';
import Artists from 'components/Artists';
import Tracks from 'components/Tracks';
import Genres from 'components/Genres';
import AuthProvider from 'components/AuthProvider';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="flex flex-col">
          <Navbar />
          <div className="m-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/tracks" element={<Tracks />} />
              <Route path="/genres" element={<Genres />} />
            </Routes>
          </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
