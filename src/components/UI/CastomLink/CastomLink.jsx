import React from 'react'
import { Link, useMatch } from 'react-router-dom'

export default function CastomLink({children, to, ...props}) {
    const match = useMatch(to)

    return (
        <Link
            to = {to}
            style={{
                color: match ? 'var (--color-active)': 'white',
            }}
            {...props}
        >
            {children}
        </Link>
    )
}
