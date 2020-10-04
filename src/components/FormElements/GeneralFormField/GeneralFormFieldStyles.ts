import styled from 'styled-components';
import styles from 'styles/values';
import { LongTextEllipsis } from 'styles/common';

const StyledGeneralFormField = styled.div`
    display: flex;
    position: relative;
`;

const StyledGeneralFormLabel = styled.div<{ medium?: boolean }>`
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: ${(props): string => (props.medium ? '350px' : '100%')};
    span {
        color: ${styles.color.shade.DARK06};
    }
    textarea {
        margin-bottom: 24px;
    }
`;

const StyledGeneralFormLabelTextarea = styled(StyledGeneralFormLabel)`
    align-items: baseline;
    resize: none;
`;

const StyledGeneralFormLabelText = styled.span`
    ${LongTextEllipsis}
    flex:1
`;

StyledGeneralFormLabelText.displayName = 'StyledGeneralFormLabelText';

export { StyledGeneralFormField, StyledGeneralFormLabel, StyledGeneralFormLabelTextarea, StyledGeneralFormLabelText };
