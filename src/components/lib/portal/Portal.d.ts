import { HintedString } from '../ts-helpers';

export type PortalAppendToType = HintedString<'body' | 'self'> | undefined | HTMLElement;

export interface IPortalProps {
    appendTo?: PortalAppendToType;
    disabled?: boolean | undefined;
}
