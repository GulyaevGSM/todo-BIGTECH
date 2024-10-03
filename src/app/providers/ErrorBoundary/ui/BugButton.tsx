import { useEffect, useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

const BugButton = () => {
    const { t } = useTranslation()
    const [error, setError] = useState(false);

    const callError = () => {
        setError(true);
    }

    useEffect(() => {
        if(error) {
            throw new Error()
        }
    }, [error])

    return (
        <Button
            activeSize
            size={ButtonSize.M}
            theme={ButtonTheme.OUTLINE}
            onClick={callError}
        >{t('Вызвать ошибку')}</Button>
    );
};

export default BugButton;