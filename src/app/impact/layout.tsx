import type { Metadata } from 'next'
import { APP_NAME } from '@/lib/constants'
import { ChildrenOnly } from '@/types'

export const metadata: Metadata = {
    title: `Impact | ${APP_NAME}`
}

export default function ImpactLayout({children}: ChildrenOnly) {
    return children
}