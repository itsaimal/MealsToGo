import styled from "styled-components/native"



// 2

const defaultTextStyles = (theme) => `
font-family: ${theme.fonts.body};
font-weight: ${theme.fontWeights.regular};
color: ${theme.colors.text.primary};
flex-wrap: wrap;
margin-top: 0px;
margin-bottom: 0px;

`;


//4
const body = (theme) => `
font-size: ${theme.fontSizes.body};
`;

//5
const hint = (theme) => `
font-size: ${theme.fontSizes.body};
`;

//6
const error = (theme) => `
color: ${theme.colors.text.error};
`;

//7

const caption = (theme) => `

font-size: ${theme.fontSizes.caption};
font-weight: ${theme.fontSizes.bold};
`;

//8
const label = (theme) => `
font-family: ${theme.fonts.heading};
font-size: ${theme.fontSizes.body};
font-weight: ${theme.fontWeights.medium};
`;


// 3

const variants = {
    body,
    label,
    caption,
    error,
    hint,
};


// 1

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;


Text.defaultProps = {
    variant: "body",
};