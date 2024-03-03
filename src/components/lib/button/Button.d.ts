export interface IButtonProps {
    label?: string;
    icon?: string;
    success?: boolean;
    info?: boolean;
    warning?: boolean;
    danger?: boolean;
    raised?: boolean;
    rounded?: boolean;
    outlined?: boolean;
    disabled?: boolean | undefined;
}
