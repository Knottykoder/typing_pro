import { useThemeContext } from './hooks/useTheme';
import Header from './components/Header';
import { useSystem } from './hooks/useSystem';
import WordWrapper from './components/WordWrapper';
import WordContainer from './components/WordContainer';
import UserTyped from './components/UserTyped';
import Countdown from './components/CountDown';
import TimeCategory from './components/TimeCategory';

function App() {
  const { systemTheme } = useThemeContext();
  const {
    wordContainerFocused,
    countdown,
    word,
    time,
    charTyped,
    checkCharacter,
    setLocalStorageValue,
    setTime,
    setWordContainerFocused,
    resetCountdown,
    restartTest,
    closeModal,
    openModal,
  } = useSystem();

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
      
            <Header restart={restartTest} closeAboutModal={closeModal} openAboutModal={openModal}/>
            <TimeCategory
              time={time}
              setLocalStorage={setLocalStorageValue}
              setTime={setTime}
              restart={restartTest}
            />
            <Countdown countdown={countdown} reset={resetCountdown} />
            <WordWrapper
              focused={wordContainerFocused}
              setFocused={setWordContainerFocused}
            >
              <WordContainer word={word} />
              <UserTyped
                word={word}
                check={checkCharacter}
                charTyped={charTyped}
              />
            </WordWrapper>
      </main>
    </div>
  );
}

export default App;
