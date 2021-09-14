import styled, { css, ThemeProps } from 'styled-components';

interface TypographyProps {
  variant?: 'body' | 'title' | 'caption' | 'h1' | 'h2';
  color?: 'primary' | 'secondary' | any;
  theme?: ThemeProps<any>;
  size?: number;
  bolded?: boolean;
}

const body = css`
  font-weight: 400;
  font-family: 'Circular Std';
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.typography.secondary};
`;

const h1 = css`
  font-weight: 700;
  font-family: 'Circular Std';
  font-size: 39.81px;
  margin: 0px;
  color: ${({ theme }) => theme.colors.typography.primary};
`;

const h2 = css`
  font-weight: 400;
  font-family: 'Circular Std';
  color: ${({ theme }) => theme.colors.typography.secondary};
  font-size: 28px;
  line-height: 1.2;
  margin: 0px;
`;

const caption = css`
  text-transform: uppercase;
  font-size: 13.3px;
  line-height: 1.2;
  font-weight: 400;
`;

function getColor(color: string, theme: any) {
  if (['primary', 'secondary'].includes(color))
    return theme.colors.typography[color];
  return color;
}

const variants = {
  body,
  h1,
  h2,
  caption,
};

const Typography = styled.p<TypographyProps>`
  ${({ variant }: TypographyProps) =>
    variants[(variant as keyof typeof variants) || 'body']}
  ${({ color, ...props }: TypographyProps) =>
    css`
      color: ${getColor(color, props.theme)};
    `}
  ${({ size }: TypographyProps) =>
    size &&
    css`
      font-size: ${size}px;
    `}
  ${({ bolded }: TypographyProps) =>
    bolded &&
    css`
      font-weight: 500;
    `}
`;

export default Typography;
