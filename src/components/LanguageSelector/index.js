import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../constants";

export const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const onChangeLang = (e) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
    };
    
    return(
        <select defaultValue={i18n.language} onChange={onChangeLang}>
            {LANGUAGES.map(({code, label}) => (
                <option key={code} value={code}>
                    {label}
                </option>
            ))}
        </select>
    )
}