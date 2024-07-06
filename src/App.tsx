import { useThemeContext } from './hooks/useTheme';
import Header from './components/Header';


function App() {
  const { systemTheme } = useThemeContext();

  return (
    <div
      className='h-screen w-full overflow-y-auto'
      style={{
        backgroundColor: systemTheme.background.primary,
        color: systemTheme.text.primary,
      }}
    >
      <main
        className=' mx-auto flex h-full max-w-5xl flex-col gap-4 px-4 xl:px-0'
        style={{}}
      >
      
            {/* <Header/> */}
      </main>
    </div>
  );
}

export default App;
