import { HintedString } from '../../../types/helpers';

export type PortalAppendToType = HintedString<'body' | 'self'> | undefined | HTMLElement;

export interface IPortalProps {
    appendTo?: PortalAppendToType;
    disabled?: boolean | undefined;
}
