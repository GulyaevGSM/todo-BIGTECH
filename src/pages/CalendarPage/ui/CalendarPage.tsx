import React from 'react';
import { useTranslation } from "react-i18next";

const CalendarPage = () => {
    const { t } = useTranslation()

    return (
        <div>
            {t('Календарь')}
        </div>
    );
};

export default CalendarPage;