import React from 'react';
import { useTranslation } from "react-i18next";

const SettingsPage = () => {
    const { t } = useTranslation()

    return (
        <div>
            {t('Настройки')}
        </div>
    );
};

export default SettingsPage;