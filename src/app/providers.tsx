'use client'

import { ConfigProvider, theme } from "antd"
import ruRU from 'antd/locale/ru_RU'

const Providers = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    return <ConfigProvider theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
    }}
        locale={ruRU}>{children}</ConfigProvider>
}

export default Providers
