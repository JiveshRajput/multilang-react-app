import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdLanguage } from 'react-icons/md'
import languages from './languages'
import i18next from "i18next";


function App() {
  const { t } = useTranslation();
  const [showLangBox, setShowLangBox] = useState(false);

  function toggleLangBox() {
    setShowLangBox(!showLangBox)
  }

  function handleLanguageChange(language) {
    i18next.changeLanguage(language.code)
  }

  return (
    <>
      <header className=" bg-purple-900 text-white p-2 px-4 flex justify-between">
        <h1 className="text-2xl">Siso</h1>
        <div onClick={toggleLangBox} className="text-white h-[30px] aspect-square relative select-none cursor-pointer">
          <MdLanguage className="w-full h-full" />
          {showLangBox && <div className="absolute top-full right-0 bg-white rounded-md p-2 text-black min-w-[200px]">
            {
              languages.map((language) => {
                return (
                  <p onClick={() => handleLanguageChange(language)} className="cursor-pointer hover:bg-gray-200 px-2 p-1 rounded-md">{language.name}</p>
                )
              })
            }
          </div>}
        </div>
      </header >
      <div> {t('welcomToReact')} </div>
      <div> {t('colorPallete')} </div>
      <div> {t('changePassword')} </div>
      <div> {t('language')} </div>
      <div> {t('settings')} </div>
    </>
  );
}

export default App;
