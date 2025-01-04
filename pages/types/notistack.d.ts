import { AlertColor } from '@mui/material';

declare module 'notistack' {
    interface VariantOverrides {
        alert: {
            severity: AlertColor;
        };
    }
}
