import { Alert, AlertColor } from '@mui/material';
import { CustomContentProps, SnackbarContent } from 'notistack';
import { forwardRef } from 'react';

interface Props extends CustomContentProps {
    severity: AlertColor;
}

const SuccessSnackbar = forwardRef<HTMLDivElement, Props>(
    function SuccessSnackbar(props, ref) {
        const {
            // You have access to notistack props and options 👇🏼
            id,
            message,
            // as well as your own custom props 👇🏼
            severity,
            ...other
        } = props;

        return (
            <SnackbarContent
                ref={ref}
                role="alert"
                {...other}
                className="fles justify-end"
            >
                <Alert
                    variant="filled"
                    severity={severity}
                    className="text-white"
                >
                    {message}
                </Alert>
            </SnackbarContent>
        );
    },
);

export default SuccessSnackbar;
