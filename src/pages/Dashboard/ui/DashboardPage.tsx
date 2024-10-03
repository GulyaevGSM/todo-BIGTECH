import React from 'react';
import { useTranslation } from "react-i18next";

const DashboardPage = () => {
    const { t } = useTranslation()

    return (
        <div>
            {t('Дашбоард')}
        </div>
    );
};

export default DashboardPage;