import type { Metadata } from 'next'
import { APP_NAME } from '@/lib/constants'
import { ChildrenOnly } from '@/types'

export const metadata: Metadata = {
    title: `News | ${APP_NAME}`
}

export default function NewsLayout({children}: ChildrenOnly) {
    return children
}