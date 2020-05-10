import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './i18n/en.json'
import fr from './i18n/fr.json'

i18n.use(initReactI18next).init({
    resources: { en, fr },
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
    },
})

export default i18n
