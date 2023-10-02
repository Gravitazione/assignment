import { Select } from 'antd'
import languageOptions from '../constant/enums/languageOptions'
import { useTranslation } from 'react-i18next'

const LanguageSelection = () => {
    const { i18n } = useTranslation();

    const handleChange = (value: string) => {
        i18n.changeLanguage(value);
    }

    return (
        <div>
            <Select
                defaultValue="en"
                onChange={handleChange}
                style={{ width: 140, borderRadius: 24 }}
                options={languageOptions}
                dropdownStyle={{ maxHeight: 200, overflowY: 'auto' }}
            />
        </div>
    )
}

export default LanguageSelection