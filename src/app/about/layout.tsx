import type { Metadata } from 'next'
import { APP_NAME } from '@/lib/constants'
import { ChildrenOnly } from '@/types'

export const metadata: Metadata = {
    title: `About | ${APP_NAME}`
}

export default function AboutLayout({children}: ChildrenOnly) {
    return children
}