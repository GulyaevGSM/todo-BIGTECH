import React from 'react';
import { useTranslation } from "react-i18next";
import cls from './NotFoundPage.module.scss'

const NotFoundPage = () => {
    const { t } = useTranslation()

    return (
        <div className={cls.NotFoundPage}>
            {t('Страница не найдена')}
        </div>
    );
};

export default NotFoundPage;