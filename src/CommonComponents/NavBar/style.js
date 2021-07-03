import styled from "styled-components";


// export const NavLink =styled.li
// `    margin-left: ${props => props.marginLeft || "0%"};
// `


// just for try
export const NavLink =styled(({style_props, ...props}) => <li {...props} />)
`   color: ${props => props?.style_props?.color || "red"};
`