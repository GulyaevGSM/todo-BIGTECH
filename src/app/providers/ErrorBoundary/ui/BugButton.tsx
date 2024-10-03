import { useEffect, useState } from 'react';
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
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
        <div>
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={callError}
            >{t('Вызвать ошибку')}</Button>
        </div>
    );
};

export default BugButton;