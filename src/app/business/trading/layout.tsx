import type { Metadata } from 'next'
import { APP_NAME } from '@/lib/constants'
import { ChildrenOnly } from '@/types'

export const metadata: Metadata = {
    title: `Trading | ${APP_NAME}`
}

export default function TradingLayout({children}: ChildrenOnly) {
    return children
}