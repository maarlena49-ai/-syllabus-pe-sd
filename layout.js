import './globals.css'

export const metadata = {
  title: 'Силабус',
  description: 'Сайт силабусу освітньої програми',
}

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  )
}
