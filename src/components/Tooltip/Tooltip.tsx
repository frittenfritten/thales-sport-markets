import React, { CSSProperties } from 'react';
import ReactTooltip from 'rc-tooltip';
import styled from 'styled-components';
import 'styles/tooltip.css';

type TooltipProps = {
    component?: any;
    overlay: any;
    iconFontSize?: number;
    customIconStyling?: CSSProperties;
    marginLeft?: number;
    top?: number;
    overlayClassName?: string;
};

const Tooltip: React.FC<TooltipProps> = ({
    component,
    overlay,
    iconFontSize,
    customIconStyling,
    marginLeft,
    top,
    overlayClassName,
}) => {
    return (
        <ReactTooltip overlay={overlay} placement="top" overlayClassName={overlayClassName || ''}>
            {component ? (
                component
            ) : (
                <InfoIcon iconFontSize={iconFontSize} marginLeft={marginLeft} top={top} style={customIconStyling} />
            )}
        </ReactTooltip>
    );
};

const InfoIcon = styled.i<{ iconFontSize?: number; marginLeft?: number; top?: number }>`
    font-size: ${(props) => props.iconFontSize || 17}px;
    font-weight: normal;
    cursor: pointer;
    position: relative;
    margin-left: ${(props) => props.marginLeft || 0}px;
    top: ${(props) => props.top || -1}px;
    color: ${(props) => props.theme.textColor.primary};
    &:before {
        font-family: ExoticIcons !important;
        content: '\\0044';
        color: ${(props) => props.theme.textColor.primary};
    }
`;

export default Tooltip;
