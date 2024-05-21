import type { Metadata } from 'next'
import { APP_NAME } from '@/lib/constants'
import { ChildrenOnly } from '@/types'

export const metadata: Metadata = {
    title: `Production Support | ${APP_NAME}`
}

export default function ProductionSupportLayout({children}: ChildrenOnly) {
    return children
}