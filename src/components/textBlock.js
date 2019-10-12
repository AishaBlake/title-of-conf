import React from 'react';

const TextBlock = ({bgColor, title, subtitle, children}) => (
    <section style={{backgroundColor: bgColor, display: `flex`, justifyContent: `space-between`, padding: `5% 10%`}}>
        <div style={{
            width: `50%`
        }}>
            <h2 style={{
                fontWeight: `400`,
                textTransform: `uppercase`,
            }}>{title}</h2>
            <span style={{
                fontFamily: `Inter`,
                fontSize: `2rem`,
                fontWeight: `600`
            }}>{subtitle}</span>
        </div>
        <p style={{
            lineHeight: `1.8rem`,
            marginBottom: `0`,
            width: `50%`
        }}>{children}</p>
    </section>
);

export default TextBlock;